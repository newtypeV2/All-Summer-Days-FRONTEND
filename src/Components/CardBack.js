import React from 'react';
import {Card, Col} from 'react-bootstrap';

const CardBack = (props) => {
    
    return( 
      <Col>
        <Card style={{width: "15rem",color: "white",margin: "1rem", padding: "1rem"}} onClick={props.clickHandler} bg={'dark'} variant={'dark'} className="cardback">
            {/* <Card.Img variant="top" src={props.character.avatar_available ? props.character.image_url : "https://via.placeholder.com/200"} /> */}
            <Card.Body>
                {/* <Card.Title>{props.character.firstname} {props.character.lastname}</Card.Title> */}
                  <ul>
                        <li>Strength: {props.character.strength}</li>
                        <li>Dexterity: {props.character.dexterity}</li>
                        <li>Constitution: {props.character.constitution}</li>
                        <li>Intelligence: {props.character.intelligence} </li>
                        <li>Wisdom: {props.character.wisdom}</li>
                        <li>Charisma: {props.character.charisma}</li>
                  </ul>
            </Card.Body>
        </Card>
      </Col>
        
    )
    
} 

export default CardBack