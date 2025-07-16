import React, { useEffect, useState } from "react";
import "./guiders.css";

export default function Guiders() {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch("/api/guides")
      .then((res) => res.json())
      .then((data) => setGuides(data))
      .catch((err) => console.error("Failed to fetch guides:", err));
  }, []);

  return (
    <div className="guiders-page">
      <div
        className="hero-banner"
        style={{ backgroundImage: "url('/images/guider1.jpg')", minHeight: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Guides who turn trips into memories.</h1>
        </div>
      </div>
      <div className="guiders-list">
        {guides.map((guide) => (
          <div className="guider-card" key={guide.id}>
            <img src={guide.image} alt={guide.name} />
            <h2>{guide.name}</h2>
            <p className="guider-bio">{guide.bio}</p>
            <div className="guider-info">
              <span><strong>Languages:</strong> {guide.languages?.join(", ")}</span>
              <span><strong>Specialties:</strong> {guide.specialties?.join(", ")}</span>
              <span><strong>Rating:</strong> {guide.rating} ★</span>
              <span><strong>Certifications:</strong> {guide.certifications?.join(", ")}</span>
            </div>
            <button className="book-guide">Book Now</button>
            <div className="guider-reviews">
              <h3>Reviews</h3>
              {guide.reviews?.map((review, idx) => (
                <div key={idx} className="guider-review">
                  <strong>{review.user}:</strong> {review.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
