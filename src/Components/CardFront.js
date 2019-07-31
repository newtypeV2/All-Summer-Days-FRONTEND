import React from 'react';
import {Card, Col} from 'react-bootstrap';

const CardFront = (props) => {
    
    return( 
      <Col>
        <Card style={{width: "15rem",color: "white",margin: "1rem", padding: "1rem"}} onClick={props.clickHandler} bg={'dark'} variant={'dark'} >
            <Card.Img variant="top" src={props.character.avatar_available ? props.character.image_url : "https://via.placeholder.com/200"} />
            <Card.Body>
                <Card.Title>{props.character.firstname} {props.character.lastname}</Card.Title>
                  <ul>
                    <li>Class : {props.character.char_class.name}</li>
                    <li>Level : {props.character.level}</li>
                    <li>Max HP : {props.character.max_hp}</li>
                  </ul>
            </Card.Body>
        </Card>
      </Col>
        
    )
    
} 

export default CardFront