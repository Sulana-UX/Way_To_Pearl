import React, { useState } from "react";
import "./signup.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      password,
      email,
      role,
    };
    try {
      const res = await fetch(
        "http://localhost:8000/api/signup.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.message) {
        alert(data.message);
      } else if (data.sql_error) {
        alert("Signup failed: " + data.sql_error);
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (err) {
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-background"></div>
      <div className="signup-container">
        <h2>Welcome to Way To Pearl</h2>
        <p className="subtitle">Create your account to get started</p>
        <label htmlFor="role">Select User Role</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="tourist">Tourist</option>
          <option value="guider">Guider</option>
          <option value="hotel">Hotel Management</option>
          <option value="vehicle">Vehicle Owner</option>
        </select>
        {role && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;

