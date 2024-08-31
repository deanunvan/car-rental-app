import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import img1 from '../images/Rectangle-162.png';
import img2 from '../images/Rectangle-163.png';
import img3 from '../images/image-533.png';
import img4 from '../images/image-57.png';
import img5 from '../images/Rectangle-153.png';
import img6 from '../images/Rectangle-156.png';
import "./Vans.css";

export const Rugged = () => {
  useEffect(() => {
    ScrollReveal().reveal('.vans-heading', { delay: 200, distance: '50px', duration: 1000, origin: 'bottom' });
    ScrollReveal().reveal('.buttons', { delay: 400, distance: '30px', duration: 1000, origin: 'bottom' });
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
          <Link to='/Simple'><button className='simple'>Simple</button></Link>
          <Link to='/Luxury'><button className='simple'>Luxury</button></Link>
          <Link to='/'><button className='simple-rugged'>Rugged</button></Link>
          <Link to='/Vans' className='clear'>Clear filter</Link>
        </div>

        <div className='van-pics'>
          <div className='two-pics'>
            <div className='color'>
              <img className='img1' src={img1} alt="" />
              <h3>Modest Explorer $60</h3>
              <div className='day'>
                <p>/day</p>
              </div>
            </div>
            <div className='color'>
              <img className='img2' src={img4} alt="" />
              <h3>Dreamfinder $65</h3>
              <div className='day'>
                <p>/day</p>
              </div>
            </div>
          </div>
        </div>

        <div className="two-pics">
          <div className='color'>
            <img className='img1' src={img3} alt="" />
            <h3>Reliable Red $100</h3>
            <div className='day'>
              <p>/day</p>
            </div>
          </div>
          <div className='color'>
            <img className='img2' src={img4} alt="" />
            <h3>Dreamfinder $65</h3>
            <div className='day'>
              <p>/day</p>
            </div>
          </div>
        </div>

        <div className="two-pics">
          <div className='color'>
            <img className='img1' src={img5} alt="" />
            <h3>The Cruiser $120</h3>
            <div className='day'>
              <p>/day</p>
            </div>
          </div>
          <div className='color'>
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

export default Rugged;
