import React, {Component} from 'react';
import CharacterContainer from './CharacterContainer'
import CharacterCardPreview from '../Components/CharacterCardPreview'
import { Row, Col, Navbar} from 'react-bootstrap'
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
    
    selectCharacter = (characterObj) => {
      this.setState({
        selectedCharacter : characterObj
      })
    }



    render(){
        console.log(this.state.allCharacters)
        return(
<<<<<<< HEAD
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
=======
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
              <Col sm={7}>
                <CharacterContainer characters={this.state.allCharacters} selectCharacter={this.selectCharacter}/>
              </Col>
              <Col sm={5}>
                {this.state.selectedCharacter.id ? <CharacterCardPreview character={this.state.selectedCharacter}/> : null}
              </Col>
            </Row>   
          </div> 
          </div>
>>>>>>> 3c30f26d9f638a5cc8171b77e79464a2e09a25d9
        )  
    }
}

export default MainContainer