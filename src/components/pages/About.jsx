import React, { useEffect } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

export const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation origin
      distance: '50px', // Animation distance
      duration: 1000,   // Animation duration in milliseconds
      delay: 200,       // Delay before animation starts
      reset: false      // Whether to reset animation when scrolling back up
    });

    // Apply animations to specific elements
    sr.reveal('.about-head', { interval: 100 });
    sr.reveal('.about-text', { interval: 200 });
    sr.reveal('.destination', { interval: 300 });
    sr.reveal('.btn1', { interval: 500 });
    sr.reveal('footer', { interval: 600 });

  }, []);

  return (
    <div>
      <div className="about"></div>

      <div className="about-content">
        <div className="about-head">
          <h1>Don't squeeze in a sedan when you could relax in a van</h1>
        </div>

        <div className="about-text">
          <p>Our mission is to enliven your road trip with the perfect travel
            van rental. Our vans are recertified before each trip to ensure
            your travel plans can go off without a hitch.
            (Hitch costs extra 😉) <br /><br />
            Our team is full of vanlife enthusiasts who know firsthand the
            magic of touring the world on 4 wheels.</p>
        </div>

        <div className="destination">
          <div className="des-content">
            <h3 className='des'>Your destination is waiting. Your van is ready</h3>
            <Link to="/Vans"><button className='btn1'>Explore our vans</button></Link>
          </div>
        </div>
      </div>

      <footer>
        <p>@2022 #VANLIFE</p>
      </footer>
    </div>
  );
};
