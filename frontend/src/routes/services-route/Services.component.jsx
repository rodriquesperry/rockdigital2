import { Helmet } from 'react-helmet';

import WebDesignService from '../../assets/web-design-service.jpeg';
import SeoService from '../../assets/seo-service.jpeg';
import WebsiteImprovement from '../../assets/website-improvement-maintenance.jpeg';

import './services.styles.css';

const Services = () => {
  return (
    <>
      <Helmet>
        <meta />
        <title>Services</title>
      </Helmet>
      <div className='services-container'>
        <div className='services-img-container'>
          <h1 className='services-header-text'>SERVICES</h1>
        </div>

        <div className='services'>
          <div id='first-service' className='service'>
            <div className='services-text-container'>
              <h2 className='service-text-header'>
                Web Design and Development
              </h2>
              <div className='services-text'>
                A website can have a massive impact on any business' overall
                success, from increases of your brand reach to increases in
                revenue. At Rock Digital we partner with your business and adapt
                it's marketing goals to produce a custom made solution that fits
                your needs and vision. There is no cookie cutting here.
              </div>
            </div>
            <div className='services-img'>
              <img src={WebDesignService} alt='' />
            </div>
          </div>
          <div id='second-service' className='service'>
            <div className='services-img'>
              <img src={SeoService} alt='' />
            </div>
            <div className='services-text-container'>
              <h2 className='service-header'>Audience Attraction</h2>
              <div className='services-text'>
                
                
              </div>
            </div>
          </div>
          <div id='third-service' className='service'>
            <div className='services-text-container'>
              <h2 className='service-header'>Website Improvement</h2>
              <div className='services-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className='services-img'>
              <img src={WebsiteImprovement} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
