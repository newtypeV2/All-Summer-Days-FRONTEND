import React from 'react'
import CardFront from '../Components/CardFront'
import CardBack from '../Components/CardBack'

class CampaignCharCard extends React.Component {
    constructor(){
        super();
        this.state = {
            flipped : false
        }
    }

    flipCard = () => {
        this.setState({
            flipped : !this.state.flipped
        })
    }

    render(){
        return(
            <div>
                {this.state.flipped ? <CardBack character={this.props.character} clickHandler={this.flipCard}/> 
                : 
                <CardFront 
                    character={this.props.character} 
                    clickHandler={this.flipCard}
                    getProficiencyMod={this.props.getProficiencyMod} 
                /> }
            </div>
        )
    }
}

export default CampaignCharCard