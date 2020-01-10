import React from 'react';
import spinner from './vinylSpinner.gif';

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '150px', margin: '35px auto', display: 'block', borderRadius: 100 }}
      />
    </div>
  );
};