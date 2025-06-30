import React from "react";
import { useForm } from "react-hook-form";
import "../style/Register.css";

const Register = ({ onClose, switchToLogin }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Registration successful! You can now login.");
        reset();
        setTimeout(() => switchToLogin(), 2000);
      } else {
        if (result.errors && Array.isArray(result.errors)) {
          result.errors.forEach((msg) => {
            if (msg.includes("First name")) setError("firstName", { message: msg });
            else if (msg.includes("Last name")) setError("lastName", { message: msg });
            else if (msg.includes("Email")) setError("email", { message: msg });
            else if (msg.includes("Phone")) setError("phoneNumber", { message: msg });
            else if (msg.includes("Country")) setError("country", { message: msg });
            else if (msg.includes("Date of birth")) setError("dateOfBirth", { message: msg });
            else if (msg.includes("Password")) setError("password", { message: msg });
          });
        } else {
          alert(result.message || "Registration failed");
        }
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="register-modal">
      <div className="register-container">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="register-title">Create Your HeavenStay Account</h2>

        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div className="input-column">
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: "First name is required" })}
                style={{
                  borderColor: errors.firstName ? "#dc3545" : "#e1e5e9",
                  backgroundColor: errors.firstName ? "#fff5f5" : "#f0fdf4",
                }}
              />
              {errors.firstName && <span className="error">{errors.firstName.message}</span>}
            </div>

            <div className="input-column">
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
                style={{
                  borderColor: errors.lastName ? "#dc3545" : "#e1e5e9",
                  backgroundColor: errors.lastName ? "#fff5f5" : "#f0fdf4",
                }}
              />
              {errors.lastName && <span className="error">{errors.lastName.message}</span>}
            </div>
          </div>

          <div className="form-group">
            <div className="input-column">
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                style={{
                  borderColor: errors.email ? "#dc3545" : "#e1e5e9",
                  backgroundColor: errors.email ? "#fff5f5" : "#f0fdf4",
                }}
              />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className="input-column">
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phoneNumber", { required: "Phone number is required" })}
                style={{
                  borderColor: errors.phoneNumber ? "#dc3545" : "#e1e5e9",
                  backgroundColor: errors.phoneNumber ? "#fff5f5" : "#f0fdf4",
                }}
              />
              {errors.phoneNumber && <span className="error">{errors.phoneNumber.message}</span>}
            </div>
          </div>

          <div className="form-group">
            <div className="input-column">
              <input
                type="text"
                placeholder="Country"
                {...register("country", { required: "Country is required" })}
                style={{
                  borderColor: errors.country ? "#dc3545" : "#e1e5e9",
                  backgroundColor: errors.country ? "#fff5f5" : "#f0fdf4",
                }}
              />
              {errors.country && <span className="error">{errors.country.message}</span>}
            </div>

            <div className="input-column">
              <input
                type="date"
                {...register("dateOfBirth", { required: "Date of birth is required" })}
                style={{
                  borderColor: errors.dateOfBirth ? "#dc3545" : "#e1e5e9",
                  backgroundColor: errors.dateOfBirth ? "#fff5f5" : "#f0fdf4",
                }}
              />
              {errors.dateOfBirth && <span className="error">{errors.dateOfBirth.message}</span>}
            </div>
          </div>

          <div className="form-group">
            <div className="input-column">
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                style={{
                  borderColor: errors.password ? "#dc3545" : "#e1e5e9",
                  backgroundColor: errors.password ? "#fff5f5" : "#f0fdf4",
                }}
              />
              {errors.password && <span className="error">{errors.password.message}</span>}
            </div>

            <div className="input-column">
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) => value === password || "Passwords do not match",
                })}
                style={{
                  borderColor: errors.confirmPassword ? "#dc3545" : "#e1e5e9",
                  backgroundColor: errors.confirmPassword ? "#fff5f5" : "#f0fdf4",
                }}
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
            </div>
          </div>

          <button
            type="submit"
            className="register-btn"
            disabled={isSubmitting}
            style={{
              backgroundColor: isSubmitting ? "#ccc" : "#10b981",
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          <p className="switch-login">
            Already have an account? <span onClick={switchToLogin}>Login here</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
