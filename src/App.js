import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AllChars from './pages/AllChars/AllChars';
import AllLoc from './pages/AllLocations/AllLoc';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/allCharacters' component={AllChars} />
        <Route exact path='/allLocations' component={AllLoc} />
      </Switch>
    </Router>
  );
}

export default App;
