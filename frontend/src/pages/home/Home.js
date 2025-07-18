import React from "react";
import Navbar from "../../components/Navbar";
import PromoBox from "../../components/PromoBox";
import Footer from "../../components/Footer";
import "./home.css";

export default function Home() {
  return (
    <div>
      <PromoBox />
      <div className="home-hero">
        <div className="home-hero-left">
         
          <h1 className="home-hero-title">Travelers' Choice<br />Awards Best<br />of the Best</h1>
          <p className="home-hero-desc">
            Among our top 1% of places, stays, eats, and experiences—decided by you.
          </p>
          
        </div>
        <div className="home-hero-right">
          <div className="home-hero-img-wrap">
            <div className="home-hero-yellow"></div>
            <div className="home-hero-green"></div>
            <div className="home-hero-img">
              <img src="/images/homedeco6.jpg" alt="activity" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
