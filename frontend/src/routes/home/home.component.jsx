import { Helmet } from 'react-helmet';

import CarouselTopPage from '../../components/carousels/top-page/carousel.component';
import CarouselReview from '../../components/carousels/reviews/carousel-review.component';
import PortfolioItem from '../../components/portfolio-item/PortfolioItem.component';

import rec from '../../assets/rec.png';
import chateauDijon from '../../assets/chateau-dijon.com.png';
import genuine from '../../assets/genuinellc.com_1024.png';
import spa from '../../assets/spa2-1024.jpg';

// import '../../scss/home.styles.scss';
import './home.styles.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='The best digital agency this side of the Missisip'
        />
        <meta name='keywords' content='web design seo' />
        <title>Home</title>
      </Helmet>
      <div className='home-container'>
        <CarouselTopPage />

        <div className='main-container'>
          <div className='full-serivice-container'>
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
              love to use and converts like crazy.
            </p>
          </div>

          <div className='divs'>
            <div className='div1'>
              <div className='div-content'>
                <h1>WEBSITE DESIGN</h1>
                <h3 id='development'>& DEVELOPMENT</h3>
              </div>
            </div>
            <div className='div2'>
              <div className='div-content'>
                <h3>WEBSITE MAINTENANCE</h3>
              </div>
            </div>
            <div className='div3'>
              <div className='div-content'>
                <h3>WEBSITE IMPROVEMENT</h3>
              </div>
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
              content. Let's reshape the way your customers interact with your
              business online.
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
            <div>h1 something about something!</div>
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
            <PortfolioItem />
            </div>
          </div>
          <div className='ready-container'>
            <div className='ready-header'>
              <h2>WE'RE HERE TO HELP YOU:</h2>
              <hr />
              <p>
                Ready to step your business' web game up? <br /> It would be our
                pleasure to create a custom website design experience that
                represents your brand, communicates your brand message and
                generates your business more leads which, in turn, increases your overall
                return on investment.
              </p>
            </div>
            <div className='ready-btn'>
              <button className='btn'>Click Here</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
