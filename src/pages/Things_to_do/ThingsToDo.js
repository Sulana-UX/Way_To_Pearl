import React, { useEffect, useState } from 'react';
import './thingstodo.css'; 

export default function ThingsToDo() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('/api/activities')
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.error('Failed to fetch activities:', err));
  }, []);

  return (
    <>
    <div className="thingstodo-page">
        <div
        className="hero-banner"
        style={{ backgroundImage: "url('/images/hero.jpg')", minHeight: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Book traveler-backed things to do</h1>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Search by destination"
              className="search-input"
            />
            <button className="search-button">
              🔍
            </button>
          </div>
        </div>
      </div>
      </div>
      <section className="recommendation-section" style={{ marginLeft: 'auto', marginRight: '0', width: '98%' }}>
        <div className="recommendation-grid">
          {activities.length > 0 ? (
            activities.map((activity, idx) => (
              <div className="card" key={activity.id || idx}>
                <div className="card-image">
                  <img src={activity.imageUrl || '/images/default.jpg'} alt={activity.title} />
                  <button className="heart-button">♥</button>
                </div>
                <div className="card-content">
                  <div className="card-title">{activity.title}</div>
                  <div className="card-location">{activity.location}</div>
                  <div className="card-rating">{activity.rating} ★</div>
                  <div className="card-price">From ${activity.price}</div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading activities...</div>
          )}
        </div>
      </section>
      <div className="info-bar">
  <div className="info-item">
    <div className="info-icon">🔄</div>
    <h3>Free cancellation</h3>
    <p>Stay flexible with free cancellation on most experiences, up to 24 hours before.</p>
  </div>
  <div className="info-item">
    <div className="info-icon">👥</div>
    <h3>Backed by travellers</h3>
    <p>Do it or skip it? Check out reviews to help you decide.</p>
  </div>
  <div className="info-item">
    <div className="info-icon">💲</div>
    <h3>Lowest price guarantee</h3>
    <p>If you find the same thing for less, we’ll refund the difference. <a href="#">Learn more.</a></p>
  </div>
</div>

    </>
  )
}
