import React from 'react';
import CampaignCharCard from './CampaignCharCard';
import {Row} from 'react-bootstrap';

class DMContainer extends React.Component{

    displayAllChararacter = () => this.props.campaign.characters.map(characterObj => <CampaignCharCard 
            key={characterObj.id} 
            character={characterObj}
            getProficiencyMod={this.props.getProficiencyMod} 
        />)
    

    render(){
        return (
            <Row className="justify-content-lg-center">
                {this.props.campaign.id ? this.displayAllChararacter() : null}
            </Row>
        )
    }
}




export default DMContainer