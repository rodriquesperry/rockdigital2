import React from 'react';

import { Helmet } from 'react-helmet';

import WebDesignService from '../../assets/web-design-service.jpeg';
import SeoService from '../../assets/seo-service.jpeg';
import WebsiteImprovement from '../../assets/website-improvement-maintenance.jpeg';

import './services.styles.css';

const Services = () => {
  return (
    <>
      <Helmet>
        <meta name='description' content='We offer a variety of services to help your business suceed online.'/>
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
                We'll build what you need...
              </h2>
              <div className='services-text'>
                Effortlessly dominate your competition with our web design and
                development service. You can expect to get ranked in search
                engines and reach customers on any platform with a lightning
                fast, mobile friendly, and search engine optimized website
                design. Your users will enjoy interacting with your business'
                website.
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
              <h2 className='service-text-header'>We'll help you grow...</h2>
              <div className='services-text'>
                Know what your customers are searching for and attract the right
                customers to your website. The truth is that generating traffic
                is a never ending task, which is why we offer custom made
                solutions to handle your website traffic. From PPC
                (Pay-Per-Click) to organic traffic, we have the right solutions
                to quickly get you laser targeted traffic while ranking you
                higher in Google.
              </div>
            </div>
          </div>
          <div id='third-service' className='service'>
            <div className='services-text-container'>
              <h2 className='service-text-header'>
                We'll care for your investment...
              </h2>
              <div className='services-text'>
                Stay ahead of your competition and make sure your website
                continues to deliver positive returns on your investment. Every
                website requires upkeep and continual improvement to operate
                properly. We take these stresses away form you with custom
                website improvement packages tailored to fit your business vision.
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
