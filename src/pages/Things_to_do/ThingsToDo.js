import React from 'react'
import './thingstodo.css'; 

export default function ThingsToDo() {
  return (
    <>
      <div
        className="hero-banner"
        style={{ backgroundImage: "url('/images/hero.jpg')", minHeight: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Book traveller-backed things to do</h1>
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

      <section className="recommendation-section">
        <h2>Recommended Activities</h2>
        <p>Handpicked experiences for your next adventure.</p>
        <div className="recommendation-grid">
          
          <div className="card">
            <div className="card-image">
              <img src="/images/pettah.jpg" alt="Activity 1" />
              <button className="heart-button">♥</button>
            </div>
            <div className="card-content">
              <div className="card-title">Pettah Tour</div>
              <div className="card-location">Colombo</div>
              <div className="card-rating">4.8 ★</div>
              <div className="card-price">From $25</div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="/images/surfing.jpg" alt="Activity 2" />
              <button className="heart-button">♥</button>
            </div>
            <div className="card-content">
              <div className="card-title">Beach Adventure</div>
              <div className="card-location">Mirissa</div>
              <div className="card-rating">4.7 ★</div>
              <div className="card-price">From $30</div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="/images/fort.jpg" alt="Activity 1" />
              <button className="heart-button">♥</button>
            </div>
            <div className="card-content">
              <div className="card-title">Fort Tour</div>
              <div className="card-location">Galle</div>
              <div className="card-rating">4.8 ★</div>
              <div className="card-price">From $25</div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="/images/sigiriya.jpg" alt="Activity 1" />
              <button className="heart-button">♥</button>
            </div>
            <div className="card-content">
              <div className="card-title">Kingdom Tour</div>
              <div className="card-location">Sigiriya</div>
              <div className="card-rating">4.8 ★</div>
              <div className="card-price">From $25</div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="/images/kandy.jpg" alt="Activity 1" />
              <button className="heart-button">♥</button>
            </div>
            <div className="card-content">
              <div className="card-title">  Kandy Heritage Trail </div>
              <div className="card-location">kandy</div>
              <div className="card-rating">4.8 ★</div>
              <div className="card-price">From $25</div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="/images/marbel.jpg" alt="Activity 1" />
              <button className="heart-button">♥</button>
            </div>
            <div className="card-content">
              <div className="card-title">Marble Bay Adventure </div>
              <div className="card-location">Trincomalee</div>
              <div className="card-rating">4.8 ★</div>
              <div className="card-price">From $25</div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="/images/yala.jpg" alt="Activity 1" />
              <button className="heart-button">♥</button>
            </div>
            <div className="card-content">
              <div className="card-title"> Safari Ride</div>
              <div className="card-location">Yala</div>
              <div className="card-rating">4.8 ★</div>
              <div className="card-price">From $25</div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="/images/anuradhapura.jpg" alt="Activity 1" />
              <button className="heart-button">♥</button>
            </div>
            <div className="card-content">
              <div className="card-title"> Anuradhapura Cycle Tour</div>
              <div className="card-location">Anuradhapura</div>
              <div className="card-rating">4.8 ★</div>
              <div className="card-price">From $25</div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="/images/air.jpg" alt="Activity 1" />
              <button className="heart-button">♥</button>
            </div>
            <div className="card-content">
              <div className="card-title"> Air Balloon Ride</div>
              <div className="card-location">Dambulla</div>
              <div className="card-rating">4.8 ★</div>
              <div className="card-price">From $25</div>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="/images/ritigala.jpg" alt="Activity 1" />
              <button className="heart-button">♥</button>
            </div>
            <div className="card-content">
              <div className="card-title">Ruins of Ritigala Forest Monastey</div>
              <div className="card-location">Anuradhapura</div>
              <div className="card-rating">4.8 ★</div>
              <div className="card-price">From $25</div>
            </div>
          </div>
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
