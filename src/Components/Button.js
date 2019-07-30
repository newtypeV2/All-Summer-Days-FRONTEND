import React from 'react'
import {Button} from 'react-bootstrap';
const Buttons = (props) => {
    return (
   
        <Button variant="primary" size="sm" onClick={props.clickHandler}>
            {props.title}
         </Button>
   
    )
}

export default Buttons 