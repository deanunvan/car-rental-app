import React from 'react';

import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import "./navbar.css";

export const Navbar = () => {
    return (
    <nav>
        <Link to="/" className='title'><h1><strong>#CarRental</strong></h1></Link>
        <ul>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/vans">Vans</NavLink>
            </li>
        </ul>
    </nav>
    );
};