import React from "react";
import { useState, useEffect } from "react";
import { useLocations } from "../../../src/api/useData";
import "./AllLoc.css";
import SingleLoc from "../../components/SingleLocation/SingleLoc";
import SingleLocCard from "../../components/SingleLocation/SingleLocCard";

const AllLoc = () => {
  const [pageCounter, setPageCounter] = useState(1);

  const locations = useLocations(pageCounter);
  const locResults = locations.results;
  const locInfo = locations.info;

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

  const [modal, setModal] = useState(false);
  const [ID, setID] = useState(0);
  const [clickedLoc, setClickedLoc] = useState();

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleToggleModal = () => {
    toggleModal();
    setID(0);
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/${ID}`)
      .then((response) => response.json())
      .then((data) => setClickedLoc(data))
      .then(() => {
        if (ID !== 0 && ID !== "null" && ID !== "undefined") {
          toggleModal();
        }
      });
  }, [ID]);

  return (
    <>
      <div className="locListWrapper">
        {locResults &&
          locResults.map((loc) => {
            return (
              <SingleLocCard
                handleClick={() => setID(loc.id)}
                locDetails={loc}
                key={loc.id}
              />
            );
          })}
      </div>

      <div className="buttonWrapper">
        <button onClick={prevPage}>Previous page</button>
        {locInfo && (
          <h2>
            Page {pageCounter} of {locInfo.pages}
          </h2>
        )}
        <button onClick={nextPage}>Next page</button>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={handleToggleModal} className="overlay"></div>
          <div className="modal-content">
            {clickedLoc && <SingleLoc clickedLocDetails={clickedLoc} />}
            <button className="close-modal" onClick={handleToggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AllLoc;
