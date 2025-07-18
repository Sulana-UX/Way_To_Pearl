import React, { useState, useEffect } from 'react';
import './promobox.css';
import promoBg from '../assets/promo-background.jpg';

const promoImages = [
  promoBg,
  '/images/promo1.jpg',
  '/images/promo2.jpg',
  '/images/promo3.jpg',
  '/images/kandy.jpg',
  '/images/promo4.jpg',
  '/images/promo5.jpg',
];

const promoColors = [
  '#0a3d62', // promoBg
  '#08b2eaff', // promo1
  '#7bc513ff', // promo2
  '#78e08f', // promo3
  '#b71540', // kandy
  '#38ada9', // promo4
  '#05f4bcff', // promo5
];

const PromoBox = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % promoImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="promo-box">
      {/* Left part: image */}
      <div className="promo-box-left">
        <img src={promoImages[currentImg]} alt="Promo" />
      </div>

      {/* Right part: content */}
      <div className="promo-box-right" style={{ background: promoColors[currentImg], transition: 'background 0.5s' }}>
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
