import React from "react";
import { useState, useEffect } from "react";
import { useLocations } from "../../../src/api/useData";
import "./AllLoc.css";
import SingleLoc from "../../components/SingleLocation/SingleLoc";

function AllLoc() {
  const [pageCounter, setPageCounter] = useState(1);

  const locations = useLocations(pageCounter);
  const locResults = locations.results;
  const locInfo = locations.info;

  function nextPage() {
    if (locInfo.pages > pageCounter) {
      setPageCounter(pageCounter + 1);
    }
  }

  function prevPage() {
    if (pageCounter > 1) {
      setPageCounter(pageCounter - 1);
    }
  }

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
              <div
                onClick={() => setID(loc.id)}
                className="locCard"
                key={loc.id}
              >
                <h2 className="locID">#{loc.id}</h2>
                <h1>{loc.name}</h1>
                <h3>{loc.type}</h3>
              </div>
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
}

export default AllLoc;
