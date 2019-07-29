import React, {Component} from 'react'
import {Form, Col, Card, Row, Button} from 'react-bootstrap';
import AbilityScore from './AbilityScore'
class CharForm extends Component{
    state = {
        choices: [0, 15, 14, 13, 12, 10, 8],
        ClassName: {}, 
        abilityScore: 27,
        character: {
            firstName: "",
            lastName: "", 
            char_class_id: null, 
            level: 2,
            strength: 8,
            dexterity: 8, 
            constitution: 8, 
            intelligence: 8, 
            wisdom: 8,
            charisma: 8,
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
        let name = this.props.classList.filter(list => {if(list.name === event.target.value){return list}})
        this.setState({
          className: name[0],
          character: {
              ...this.state.character,
              char_class_id: name[0].id
          }
        
        })
      } 
   
    //   setScore = (event) => {
    //     let t = this
    //     let num = parseInt(event.target.value)
    //     let scores = this.state.choices.filter(choice => {return choice != event.target.value})
    //     let nuNum = this.state.abilityScore.length - num
    //     let obj = Object.keys(this.state.character)
    //     let newObj = obj.filter(key => {if(key === event.target.children[0].className){return key}else{}})
    //     let ability = newObj[0]
        
    //     debugger 
    //     this.setState({
    //     choices: scores, 
    //     //  abilityScore:  [...Array(nuNum).keys()],
    //      character: {
    //         ...this.state.character,
    //         [ability]: num   
    //      }
    //     })
    // }
         
       pointBuy = (cost, num, props) => {
        let obj = Object.keys(this.state.character)
        let name = obj.filter(key => {if(key === props.name){return key}else{}})
        if(this.state.abilityScore === 0){
            alert("You Have No More Points!")
        }else{
        this.setState({
             abilityScore: this.state.abilityScore - cost,
             character: {
                 ...this.state.character,
                 [name]: num + 1
             }
        })
    }
       } 
       
       pointCost = (event, props) => {
        let cost = 0
        let num = parseInt(event.target.value)
        if(num === 8){
           cost = 0
          return this.pointBuy(cost, num, props)}
        else if(num === 9){
          cost = 1
          return this.pointBuy(cost, num, props)
        }
        else if(num === 10){
           cost = 2
           return this.pointBuy(cost, num, props)
        }
        else if(num === 11){
           cost = 3
           return this.pointBuy(cost, num, props)
        }
        else if(num === 12){
          cost = 4
          return this.pointBuy(cost, num, props)
        }
        else if(num === 13){
          cost = 5
          return this.pointBuy(cost, num, props)
        }
        else if(num === 14){
          cost = 7
          return this.pointBuy(cost, num, props)
        }
        else if(num === 15){
         cost = 9
         return this.pointBuy(cost, num, props)
        }

        
        
       }
            
      

     render(){
 return (
     <div>

    <Form>
        <Row>
        <Col sm={3}>
    <Form.Group controlId="formHorizontalEmail">
    <Form.Label style={{color: 'white'}} >First Name</Form.Label>
    <Form.Control type="" placeholder="put name first here" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label style={{color: 'white'}} >Last Name</Form.Label>
    <Form.Control type="" placeholder="put name last here" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1" onChange={this.getClass}>
    <Form.Label style={{color: 'white'}} >Character Class</Form.Label>
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
    <Form.Label style={{color: 'white'}} >Level</Form.Label>
    <Form.Control as="select" >
      <option>2</option>
    </Form.Control>
  </Form.Group>
  <AbilityScore name={'strength'} abilityScore={this.state.abilityScore} score={this.state.character.strength} setScore={this.setScore} choice={this.state.choices} buy={this.pointCost}/>
  <AbilityScore name={'dexterity'} abilityScore={this.state.abilityScore} score={this.state.character.dexterity} setScore={this.setScore} choice={this.state.choices} buy={this.pointCost}/>
  <AbilityScore name={'constitution'}  abilityScore={this.state.abilityScore} score={this.state.character.constitution} setScore={this.setScore} choice={this.state.choices} buy={this.pointCost}/>
  <AbilityScore name={'intelligence'} abilityScore={this.state.abilityScore} score={this.state.character.intelligence} setScore={this.setScore} choice={this.state.choices} buy={this.pointCost}/>
  <AbilityScore name={'wisdom'}  abilityScore={this.state.abilityScore} score={this.state.character.wisdom} setScore={this.setScore} choice={this.state.choices} buy={this.pointCost}/>
  <AbilityScore name={'charisma'} abilityScore={this.state.abilityScore} score={this.state.character.charisma} setScore={this.setScore} choice={this.state.choices} buy={this.pointCost}/>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label style={{color: 'white'}} >Eye Color</Form.Label>
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
    <Form.Label style={{color: 'white'}} >Skin Color</Form.Label>
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
    <Form.Label style={{color: 'white'}} >Hair Color</Form.Label>
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
    <Form.Label style={{color: 'white'}} >Background</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label style={{color: 'white'}} >Alignment</Form.Label>
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
    <Form.Label style={{color: 'white'}} >Proficiencies</Form.Label>
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
      <Card.Title> Points Left: {this.state.abilityScore}</Card.Title>
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

