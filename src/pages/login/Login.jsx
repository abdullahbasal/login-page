import React from "react";
import BreakingBad from "../../assets/images/Breaking-Bad.png";
import Logo from "../../assets/images/Lena-Software-Logo.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/components");
  };
  return (
    <div className="container login-container">
      <div className="row ">
        <div className="col-6 left-area">
          <div className="row">
            <div className="col">
              <a href="https://lenasoftware.com/tr/" target="_blank">
                <img src={Logo} className="logo" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <p className="login-title">Login</p>
              </div>
              <div className="row justify-content-center">
                <p className="login-text text-area">
                  Welcome, Please enter login information and click Login
                  button.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <form onSubmit={handleSubmit}>
                <label>
                  Email
                  <input type="email" placeholder="Enter an email" required />
                </label>
                <br />
                <label>
                  Password
                  <input
                    type="password"
                    placeholder="Enter password"
                    required
                  />
                </label>
                <br />
                <label>
                  <input className="login-button" type="submit" value="Login" />
                </label>
              </form>
            </div>
          </div>
          <div className="row">
            <a href="https://lenasoftware.com/en/contact" target="_blank">
              <p className="forgot-password-text">Forgot your password?</p>
            </a>
          </div>
        </div>
        <div className="col-6 breaking-bad-col">
          <img src={BreakingBad} className="breaking-bad" />
        </div>
      </div>
    </div>
  );
}
