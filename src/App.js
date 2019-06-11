import React, {Component} from "react"
import logo from './logo.svg';
import {BrowserRouter, Route, Link} from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import Home from "./Pages/Home";
import Connect from "./Pages/Connect";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faEnvelope)


class App extends Component {
render(){



  return(
    <BrowserRouter>
      <div className="App">
        <Navbar className="navBar" bg="dark" variant="dark">
          <Navbar.Brand className="headerNav" href="/"> Matthew Park Racing </Navbar.Brand>
          <Nav.Link className="appLinks" href="/">
            <FontAwesomeIcon className="fontAwe" size="2x" icon="home" />  
          </Nav.Link>
          <Nav.Link className="appLinks" href="/connect"> 
            <FontAwesomeIcon className="fontAwe" size="2x" icon="envelope" />                   
          </Nav.Link>
        </Navbar>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/connect" render={() => <Connect Connect ={Connect} /> }/> 
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
