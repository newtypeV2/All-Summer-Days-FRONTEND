import React, {Component} from 'react';
import CharacterCard from '../Components/CharacterCard'
import {Container, Row, Col} from 'react-bootstrap'
class CharacterContainer extends Component {

displayCharacters = () => {
  return  this.props.characters.map(character => 
        <CharacterCard character={character}/> )
}



    render(){
        return(
            <Container fluid={true}>
            <Row><Col>Button</Col></Row>
                <Row>
                    {this.displayCharacters()}
                    {this.displayCharacters()}
                    
                </Row>  
            <Row><Col>Button</Col></Row>
            </Container>
        )
    }
}

export default CharacterContainer