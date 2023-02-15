import React from 'react';

import { Helmet } from 'react-helmet';

import CarouselTopPage from '../../components/carousels/top-page/carousel.component';
import CarouselReview from '../../components/carousels/reviews/carousel-review.component';
import HomePortfolioItem from '../../components/home-portfolio-items/HomePortfolioItem.component';

import rec from '../../assets/rec.png';

import './home.styles.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='Rock Digital is a web design and development and digital marketing agency based in Cibolo, Tx right outside of San Antonio.'
        />
        <title>Home</title>
      </Helmet>
      <div className='home-container'>
        <CarouselTopPage />

        <div className='main-container'>
          <div className='full-service-container'>
            <h2>
              A FULL SERVICE DIGITAL <span>&nbsp;AGENCY&nbsp; </span>
            </h2>
            <hr />
            <p>
              When you partner with Rock Digital for your online presence needs,
              you can breathe easy knowing that your business is under the care
              of skillful web design and marketing experts so you can be
              confident that you’ll always get the perfect website that fits
              your style and budget. Let’s create you a jaw-dropping designed,
              mobile ready, and easy to use website that your customers will
              love and converts like crazy. Click the area below you are
              interested in.
            </p>
          </div>

          <div className='divs'>
            <div className='div1'>
              <a href='/website-design-and-development'>
                <div className='div-content'>
                  <h1>WEBSITE DESIGN</h1>
                  <h3 id='development'>& DEVELOPMENT</h3>
                </div>
              </a>
            </div>

            <div className='div2'>
              <a href='/website-maintenance'>
                <div className='div-content'>
                  <h3>WEBSITE IMPROVEMENT</h3>
                </div>
              </a>
            </div>

            <div className='div3'>
              <a href='/website-improvement'>
                <div className='div-content'>
                  <h3>DIGITAL PRESENCE IMPROVEMENT</h3>
                </div>
              </a>
            </div>
          </div>
          <div className='build-relationships-container'>
            <h2>
              WE CREATE DIGITAL SOLUTIONS <br /> THAT BUILD RELATIONSHIPS
            </h2>
            <hr />
            <p>
              We exist to help your business succeed online. Our web specialists
              can help you design and develop a custom website or app, plan your
              digital marketing strategy to drive traffic and provide you with
              killer content. Let's reshape the way your customers interact with
              your business online.
            </p>
          </div>

          <div className='skills'>
            <div className='skill-set'>
              <img src={rec} alt='' />
              <h4>Custom Design</h4>
              <p>
                Get found in search engines and loved by customers with custom
                website design and development. A great looking, mobile-ready,
                and user friendly website that is unique to your brand and
                optimized for your users as well as search engines.
              </p>
            </div>
            <div className='skill-set'>
              <img src={rec} alt='' />
              <h4>Responsive Layout</h4>
              <p>
                From desktop to mobile, have your customers interact with your
                business on their own terms. Our websites are mobile ready so
                your customers can browse on the go. They adjust to different
                screen sizes while still looking amazing.
              </p>
            </div>
            <div className='skill-set'>
              <img src={rec} alt='' />
              <h4>Search Engine Optimized</h4>
              <p>
                Your website finally doing what it's designed to. Our websites
                are built with SEO in mind and will get you greater visibility
                in search engine results pages. This means more visitors to your
                site, more clicks and more purchases from your business.
              </p>
            </div>
          </div>
          <div className='parallax1'>
            <div id='parallax-1-text'>
              <div className='parallax-1-heading'>
                <h3>
                  READY TO <br /> START YOUR PROJECT?
                </h3>
                <div className='parallax-btn-container'>
                  <a href='/contact' className='parallax-btn'>
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='reviews-container'>
            <h2>REVIEWS</h2>
            <hr />
            <div className='reviews '>
              <CarouselReview />
            </div>
          </div>

          {/* Portfolio Page*/}
          <div className='parallax2'></div>
          <div className='homepage-portfolio-container'>
            <h2>SOME OF OUR WORK</h2>
            <hr />
            <div className='portfolio-items'>
              <HomePortfolioItem />
            </div>
          </div>
          <div className='ready-container'>
            <div className='ready-header'>
              <h2>WE'RE HERE TO HELP YOUR BUSINESS SUCCEED:</h2>
              <hr />
              <p>
                Ready to step your business' web game up? <br /> It would be our
                pleasure to create a custom website design experience that
                represents your brand, communicates your brand message and
                generates your business more leads which increases your overall
                revenue.
              </p>
            </div>
            <div className='ready-btn'>
              <a href='/contact' className='btn'>
                Contact us to get started!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
