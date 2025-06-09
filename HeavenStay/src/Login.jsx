import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login.jsx'
import SignUp from './Signup.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic here
    console.log('Logging in with', { email, password });
  };
  const navigate = useNavigate(); 
 

   
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>HeavenStay</h1>
        <h2 style={styles.subtitle}>Welcome Back</h2>
        <form style={styles.form} onSubmit={handleLogin}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={styles.label}>Password</label>
          <div style={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <button type="submit" style={styles.loginButton} onClick={{() => navigate('/Signup.jsx')} } >
            Log In
          </button>
          <p style={styles.forgot}>
            <a href="/forgot-password" style={styles.link}>
              Forgot password?
            </a>
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
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  title: {
    fontSize: '3.5rem',
    color: '#1A54A2',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.8rem',
    marginBottom: '40px',
  },
  form: {
    textAlign: 'left',
  },
  label: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '15px',
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
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  loginButton: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#1A54A2',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginTop: '10px',
  },
  forgot: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '1rem',
  },
  link: {
    color: '#1A54A2',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Login;
