import React from 'react';

import { Helmet } from 'react-helmet';

import ContactPageForm from '../../components/contact-forms/contact-page-contact-form.compnent';
import './contact.styles.css';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <meta
          name='description'
          content='Contact us for the best web design and digital marketing services.'
        />
        <title>Contact Us</title>
      </Helmet>
      <div className='contact-container'>
        <div className='contact-img-container'>
          <div id='contact-img-container-text'>CONTACT US</div>
        </div>
        <ContactPageForm />
      </div>
    </div>
  );
};

export default Contact;
