import React, {Component} from 'react';
import CharacterCard from '../Components/CharacterCard'
import {Container, Row, Col} from 'react-bootstrap'
class CharacterContainer extends Component {

displayCharacters = () => {
  return  this.props.characters.map(character => 
        <CharacterCard character={character} onClickHandler={this.props.selectCharacter}/> )
}

    render(){
        return(
            <Container>
            <Row>Button</Row>
                <Row>
                    {this.displayCharacters()}
                </Row>  
            <Row>Button</Row>
            </Container>
        )
    }
}

export default CharacterContainer