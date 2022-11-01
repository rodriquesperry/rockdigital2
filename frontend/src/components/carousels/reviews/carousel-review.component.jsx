import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';

import me from '../../../assets/IMG-1561 copy 2.png';

// import '../../../scss/carousel-review.styles.scss';
import './carousel-review.styles.css';

const CarouselReview = () => {
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      await axios
        .get('https://rockdigital.agency/dashboard/api/reviews?populate=*')
        .then((data) => setReviews(data.data.data));
    };
    getReviews();
  }, []);

  console.log(reviews);

  return (
    <div className='review-carousel-container'>
      <Carousel interval={5000} variant='dark' fade>
        <Carousel.Item>
          <div className='review row'>
            {reviews &&
              reviews.map((review, i) => {
                return (
                  <>
                    {/* <div className='col-12 col-lg-3 image-container'>
                      <img
                        src={`https://rockdigital.agency/dashboard${review.attributes.review_image.data.attributes.url}`}
                        alt=''
                        className='img-fluid review-image'
                      />
                </div> */}
                    <div className='col review-container'>
                      <p>
                        <span className='quote'>"</span>
                        {review.attributes.review_quote}
                        <span className='quote'>"</span>
                      </p>
                    </div>
                    <div className="reviewer-container">
                    <p>~</p>
                    <h4 className='reviewer'>{review.attributes.reviewer_name}</h4>
                    </div>
                  </>
                );
              })}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselReview;
