import React, {Component} from 'react';
import CharacterContainer from './CharacterContainer'
import {Container, Row, Col, Navbar} from 'react-bootstrap'
const url = 'http://10.113.106.139:5000/characters'

class MainContainer extends Component {
    state = {
        allCharacters: [],
        selectedCharacter: {}
    }

    componentDidMount(){
        fetch(url)
        .then(resp => resp.json())
        .then(characters => this.setState({
            allCharacters: characters
        }))
    }
    




    render(){
        console.log(this.state.allCharacters)
        return(
        <div>
        <Navbar bg={'dark'} variant={'dark'}>
            <Navbar.Brand href="#home">All Summer Days</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Peter/Gian</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        <div>
          <Row>
            <Col sm={7}><CharacterContainer characters={this.state.allCharacters}/></Col>
            <Col sm={5}>2 of 2</Col>
          </Row>   
        </div> 
            
        </div>
        )  
    }
}

export default MainContainer