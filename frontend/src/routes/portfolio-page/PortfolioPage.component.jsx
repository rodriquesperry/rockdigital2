import React from 'react';

import { Helmet } from 'react-helmet';

import PortfolioItem from '../../components/portfolio-item/PortfolioItem.component';

import './portfolioPage.styles.css';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <meta />
        <title>Portfolio</title>
      </Helmet>
      <div className='portfolio-img-container'>
        <h1 className='portfolio-header-text'>PORTFOLIO</h1>
      </div>
      <div className='portfolio-container'>
        <PortfolioItem />
      </div>
    </>
  );
};

export default PortfolioPage;
