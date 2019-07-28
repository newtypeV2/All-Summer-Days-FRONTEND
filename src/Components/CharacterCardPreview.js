import React from 'react';
import {Card} from 'react-bootstrap/';

const CharacterCardPreview = (props) => {

        return(
            <Card style={{width: "24rem"}}>
            <Card.Img variant="top" src="https://i.imgur.com/Eub38zZ.gif" />
            <Card.Body>
                <Card.Title>{props.character.firstname} {props.character.lastname}</Card.Title>
                
                  <div>
                      <div className="row">
                          <div className="col">
                            STATS
                          </div>
                      </div>
                      <div className="row">
                          <div className="col">
                                <ul>
                                    <li>Strength: {props.character.strength}</li>
                                    <li>Dexterity: {props.character.dexterity}</li>
                                    <li>Constitution: {props.character.constitution}</li>
                                    <li>Intelligence: {props.character.intelligence} </li>
                                    <li>Wisdom: {props.character.wisdom}</li>
                                    <li>Charisma: {props.character.charisma}</li>
                                </ul>
                                <ul>
                                <li>MAX HP: {props.character.strength}</li>
                                {/* Revisit later on to be dynamic */}
                                <li>AC: {10+props.getProficiencyMod(props.character.dexterity)}</li> 
                                </ul>
                            </div>
                      </div>
                  </div>
                
            </Card.Body>
           <Card.Footer>
            <small className="text-muted">NOT IN CAMPAIGN</small>
           </Card.Footer>
        </Card>
        )
    
} 

export default CharacterCardPreview