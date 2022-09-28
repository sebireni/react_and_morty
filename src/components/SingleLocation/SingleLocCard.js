import React from 'react';
import '../../pages/AllLocations/AllLoc.css';

const SingleLocCard = ({ handleClick, locDetails }) => {
  return (
    <div onClick={handleClick} className='locCard'>
      <h2 className='locID'>#{locDetails.id}</h2>
      <h1>{locDetails.name}</h1>
      <h3>{locDetails.type}</h3>
    </div>
  );
};

export default SingleLocCard;
