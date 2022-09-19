import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useCharacters, useLocations } from "./api/useData";
import Home from "./pages/Home/Home";
import AllChars from "./pages/AllChars/AllChars";
import AllLoc from "./pages/AllLocations/AllLoc";
import SingleChar from "./components/SingleChar/SingleChar";
import SingleLoc from "./components/SingleLocation/SingleLoc";
import NavBar from "./components/NavBar/NavBar";

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
