import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import me from '../../../assets/IMG-1561 copy 2.png';

// import '../../../scss/carousel-review.styles.scss';
import './carousel-review.styles.css';

const CarouselReview = () => {
  return (
    <div className='review-carousel-container'>
      <Carousel interval={5000} variant='dark' fade>
        <Carousel.Item>
          <div className='review row'>
            <div className='col-12 col-lg-3 image-container'>
              <img src={me} alt='' className='img-fluid review-image' />
            </div>
            <div className='col review-container'>
              <p>
                <span className='quote'>"</span>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Optio quos animi, eaque aperiam
                saepe dolores consequatur recusandae dolorum.
                <span className='quote'>"</span>
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='review row'>
            <div className='col-12 col-lg-3 image-container'>
              <img src={me} alt='' className='img-fluid review-image' />
            </div>
            <div className='col review-container'>
              <p>
                <span className='quote'>"</span>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Optio quos animi, eaque aperiam
                saepe dolores consequatur recusandae dolorum.
                <span className='quote'>"</span>
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='review row'>
            <div className='col-12 col-lg-3 image-container'>
              <img src={me} alt='' className='img-fluid review-image' />
            </div>
            <div className='col review-container'>
              <p>
                <span className='quote'>"</span>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Optio quos animi, eaque aperiam
                saepe dolores consequatur recusandae dolorum.
                <span className='quote'>"</span>
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselReview;
