import React, { useState } from 'react';
import DashboardsNavbar from '../components/Dashboardnavbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import './tuoristdashboard.css';
import './EditProfileModal.css'; // <- for the modal styles

export default function TuoristDashboard() {
  const location = useLocation();
  const { name, role, profilePhoto } = location.state || {};

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <DashboardsNavbar name={name} role={role} profilePhoto={profilePhoto} />

      <div className="profile-container" style={{
        maxWidth: '1100px',
        margin: '40px auto',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div className="profile-header" style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
        }}>
          <img className="profile-avatar" src="https://via.placeholder.com/120" alt="Profile" />
          <div className="profile-info">
            <h2>{name}</h2>
       
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
              <div className="profile-photo-wrapper">
                <img src="https://via.placeholder.com/100" className="modal-profile-img" alt="Profile" />
                <div className="change-photo">Change profile photo</div>
              </div>
              <form>
                <label>Name</label>
                <input type="text" defaultValue="Sulana V" />

                <label>Username</label>
                <input type="text" defaultValue="@sulanav" />

                <label>Current City</label>
                <input type="text" defaultValue="Anuradhapura, Sri Lanka" />

                <label>Website</label>
                <input type="text" placeholder="Add a website" />

                <label>About you</label>
                <textarea placeholder="Write some details about yourself" maxLength="160" />

                <div className="modal-actions">
                  <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
                  <button type="submit" className="save-btn">Save</button>
                </div>
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

        <div className="profile-body" style={{
          display: 'flex',
          gap: '32px',
          width: '100%',
        }}>
          <div className="profile-left">
            <h3>Your Achievements</h3>
            <p>Start sharing to unlock</p>
            <div className="achievement">
              <h4>Write your first review</h4>
              <p>Unlock review milestones</p>
            </div>
            <div className="achievement">
              <h4>Upload your first photo</h4>
              <p>Unlock photo milestones</p>
            </div>
            <button className="view-all-btn">View all</button>

            <div className="profile-intro">
              <h3>Intro</h3>
              <p>📍 Anuradhapura, Sri Lanka</p>
              <p>📅 Joined in Jul 2025</p>
              <p>+ Add a website</p>
              <p>+ Write some details about yourself</p>
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
