import React, { useEffect } from 'react';
import './home.css';
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal';

export const Home = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',  // Animation origin
      distance: '50px',  // Animation distance
      duration: 1000,    // Animation duration in milliseconds
      delay: 200,        // Delay before animation starts
      reset: true        // Whether to reset the animation on scroll back up
    });

    sr.reveal('.home-section', {
      interval: 200  // Delay between each element's animation start
    });

    sr.reveal('.home-head', {
      interval: 250  // Delay between each element's animation start
    });

    sr.reveal('.home-text', {
      interval: 200  // Delay between each element's animation start
    });

    sr.reveal('.footer', {
      interval: 200
    });
  }, []);

  return (
    <div>
      <div className="home">
        <div className="centre">
          <div className='home-section'>
            <h1 className='home-head'>You got the travel plans, we <br />
              got the travel vans.</h1>
            <p className='home-text'>Add adventure to your life by joining the #vanlife movement.
              Rent the perfect van for your perfect road trip.</p>
            <Link to="/Vans"><button className='btn'>Find your van</button></Link>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <p>@2022 #VANLIFE</p>
      </footer>
    </div>
  );
};
