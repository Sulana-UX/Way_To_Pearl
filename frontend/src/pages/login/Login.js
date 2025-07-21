import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(false);
    setErrorMessage("");

    try {
      const res = await fetch("http://localhost/Way_To_Pearl/backend/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: usernameOrEmail,
          password: password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.message === "Login successful") {
        const user = data.user;

        localStorage.setItem("userRole", user.role);
        localStorage.setItem("userName", user.name);
        localStorage.setItem("userEmail", user.email);
        // Store user_id as string, fallback to data.user_id if user.user_id is undefined
        const uid = user.user_id || data.user_id;
        if (uid) {
          localStorage.setItem("user_id", String(uid));
        } else {
          // fallback: remove any old user_id
          localStorage.removeItem("user_id");
        }

        const profilePhoto = user.profilePhoto || null;

        if (user.role && (user.role.toLowerCase() === "tuorist" || user.role.toLowerCase() === "tourist")) {
          navigate("/tuorist-dashboard", {
            state: {
              name: user.name,
              role: user.role,
              profilePhoto: profilePhoto,
            },
          });
        } else if (user.role && (user.role === "tuorist" || user.role === "tuorist")) {
          navigate("/TuoristDashboard");
        } else {
          localStorage.removeItem("userRole");
          navigate("/");
        }
      } else {
        setErrorMessage(data.message || "Invalid login");
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      }
    } catch (err) {
      setErrorMessage("Error: " + err.message);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="login-page">
      <div className="login-background"></div>
      <div className="login-container">
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to continue your journey</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="usernameOrEmail">Username or Email</label>
            <input
              type="text"
              id="usernameOrEmail"
              name="usernameOrEmail"
              placeholder="Username or Email"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>

          {showError && <div className="error-message">{errorMessage}</div>}

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
