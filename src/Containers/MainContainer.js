import React, {Component} from 'react';
import CharacterContainer from './CharacterContainer'
import CharacterCardPreview from '../Components/CharacterCardPreview'
import CharForm from '../Components/CharForm'
import { Row, Col, Navbar} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

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
            <Router>
                
              <Route exact path="/Characters" render={() => <CharacterContainer characters={this.state.allCharacters} selectCharacter={this.selectCharacter}/>} />
              
              {/* <Route exact path="/login" render={Login} />  */}
                
            </Router>
              </Col>
                <Col sm={5}>
                  {this.state.selectedCharacter.id ? <CharacterCardPreview character={this.state.selectedCharacter}/> : null}
                </Col>
              <Col sm={12}>

                <Router>
                  <Route exact path='/form' render={() => <CharForm/>}/>
                  {/* <Route exact path="/login" render={Login} />  */}
                </Router>
             </Col>
            </Row>   

          </div> 
          </div>
                
        
    ) 
  
    }
}

export default MainContainer