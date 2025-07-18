import React, { useState } from 'react';
import './rentalcars.css';

export default function RentalCars() {
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');

  return (
    <>
    <div className="hotels-page">
      <div
        className="hero-banner"
        style={{ backgroundImage: "url('/images/rental3.jpg')", minHeight: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Search for the Best Rental Car Deals
</h1>
          
        </div>
      </div>
      <div className="car-hire-container">
        <div className="car-hire-box">
          <div className="car-hire-row">
            <div className="car-hire-item">
              <label>Pick up location</label>
              <input type="text" placeholder="City or Airport" />
            </div>
            <div className="car-hire-item">
              <label>Pick up</label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="car-hire-datepicker"
              />
            </div>
            <div className="car-hire-item">
              <label>Drop off</label>
              <input
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="car-hire-datepicker"
              />
            </div>
            <div className="car-hire-item">
              <label>Passengers (optional)</label>
              <select>
                <option>Select</option>
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3+ Passengers</option>
              </select>
            </div>
            <button className="car-hire-button">Find car hire</button>
          </div>
          <div className="car-hire-extra">
            <label>Driver's age</label>
            <select>
              <option>30+</option>
              <option>18+</option>
              <option>25+</option>
            </select>
            <span className="car-hire-info">
              ℹ️ To help you compare prices, we may redirect you to a different travel partner when you click “Find car hire”.
            </span>
          </div>
        </div>
      </div>

      <div className="car-options-container">
      <h2>Find a car according to your needs</h2>
      <div className="car-options-grid">
        <div className="car-option">
          <h3>Small / Economy</h3>
          <p>
            You want a small, fuel-efficient vehicle for your trip? We provide a large range of options for you to select from. Save money while still getting a reliable vehicle!
          </p>
          <img src="/images/car1.jpg" alt="Small Economy Car" />
        </div>
        <div className="car-option">
          <h3>Hybrid / Electric</h3>
          <p>
            A hybrid car rental gives you the option to travel using different kinds of power, save energy, and cut down on emissions. Get where you need to go without constantly stopping for gas.
          </p>
          <img src="/images/car2.jpg" alt="Hybrid Electric Car" />
        </div>
        <div className="car-option">
          <h3>Prestige Cars</h3>
          <p>
            Renting a luxury car gives you the chance to drive your dream car at an affordable price. This puts you in the driver’s seat of luxury cars from internationally renowned brands.
          </p>
          <img src="/images/car3.jpg" alt="Prestige Car" />
        </div>
        <div className="car-option">
          <h3>Stationwagon / Minibus</h3>
          <p>
            You are on a family vacation or group outing? Our minibus and station wagons are perfect for the job. Minivans and 7-9 seaters are designed to provide a comfortable ride for everyone to enjoy.
          </p>
          <img src="/images/car4.jpg" alt="Stationwagon Minibus" />
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
