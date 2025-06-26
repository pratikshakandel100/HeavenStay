import React from "react";
import "../style/Register.css";

const Register = ({ onClose, switchToLogin }) => {
  return (
    <div className="register-modal">
      <div className="register-container">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="register-title">Create Your HeavenStay Account</h2>

        <form className="register-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" required />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Country" required />
            <input type="date" placeholder="Date of Birth" required />
          </div>

          <div className="form-group">
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
          </div>

          <button type="submit" className="register-btn">Register</button>

          <p className="switch-login">
            Already have an account?{" "}
            <span onClick={switchToLogin}>Login here</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
