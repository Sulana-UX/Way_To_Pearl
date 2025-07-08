import React from 'react';
import './promobox.css';
import promoBg from '../assets/promo-background.jpg';

const PromoBox = () => {
  return (
    <div className="promo-box">
      {/* Left part: image */}
      <div className="promo-box-left">
        <img src={promoBg} alt="Promo" />
      </div>

      {/* Right part: content */}
      <div className="promo-box-right">
        <div className="promo-box-content-center">
             <h2 className="promo-title">Book the best part of your trip</h2>
          </div>
          
          <p>Browse unforgettable things to do — right here.</p>
          <button className="promo-button">Find things to do</button>
        </div>
      </div>
    
  );
};

export default PromoBox;
