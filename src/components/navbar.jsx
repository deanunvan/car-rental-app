import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import "./navbar.css";

export const Navbar = () => {

    return (
        <nav className='fisrt'>
            <Link to="/" className='title'><h1><strong>#CarRental</strong></h1></Link>
            <ul>

                 <li>    
                    <NavLink to="/host" activeClassName="active">Host</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/vans" activeClassName="active">Vans</NavLink>
                </li>

            </ul>
        </nav>
    );
};
