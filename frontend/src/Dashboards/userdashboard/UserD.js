import React, { useEffect, useState } from "react";
import "./userd.css";

const UserDashboard = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/getUser.php?login_id=${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching user:", err);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found.</div>;

  return (
    <div className="dashboard-container">
      <div className="profile-card">
        <img
          src={user.photo_url || "https://via.placeholder.com/150"}
          alt="User"
          className="profile-photo"
        />
        <h2 className="profile-name">{user.name}</h2>
        <p><strong>User ID:</strong> {user.login_id}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Address:</strong> {user.address}</p>
        <p><strong>Contact Number:</strong> {user.contact_number}</p>
      </div>

      <div className="upload-section">
        <h3>Update Personal Information</h3>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="number" placeholder="Age" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="Gender" required />
          <input type="text" placeholder="Contact Number" required />
          <button type="submit">Update Info</button>
        </form>
      </div>

      <div className="review-section">
        <h3>Review & Rate Website</h3>
        <textarea placeholder="Write your review..."></textarea>
        <select>
          <option value="">Select Rating</option>
          <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
          <option value="4">⭐️⭐️⭐️⭐️</option>
          <option value="3">⭐️⭐️⭐️</option>
          <option value="2">⭐️⭐️</option>
          <option value="1">⭐️</option>
        </select>
        <button type="submit">Submit Review</button>
      </div>
    </div>
  );
};

export default UserDashboard;
