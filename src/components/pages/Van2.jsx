import React from 'react'
import { Link } from 'react-router-dom';
import img2 from '../images/Rectangle-163.png';
import "./Van1.css";
export const Van2 = () => {
  return (
    <div>

      <div className="van1">

        <Link className='back' to='/Vans'>Back to all vans</Link>
        <div className="van1-div">
          <img className='van2-img' src={img2} alt="" />
        </div>
        <div className="button">
        <Link to='Rugged'><button className='btn3'>Rugged</button></Link>
        <h1>Beach Bum</h1>
        <h5>$80/day</h5>
        <p>The Modest Explorer is a van designed to get you out of the <br />
         house and into nature. This beauty is equipped with solar <br />
          panels, a composting toilet, a water tank and kitchenette. <br />
           The idea is that you can pack up your home and escape for <br />
            a weekend or even longer!</p>

            <Link to=""><button className='btn'>Rent this van</button></Link>
        </div>
      </div>
      <footer>
          <p>@2022 #VANLIFE</p>
        </footer> 

    </div>
  )
}
