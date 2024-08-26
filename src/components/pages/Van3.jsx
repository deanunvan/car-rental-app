import React from 'react'
import { Link } from 'react-router-dom';
import img3 from '../images/image-533.png';
import "./Van1.css";
export const Van3 = () => {
  return (
    <div>

      <div className="van1">

        <Link className='back' to='/Vans'>Back to all vans</Link>
        <div className="van1-div">
          <img className='van2-img' src={img3} alt="" />
        </div>
        <div className="button">
        <Link to='/Luxury'><button className='btn4'>luxury</button></Link>
        <h1>Reliable Red</h1>
        <h5>$100/day</h5>
        <p>The Modest Explorer is a van designed to get you out of the <br />
         house and into nature. This beauty is equipped with solar <br />
          panels, a composting toilet, a water tank and kitchenette. <br />
           The idea is that you can pack up your home and escape for <br />
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
