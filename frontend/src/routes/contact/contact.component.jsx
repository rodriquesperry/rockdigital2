import React from 'react';

import { Helmet } from 'react-helmet';

import ContactPageForm from '../../components/contact-forms/contact-page-contact-form.compnent';
import './contact.styles.css';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <meta name='description' content='Contact us for web design services' />
        <meta name='keywords' content='web design seo contact' />
        <title>Contact Us</title>
      </Helmet>
      <div className='contact-img-container'>
        <div id='contact-img-container-text'>
          CONTACT US
        </div>
      </div>
      <ContactPageForm />
    </div>
  );
};

export default Contact;
