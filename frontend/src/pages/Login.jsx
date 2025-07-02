import React from "react";
import { useForm } from "react-hook-form";
import "../style/Login.css";
import {useNavigate} from "react-router-dom"
const Login = ({ onClose, switchToRegister }) => {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(1)
    try {
      const response = await fetch("http://localhost:2000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(2)
      const result = await response.json();
      console.log(result)
       console.log(3)
      if (response.success) {
        console.log("here..")
        console.log(result)
        alert("Login successful!");
        await navigate("/dashboard")
      } else {
        if (result.message) {
          // Show API error as alert or setError
          console.log()
          alert(result.message);
        } else {
          alert("Login failed");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="login-modal">
      <div className="login-container">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="login-title">Welcome Back to HeavenStay</h2>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            style={{
              borderColor: errors.email ? "#dc3545" : "#e1e5e9",
              backgroundColor: errors.email ? "#fff5f5" : "#f0fdf4",
            }}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}

          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            {...register("password", { required: "Password is required" })}
            style={{
              borderColor: errors.password ? "#dc3545" : "#e1e5e9",
              backgroundColor: errors.password ? "#fff5f5" : "#f0fdf4",
            }}
          />
          {errors.password && <span className="error">{errors.password.message}</span>}

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="login-btn"
            disabled={isSubmitting}
            style={{
              backgroundColor: isSubmitting ? "#ccc" : "#10b981",
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

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
