import React from 'react';

import './powered.styles.css'

const PoweredBy = () => {
  return (
    <div className='powered-by text-center py-3'>
      <small>
        &copy;2022 Rock Digital Web Agency | Powered by &nbsp;
        <a href='http://rockdigital.agency' target='_blank' rel='noreferrer'>
          Rock Digital
        </a>
      </small>
    </div>
  );
};

export default PoweredBy;
