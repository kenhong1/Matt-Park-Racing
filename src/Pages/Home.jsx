import React from "react"  
import RaceCar from "../Images/carClose.jpg"
import RaceCarTwo from "../Images/photo2.jpg" 
import RaceCarThree from "../Images/photo3.jpg"
import headshot from "../Images/mattHeadshot.jpg"


import {Jumbotron, Carousel, Caption, Image, Container, Row, Col, Card} from "react-bootstrap"

const Home = () => {
   return(
      <div className="homeBox">
         <Jumbotron className="jumbotron" fluid>
            <Container className="containerHomeBox">
            
            </Container>
         </Jumbotron>
<br /> 
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" strokeWidth="0" fill="#2274A5" points="0,0.6 0,1 10,1 10,0"></polygon></svg> 
      <div className="aboutMeBox"> 
         <Row> 
            <Col> 
               <Image className="headShot" src={headshot} thumbnail/>
            </Col>
            <Col>
            <h3 className="header"> Matt Park </h3>
               <p> Bio Goes Here </p>
            </Col>
         </Row>
      </div>
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" strokeWidth="0" fill="#2274A5" points="0,0 10,0 10,0.3 0,1"></polygon></svg>
<br /> 
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" stroke-width="0" fill="#FFBF00" points="0,0.6 0,1 10,1 10,0"></polygon></svg>
      <div className="certBox">
         <Row>
            <Col>
               <h1 className="header"> NASA Driver </h1>
            </Col>
            <Col>
               <h1 className="header"> NASA ST4/TT4 Driver </h1> 
            </Col>
            <Col>
               <h1 className="header"> Gridlife Time Attack </h1> 
            </Col>
         </Row>
      </div>
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" stroke-width="0" fill="#FFBF00" points="0,0 10,0 10,0.3 0,1"></polygon></svg>

<br /> 
      </div>
   )
}

export default Home; 