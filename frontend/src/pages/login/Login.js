import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-background"></div>

      <div className="login-container">
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to continue your journey</p>

        <form>
          <div className="input-group">
            <label htmlFor="email">Username or Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit">Login</button>

          <div className="login-links">
            <a href="#">Forgot Password?</a>
            <span> | </span>
            <Link to="/signup">Create Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
