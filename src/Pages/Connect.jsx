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
               <a href="https://www.facebook.com/matthewparkracing/"><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', "facebook"]} /></a>
               </Col>
               <Col> 
               <a href="https://www.instagram.com/matthewparkracing/"><FontAwesomeIcon className="fontAwe" size="4x" icon={['fab', "instagram"]} /></a>
               </Col>
               <Col>
               <FontAwesomeIcon className="fontAwe" size="4x" icon={['fas', "envelope"]} />
               </Col>
            </Row>
         </div>
      )
   }
}



export default Connect