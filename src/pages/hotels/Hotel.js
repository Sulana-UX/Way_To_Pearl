import React, { useEffect, useState } from "react";
import "./hotel.css";

const HotelsPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch("/api/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => console.error("Failed to fetch hotels:", err));
  }, []);

  return (
    <div className="hotels-page">
      <div
        className="hero-banner"
        style={{ backgroundImage: "url('/images/mainhotel.jpg')", minHeight: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Find hotels travelers love</h1>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Hotel name or destination"
              className="search-input"
            />
            <button className="search-button">
              🔍
            </button>
          </div>
        </div>
      </div>
      <div className="hotels-list" style={{ marginTop: '48px' }}>
        {hotels.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} />
            <h2>{hotel.name}</h2>
            <p>{hotel.description}</p>
            <ul>
              {hotel.facilities?.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
            <p className="price">{hotel.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;

