import React, { useState } from 'react';

import SingleChar from '../../components/SingleChar/SingleChar.js';
import SingleCharCard from '../../components/SingleChar/SingleCharCard.js';
import { useCharacters } from '../../../src/api/useData';

import './AllChars.css';

const AllChars = () => {
  const [pageCounter, setPageCounter] = useState(1);
  const [modal, setModal] = useState(false);
  const [clickedChar, setClickedChar] = useState(null);

  const { results: charResults, info: charInfo } = useCharacters(pageCounter);

  const nextPage = () => {
    if (charInfo.pages > pageCounter) {
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
    setClickedChar(charResults?.find((char) => char.id === id));
    if (id) {
      toggleModal();
    }
  };

  return (
    <>
      <div className='charListWrapper'>
        {charResults &&
          charResults.map((char) => {
            return (
              <SingleCharCard
                handleClick={() => handleClick(char.id)}
                charDetails={char}
                key={char.id}
              />
            );
          })}
      </div>

      <div className='buttonWrapper'>
        <button onClick={prevPage}>Previous page</button>
        {charInfo && (
          <h2>
            Page {pageCounter} of {charInfo.pages}
          </h2>
        )}
        <button onClick={nextPage}>Next page</button>
      </div>

      {modal && (
        <div className='modal'>
          <div
            onClick={() => toggleModal()}
            className='overlay'
          ></div>
          <div className='modal-content'>
            {clickedChar && <SingleChar clickedCharDetails={clickedChar} />}
            <button
              className='close-modal'
              onClick={() => toggleModal()}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AllChars;
