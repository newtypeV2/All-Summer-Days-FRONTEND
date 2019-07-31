import React, {Component} from 'react';
import CharacterCard from '../Components/CharacterCard'
import {Container, Row} from 'react-bootstrap'
import Buttons from '../Components/Button'
// import CharForm from '../Components/CharForm'
import { Link } from 'react-router-dom';


class CharacterContainer extends Component {
    state = {
        checked: true
    }

    displayCharacters = () => {
    return  this.props.characters.map(character => 
            <CharacterCard key={character.id} character={character} onClickHandler={this.props.selectCharacter}/> )
    }

    render(){
       
        return(
           
            <div style={{marginTop: "2rem"}}>
           
                 <Row className="justify-content-lg-center">
                     <Link to={'/form'}>
                     <Buttons clickHandler={this.newCharacter} title={"New Character"}/>
                     </Link>
                 </Row>
           
            <Container >
                <Row>
                    {this.displayCharacters()}
                </Row>  
            </Container>
            
            </div>

        )
        
    }
}

export default CharacterContainer