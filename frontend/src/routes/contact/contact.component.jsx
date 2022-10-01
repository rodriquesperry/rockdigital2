import { Helmet } from 'react-helmet';

import ContactPageForm from '../../components/contact-forms/contact-page-contact-form.compnent';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <meta
          name='description'
          content='Contact us for web design services'
        />
        <meta name='keywords' content='web design seo contact' />
        <title>Contact Us</title>
      </Helmet>
      <ContactPageForm />
    </div>
  );
};

export default Contact;
