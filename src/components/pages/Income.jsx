import React from 'react'
import './home.css';
import { Link, NavLink } from "react-router-dom";
import incoimg from '../images/Group 313.png';
import inc from '../images/Group 275.png';
import inco from '../images/Group 276.png';
import incom from '../images/Group 277.png';


export const Income = () => {
  return (
    <div>
        <div className="income-content">

            <div className="host-links">
                <NavLink to='/Dashboard'  activeClassName="active" className='host-link'>Dashboard</NavLink>
                <NavLink to='/Income'  activeClassName="active" className='host-link'>Income</NavLink>
                <NavLink to='/Vanshost'  activeClassName="active" className='host-link'>Vans</NavLink>
                <NavLink to='/Reviews'  activeClassName="active" className='host-link'>Reviews</NavLink>
            </div>

            <h1>Income</h1>
            <h5>Last 30 days</h5>
            <h1>$2,260</h1>

            <div><img className='incoimg' src={incoimg} alt="" /></div>

            <div className="your-trans">
                <h4>Your transactions (3)</h4>
                <p>Last 30 days</p>
            </div>

            <div><img className='incoimg' src={inc} alt="" /></div>
            <div><img className='incoimg' src={inco} alt="" /></div>
            <div><img className='incoimg' src={incom} alt="" /></div>

        </div>
        <footer className='footer'>
          <p>@2022 #VANLIFE</p>
        </footer>
    </div>
  )
}
