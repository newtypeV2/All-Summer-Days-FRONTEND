import React, {Component} from 'react';
import CharacterContainer from './CharacterContainer'
import CharacterCardPreview from '../Components/CharacterCardPreview'
import CharForm from '../Components/CharForm'
import NavBar from '../Components/Navibar'

import Userview from '../Components/Userview'
import { Row, Col} from 'react-bootstrap'
import {Route} from 'react-router-dom'

const charUrl = `http://${window.location.hostname}:5000/characters`
const classUrl = `http://${window.location.hostname}:5000/class`
console.log(window.location.hostname)


class MainContainer extends Component {
    state = {
        allCharacters: [],
        selectedCharacter: {},
        classList: []  
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
      fetch(charUrl)
        .then(resp => resp.json())
        .then(characters => this.setState({
            allCharacters: characters
        }))
       fetch(classUrl)
        .then(resp => resp.json())
        .then(classes => 
          this.setState({
            classList: classes
           })
        )
    }
    
    selectCharacter = (characterObj) => {
      this.setState({
        selectedCharacter : characterObj
      })
    }

    render(){
        
      return(
          <div>
            <NavBar />
            <Row id="mainrow">
            <Col sm={12}>
                  {/* <Route exact path='/form' render={() => <CharForm/>}/> */}
                  <Route exact path="/Sheet" render={() =>
                    <Userview 
                        getProficiencyMod={this.getProficiencyMod} 
                        character={this.state.selectedCharacter}
                    />
                  }/>

             </Col>
        <Route exact path="/Characters" render={() => 
            <React.Fragment>
            <Col sm={7}>
                <CharacterContainer 
                  characters={this.state.allCharacters} 
                  selectCharacter={this.selectCharacter}
                  selectedCharacter={this.state.selectedCharacter}
                />
              
              
              {/* <Route exact path="/login" render={Login} />  */}
              </Col>
            <Col sm={5}>

                  {this.state.selectedCharacter.id ? 
                    <CharacterCardPreview 
                      character={this.state.selectedCharacter}
                      getProficiencyMod={this.getProficiencyMod}
                      showCharacter={this.showCharacter}
                    /> 
                    : 
                    null}
            </Col>
            </React.Fragment>
        }/>
              <Col sm={12}>
                  <Route exact path='/form' render={() => <CharForm classList={this.state.classList}/>}/>
                  {/* <Route exact path="/login" render={Login} />  */}
             </Col>
            </Row>   

          </div> 
        
    ) 
  
    }
}

export default MainContainer