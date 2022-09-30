import React, { useState } from 'react';

import { useLocations } from '../../../src/api/useData';
import SingleLoc from '../../components/SingleLocation/SingleLoc';
import SingleLocCard from '../../components/SingleLocation/SingleLocCard';

import './AllLoc.css';

const AllLoc = () => {
  const [pageCounter, setPageCounter] = useState(1);
  const [modal, setModal] = useState(false);
  const [clickedLoc, setClickedLoc] = useState(null);

  const { results: locResults, info: locInfo } = useLocations(pageCounter);

  const nextPage = () => {
    if (locInfo.pages > pageCounter) {
      setPageCounter(pageCounter + 1);
    }
  };

  const prevPage = () => {
    if (pageCounter > 1) {
      setPageCounter(pageCounter - 1);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleClick = (id) => {
    setClickedLoc(locResults?.find((loc) => loc.id === id));
    if (id) {
      toggleModal();
    }
  };

  return (
    <>
      <div className='locListWrapper'>
        {locResults &&
          locResults.map((loc) => {
            return (
              <SingleLocCard
                handleClick={() => handleClick(loc.id)}
                locDetails={loc}
                key={loc.id}
              />
            );
          })}
      </div>

      <div className='buttonWrapper'>
        <button onClick={prevPage}>Previous page</button>
        {locInfo && (
          <h2>
            Page {pageCounter} of {locInfo.pages}
          </h2>
        )}
        <button onClick={nextPage}>Next page</button>
      </div>

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            {clickedLoc && <SingleLoc clickedLocDetails={clickedLoc} />}
            <button className='close-modal' onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AllLoc;
