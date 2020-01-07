import React from 'react';
import spinner from './vinylSpinner.gif';

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '200px', margin: '40px auto', display: 'block', borderRadius: 100 }}
      />
    </div>
  );
};