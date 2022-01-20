import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useCharacters, useLocations } from "./api/useData";
import Home from "./components/pages/home/home";
import AllChars from "./components/pages/allChars/allChars"
import AllLoc from "./components/pages/allLocations/allLoc";
import SingleChar from "./components/pages/singleChar/singleChar";
import SingleLoc from "./components/pages/singleLocation/singleLoc";
import NavBar from "./components/navBar/navBar";


function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allCharacters" component={AllChars} />
          <Route exact path="/allLocations" component={AllLoc} />
          <Route exact path="/singleChar" component={SingleChar} />
          <Route exact path="/singleLocation" component={SingleLoc} />
        </Switch>
      </Router>
    );
}

export default App;
