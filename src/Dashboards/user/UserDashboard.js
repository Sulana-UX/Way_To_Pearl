import React from "react";
import "./userdashboard.css";

const UserDashboard = () => {
  // Replace with dynamic user data
  const userName = "Tourist";
  return (
    <div className="user-dashboard">
      <aside className="user-sidebar">
        <h2>Tourist Panel</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>My Bookings</li>
            <li>My Payments</li>
            <li>My Profile</li>
            <li>Reviews</li>
            <li>Logout</li>
          </ul>
        </nav>
      </aside>
      <main className="user-main-content">
        <header className="user-topbar">
          <h1>Welcome, {userName}</h1>
        </header>
        <section className="user-stats">
          {/* Replace with dynamic stats */}
          <div className="user-stat-card">
            <h3>Upcoming Trips</h3>
            <p>2</p>
          </div>
          <div className="user-stat-card">
            <h3>Pending Payments</h3>
            <p>$250</p>
          </div>
        </section>
        <section className="user-bookings-table">
          <h2>Recent Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Type</th>
                <th>Destination</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Map dynamic booking data here */}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
