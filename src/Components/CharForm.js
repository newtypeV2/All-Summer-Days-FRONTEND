import React from 'react'
import {Form} from 'react-bootstrap';

const CharForm = () => {
 return (
    <Form>
    <Form.Group controlId="formHorizontalEmail">
    <Form.Label column sm='2'>First Name</Form.Label>
    <Form.Control type="" placeholder="put name first here" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="" placeholder="put name last here" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Character Class</Form.Label>
    <Form.Control as="select">
      <option>Barbarian</option>
      <option>Bard</option>
      <option>Cleric</option>
      <option>Druid</option>
      <option>Fighter</option>
      <option>Monk</option>
      <option>Paladin</option>
      <option>Ranger</option>
      <option>Rogue</option>
      <option>Sorcerer</option>
      <option>Warlock</option>
      <option>Wizard</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Level</Form.Label>
    <Form.Control as="select" >
      <option>2</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Strength</Form.Label>
    <Form.Control as="select" >
      <option>{console.log('strength')}</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Dexterity</Form.Label>
    <Form.Control as="select" >
      <option>{console.log("dex")}</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Constitution</Form.Label>
    <Form.Control as="select" >
      <option>{console.log("const")}</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Intelligence</Form.Label>
    <Form.Control as="select" >
      <option>{console.log("Intelli")}</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example te</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>
 )
}
export default CharForm 