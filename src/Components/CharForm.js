import React, {Component} from 'react'
import {Form, Col, Card, Row, Button} from 'react-bootstrap';
import AbilityScore from './AbilityScore'
class CharForm extends Component{
    state = {
        choices: [0, 15, 14, 13, 12, 10, 8],
        ClassName: {}, 
        abilityScore: [...Array(28).keys()],
        character: {
            firstName: "",
            lastName: "", 
            char_class_id: null, 
            level: 2,
            strength: 0,
            dexterity: 0, 
            constitution: 0, 
            intelligence: 0, 
            wisdom: 0,
            charisma: 0,
            hitpoints: 0,
            max_hp: 0,
            age: 0,
            height: 0,
            weight: 0,
            eyes: "",
            skin: "",
            hair: "",
            background: "",
            alignment: ""
        }
    }
     
    getClass = (event) => {
        let t = this
        debugger
        let name = this.props.classList.filter(list => {if(list.name === event.target.value){return list}})
        this.setState({
          className: name[0],
          character: {
              ...this.state.character,
              char_class_id: name[0].id
          }
        
        })
      } 
   
      setScore = (event) => {
        let t = this
        let num = parseInt(event.target.value)
        let scores = this.state.choices.filter(choice => {return choice != event.target.value})
        let nuNum = this.state.abilityScore.length - num
        let obj = Object.keys(this.state.character)
        let newObj = obj.filter(key => {if(key === event.target.children[0].className){return key}else{}})
        let ability = newObj[0]
        
        debugger 
        this.setState({
        choices: scores, 
        //  abilityScore:  [...Array(nuNum).keys()],
         character: {
            ...this.state.character,
            [ability]: num   
         }
        })
         
           
            
      }

     render(){
 return (
     <div>

    <Form>
        <Row>
        <Col sm={3}>
    <Form.Group controlId="formHorizontalEmail">
    <Form.Label >First Name</Form.Label>
    <Form.Control type="" placeholder="put name first here" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="" placeholder="put name last here" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1" onChange={this.getClass}>
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
  <AbilityScore name={'strength'} abilityScore={this.state.abilityScore} score={this.state.character.strength} setScore={this.setScore} choice={this.state.choices}/>
  <AbilityScore name={'dexterity'} abilityScore={this.state.abilityScore} score={this.state.character.dexterity} setScore={this.setScore} choice={this.state.choices}/>
  <AbilityScore name={'constitution'}  abilityScore={this.state.abilityScore} score={this.state.character.constitution} setScore={this.setScore} choice={this.state.choices}/>
  <AbilityScore name={'intelligence'} abilityScore={this.state.abilityScore} score={this.state.character.intelligence} setScore={this.setScore} choice={this.state.choices}/>
  <AbilityScore name={'wisdom'}  abilityScore={this.state.abilityScore} score={this.state.character.wisdom} setScore={this.setScore} choice={this.state.choices}/>
  <AbilityScore name={'charisma'} abilityScore={this.state.abilityScore} score={this.state.character.charisma} setScore={this.setScore} choice={this.state.choices}/>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Eye Color</Form.Label>
    <Form.Control as="select" >
      <option>Yellow</option>
      <option>Amber</option>
      <option>Brown</option>
      <option>Hazel</option>
      <option>Green</option>
      <option>Blue</option>
      <option>Gray</option>
      <option>Aqua</option>
      <option>Red</option>
      <option>Purple</option>
      <option>Pale Brown</option>
      <option>Pale Blue</option>
      <option>Pale Green</option>
      <option>Pale Gray</option>
      <option>Deep Blue</option>
      <option>Violet Red</option>
      <option>Orange</option>
      <option>Spring Green</option>
      <option>Sea Green</option>
      <option>Emerald Green</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Skin Color</Form.Label>
    <Form.Control as="select" >
    <option>Pale</option>
      <option>Fair</option>
      <option>Light</option>
      <option>Light Tan</option>
      <option>Tan</option>
      <option>Dark Tan</option>
      <option>Brown</option>
      <option>Dark Brown</option>
      <option>Black</option>
      <option>Gray</option>
      <option>White</option>
      <option>Gold</option>
      <option>Silver</option>
      <option>Bronze</option>
      <option>Red</option>
      <option>Orange</option>
      <option>Yellow</option>
      <option>Green</option>
      <option>Blue</option>
      <option>Purple</option>
      <option>Pale Yellow</option>
      <option>Dark Red</option>
      <option>Light Red</option>
      <option>Amber</option>
      <option>Olive</option>
      <option>Aqua</option>
      <option>Pale Brown</option>
      <option>Pale Blue</option>
      <option>Pale Green</option>
      <option>Pale Gray</option>
      <option>Deep Blue</option>
      <option>Violet Red</option>
      <option>Red Orange</option>
      <option>Spring Green</option>
      <option>Sea Green</option>
      <option>Emerald Green</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Hair Color</Form.Label>
    <Form.Control as="select" >
    <option>Black</option>
      <option>Gray</option>
      <option>Platinum</option>
      <option>White</option>
      <option>Dark Blonde</option>
      <option>Blonde</option>
      <option>Bleach Blonde</option>
      <option>Dark Redhead</option>
      <option>Redhead</option>
      <option>Light Redhead</option>
      <option>Brunette</option>
      <option>Auburn</option>
      <option>Yellow</option>
      <option>Amber</option>
      <option>Brown</option>
      <option>Hazel</option>
      <option>Green</option>
      <option>Blue</option>
      <option>Gray</option>
      <option>Aqua</option>
      <option>Red</option>
      <option>Purple</option>
      <option>Pale Brown</option>
      <option>Pale Blue</option>
      <option>Pale Green</option>
      <option>Pale Gray</option>
      <option>Deep Blue</option>
      <option>Violet Red</option>
      <option>Red Orange</option>
      <option>Spring Green</option>
      <option>Sea Green</option>
      <option>Emerald Green</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Background</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Alignment</Form.Label>
    <Form.Control as="select" >
      <option>Lawful Good</option>
      <option>Neutral Good </option>
      <option>Chaotic Good </option>
      <option>Lawful Neutral </option>
      <option>Chaotic Neutral </option>
      <option>Lawful Evil </option>
      <option>Neutral Evil </option>
      <option>Chaotic Evil</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Proficiencies</Form.Label>
    <Form.Control as="select">
      <option>{}</option>
      <option>{}</option>
      <option>{}</option>
      <option>{}</option>
      <option>{}</option>
      <option>{}</option>
      <option>{}</option>
    </Form.Control>
  </Form.Group>
  </Col>
  <Col sm={3}></Col>
  <Col sm={3}></Col>
  
  <Col sm={3}>
  <Card border="primary" style={{ width: '10rem' }}>
    <Card.Body>
      <Card.Title> Points Left: {this.state.abilityScore.length - 1}</Card.Title>
    </Card.Body>
  </Card>
  </Col>
  </Row>
  
</Form>

  </div>
 )
    }
}
export default CharForm 

