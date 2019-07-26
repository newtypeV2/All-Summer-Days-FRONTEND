import React, {Component} from 'react';
import {Card} from 'react-bootstrap/';

const CharacterCardPreview = (props) => {

    const getProficiencyMod = (stat) => {
        if(stat===1){
            return -5
        }else if(stat>=2 && stat<=3){
            return -4
        }else if(stat>=4 && stat<=5){
            return -3
        }else if(stat>=6 && stat<=7){
            return -2
        }else if(stat>=8 && stat<=9){
            return -1
        }else if(stat>=10 && stat<=11){
            return 0
        }else if(stat>=12 && stat<=13){
            return 1
        }else if(stat>=14 && stat<=15){
            return 2
        }else if(stat>=16 && stat<=17){
            return 3
        }else if(stat>=18 && stat<=19){
            return 4
        }else if(stat>=20 && stat<=21){
            return 5
        }else if(stat>=22 && stat<=23){
            return 6
        }else if(stat>=24 && stat<=25){
            return 7
        }else if(stat>=26 && stat<=27){
            return 8
        }else if(stat>=28 && stat<=29){
            return 9
        }else{
            return 10
        }
    }
    
        return(
            <Card style={{width: "24rem"}}>
            <Card.Img variant="top" src="https://i.imgur.com/Eub38zZ.gif" />
            <Card.Body>
                <Card.Title>{props.character.firstname} {props.character.lastname}</Card.Title>
                <Card.Text>
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
                                <li>AC: {10+getProficiencyMod(props.character.dexterity)}</li> 
                                </ul>
                            </div>
                      </div>
                  </div>
                </Card.Text>
            </Card.Body>
           <Card.Footer>
            <small className="text-muted">NOT IN CAMPAIGN</small>
           </Card.Footer>
        </Card>
        )
    
} 

export default CharacterCardPreview