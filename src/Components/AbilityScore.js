import React from 'react'
import {Form, Button} from 'react-bootstrap';
const AbilityScore = (props) => {

    return(
       
        <Form.Group controlId="exampleForm.ControlSelect2" onChange={props.setScore} >
        <Form.Label>{props.name}</Form.Label>
        
        <Button>+</Button><Form.Control as="select" placeholder="please choose">  
        
        {props.score ? <option className={props.name} value={props.score}>{props.score}</option> :
              
            props.choice.map((num, i) => 
           
            <option key={i} className={props.name} value={num} placeholder="please choose">{num}</option>)}
            
        </Form.Control>
       
      </Form.Group>
      
    
    )
}
export default AbilityScore 