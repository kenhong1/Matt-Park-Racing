import React from "react"  
import RaceCar from "../Images/carClose.jpg"
import RaceCarTwo from "../Images/photo2.jpg" 
import RaceCarThree from "../Images/photo3.jpg"

import {Jumbotron, Carousel, Caption, Item, Container} from "react-bootstrap"

const Home = () => {
   return(
      <div className="homeBox">
         <Jumbotron className="jumbotron" fluid>
            <Container >
               <h1 className="homeHeader"> Matthew Park Racing </h1>
               <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum consequatur, optio, id enim laborum voluptatum perferendis voluptates atque nemo libero tempore hic quis porro delectus aperiam tempora vitae repellendus debitis?
               </p>
            </Container>
         </Jumbotron>
<br /> 

      </div>
   )
}

export default Home; 