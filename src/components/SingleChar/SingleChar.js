import React from 'react';

const SingleChar = ({ clickedCharDetails }) => {
  return (
    <>
      <img src={clickedCharDetails.image} alt={clickedCharDetails.name} />
      <div className='detWrapper'>
        <h2 className='modName'>
          #{clickedCharDetails.id} {clickedCharDetails.name}
        </h2>
        <h3 className='modStatus'>Status: {clickedCharDetails.status}</h3>
        <h3 className='modSpec'>Species: {clickedCharDetails.species}</h3>
        <h3 className='modGender'>Gender: {clickedCharDetails.gender}</h3>
      </div>
    </>
  );
};

export default SingleChar;
