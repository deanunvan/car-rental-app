import React from 'react'
import './home.css';
import { Link, NavLink } from "react-router-dom";
import img7 from '../images/Group 294.png';
export const Host = () => {
  return (
    <div>
        <div className="host-content">

            <div className="host-links">
                <NavLink to='/Dashboard'  activeClassName="active" className='host-link'>Dashboard</NavLink>
                <NavLink to='/Income'  activeClassName="active" className='host-link'>Income</NavLink>
                <NavLink to='/Vanshost'  activeClassName="active" className='host-link'>Vans</NavLink>
                <NavLink to='/Reviews'  activeClassName="active" className='host-link'>Reviews</NavLink>
            </div>

            <div className="welcome">
                <h1>Welcome!</h1>
                <div className="last30days">
                    <h5>Income last <Link className='daylink'>30 days</Link></h5>
                    <p>Details</p>
                </div>
                <h1>$2,260</h1>
            </div>

            <div className="review">
                <div className="score-review">
                <h2>Review score 5.0/5</h2>
                <p>Details</p>
                </div>
            </div>


            <div className="list">
                <img className='img7' src={img7} alt="" />
            </div>

        </div>

        <footer className='footer'>
          <p>@2022 #VANLIFE</p>
        </footer>
    </div>
  )
}
