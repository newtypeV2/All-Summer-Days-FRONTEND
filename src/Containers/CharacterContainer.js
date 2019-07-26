import React, {Component} from 'react';
import CharacterCard from '../Components/CharacterCard'
import {Container, Row, Col} from 'react-bootstrap'
import Buttons from '../Components/Button'
import CharForm from '../Components/CharForm'
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
  import { Link } from 'react-router-dom';
class CharacterContainer extends Component {
    state = {
        checked: true
    }

displayCharacters = () => {
  return  this.props.characters.map(character => 
        <CharacterCard key={character.id} character={character} onClickHandler={this.props.selectCharacter}/> )
}

    newCharacter = (event) => {
     
       
       
    }

    characterView = () => {
        console.log("showing character")
    }

    render(){
       
        return(
           
            <div>
           
                 <Row className="wrapper">
                     <Link to={'/form'}>
                     <Buttons clickHandler={this.newCharacter} title={"New Character"}/>
                     </Link>
                 </Row>
           
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