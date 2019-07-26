import React, {Component} from 'react';
import {Card, Col} from 'react-bootstrap';
const CharacterCard = (props) => {
    
    return( 
      <Col>
        <Card style={{width: "15rem"}}>
            <Card.Img variant="top" src="https://image.shutterstock.com/image-vector/default-placeholder-avatar-profile-on-260nw-490458475.jpg" />
            <Card.Body>
                <Card.Title>{props.character.firstname}</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
           <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
           </Card.Footer>
        </Card>
      </Col>
        
    )
    
} 

export default CharacterCard