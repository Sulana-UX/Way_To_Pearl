import React from "react";
import "./cardashboard.css";

const CarOwnerDashboard = () => {
  // Replace with dynamic car owner data
  const carOwnerName = "Car Owner";
  return (
    <div className="car-dashboard">
      <aside className="car-sidebar">
        <h2>Car Owner Panel</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>My Vehicles</li>
            <li>My Bookings</li>
            <li>Payments</li>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        </nav>
      </aside>
      <main className="car-main-content">
        <header className="car-topbar">
          <h1>Welcome, {carOwnerName}</h1>
        </header>
        <section className="car-stats">
          {/* Replace with dynamic stats */}
          <div className="car-stat-card">
            <h3>Available Vehicles</h3>
            <p>8</p>
          </div>
          <div className="car-stat-card">
            <h3>Active Bookings</h3>
            <p>4</p>
          </div>
          <div className="car-stat-card">
            <h3>Income</h3>
            <p>$1,800</p>
          </div>
        </section>
        <section className="car-bookings-table">
          <h2>Recent Transport Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Vehicle</th>
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

export default CarOwnerDashboard;
