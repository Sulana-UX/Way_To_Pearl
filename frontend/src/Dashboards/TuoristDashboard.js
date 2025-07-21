import React, { useState } from 'react';
import DashboardsNavbar from '../components/Dashboardnavbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import './tuoristdashboard.css';
import './EditProfileModal.css'; // <- for the modal styles


export default function TuoristDashboard() {
  const location = useLocation();
  const { name, role, profilePhoto } = location.state || {};

  const [country, setCountry] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [aboutYou, setAboutYou] = useState("");
  const [saveMsg, setSaveMsg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch existing profile data when opening modal
  const openModal = async () => {
    const userId = parseInt(localStorage.getItem('user_id'), 10);
    if (userId) {
      try {
        const res = await fetch(`http://localhost/Way_To_Pearl/backend/api/touristdashboard/get_tourist_profile.php?user_id=${userId}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.profile) {
            setCountry(data.profile.country || "");
            setContactNumber(data.profile.contact_number || "");
            setAboutYou(data.profile.about_you || "");
          }
        }
      } catch (err) {
        // Optionally handle error
      }
    }
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  // Use user_id from localStorage for saving profile
  const handleProfileSave = async (e) => {
    e.preventDefault();
    setSaveMsg("");
    const userId = parseInt(localStorage.getItem('user_id'), 10); // Ensure integer
    try {
      const response = await fetch('http://localhost/Way_To_Pearl/backend/api/touristdashboard/save_tourist_profile.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          country: country,
          contact_number: contactNumber,
          about_you: aboutYou
        }),
      });

      const result = await response.json();
      console.log(result);
      if (response.ok && result.message) {
        setSaveMsg("Profile saved!");
        setTimeout(() => { setIsModalOpen(false); setSaveMsg(""); }, 1200);
      } else {
        setSaveMsg(result.message || "Save failed");
      }
    } catch (err) {
      setSaveMsg("Save failed: " + err.message);
    }
  };

  return (
    <div>
      <DashboardsNavbar name={name} role={role} profilePhoto={profilePhoto} />

      <div className="profile-container">
        <div className="profile-header">
          <img className="profile-avatar" src="https://via.placeholder.com/120" alt="Profile" />
          <div className="profile-info">
            <h2>{name}</h2>
            <p className="username">
              Tourist ID: {
                localStorage.getItem('user_id') && localStorage.getItem('tourist_id')
                  ? localStorage.getItem('tourist_id')
                  : 'N/A'
              }
            </p>
          </div>
          <div className="profile-actions">
            <button className="edit-profile-btn" onClick={openModal}>
              Edit Profile
            </button>
            <div className="dropdown">
              <button className="dropdown-btn">⚙</button>
              <div className="dropdown-content">
                <a href="#">Edit your profile</a>
                <a href="#">Edit profile photo</a>
                <a href="#">Edit cover photo</a>
                <a href="#">Account info</a>
                <a href="#">Account settings</a>
                <a href="#">Subscriptions</a>
                <a href="#">Payment Options</a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="edit-profile-modal">
              
              <form onSubmit={handleProfileSave}>
                <label>Country</label>
                <input type="text" value={country} onChange={e => setCountry(e.target.value)} />

                <label>Contact Number</label>
                <input type="text" value={contactNumber} onChange={e => setContactNumber(e.target.value)} placeholder="Add your contact number" />

                <label>About you</label>
                <textarea value={aboutYou} onChange={e => setAboutYou(e.target.value)} placeholder="Write some details about yourself" maxLength="160" />

                <div className="modal-actions">
                  <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
                  <button type="submit" className="save-btn">Save</button>
                </div>
                {saveMsg && <div style={{marginTop:8, color:'#006400'}}>{saveMsg}</div>}
              </form>
            </div>
          </div>
        )}

        {/* Rest of profile body */}
        <div className="profile-nav">
          <a href="#" className="active">Activity feed</a>
          <a href="#">Trips</a>
          <a href="#">Photos</a>
          <a href="#">Reviews</a>
          <a href="#">Forums</a>
          <a href="#">Travel map</a>
        </div>

        <div className="profile-body">
          <div className="profile-left">
            <h3>Your Achievements</h3>
            <p>Start sharing to unlock</p>
            <div className="achievement" style={{cursor: 'pointer'}} onClick={() => window.location.pathname = '/review'}>
              <h4>Write your first review</h4>
              <p>Unlock review milestones</p>
            </div>
            
            <div className="profile-intro">
              <h3>Intro</h3>
              <p><strong>Name:</strong> {name || '-'} </p>
              <p><strong>Country:</strong> {country || '-'} </p>
              <p><strong>Contact Number:</strong> {contactNumber || '-'} </p>
              <p><strong>About You:</strong> {aboutYou || '-'} </p>
            </div>
          </div>
          <div className="profile-right">
            <div className="fill-profile">
              <h3>Fill Out Your Profile</h3>
              <p>Add photos and info to your profile so people can find you easily and get to know you better!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
