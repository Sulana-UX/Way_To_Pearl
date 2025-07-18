import React, { useState } from "react";
import "./signup.css";

const SignUpPage = () => {
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username: e.target[0].value,
      email: e.target[2].value,
      password: e.target[1].value,
      role,
    };
    try {
      const res = await fetch("http://localhost/waytopearl/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(JSON.stringify(data, null, 2)); // show full backend response for debugging
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
            <input type="text" placeholder="User Name" required />
            <input type="password" placeholder="Password" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;

