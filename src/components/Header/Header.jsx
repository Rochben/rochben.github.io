import React, { useState, useEffect } from 'react';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';
import MenuBtn from '../MenuBtn/MenuBtn';
import { Link } from 'react-router-dom';
import woltLogo from '../../utils/images/wolt.svg';

function Header() {
  const [showWolt, setShowWolt] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowWolt(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <Carousel className='carousel-fade mt-5 mt-sm-0'>
        <Carousel.Item className='carousel-item1 vh-100'>
          <Carousel.Caption className='h-100 pb-0'>
            <div className="row h-100">
              <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                <h2 className='fw-bold fs-3 text-center text-md-start'>Dobro došli u</h2>
                <h1 className='text-capitalize fw-bold text-center text-md-start'>Avocado 🥑</h1>
                <h2 className='text-capitalize fw-bold text-center text-md-start'>Breakfast & Brunch</h2>
                <p className='mb-4 text-center text-md-start'>Najbolje mesto za sve ljubitelje zdrave ishrane</p>
                <div className='d-flex flex-column flex-sm-row'>
                  <MenuBtn />
                  <Link to='https://wolt.com/sr/srb/belgrade/restaurant/avocadoo?srsltid=AfmBOoquE3DqTwBS3OdQk8f8jVf2rx0rURsK3SaiDGpFtl0UYzszhOLY' className="text-decoration-none">
                    <button type='button' className={`btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow d-flex align-items-center wolt-button ${showWolt ? 'show-wolt' : ''}`}>
                      <img src={woltLogo} alt="Wolt" height="30" className="wolt-logo" style={{ border: 'none' }} />
                      <span className="button-text">Poruči</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='col-xl-5 d-none d-xl-block'></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item2 vh-100'>
          <Carousel.Caption className='h-100 pb-0'>
            <div className="row h-100">
              <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                <h2 className='fw-bold fs-3 text-center text-md-start'>Dobro došli u</h2>
                <h1 className='text-capitalize fw-bold text-center text-md-start'>Avocado 🥑</h1>
                <h2 className='text-capitalize fw-bold text-center text-md-start'>Breakfast & Brunch</h2>    
                <p className='mb-4 text-center text-md-start'>Najbolje mesto za sve ljubitelje zdrave ishrane.</p>
                <div className='d-flex flex-column flex-sm-row'>
                  <MenuBtn />
                  <Link to='https://wolt.com/sr/srb/belgrade/restaurant/avocadoo?srsltid=AfmBOoquE3DqTwBS3OdQk8f8jVf2rx0rURsK3SaiDGpFtl0UYzszhOLY' className="text-decoration-none">
                    <button type='button' className={`btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow d-flex align-items-center wolt-button ${showWolt ? 'show-wolt' : ''}`}>
                      <img src={woltLogo} alt="Wolt" height="30" className="wolt-logo" style={{ border: 'none' }} />
                      <span className="button-text">Poruči</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='col-xl-5 d-none d-xl-block'></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item3 vh-100'>
          <Carousel.Caption className='h-100 pb-0'>
            <div className="row h-100">
              <div className='col-xl-7 d-flex flex-column align-items-center align-items-md-start justify-content-center mt-5'>
                <h2 className='fw-bold fs-3 text-center text-md-start'>Dobro došli u</h2>
                <h1 className='text-capitalize fw-bold text-center text-md-start'>Avocado 🥑</h1>
                <h2 className='text-capitalize fw-bold text-center text-md-start'>Breakfast & Brunch</h2>                            
                <p className='mb-4 text-center text-md-start'>Najbolje mesto za sve ljubitelje zdrave ishrane.</p>
                <div className='d-flex flex-column flex-sm-row'>
                  <MenuBtn />
                  <Link to='https://wolt.com/sr/srb/belgrade/restaurant/avocadoo?srsltid=AfmBOoquE3DqTwBS3OdQk8f8jVf2rx0rURsK3SaiDGpFtl0UYzszhOLY' className="text-decoration-none">
                    <button type='button' className={`btn btn-outline-light btn-lg rounded-0 text-capitalize mx-2 shadow d-flex align-items-center wolt-button ${showWolt ? 'show-wolt' : ''}`}>
                      <img src={woltLogo} alt="Wolt" height="30" className="wolt-logo" style={{ border: 'none' }} />
                      <span className="button-text">Poruči</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='col-xl-5 d-none d-xl-block'></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

export default Header;