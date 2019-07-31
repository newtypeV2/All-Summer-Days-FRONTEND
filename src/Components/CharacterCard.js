import React from 'react';
import {Card, Col} from 'react-bootstrap';

const CharacterCard = (props) => {
    
    return( 
      <Col>
        <Card style={{width: "15rem",color: "white",margin: "1rem", padding: "1rem"}} onClick={()=>props.onClickHandler(props.character)} bg={'dark'} variant={'dark'} >
            <Card.Img variant="top" src={props.character.avatar_available ? props.character.image_url : "https://via.placeholder.com/200"} />
            <Card.Body>
                <Card.Title>{props.character.firstname} {props.character.lastname}</Card.Title>
                  <ul>
                    <li>Class : {props.character.char_class.name}</li>
                    <li>Level : {props.character.level}</li>
                    <li>Max HP : {props.character.max_hp}</li>
                  </ul>
            </Card.Body>
           <Card.Footer>
           <small className="text-muted">{props.character.in_campaign ? `IN CAMPAIGN : ${props.character.campaigns[0].title}` : 'NOT IN CAMPAIGN'}</small>
           </Card.Footer>
        </Card>
      </Col>
        
    )
    
} 

export default CharacterCard