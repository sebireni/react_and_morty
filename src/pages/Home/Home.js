import React from "react";
import "./Home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../../src/assets/images/logo.png";
import Button from "../../components/Button/Button";
import NavButton from "../../components/Button/NavButton";

function Home() {
  return (
    <div id="home">
      <img id="logo" src={Logo} />

      <div className="content">
        <NavButton route="/allCharacters" buttonText={"Characters"} />
        <NavButton route="/allLocations" buttonText={"Locations"} />
        {/* <Link to="/allCharacters">
          <Button buttonText="Characters" />
        </Link> */}
        {/* <Link to="/allLocations">
          <Button buttonText="Locations" />
        </Link> */}
        <h2>Description</h2>
        <p>
          This characteropedia is based on the television show Rick and Morty.
          You will have access to hundreds of characters, images and locations.
          This characteropedia is filled with canonical information as seen in
          the TV show. Rick and Morty is created by Justin Roiland and Dan
          Harmon for Adult Swim. The data and images are used without claim of
          ownership and belong to their respective owners.
          <br />
          <br />
          This API we used is open source and uses a BSD license.
        </p>
      </div>
    </div>
  );
}

export default Home;