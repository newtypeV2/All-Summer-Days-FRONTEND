import React, {Component} from 'react';
import CharacterCard from '../Components/CharacterCard'
class CharacterContainer extends Component {

displayCharacters = () => {
  return  this.props.characters.map(character => 
        <CharacterCard character={character}/> )
}



    render(){
        return(
        <div>
            <CharacterCard character={{firstname: "Joel"}}/>
            {this.displayCharacters()}
        </div>
        )
    }
}

export default CharacterContainer