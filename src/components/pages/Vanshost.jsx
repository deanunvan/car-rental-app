import React from 'react'
import './home.css';
import { Link, NavLink } from "react-router-dom";
import img9 from '../images/Group 279.png';
export const Vanshost = () => {
  return (
    <div>

      <div className="vanshost">
      <div className="host-links">
                <NavLink to='/Dashboard'  activeClassName="active" className='host-link'>Dashboard</NavLink>
                <NavLink to='/Income'  activeClassName="active" className='host-link'>Income</NavLink>
                <NavLink to='/Vanshost'  activeClassName="active" className='host-link'>Vans</NavLink>
                <NavLink to='/Reviews'  activeClassName="active" className='host-link'>Reviews</NavLink>
            </div>

            <div className="listed-vans">
                <div className="display-centre">
                <h1>Your listed vans</h1>
                <img className='img7' src={img9} alt="" />
                <div><img className='img7' src={img9} alt="" /></div>
                <img className='img7' src={img9} alt="" />
                </div>
            </div>
      </div>

      <footer className='footer'>
          <p>@2022 #VANLIFE</p>
        </footer>
    </div>
  )
}
