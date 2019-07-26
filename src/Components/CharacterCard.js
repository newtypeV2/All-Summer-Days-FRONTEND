import React, {Component} from 'react';
import Card from 'react-bootstrap/Button';
const CharacterCard = (props) => {
    
        return(
            <div >
           <h1>{props.character.firstname}</h1>
          
          </div>
        )
    
} 

export default CharacterCard