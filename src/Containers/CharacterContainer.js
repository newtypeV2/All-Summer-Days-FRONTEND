import React, {Component} from 'react';
import CharacterCard from '../Components/CharacterCard'
import {Container, Row, Col} from 'react-bootstrap'
import Buttons from '../Components/Button'
class CharacterContainer extends Component {

displayCharacters = () => {
  return  this.props.characters.map(character => 
        <CharacterCard key={character.id} character={character} onClickHandler={this.props.selectCharacter}/> )
}

    newCharacter = () => {
        console.log("creating")
    }

    characterView = () => {
        console.log("showing character")
    }

    render(){
        return(
            <div>
            <Row className="wrapper"><Buttons clickHandler={this.newCharacter} title={"New Character"}/></Row>
            <Container>
                <Row>
                    {this.displayCharacters()}
                </Row>  
            </Container>
            <Row className="wrapper">
                <Col>
                    <Buttons clickHandler={this.characterView} title={"Show Character"}/>
                </Col>
                <Col className="wrapper">
                    <Buttons title={"Something"}/>
                </Col>
            </Row>  
            </div>
        )
    }
}

export default CharacterContainer