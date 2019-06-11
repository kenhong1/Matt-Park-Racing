import React from "react"  
// import RaceCar from "../Images/carClose.jpg"
// import RaceCarTwo from "../Images/photo2.jpg" 
// import RaceCarThree from "../Images/photo3.jpg"
import headshot from "../Images/mattHeadshot.jpg"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import photo1 from "../Images/photo1.jpeg"
import photo2 from "../Images/photo2.jpeg"
import photo3 from "../Images/photo3.jpeg"
import photo4 from "../Images/Nasa.jpeg"
import photo5 from "../Images/TfWorks.jpg"
import photo6 from "../Images/Koyorad.png"
import photo7 from "../Images/Reinharte.jpg"

// import { } from "@fortawesome/free-brands-svg-icons"
import {Jumbotron, Carousel, Caption, Image, Container, Row, Col, Card} from "react-bootstrap"



library.add()




const Home = () => {
   return(
      <div className="homeBox">
         <div className="jumbotron">
            <video className="video-background" preload="true" muted="true" autoplay="true" loop="true">
               <source src="example.mp4" type="video/mp4" />
            </video>
      <div className="container-fluid" id="content">
         <h1 className="display-3"> Video Goes Here</h1>
         <p className="lead">Sub Text</p>
         <a className="btn btn-primary btn-lg" href="#learnmore">Learn More</a>
      </div>
   </div>
<br /> 
      <div className="aboutMeBox"> 
         <Row>
            <Col>
               <h3> Picture 1 </h3>
               <img className="photo1" src={photo1} alt="Third slide"/>
            </Col>
            <Col>
               <h3> Picture 2 </h3>
               <img className="photo1" src={photo2} alt="Third slide"/>
            </Col>
            <Col>
               <h3> Picture 3 </h3>
               <img className="photo1" src={photo3} alt="Third slide"/> 
            </Col>
         </Row>
      </div>
<br /> 
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" stroke-width="0" fill="#FFBF00" points="0,0.6 0,1 10,1 10,0"></polygon></svg>
      <div className="certBox">
         <Row>
            <Col>
               <img className="photo2" src={photo4} alt="Third slide" /> 
               <img className="photo2" src={photo6} alt="third slide"/>
            </Col>
            <Col>
               <img className="photo2" src={photo5} alt="Third Slide" /> 
               <br  /> 
               
            </Col>
            <Col>
               <img className="photo2" src={photo7} alt="third slide" /> 
               
            </Col>
         </Row>
      </div>
<svg width="100%" viewBox="0 0 10 1"><polygon stroke="none" stroke-width="0" fill="#FFBF00" points="0,0 10,0 10,0.3 0,1"></polygon></svg>
<br /> 
<div className="mediaBox">
      <h3> Media </h3>

</div>      
</div>
   )
}

export default Home; 