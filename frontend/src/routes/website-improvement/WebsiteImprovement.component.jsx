import React from 'react';

import { Helmet } from 'react-helmet';

import ContactForm from '../../components/contact-forms/contact-page-contact-form.compnent';

import './website-improvement.styles.css';

const WebsiteImprovement = () => {
  return (
    <>
      <Helmet>
        <meta />
        <title>Digital Presence Improvent</title>
      </Helmet>
      <div className='improvement-container'>
        <div className='website-improvement-img-container'>
          <div id='website-improvement-img-container-text'>
            DIGITAL PRESENCE IMPROVEMENT
          </div>
        </div>
        <div className='website-improvement-container'>
          <div className='website-improvement-text'>
            <p>
              If you are serious about your business then you should know that
              in order to thrive in the business marketplace today, you must
              have a strong and consistent online presence. It's not enough to
              just build your website and hope that people will find it. It
              takes proven strategies to drive traffic to your website and then
              convert that traffic into paying customers.
            </p>
            <p>
              As a full service digital agency, we provide many services and
              strategies for your success. Whether it be local SEO,
              Pay-per-click marketing or content marketing we have are here to
              help you reach your business goals. Drop us a line with what you
              are looking for and we'll get right back with you. We look forward
              to working with you.
            </p>
            <p></p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default WebsiteImprovement;
