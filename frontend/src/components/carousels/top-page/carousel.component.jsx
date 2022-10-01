import { Link } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';

import workdesk from '../../../assets/pexels-hasan-albari-1229861.jpeg';
import SheratonHotel from '../../../assets/sheraton-houston-st-san-antonio-tx.jpeg';
import WebDesign from '../../../assets/website-design.jpg';

// import '../../../scss/carousel.styles.scss';
import './carousel.styles.css';

const CarouselTopPage = () => {
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
              <Link className='btn'>LEARN MORE</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 img-fluid'
            src={workdesk}
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
              <Link className='btn'>LEARN MORE</Link>
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
              <Link className='btn'>LEARN MORE</Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselTopPage;
