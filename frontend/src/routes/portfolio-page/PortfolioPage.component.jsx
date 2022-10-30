import React from 'react';

import { Helmet } from 'react-helmet';

import PortfolioItem from '../../components/portfolio-item/PortfolioItem.component';

import './portfolioPage.styles.css';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='Check out our work with clients and personal projects.'
        />
        <title>Portfolio</title>
      </Helmet>
      <div className='portfolio-container'>
        <div className='portfolio-img-container'>
          <h1 className='portfolio-header-text'>PORTFOLIO</h1>
        </div>
        <div className='portfolio-item-container'>
          <PortfolioItem />
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
