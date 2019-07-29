import React from 'react';
import {Card, Col} from 'react-bootstrap';

const CharacterCard = (props) => {
    
    return( 
      <Col>
        <Card style={{width: "15rem",color: "white"}} onClick={()=>props.onClickHandler(props.character)} bg={'dark'} variant={'dark'} >
            <Card.Img variant="top" src={props.character.image_url} />
            <Card.Body>
                <Card.Title>{props.character.firstname} {props.character.lastname}</Card.Title>
                  <ul>
                    <li>Class : {props.character.char_class.name}</li>
                    <li>Level : {props.character.level}</li>
                    <li>Level : {props.character.max_hp}</li>
                  </ul>
            </Card.Body>
           <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
           </Card.Footer>
        </Card>
      </Col>
        
    )
    
} 

export default CharacterCard