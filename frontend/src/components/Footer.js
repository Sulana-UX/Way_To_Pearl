import React, { useState } from "react";
import './footer.css';

const Footer = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-column">
          <h4 className="footer-title">About Way To Pearl</h4>
          <ul className="footer-links">
            <li>About Way To Pearl</li>
            <li>Press</li>
            <li>Resources and regulations</li>
            <li>Jobs</li>
            <li>Trust and security</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Explore</h4>
          <ul className="footer-links">
            <li>Write a review</li>
            <li>Add a place</li>
            <li>Register</li>
            <li>Travelers' Choice</li>
            <li>Assistance</li>
            <li>Travel stories</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Use our solutions</h4>
          <ul className="footer-links">
            <li>Owners</li>
            <li>Business advantage</li>
            <li>Sponsored results</li>
            <li>Advertise with us</li>
            <li>Access our content API</li>
            
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Way To Pearl sites</h4>
          <ul className="footer-links">
            <li>Book the best tables with TheFork</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2025 Way To Pearl LLC All rights reserved.
        </div>
        <div className="footer-legal-links">
          <span>Terms of Use</span>
          <span>Privacy and Cookie Policy</span>
          <span>Cookie Usage Agreement</span>
          <span>Site Map</span>
          <span>How the site works</span>
          <span>Contact us</span>
          <span>Accessibility Policy</span>
        </div>
        <div className="footer-disclaimer">
         <p> Way To Pearl LLC does not guarantee the availability of prices displayed on our site. 
          Conditions and restrictions, such as, but not limited to, travel durations or blackout dates, may apply. 
          Way To Pearl LLC is not responsible for any content on external web sites that are not owned or operated by Tripadvisor .
           {!expanded && (
            <>
              <span className="ellipsis">...</span>
              <button 
                className="more-button"
                onClick={() => setExpanded(true)}
              >
                More
              </button>
            </>
          )}
          </p>
        
        
        {expanded && (
          <p className="expanded-text">

         Way To pearl LLC is not a booking agent or tour operator. When you book with one of our partners, please be sure to check their site for a full disclosure of all applicable fees.
         <button 
              className="more-button"
              onClick={() => setExpanded(false)}
            >
              Less
            </button>
            </p>
        )}
        </div>
        <div className="footer-language">
          <span>$US USD</span>
          <span>Swiss</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;