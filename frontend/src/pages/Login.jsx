import React from "react";
import "../style/Login.css";

const Login = ({ onClose, switchToRegister }) => {
  return (
    <div className="login-modal">
      <div className="login-container">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="login-title">Welcome Back to HeavenStay</h2>

        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <p className="switch-register">
            New to HeavenStay?{" "}
            <span onClick={switchToRegister}>Register here</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
