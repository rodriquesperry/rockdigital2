import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './portfolioItem.styles.css';

const PortfolioItem = () => {
  const [error, setError] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const getPortfolioItems = async () => {
      await axios
        .get(
          'https://rockdigital.agency/dashboard/api/portfolio-items?populate=*'
        )
        .then((data) => setPortfolioItems(data.data.data))
        .catch((error) => setError(error));
    };
    getPortfolioItems();
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <>
      {portfolioItems &&
        portfolioItems.map((portfolioItem, i) => {
          return (
            <div className='portfolio-item' key={i}>
              <a
                href={portfolioItem.attributes.url}
                target='_blank'
                rel='noreferrer'
              >
                <div className='portfolio-item-img-container'>
                  <img
                    src={`https://rockdigital.agency/dashboard${portfolioItem.attributes.image.data.attributes.url}`}
                    alt=''
                    className='img-fluid'
                  />
                </div>
                {/*<div className='img-info'>
                    <div className='text'>
                      <h3>{portfolioItem.attributes.name}</h3>
                      <p>{portfolioItem.attributes.description}</p>
                    </div>
          </div>*/}
              </a>
              <h4>{portfolioItem.attributes.name}</h4>
            </div>
          );
        })}
    </>
  );
};

export default PortfolioItem;
