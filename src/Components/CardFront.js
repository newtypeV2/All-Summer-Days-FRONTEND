import React from 'react';
import {Card, Col} from 'react-bootstrap';
import {defaultImg} from '../constants'

const CardFront = (props) => {
    
    return( 
      <Col>
        <Card style={{width: "15rem",color: "white",margin: "1rem", padding: "1rem"}} onClick={props.clickHandler} bg={'dark'} variant={'dark'} className="cardfront">
        <Card.Img variant="top" src={ props.character.avatar_available ? props.character.image_url : props.character.img_url === null ? defaultImg : props.character.img_url } />
            <Card.Body>
                <Card.Title>{props.character.firstname} {props.character.lastname}</Card.Title>
                  <ul>
                    <li>Class : {props.character.char_class.name}</li>
                    <li>Level : {props.character.level}</li>
                    <li>Max HP : {props.character.max_hp}</li>
                    <li>Current HP: {props.character.hitpoints}</li>
                    <li>AC: {10+props.getProficiencyMod(props.character.dexterity)}</li> 
                  </ul>
            </Card.Body>
        </Card>
      </Col>
        
    )
    
} 

export default CardFront