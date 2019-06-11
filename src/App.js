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
          <Navbar.Brand className="headerNav" href="/"> Matthew Park Racing </Navbar.Brand>
          <Nav.Link className="appLinks" href="/"> Home </Nav.Link>
          <Nav.Link className="appLinks" href="/connect"> Connect </Nav.Link>
        </Navbar>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/connect" render={() => <Connect Connect ={Connect} /> }/> 
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
