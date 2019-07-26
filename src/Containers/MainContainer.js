import React, {Component} from 'react';
import CharacterContainer from './CharacterContainer'
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
           <CharacterContainer characters={this.state.allCharacters}/>
        </div>
        )  
    }
}

export default MainContainer