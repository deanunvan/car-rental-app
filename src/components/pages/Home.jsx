import React from 'react';
import './home.css';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="home">


        <div className="centre">
            <div className='home-section'>
                  <h1 className='home-head'>You got the travel plans, we 
                        we got the travel vans.</h1>
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
