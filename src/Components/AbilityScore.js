import React from 'react'
import {Form, Button} from 'react-bootstrap';
const AbilityScore = (props) => {

    return(
       
        <Form.Group controlId="exampleForm.ControlSelect2" onChange={props.setScore} >
            
        <Form.Label>{props.name}  
        
        <Button value={props.score} onClick={(event) => props.buy(event, props)}>+</Button>
        </Form.Label>
        
        <Form.Control as="select">  
        
         <option className={props.name} value={props.score}>{props.score}</option> 
              
        </Form.Control>
       
      </Form.Group>
      
    
    )
}
export default AbilityScore 