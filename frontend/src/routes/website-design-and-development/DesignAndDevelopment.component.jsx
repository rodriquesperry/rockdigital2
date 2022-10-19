import React from 'react';

import DesignContactForm from '../../components/contact-forms/web-design-contact-form.component';

import './DesignAndDevelopment.styles.css';

const DesignAndDevelopment = () => {
  return (
    <>
      <div className='design-and-development-img-container'>
        <h1 id='design-text'>WEBSITE DESIGN & DEVELOPMENT</h1>
      </div>
      <div className='design-and-development-container'>
        <div className='design-and-development-text'>
          <p>
            Did you know that the first interaction most customers have with a
            business is with their website? Couple that with the fact that a
            whopping 94% of first impressions of a website are based on its
            design and you can see why it’s important that you get it right when
            it comes to web design.
          </p>
          <p>
            We’ll ensure you have a great looking website that reflects your
            brand identity and keeps customers actively engaged from the start.
            Which means higher customer satisfaction and higher conversions.
            Save yourself precious time and keep yourself from unwanted
            headaches from trying to keep up with what your customers want.{' '}
          </p>
          <p>
            Our process is painless. It all starts with a conversation and ends
            with a custom made solution that fosters client and customer
            satisfaction. Fill in the required information below and then check
            your email for follow-up instructions. We look forward to working
            with you.
          </p>
        </div>
        <div className='design-and-development-contact-form'>
          <DesignContactForm />
        </div>
      </div>
    </>
  );
};

export default DesignAndDevelopment;
