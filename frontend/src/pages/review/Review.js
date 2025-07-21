import React, { useState } from 'react';
import './review.css';

export default function ReviewSearch() {
  const [review, setReview] = useState("");
  const [saveMsg, setSaveMsg] = useState("");

  const handleSubmit = async () => {
    setSaveMsg("");
    const tourist_id = localStorage.getItem('user_id');
    if (!tourist_id || !review.trim()) {
      setSaveMsg("Please write a review and make sure you are logged in.");
      return;
    }
    try {
      const res = await fetch('http://localhost/Way_To_Pearl/backend/api/review/save_review.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tourist_id: parseInt(tourist_id, 10),
          review: review.trim()
        })
      });
      const data = await res.json();
      if (data.success) {
        setSaveMsg("Review saved successfully!");
        setReview("");
      } else {
        setSaveMsg(data.message || "Failed to save review.");
      }
    } catch (err) {
      setSaveMsg("Error: " + err.message);
    }
  };

  return (
    <div className="review-search-container">
      <h1>Write a review, make someone's trip</h1>
      <p>
        Stories like yours are what helps travelers have better trips. Share your
        experience and help out a fellow traveler!
      </p>

      <div className="review-flex-row">
        <div className="why-review-card">
          <img
            src="/images/review.jpeg"
            alt="Why review?"
            className="review-card-img"
          />
          <div className="why-review-overlay">
            <h2>Why review?</h2>
            <p>Your reviews help millions of travelers and business owners</p>
          </div>
        </div>
        <div className="review-write-area">
          <textarea
            className="review-textarea"
            rows={20}
            placeholder="Write your review here..."
            value={review}
            onChange={e => setReview(e.target.value)}
          />
          <button className="save-review-btn" onClick={handleSubmit}>Submit</button>
          {saveMsg && <div style={{marginTop:12, color:'#009688', fontWeight:'bold'}}>{saveMsg}</div>}
        </div>
      </div>
    </div>
  );
}
