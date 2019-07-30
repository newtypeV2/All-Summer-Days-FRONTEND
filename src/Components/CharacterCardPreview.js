import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import Buttons from '../Components/Button';
import { Link } from 'react-router-dom';

const CharacterCardPreview = (props) => {

        return(
            <div>
            <Card style={{width: "24rem",color: "white", marginTop: "3.7rem", marginLeft: "10rem", padding: "1rem"}}bg={'dark'} variant={'dark'}>
            <Card.Img variant="top" src={props.character.avatar_available ? props.character.image_url : "https://via.placeholder.com/200"} />
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
        <Row  className="justify-content-lg-center"   >
            <div className="cardPreview">
                <Link to="/stats">
                        <Buttons clickHandler={props.showCharacter} title={"Show Character"}/>
                </Link>
            </div>
            <div className="cardPreview">
                        <Buttons title={"Delete"} clickHandler={props.deleteCharacter}/>
            </div>  
                    
        </Row>  
        </div>
        )
    
} 

export default CharacterCardPreview