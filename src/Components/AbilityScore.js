import React from 'react'
import {Form, Button} from 'react-bootstrap';
const AbilityScore = (props) => {

  const cost = (num) => {
    
        if(num === 8){
          
          return  0}
        else if(num === 9){
          
          return 1
        }
        else if(num === 10){
           
           return  2} 

        else if(num === 11){
           return  3
           
        }
        else if(num === 12){
         return  4
          
        }
        else if(num === 13){
          return  5
          
        }
        else if(num === 14){
         return 7
          
        }
        else if(num === 15){
         return  9
         
        }

        
        
       }

    return(
       
        <Form.Group controlId="exampleForm.ControlSelect2" onChange={props.setScore} >
            
        <Form.Label style={{color: 'white'}}>{props.name}  
        
        <Button value={props.score} onClick={(event) => props.buy(event, props)}>+</Button>
        {" "} {" "}
        <span>Cost To Increase: {cost(props.score)}</span>
        
        </Form.Label>
        
        <Form.Control as="text">  
        
         <option className={props.name} value={props.score}>{props.score}</option> 
              
        </Form.Control>
       
      </Form.Group>
      
    
    )
}
export default AbilityScore 