import React from 'react';
import { useCharacters } from '../../../src/api/useData';
import './AllChars.css';
import { useState } from 'react';
import SingleChar from '../../components/SingleChar/SingleChar.js';
import SingleCharCard from '../../components/SingleChar/SingleCharCard.js';

const AllChars = () => {
  const [pageCounter, setPageCounter] = useState(1);
  const [modal, setModal] = useState(false);
  // const [ID, setID] = useState(null);
  const [clickedChar, setClickedChar] = useState(null);

  const { results: charResults, info: charInfo } = useCharacters(pageCounter);
  // const charResults = characters.results;
  // const charInfo = characters.info;
  console.log('results', charResults);
  console.log('info', charInfo);

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

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  // console.log(charResults);

  const handleClick = (id) => {
    // console.log('ID', ID);
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
            onClick={() => {
              toggleModal();
              // setID(null);
            }}
            className='overlay'
          ></div>
          <div className='modal-content'>
            {clickedChar && <SingleChar clickedCharDetails={clickedChar} />}
            <button
              className='close-modal'
              onClick={() => {
                toggleModal();
                // setID(null);
              }}
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
