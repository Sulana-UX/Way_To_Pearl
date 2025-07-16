import React from "react";
import "./admin.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Bookings</li>
            <li>Payments</li>
            <li>Guides</li>
            <li>Packages</li>
            <li>Reviews</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <h1>Welcome, {/** Replace with dynamic admin name */}</h1>
          <button className="logout-button">Logout</button>
        </header>
        <section className="cards">
          {/** Example: Replace with dynamic data from your database */}
          {["Total Users", "Active Bookings", "Total Revenue", "Pending Guides"].map((title, idx) => (
            <div className="card" key={idx}>
              <h3>{title}</h3>
              <p>{/* Dynamic value here */}</p>
            </div>
          ))}
        </section>
        <section className="table-section">
          <h2>Recent Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>User</th>
                <th>Guide</th>
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

export default AdminDashboard;

