import React from 'react'
import { useLocations } from '../../../api/useData'
import './allLoc.css'
import { useState, useEffect } from "react"

function AllLoc() {

    const [pageCounter, setPageCounter] = useState(1)

    const locations = useLocations(pageCounter)
    const locResults = locations.results;
    const locInfo = locations.info;

    function nextPage() {

        if (locInfo.pages > pageCounter) {

            setPageCounter(pageCounter + 1)
        }
    }

    function prevPage() {

        if (pageCounter > 1){
            
            setPageCounter(pageCounter - 1)
        }
    }

    const [modal, setModal] = useState(false);
    const [ID, setID] = useState(0);
    const [clickedLoc, setClickedLoc] = useState()

    let toggleModal = () => {
        
            setModal(!modal);
    
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    };


    useEffect(() => {
        
        fetch(`https://rickandmortyapi.com/api/location/${ID}`)
        .then(response => response.json())
        .then(data => setClickedLoc(data))
        .then(() => {if(ID !== 0 && ID !== "null" && ID !== "undefined"){
            toggleModal();
        }})
        
    }, [ID])

    return (
        <>
            <div className="locListWrapper">
                {locResults && locResults.map( loc => {
                    return( 
                    <div onClick={() => setID(loc.id)} className="locCard">
                            <h2 className="locID">#{loc.id}</h2>
                            <h1>{loc.name}</h1>
                            <h3>{loc.type}</h3>
                    </div>);
                })}
            </div>

            <div className="buttonWrapper">
                <button onClick={prevPage} >Previous page</button>
                {locInfo &&
                    <h2>Page {pageCounter} of {locInfo.pages}</h2>
                }
                <button onClick={nextPage} >Next page</button>
            </div>

            {modal && (
                <div className="modal">
                    <div onClick={() => {toggleModal(); setID(0);}} className="overlay"></div>
                    <div className="modal-content">

                        {/* <img src={clickedLoc.image} alt={clickedLoc.name} /> */}
                        <div className="detWrapper">
                            <h2 className="modName">#{clickedLoc.id} {clickedLoc.name}</h2>
                            <h3 className="modStatus">Type: {clickedLoc.type}</h3>
                            <h3 className="modSpec">Dimension: {clickedLoc.dimension}</h3>
                            {/* <h3 className="modGender">Residents: {clickedLoc.residents}</h3> */}
                            
                        </div>
                        
                        <button className="close-modal" onClick={() => {toggleModal(); setID(0);}}>
                            X
                        </button>
                        
                    </div>
                </div>
            )}
        </>
    )
}

export default AllLoc
