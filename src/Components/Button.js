import React, {Component} from 'react'
import {Button} from 'react-bootstrap';
const Buttons = (props) => {
    return (
   
        <Button variant="primary" size="lg" onClick={props.clickHandler}>
            {props.title}
         </Button>
   
    )
}

export default Buttons 