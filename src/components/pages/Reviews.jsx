import React from 'react'
import './home.css';
import { Link, NavLink } from "react-router-dom";
import reviewpic from '../images/Group 306.png';
import star from '../images/Star 4.png';
import eliot from '../images/Group 241.png';

export const Reviews = () => {
  return (
    <div>

        <div className="reviews">
        <div className="host-links">
                <NavLink to='/Dashboard'  activeClassName="active" className='host-link'>Dashboard</NavLink>
                <NavLink to='/Income'  activeClassName="active" className='host-link'>Income</NavLink>
                <NavLink to='/Vanshost'  activeClassName="active" className='host-link'>Vans</NavLink>
                <NavLink to='/Reviews'  activeClassName="active" className='host-link'>Reviews</NavLink>
            </div>

            <div><img className='reviewpic' src={reviewpic} alt="" /></div>

                <div>
                    <img className='star' src={star} alt="" />
                    <img className='star' src={star} alt="" />
                    <img className='star' src={star} alt="" />
                    <img className='star' src={star} alt="" />
                    <img className='star' src={star} alt="" />
                </div>

                <div><img className='eliot' src={eliot} alt="" /></div>

                
                <div>
                    <img className='star' src={star} alt="" />
                    <img className='star' src={star} alt="" />
                    <img className='star' src={star} alt="" />
                    <img className='star' src={star} alt="" />
                    <img className='star' src={star} alt="" />
                </div>

                <div><img className='eliott' src={eliot} alt="" /></div>


        </div>

        <footer className='footer'>
          <p>@2022 #VANLIFE</p>
        </footer>

    </div>
  )
}
