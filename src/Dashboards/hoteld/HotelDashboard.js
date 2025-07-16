import React from "react";
import "./hoteldashboard.css";

const HotelDashboard = () => {
  // Replace with dynamic hotel owner data
  const hotelOwnerName = "Hotel Owner";
  return (
    <div className="hotel-dashboard">
      <aside className="hotel-sidebar">
        <h2>Hotel Panel</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>My Rooms</li>
            <li>My Bookings</li>
            <li>My Packages</li>
            <li>Payments</li>
            <li>My Profile</li>
            <li>Logout</li>
          </ul>
        </nav>
      </aside>
      <main className="hotel-main-content">
        <header className="hotel-topbar">
          <h1>Welcome, {hotelOwnerName}</h1>
        </header>
        <section className="hotel-stats">
          {/* Replace with dynamic stats */}
          <div className="hotel-stat-card">
            <h3>Available Rooms</h3>
            <p>12</p>
          </div>
          <div className="hotel-stat-card">
            <h3>Active Bookings</h3>
            <p>7</p>
          </div>
          <div className="hotel-stat-card">
            <h3>Income</h3>
            <p>$3,200</p>
          </div>
        </section>
        <section className="hotel-bookings-table">
          <h2>Recent Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Guest</th>
                <th>Room</th>
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

export default HotelDashboard;
