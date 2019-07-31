import React, {Component} from 'react';
import CharacterCard from '../Components/CharacterCard'
import {Container, Row, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import Buttons from '../Components/Button'
// import CharForm from '../Components/CharForm'
import { Link } from 'react-router-dom';


class CharacterContainer extends Component {
  

    displayCharacters = () => {
        
    return  this.props.characters.map(character => 
                <CharacterCard  
                    key={character.id} 
                    character={character} 
                    onClickHandler={this.props.selectCharacter}
                /> 
                )
            }
    

    
    displayDM = () => {
        
        if(this.props.loggedInUser.campaigns === undefined){return }
        else{ 
            if(this.props.loggedInUser.campaigns.length > 0){
                return <Card style={{ width: '18rem' }}>
                    
                    <Card.Body>
                        <Card.Title>Your Campaigns</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        { this.props.loggedInUser.campaigns.map(camp => {
                        return <Link to={"/campaigns"}><ListGroupItem key={camp.id} onClick={() => this.props.setCamp(camp)}>{camp.title}</ListGroupItem></Link>})}
                        
                    </ListGroup>
                    
                 </Card>
            }else{return } 
    }
}
        


    render(){
       
        return(
           
            <div style={{marginTop: "2rem"}}>
           
                 <Row className="justify-content-lg-center">
                     <Link to={'/form'}>
                     <Buttons clickHandler={this.newCharacter} title={"New Character"}/>
                     </Link>
                 </Row>
           
            <Container >
                <Row>
                    { this.displayCharacters()}
                </Row>  
            </Container>

            
            <Container >
                <Row>
                    {this.displayDM()}
                </Row>  
            </Container>
       
            
            </div>

        )
        
    }
}

export default CharacterContainer