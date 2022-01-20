import React from 'react'
import { useCharacters } from "../../../api/useData.js";
import './allChars.css'
import { useState, useEffect } from "react"
import SingleChar from '../singleChar/singleChar.js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function AllChars() {

    const [pageCounter, setPageCounter] = useState(1)

    const characters = useCharacters(pageCounter);
    const charResults = characters.results;
    const charInfo = characters.info;


    function nextPage() {

        if (charInfo.pages > pageCounter) {

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
    const [clickedChar, setClickedChar] = useState()

    const toggleModal = () => {
      setModal(!modal);

    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    };


    useEffect(() => {
        
        fetch(`https://rickandmortyapi.com/api/character/${ID}`)
        .then(response => response.json())
        .then(data => setClickedChar(data))
        .then(() => {if(ID !== 0 && ID !== "null" && ID !== "undefined"){
            toggleModal();
        }})
        
    }, [ID])

    return (
        <>
            <div className="charListWrapper">
                {charResults && charResults.map( char => {
                    return( 
                    
                        <div onClick={() => setID(char.id)} className="charCard">
                            <img className="cardImg" src={char.image} alt="" />
                            <div className="detailWrapper">
                                <h2 className="charID">#{char.id}</h2>
                                <h2>{char.name}</h2>
                                <h3>{char.species}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="buttonWrapper">
                <button onClick={prevPage} >Previous page</button>
                {charInfo &&
                    <h2>Page {pageCounter} of {charInfo.pages}</h2>}
                <button onClick={nextPage} >Next page</button>
            </div>

            {modal && (
                <div className="modal">
                    <div onClick={() => {toggleModal(); setID(0);}} className="overlay"></div>
                    <div className="modal-content">

                        <img src={clickedChar.image} alt={clickedChar.name} />
                        <div className="detWrapper">
                            <h2 className="modName">#{clickedChar.id} {clickedChar.name}</h2>
                            <h3 className="modStatus">Status: {clickedChar.status}</h3>
                            <h3 className="modSpec">Species: {clickedChar.species}</h3>
                            <h3 className="modGender">Gender: {clickedChar.gender}</h3>
                            
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

export default AllChars
