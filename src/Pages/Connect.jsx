import React, {Component} from "react"
import {Col, Row} from "react-bootstrap"


class Connect extends Component{
   render(){
      return(
         <div className="connectBox">
            <h1> Connect With Me</h1>
<br /> 
            <Row>
               <Col>
                  <h2> Facebook Icon </h2>
               </Col>
               <Col> 
                  <h2> Instagram Icon </h2>
               </Col>
               <Col>
                  <h3> Email Icon </h3>
               </Col>
            </Row>
         </div>
      )
   }
}



export default Connect