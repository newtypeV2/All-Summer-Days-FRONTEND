import React, {Component} from 'react'
import DmCard from '../Components/DmCard'
import {Row, Col, Container} from 'react-bootstrap'
const campaignUrl = `http://${window.location.hostname}:5000/campaigns`
class DmContainer extends Component{
    state = {
        campaign: {}
    }
    componentDidMount(){
        fetch(`${campaignUrl}/${this.props.camp.id}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            campaign: data
        }))
    }
   
    getCard = () => {
        if(this.state.campaign.characters !== undefined){
       return this.state.campaign.characters.map(char => {
           return <DmCard key={char.id} char={char}/>
        })}
        else{return}
    }

    render(){
        return (
            <div>
            <Row>
                <Col>
                <h1 style={{color: 'white'}}>{this.state.campaign.title}</h1>
                
                 
                <Container>
                <Row> 
                {this.getCard()}
                </Row>
                </Container> 
                </Col>
            </Row>
            </div>
        )
    }
}

export default DmContainer