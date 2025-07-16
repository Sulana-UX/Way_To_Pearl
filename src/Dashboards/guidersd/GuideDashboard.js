import React from "react";
import "./guidedashboard.css";

const GuideDashboard = () => {
  // Replace with dynamic guide data
  const guideName = "Guide";
  return (
    <div className="guide-dashboard">
      <aside className="guide-sidebar">
        <h2>Guide Panel</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>My Bookings</li>
            <li>My Profile</li>
            <li>My Reviews</li>
            <li>Payments</li>
            <li>Logout</li>
          </ul>
        </nav>
      </aside>
      <main className="guide-main-content">
        <header className="guide-topbar">
          <h1>Welcome, {guideName}</h1>
        </header>
        <section className="guide-stats">
          {/* Replace with dynamic stats */}
          <div className="guide-stat-card">
            <h3>Upcoming Tours</h3>
            <p>3</p>
          </div>
          <div className="guide-stat-card">
            <h3>Total Earnings</h3>
            <p>$1,200</p>
          </div>
        </section>
        <section className="guide-bookings-table">
          <h2>Recent Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Tourist</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
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

export default GuideDashboard;
