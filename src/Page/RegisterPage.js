import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  //lấy dữ liệu từ local
  const userArr = JSON.parse(localStorage.getItem("userArray")) || [];

  //trạng thái cho các trường input
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  //trạng thái điều hướng
  const navigate = useNavigate();

  const signUpHandler = (e) => {
    e.preventDefault();
    if (fullName.length < 1) {
      alert("Hãy điền đầy đủ họ và tên");
    } else if (
      userArr.some((user) => user.email.toLowCase() !== email.toLowerCase())
    ) {
      alert("Email đã tồn tại!\n Hãy đăng nhập email khác");
    } else if (password.length < 8) {
      alert("Mật khẩu phải nhiều hơn 8 ký tự!");
    } else if (phone.length < 9 || phone.length > 11) {
      alert("Đây không phải số điện thoại!");
    } else {
      alert("Đăng ký thành công! xin mời đăng nhập!");

      //Thêm user mới vào trong local
      const newUser = {
        fullName,
        email,
        password,
        phone,
      };
      userArr.push(newUser);
      localStorage.setItem("userArray", JSON.stringify(userArr));
      navigate("/login");
    }
    console.log(userArr, "arr");
  };

  return (
    <Container className="text-center px-5 py-5 login">
      <Container className="bg-white w-50 rounded-4">
        <h1 className="py-5 fw-normal text-decoration">Sign Up</h1>

        {/* form đăng nhập */}
        <Form className="mx-5" onSubmit={signUpHandler}>
          {/* các input */}
          <Form.Control
            placeholder="Full Name"
            type="text"
            className="py-3 ps-3 fst-normal rounded-0"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />

          <Form.Control
            placeholder="Email"
            type="email"
            className="py-3 ps-3 fst-normal rounded-0 border-top-0"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Control
            placeholder="Password"
            type="password"
            className="py-3 ps-3 fst-normal rounded-0 border-top-0"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Form.Control
            placeholder="Phone"
            type="number"
            className="py-3 ps-3 fst-normal rounded-0 border-top-0"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

          <Button
            className="py-3 my-5 bg-dark text-white w-100 rounded-0 border-0"
            type="submit">
            SIGN UP
          </Button>
        </Form>
        <p className="d-inline-block me-2">LogIn?</p>
        <Link to="/login" className="text-decoration-none mb-5">
          Click
        </Link>
      </Container>
    </Container>
  );
};
export default RegisterPage;
