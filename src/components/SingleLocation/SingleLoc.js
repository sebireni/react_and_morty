import React from 'react';

const SingleLoc = ({ clickedLocDetails }) => {
  return (
    <div className='detWrapper'>
      <h2 className='modName'>
        #{clickedLocDetails.id} {clickedLocDetails.name}
      </h2>
      <h3 className='modStatus'>Type: {clickedLocDetails.type}</h3>
      <h3 className='modSpec'>Dimension: {clickedLocDetails.dimension}</h3>
    </div>
  );
};

export default SingleLoc;
