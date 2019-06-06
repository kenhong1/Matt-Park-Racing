import React, {Component} from "react"
import {Col, Row} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faInstagram, faEnvelope, faFacebook)






class Connect extends Component{
   render(){
      return(
         <div className="connectBox">
            <h1> Connect With Me</h1>
<br /> 
            <Row>
               <Col>
               <FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', "facebook"]} />
                  <h2> Facebook Icon </h2>
               </Col>
               <Col> 
               <FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', "instagram"]} />
                  <h2> Instagram</h2>
               </Col>
               <Col>
               <FontAwesomeIcon className="fontAwe" size="4x" icon={['fas', "envelope"]} />
                  <h3> Email Icon </h3>
               </Col>
            </Row>
         </div>
      )
   }
}



export default Connect