import React from 'react'
import {Form, Button} from 'react-bootstrap';
const AbilityScore = (props) => {

  const cost = (num) => {
        let cost = 0
        if(num === 8){
          
          return cost = 0}
        else if(num === 9){
          
          return cost = 1
        }
        else if(num === 10){
           
           return cost = 2} 

        else if(num === 11){
           return cost = 3
           
        }
        else if(num === 12){
         return cost = 4
          
        }
        else if(num === 13){
          return cost = 5
          
        }
        else if(num === 14){
         return cost = 7
          
        }
        else if(num === 15){
         return cost = 9
         
        }

        
        
       }

    return(
       
        <Form.Group controlId="exampleForm.ControlSelect2" onChange={props.setScore} >
            
        <Form.Label style={{color: 'white'}}>{props.name}  
        
        <Button value={props.score} onClick={(event) => props.buy(event, props)}>+</Button>
        {" "} {" "}
        <span>Cost To Increase: {cost(props.score)}</span>
        
        </Form.Label>
        
        <Form.Control as="select">  
        
         <option className={props.name} value={props.score}>{props.score}</option> 
              
        </Form.Control>
       
      </Form.Group>
      
    
    )
}
export default AbilityScore 