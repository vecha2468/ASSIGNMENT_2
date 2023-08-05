import React,{ useState } from 'react';
import './App.css';
import  Login  from './Login';
import Home from './Home';
import Main from './Main';
import  Register  from './Register';
import Myprofile from './Myprofile';
import Single from './Single';
import Write from './Write';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route exact path="/"><Home /></Route>
      <Route path="/login">
        <Login />
        </Route>
      <Route path="/register">
        <Register/>
        </Route>
        <Route path="/Main">
        <Main/>
        </Route>
        <Route path="/Myprofile">
        <Myprofile/>
        </Route>
        <Route path="/Single">
        <Single/>
        </Route>
        <Route path="/Write">
        <Write/>
        </Route>
    </Router>
  );
}

export default App;
