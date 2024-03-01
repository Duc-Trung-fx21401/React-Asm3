import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { uiActions } from "../store/uiSlice";

const LoginPage = () => {
  // Lấy dữ liệu người dùng từ local
  const userArr = JSON.parse(localStorage.getItem("userArray")) || [];
  let curUser = {};

  // tạo trạng thái cho email và pass
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // dispatch login và chạy người dùng
  const dispatch = useDispatch();

  //sử dụng điều hướng navigate để điều hướng login
  const navigate = useNavigate();

  // xác nhận trạng thái trước khi login
  const isEnteredAll = () => {
    return email.length && password.length;
  };
  const signInHandler = (e) => {
    e.preventDefault();

    //set cho email
    if (
      userArr.every((user) => user.email.toLowerCase() !== email.toLowerCase())
    ) {
      alert("Tài khoản không tồn tại");
      setPassword("");
    } else {
      curUser = userArr.find(
        (user) => user.email.toLowerCase() === email.toLowerCase()
      );

      //set cho pass
      if (curUser.password !== password) {
        alert("Sai mật khẩu! Vui lòng nhập lại mật khẩu");
        setPassword("");
      } else {
        alert("Đăng nhập thành công!");

        //cập nhật dữ liệu điều hướng tới HomePage
        dispatch(
          uiActions.login({
            isLogin: true,
            onLoginUser: curUser,
          })
        );
        localStorage.setItem("curUser", JSON.stringify(curUser));
        navigate("/");
      }
    }
  };

  return (
    <Container className="text-center px-5 py-5 login">
      <Container className="bg-white w-50 rounded-4">
        <h1 className="py-5 fw-normal">Sign In</h1>

        {/* form đăng nhập */}
        <Form onSubmit={signInHandler} className="mx-5">
          {/* các input */}
          <Form.Control
            placeholder="Email"
            type="email"
            value={email}
            className="py-3 ps-3 fst-normal rounded-0"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form.Control
            placeholder="Password"
            type="password"
            value={password}
            className="py-3 ps-3 fst-normal rounded-0 border-top-0"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            className="py-3 my-5 bg-dark text-white w-100 rounded-0 border-0"
            type="submit"
            disabled={!isEnteredAll()}>
            SIGN IN
          </Button>
        </Form>
        <p className="d-inline-block me-2">Create an Account?</p>
        <Link to="/register" className="text-decoration-none mb-5">
          Sign Up
        </Link>
      </Container>
    </Container>
  );
};
export default LoginPage;
