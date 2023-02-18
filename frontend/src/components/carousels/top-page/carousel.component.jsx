import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import WebDesign344w from '../../../assets/web-design-full_344px.jpeg';
import WebDesign687w from '../../../assets/web-design-full_687px.jpeg';
import WebDesign1000w from '../../../assets/web-design-full_1000px.jpeg';
import WebDesign1359w from '../../../assets/web-design-full_1359px.jpeg';
import WebDesign2479w from '../../../assets/web-design-full_2479px.jpeg';

import DigitalMarketing344w from '../../../assets/digital-marketing_344px.jpeg';
import DigitalMarketing687w from '../../../assets/digital-marketing_687px.jpeg';
import DigitalMarketing1000w from '../../../assets/digital-marketing_1000px.jpeg';
import DigitalMarketing1359w from '../../../assets/digital-marketing_1359px.jpeg';
import DigitalMarketing2479w from '../../../assets/digital-marketing_2479px.jpeg';


import SheratonHotel344w from '../../../assets/sheraton-houston-st-san-antonio-tx_344px.jpeg';
import SheratonHotel687w from '../../../assets/sheraton-houston-st-san-antonio-tx_687px.jpeg';
import SheratonHotel1000w from '../../../assets/sheraton-houston-st-san-antonio-tx_1000px.jpeg';
import SheratonHotel1359w from '../../../assets/sheraton-houston-st-san-antonio-tx_1359px.jpeg';
import SheratonHotel2479w from '../../../assets/sheraton-houston-st-san-antonio-tx_2479px.jpeg';

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
            className='d-block img-fluid web-design'
            fetchpriority='high'
            src={WebDesign344w}
            srcSet={`${WebDesign344w} 344w, ${WebDesign687w} 687w, ${WebDesign1000w} 1000px, ${WebDesign1359w} 1359w, ${WebDesign2479w} 2479w `}
            sizes='(min-width: 425px) 344px, (min-width: 768px) 687px, (min-width: 1024px) 1000px, (min-width: 1440) 1359px, (min-width: 2560) 2479px'
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
            className='d-block img-fluid'
            src={DigitalMarketing344w}
            srcSet={`${DigitalMarketing344w} 344w, ${DigitalMarketing687w} 687w, ${DigitalMarketing1000w} 1000px, ${DigitalMarketing1359w} 1359w, ${DigitalMarketing2479w} 2479w `}
            sizes='(min-width: 425px) 344px, (min-width: 768px) 687px, (min-width: 1024px) 1000px, (min-width: 1440) 1359px, (min-width: 2560) 2479px'
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
            className='d-block img-fluid'
            src={SheratonHotel344w}
            srcSet={`${SheratonHotel344w} 344w, ${SheratonHotel687w} 687w, ${SheratonHotel1000w} 1000px, ${SheratonHotel1359w} 1359w, ${SheratonHotel2479w} 2479w `}
            sizes='(min-width: 425px) 344px, (min-width: 768px) 687px, (min-width: 1024px) 1000px, (min-width: 1440) 1359px, (min-width: 2560) 2479px'
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
