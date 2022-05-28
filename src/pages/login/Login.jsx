import React from "react";
import BreakingBad from "../../assets/images/Breaking-Bad.png";
import Logo from "../../assets/images/Lena-Software-Logo.png";
import "./Login.css";
export default function Login() {
  // align-items-center
  return (
    <div className="container login-container">
      <div className="row ">
        <div className="col-6">
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
              <div className="row">
                <p className="login-text text-area">
                  Welcome, Please enter login information and click Login
                  button.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <form action="">
              <p className="label">Email</p>
              <input type="text" placeholder="Enter an email" />
              <p className="label">Password</p>
              <input type="password" placeholder="Enter password" />
              <br />
              <button className="login-button">Login</button>
            </form>
          </div>
          <div className="row">
            <a href="https://lenasoftware.com/en/contact" target="_blank">
              <p className="forgot-password-text">Forgot your password?</p>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={BreakingBad} />
        </div>
      </div>
    </div>
  );
}
