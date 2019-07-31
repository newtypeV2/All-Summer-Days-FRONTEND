import React, {Component} from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
const DmCard = (props) => {
    return(
        <Card style={{width: "15rem",margin: "1rem", padding: "1rem"}} >
            
  <Card.Body>
    <Card.Title>{props.char.firstname}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>lvl: {props.char.level}</ListGroupItem>
    <ListGroupItem>strength: {props.char.strength}</ListGroupItem>
    <ListGroupItem>dexterity: {props.char.dexterity}</ListGroupItem>
    <ListGroupItem>constitution: {props.char.constitution}</ListGroupItem>
    <ListGroupItem>intelligence: {props.char.intelligence}</ListGroupItem>
    <ListGroupItem>wisdom: {props.char.wisdom}</ListGroupItem>
    <ListGroupItem>charisma: {props.char.charisma}</ListGroupItem>
    <ListGroupItem>hitpoints: {props.char.hitpoints}</ListGroupItem>
    <ListGroupItem>max hp: {props.char.max_hp}</ListGroupItem>
  </ListGroup>

</Card>
    )
}
export default DmCard