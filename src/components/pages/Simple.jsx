import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/Rectangle-162.png';
import img2 from '../images/Rectangle-163.png';
import img3 from '../images/image-533.png';
import img4 from '../images/image-57.png';
import img5 from '../images/Rectangle-153.png';
import img6 from '../images/Rectangle-156.png';
import "./Vans.css";
export const Simple = () => {
  return (
    <div>
        <div className='vans'>

          <div className="vans-heading">
            <h1>Explore our van options</h1>
          </div>
          <div className="buttons">
            <Link to='/Simple'><button className='simple'>Simple</button></Link>
            <Link to='/Luxury'><button className='simple'>Luxury</button></Link>
            <Link to='/Rugged'><button className='simple'>Rugged</button></Link>
            <Link className='clear'>Clear filter</Link>
          </div>

          <div className='van-pics'>
            <div className='two-pics'>

              <div>
                <img className='img1' src={img1} alt="" />
                <h3>Modest Explorer $60</h3>
                <div className='day'>
                  <p>/day</p>
                </div>
              </div>
              
              <div>
              <img className='img2' src={img4} alt="" />
                <h3>Dreamfinder $65</h3>
                <div className='day'>
                  <p>/day</p>
                </div> 
            </div>

            </div>
          </div>

          <div className="two-pics">
          <div>
            <img className='img1' src={img5} alt="" />
                  <h3>The Cruiser $120</h3>
                  <div className='day'>
                    <p>/day</p>
                  </div>
            </div>
            
            <div>
            <img className='img2' src={img6} alt="" />
                <h3>Dream Wonder $70</h3>
                <div className='day'>
                  <p>/day</p>
                </div> 
            </div>
          </div>

        </div>
        <footer>
          <p>@2022 #VANLIFE</p>
        </footer> 
    </div>
  );
}

export default Simple;
