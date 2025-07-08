import React, { useState } from 'react';
import './rentalcars.css';

export default function RentalCars() {
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');

  return (
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
  );
}
