import React from 'react'
import './home.css'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from "../../navBar/navBar";
import CharBtn from "../../button/characters/charBtn";
import LocBtn from "../../button/locations/locBtn";
import Logo from "../../../logo.png"


function Home() {
    return (
            <div id="home">
                <img id="logo" src={Logo}/>
                
                <div className="content">
                 
            
                    <Link to="/allCharacters">
                        <CharBtn />
                    </Link>
                    <Link to="/allLocations">
                        <LocBtn />
                    </Link>
                    <h2>Description</h2>
                    <p> 
                        This characteropedia is based on the television show Rick and Morty. You will have access to hundreds of characters, images and locations. This characteropedia is filled with canonical information as seen in the TV show. Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without claim of ownership and belong to their respective owners.<br/><br/>
                        This API we used is open source and uses a BSD license.
                    </p>
                </div>
            </div>
    )
}

export default Home
