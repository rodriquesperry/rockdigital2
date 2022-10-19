import React from 'react';

import { Helmet } from 'react-helmet';

import WebMaintenanceForm from '../../components/contact-forms/maintenance-contact-form.component';

import './WebsiteMaintenance.styles.css';

const WebsiteMaintenance = () => {
  return (
    <>
      <Helmet>
        <meta />
        <title>Website Improvement</title>
      </Helmet>
      <div className='website-improvement-container'>
        <div className='website-maintenance-img-container'>
          <div id='website-maintenance-img-container-text'>
            WEBSITE <br /> IMPROVEMENT
          </div>
        </div>
        <div className='website-maintenance-container'>
          <div className='website-maintenance-text'>
            <p>
              One of the worst things that a you can do is build a website and
              just leave it to sit. Websites are designed with customer
              interactions in mind and are usually the first place where your
              customers, new and existing, will learn about what you have to
              offer and decide if they will spend their hard-earned money.
              Failure to maintain your website may leave the impression that
              your business is no longer "doing business" and irrelevant. This
              results in loss of search engine visibility, customers, and
              revenue.
            </p>
            <p>
              Every website requires upkeep. Your website is always secure,
              up-to-date and increasing your sales. With our website maintenance
              we make sure it stays that way so you can focus on what's
              important in your day-to-day operations.
            </p>
            <p>
              We believe that your website maintenance should save you time and
              money which is why we offer custom made maintenance solutions to
              fit your needs. Let's get you started: Fill in your information
              below and then check your email for follow-up instructions. We
              look forward to working with you.
            </p>
          </div>
          <div className='website-maintenance-form-container'>
            <WebMaintenanceForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteMaintenance;
