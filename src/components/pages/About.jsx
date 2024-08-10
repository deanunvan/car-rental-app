import React from 'react'
import "./About.css"

import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div>

      <div className="about"></div>

      <div className="about-content">
        <div className="about-head">
            <h1>Don't squeeze in a sedan when <br />
              you could relax in a van</h1>
        </div>

        <div className="about-text">
          <p>Our mission is to enliven your road trip with the perfect travel <br />
           van rental. Our vans are recertified before each trip to ensure <br />
            your travel plans can go off without a hitch. <br />
            (Hitch costs extra 😉) <br />
              <br />
              Our team is full of vanlife enthusiasts who know firsthand the <br />
               magic of touring the world on 4 wheels.</p>
        </div>

        <div className="destination">
          <div className="des-content">
            <h3>Your destination is waiting. <br />
            Your van is ready</h3>

            <Link to="/Vans"><button className='btn1'>Explore our vans</button></Link>
          </div>
        </div>


      </div>
      <footer>
          <p>@2022 #VANLIFE</p>
        </footer> 
    </div>
  )
}
