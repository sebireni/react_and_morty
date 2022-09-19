import React from "react";
import { useCharacters } from "../../../src/api/useData";
import "./AllChars.css";
import { useState, useEffect } from "react";
import SingleChar from "../../components/SingleChar/SingleChar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleCharCard from "../../components/SingleCharCard.js";

function AllChars() {
  const [pageCounter, setPageCounter] = useState(1);

  const characters = useCharacters(pageCounter);
  const charResults = characters.results;
  const charInfo = characters.info;

  function nextPage() {
    if (charInfo.pages > pageCounter) {
      setPageCounter(pageCounter + 1);
    }
  }

  function prevPage() {
    if (pageCounter > 1) {
      setPageCounter(pageCounter - 1);
    }
  }

  const [modal, setModal] = useState(false);
  const [ID, setID] = useState();
  const [clickedChar, setClickedChar] = useState();

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  console.log(charResults);

  useEffect(() => {
    // fetch(`https://rickandmortyapi.com/api/character/${ID}`)
    //   .then((response) => response.json())
    //   .then((data) => setClickedChar(data))
    //   .then(() => {
    //     if (ID !== 0 && ID !== "null" && ID !== "undefined") {
    //       toggleModal();
    //     }
    //   });
    setClickedChar(charResults?.find((char) => ID === char.id));

    console.log(ID);
    if (ID != null) {
      toggleModal();
    }
  }, [ID]);

  return (
    <>
      <div className="charListWrapper">
        {charResults &&
          charResults.map((char) => {
            return (
              <SingleCharCard
                handleClick={() => setID(char.id)}
                charDetails={char}
              />
              //   <div onClick={() => setID(char.id)} className="charCard">
              //     <img className="cardImg" src={char.image} alt="" />
              //     <div className="detailWrapper">
              //       <h2 className="charID">#{char.id}</h2>
              //       <h2>{char.name}</h2>
              //       <h3>{char.species}</h3>
              //     </div>
              //   </div>
            );
          })}
      </div>

      <div className="buttonWrapper">
        <button onClick={prevPage}>Previous page</button>
        {charInfo && (
          <h2>
            Page {pageCounter} of {charInfo.pages}
          </h2>
        )}
        <button onClick={nextPage}>Next page</button>
      </div>

      {modal && (
        <div className="modal">
          <div
            onClick={() => {
              toggleModal();
              setID();
            }}
            className="overlay"
          ></div>
          <div className="modal-content">
            {clickedChar && <SingleChar clickedCharDetails={clickedChar} />}

            <button
              className="close-modal"
              onClick={() => {
                toggleModal();
                setID();
              }}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AllChars;
