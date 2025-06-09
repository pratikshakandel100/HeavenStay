import React, { useState } from 'react';

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-up logic here
    console.log('Registering user:', form);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Create an Account</h1>
        <p style={styles.subtitle}>Join HeavenStay and book your dream getaways!</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="fullName"
            style={styles.input}
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            style={styles.input}
            value={form.email}
            onChange={handleChange}
            required
          />

          <label style={styles.label}>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            style={styles.input}
            value={form.password}
            onChange={handleChange}
            required
          />

          <label style={styles.label}>Confirm Password</label>
          <div style={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              style={styles.input}
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              style={styles.showButton}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button type="submit" style={styles.signUpButton}>Sign Up</button>

          <p style={styles.loginText}>
            Already have an account?{' '}
            <a href="/login" style={styles.link}>Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#1A54A2',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
  },
  container: {
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '20px',
    padding: '60px 80px',
    maxWidth: '650px',
    width: '100%',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: '3rem',
    color: '#1A54A2',
    textAlign: 'center',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '40px',
  },
  form: {
    textAlign: 'left',
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '14px',
    marginBottom: '25px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  passwordWrapper: {
    position: 'relative',
  },
  showButton: {
    position: 'absolute',
    right: '15px',
    top: '15px',
    background: 'none',
    border: 'none',
    color: '#1A54A2',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
  signUpButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#1A54A2',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginTop: '10px',
  },
  loginText: {
    marginTop: '25px',
    textAlign: 'center',
    fontSize: '1rem',
  },
  link: {
    color: '#1A54A2',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};

export default SignUp;
