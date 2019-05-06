import React, {Component} from "react"
import logo from './logo.svg';

import {BrowserRouter, Route, Link} from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap';


import './App.css';
import Home from "./Pages/Home";
import Connect from "./Pages/Connect";

class App extends Component {
 render(){



  return(
    <BrowserRouter>
      <div className="App">
        <Navbar className="navBar" bg="dark" variant="dark">
          <Navbar.Brand href="/">MPR</Navbar.Brand>
          <Nav.Link href="/"> Home </Nav.Link>
          <Nav.Link href="/connect"> Connect </Nav.Link>
        </Navbar>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/connect" render={() => <Connect Connect ={Connect} /> }/> 
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
