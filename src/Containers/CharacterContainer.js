import React, {Component} from 'react';
import CharacterCard from '../Components/CharacterCard'
import {Container, Row, Col} from 'react-bootstrap'
import Buttons from '../Components/Button'
// import CharForm from '../Components/CharForm'
import { Link } from 'react-router-dom';
import { link } from 'fs';


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


    render(){
       
        return(
           
            <div style={{marginTop: "2rem"}}>
           
                 <Row className="wrapper">
                     <Link to={'/form'}>
                     <Buttons clickHandler={this.newCharacter} title={"New Character"}/>
                     </Link>
                 </Row>
           
            <Container >
                <Row>
                    {this.displayCharacters()}
                </Row>  
            </Container>
            <Row className="wrapper">
                <Col>
                    <Link to={this.props.selectedCharacter.id ? '/sheet' : '/characters'}>
                    <Buttons clickHandler={this.props.showCharacter} title={"Show Character"}/>
                    </Link>
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