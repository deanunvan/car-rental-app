import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import img1 from '../images/Rectangle-162.png';
import img4 from '../images/image-57.png';
import "./Vans.css";

export const Simple = () => {
  useEffect(() => {
    ScrollReveal().reveal('.vans-heading', { delay: 200, distance: '50px', duration: 1000, origin: 'bottom' });
    ScrollReveal().reveal('.color', { delay: 400, distance: '30px', duration: 1000, origin: 'bottom' });
    ScrollReveal().reveal('.van-pics', { delay: 600, distance: '30px', duration: 1000, origin: 'bottom', interval: 200 });
    ScrollReveal().reveal('footer', { delay: 800, distance: '20px', duration: 1000, origin: 'bottom' });
  }, []);

  return (
    <div>
      <div className='vans'>
        <div className="vans-heading">
          <h1>Explore our van options</h1>
        </div>
        <div className="buttons">
          <Link to='/Simple'><button className='simple-active'>Simple</button></Link>
          <Link to='/Luxury'><button className='simple'>Luxury</button></Link>
          <Link to='/Rugged'><button className='simple'>Rugged</button></Link>
          <Link to='/Vans' className='clear'>Clear filter</Link>
        </div>

        <div className='van-pics'>
          <div className='two-pics'>
            <div className='color'>
              <Link to='/Van1'><img className='img1' src={img1} alt="" /></Link>
              <h3>Modest Explorer $60</h3>
              <div className='day'>
                <p>/day</p>
              </div>
            </div>
            <div className='color'>
              <Link to='/Van4'><img className='img2' src={img4} alt="" /></Link>
              <h3>Dreamfinder $65</h3>
              <div className='day'>
                <p>/day</p>
              </div>
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
