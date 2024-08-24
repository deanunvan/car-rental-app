import React from 'react'
import "./Signin.css";
import { Link } from 'react-router-dom';
export const Sorry = () => {
  return (
    <div>
        <div className="sorry">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to='/'><button className='buttonnn' type="submit">Return to home</button></Link>
        </div>

        <footer>
          <p>@2022 #VANLIFE</p>
        </footer> 
    </div>
  )
}
