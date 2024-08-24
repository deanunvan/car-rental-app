import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../images/Rectangle-162.png';
import "./Van1.css";
export const Van1 = () => {
  

  return (
    <div>

      <div className="van1">

        <Link className='back' to='/Vans'>Back to all vans</Link>
        <div className="van1-div">
          <img className='van1-img' src={img1} alt="" />
        </div>
        <div className="button">
        <Link to='/Simple'><button className='btn01'>Simple</button></Link>
        <h1>Modest Explorer</h1>
        <h5>$60/day</h5>
        <p>The Modest Explorer is a van designed to get you out of the 
         house and into nature. This beauty is equipped with solar 
          panels, a composting toilet, a water tank and kitchenette. 
           The idea is that you can pack up your home and escape for 
            a weekend or even longer!</p>

            <Link to="/Signin"><button className='btn'>Rent this van</button></Link>
        </div>
      </div>

      <footer>
          <p>@2022 #VANLIFE</p>
        </footer> 

    </div>
  )
}
