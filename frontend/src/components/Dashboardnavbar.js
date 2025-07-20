import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboardnavbar.css';

const DashboardNavbar = ({ name, role }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Optionally clear user data from localStorage
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="dashboard-navbar">
      <div className="profile" onClick={handleToggle}>
        <div className="avatar">👤</div>
        <div className="user-info">
          <div className="username">{name}</div>
          <div className="role">{role}</div>
        </div>
      </div>

      {dropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">Settings</div>
          <div className="dropdown-item">Privacy</div>
          <div className="dropdown-item" onClick={handleLogout}>Logout</div>
        </div>
      )}
    </div>
  );
};

export default DashboardNavbar;
