import React from 'react';
import CampaignCharCard from './CampaignCharCard';
import {Row} from 'react-bootstrap';

class DMContainer extends React.Component{

    displayAllChararacter = () => this.props.campaign.characters.map(characterObj => <CampaignCharCard key={characterObj.id} character={characterObj}/>)
    

    render(){
        return (
            <Row>
                {this.props.campaign.id ? this.displayAllChararacter() : null}
            </Row>
        )
    }
}




export default DMContainer