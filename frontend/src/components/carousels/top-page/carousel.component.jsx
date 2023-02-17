import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import WebDesign from '../../../assets/web-design-full.jpeg';
import WebDesign500w from '../../../assets/web-design-full_500px.jpeg';
import WebDesign344w from '../../../assets/web-design-full_344px.jpeg';
import DigitalMarketing from '../../../assets/digital-marketing.jpeg';
import DigitalMarketing500w from '../../../assets/digital-marketing_500px.jpeg';
import DigitalMarketing344w from '../../../assets/digital-marketing_344px.jpeg';
import SheratonHotel from '../../../assets/sheraton-houston-st-san-antonio-tx.jpeg';
import SheratonHotel500w from '../../../assets/sheraton-houston-st-san-antonio-tx_500px.jpeg';
import SheratonHotel344w from '../../../assets/sheraton-houston-st-san-antonio-tx_344px.jpeg';

// import '../../../scss/carousel.styles.scss';
import './carousel.styles.css';

const CarouselTopPage = () => {
  let rando = Math.floor(Math.random() * 2);

  let routes = ['/website-improvement', '/website-design-and-development'];

  return (
    <div>
      <Carousel interval={7300} fade>
        <Carousel.Item>
          <img
            className='d-block w-100 img-fluid web-design'
            fetchpriority='high'
            src={WebDesign344w}
            srcSet={`${WebDesign344w} 344w, ${WebDesign500w} 500w, ${WebDesign} 1000w`}
            alt='First slide'
          />
          <Carousel.Caption>
            <div className='carousel-caption-block'>
              <div className='carousel-heading'>
                <h3>
                  STYLISH &<br />
                  <span>ORIGINAL</span>
                </h3>
              </div>
              <p>
                Custom websites designed with your customers in mind.
                <a
                  href='/website-design-and-development'
                  className='btn min-btn-width'
                >
                  <p>Website Design</p>
                </a>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 img-fluid'
            src={DigitalMarketing}
            srcSet={`${DigitalMarketing344w} 344w, ${DigitalMarketing500w} 500w, ${DigitalMarketing} 1000w`}
            alt='Second slide'
          />

          <Carousel.Caption>
            <div className='carousel-caption-block'>
              <div className='carousel-heading'>
                <h3>
                  STABILITY &<br />
                  <span>SUPERIORITY</span>
                </h3>
              </div>
              <p>
                Outperform your competitors with proven processes.
                <a href='/website-improvement' className='btn'>
                  <p>Online Presence Improvement</p>
                </a>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 img-fluid'
            src={SheratonHotel}
            rcSet={`${SheratonHotel344w} 300w, ${SheratonHotel500w} 500w, ${SheratonHotel} 1000w`}
            alt='Third slide'
          />

          <Carousel.Caption>
            <div className='carousel-caption-block'>
              <div className='carousel-heading'>
                <h3>
                  EFFECTIVE &<br />
                  <span>CONSISTENT</span>
                </h3>
              </div>
              <p>
                Customers will love to interact with your business online
                <a href={routes[rando]} className='btn min-btn-width'>
                  <p>Get Started Now</p>
                </a>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselTopPage;
