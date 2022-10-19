import React from 'react';
import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';

import SheratonHotel from '../../../assets/sheraton-houston-st-san-antonio-tx.jpeg';
import WebDesign from '../../../assets/web-design-full.jpeg';
import DigitalMarketing from '../../../assets/digital-marketing.jpeg';

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
            src={WebDesign}
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
              <p>Custom websites designed with your customers in mind.</p>
              <a href='/website-design-and-development' className='btn'>
                LEARN MORE
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 img-fluid'
            src={DigitalMarketing}
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
              <p>Outperform your competitors with proven processes.</p>
              <a href='/website-improvement' className='btn'>
                LEARN MORE
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 img-fluid'
            src={SheratonHotel}
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
              <p>Customers will love to interact with your business online.</p>
              <a href={routes[rando]} className='btn'>
                LEARN MORE
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselTopPage;
