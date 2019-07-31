import React, {Component} from 'react';
import CharacterContainer from './CharacterContainer'
import CharacterCardPreview from '../Components/CharacterCardPreview'
import CharForm from '../Components/CharForm'
import DmContainer from './DmContainer'
import NavBar from '../Components/Navibar'
import Login from '../Components/Login'
import Userview from '../Components/Userview'
import { Row, Col} from 'react-bootstrap'
import {Route,Redirect} from 'react-router-dom'

// const charUrl = `http://${window.location.hostname}:5000/characters`
const classUrl = `http://${window.location.hostname}:5000/class`

// console.log(window.location.hostname)


class MainContainer extends Component {
    state = {
        chosenCamp: {},
        allCharacters: [],
        selectedCharacter: {},
        classList: [],
        loggedInUser:{}
    }

    updateLoggedInUser = (user) => {
        this.setState({
            loggedInUser : user
        })
    }

    getProficiencyMod = (stat) => {
      if(stat===1){
          return -5
      }else if(stat>=2 && stat<=3){
          return -4
      }else if(stat>=4 && stat<=5){
          return -3
      }else if(stat>=6 && stat<=7){
          return -2
      }else if(stat>=8 && stat<=9){
          return -1
      }else if(stat>=10 && stat<=11){
          return 0
      }else if(stat>=12 && stat<=13){
          return 1
      }else if(stat>=14 && stat<=15){
          return 2
      }else if(stat>=16 && stat<=17){
          return 3
      }else if(stat>=18 && stat<=19){
          return 4
      }else if(stat>=20 && stat<=21){
          return 5
      }else if(stat>=22 && stat<=23){
          return 6
      }else if(stat>=24 && stat<=25){
          return 7
      }else if(stat>=26 && stat<=27){
          return 8
      }else if(stat>=28 && stat<=29){
          return 9
      }else{
          return 10
      }
  }

    componentDidMount(){
           fetch(classUrl)
        .then(resp => resp.json())
        .then(classes => 
          this.setState({
            classList: classes
           })
        )
    }

    deleteCharacter = () => {
        fetch(`http://${window.location.hostname}:5000/characters/${this.state.selectedCharacter.id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => this.updateAllCharacter(data))
   }

 
    // componentDidUpdate = () => {
    //     let userURL = `http://${window.location.hostname}:5000/users/${this.state.loggedInUser.id}`
    //     if(this.state.loggedInUser.id){
    //         fetch(userURL)
    //         .then(resp => resp.json())
    //         .then(userData => this.setState({
    //         allCharacters: userData.characters
    //         }))
    //     }
    // }

    setCharacters = (characters) => {
        this.setState({
            allCharacters : characters
        })
    }
    
    selectCharacter = (characterObj) => {
      this.setState({
        selectedCharacter : characterObj
      })
    }

    updateAllCharacter = (delCharacter) => {
        this.setState({
            allCharacters: this.state.allCharacters.filter(char => char.id !== delCharacter.id),
            selectedCharacter: {}
        })
    }

    addtoAllCharacters = (newCharacter) => {
        this.setState({
            allCharacters: [...this.state.allCharacters, newCharacter],
            redirectToCharPage : true
        })
    }

    setCamp = (camp) => {
        
        this.setState({
            chosenCamp: camp
        })
    }

    render(){
        // console.log(this.state.allCharacters)
      return(
            <div>
                <NavBar 
                    loggedInUser={this.state.loggedInUser}
                />
                <Row id="mainrow">
                        {this.state.loggedInUser.username ? <Redirect to="/characters"/> : <Redirect to="/login"/>}
                        {/* <Route exact path='/form' render={() => <CharForm/>}/> */}
                        <Route exact path="/login" render={() =>
                            <Col sm={12}>
                                <Login 
                                    updateLoggedInUser={this.updateLoggedInUser}
                                    setCharacters={this.setCharacters}
                                />
                            </Col>
                        }/>
                        <Route exact path="/stats" render={() =>
                            <Col sm={12}>
                                <Userview 
                                    getProficiencyMod={this.getProficiencyMod} 
                                    character={this.state.selectedCharacter}
                                />
                            </Col>
                        }/>
                        <Route exact path="/characters" render={() => 
                            <React.Fragment>
                                <Col sm={7}>
                                    <CharacterContainer 
                                        setCamp={this.setCamp}
                                        loggedInUser={this.state.loggedInUser}
                                        updateAllCharacter={this.updateAllCharacter}
                                        characters={this.state.allCharacters} 
                                        selectCharacter={this.selectCharacter}
                                        selectedCharacter={this.state.selectedCharacter}
                                    />
                                
                                
                               
                                </Col>
                                <Col sm={5}>

                                    {this.state.selectedCharacter.id ? 
                                        <CharacterCardPreview 
                                        character={this.state.selectedCharacter}
                                        getProficiencyMod={this.getProficiencyMod}
                                        showCharacter={this.showCharacter}
                                        deleteCharacter={this.deleteCharacter}
                                        /> 
                                        : 
                                        null}
                                </Col>
                            </React.Fragment>
                        }/>
                    
                        <Route exact path='/form' render={(props) => 
                            <Col sm={12}>
                                <CharForm
                                    routeProps={props} 
                                    newChar={this.addtoAllCharacters}
                                    redirectToCharPage={this.state.redirectToCharPage}
                                    classList={this.state.classList}
                                    loggedInUser={this.state.loggedInUser}
                                />
                            </Col>
                        }/>
                        {/* <Route exact path="/login" render={Login} />  */}
                    
                    <Route exact path='/campaigns' render={(props) => 
                        <Col sm={12}>
                            <DmContainer
                            camp={this.state.chosenCamp}
                            routeProps={props}
                            />
                        </Col>
                    
                    
                    }/>
                </Row>   
            </div>     
    ) 
  
    }
}

export default MainContainer