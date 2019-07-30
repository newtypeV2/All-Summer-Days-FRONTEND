import React, {Component} from 'react'
import {Form, Col, Card, Row, Button} from 'react-bootstrap';
import AbilityScore from './AbilityScore'
class CharForm extends Component{
    state = {
        chosen: [],
        skills: null,
        instr: null,  
        tools: null, 
        className: null, 
        skillNum: 0, 
        intrNum: 0, 
        toolNum: 0,
        abilityScore: 27,
        character: {
            firstname: "",
            lastname: "", 
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
            alignment: "",
            proficiency_ids: []  
        }
    }
        displayProf = () => {
         return this.state.chosen.map(choose => {
            return(
             <li>{choose}</li>
            )
          })
        }


       pointBuy = (cost, num, props) => {
        let obj = Object.keys(this.state.character)
        let name = obj.filter(key => {if(key === props.name){return key}else{return null}})
        if(this.state.abilityScore < cost){
            alert("You Have Do Not Have Enough Points!")
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
            
    getClass = (event) => {
      let name = this.props.classList.filter(list => {if(list.name === event.target.value){return list}else{return null}})
      let skill = name[0].choose_proficiencies[0]
      let instruments = name[0].choose_proficiencies[1] ? name[0].choose_proficiencies[1] : null
      let tools = name[0].choose_proficiencies[2] ? name[0].choose_proficiencies[2] : null
      let num1 = skill.slice(-1)[0].choose
      let num2 = instruments ? instruments.slice(-1)[0].choose : 0
      let num3 = tools ? tools.slice(-1)[0].choose : 0
      this.setState({
        skills: skill,
        instr: instruments,
        tools: tools, 
        skillNum: num1,
        instrNum: num2,
        toolNum: num3, 
        className: name[0],
        character: {
          ...this.state.character,
          hitpoints: parseInt(name[0].hit_die),
          max_hp: parseInt(name[0].hit_die),
          char_class_id: name[0].id
        } 
      })   
      
    } 

    setClassList = (event, theKey, theNum) =>{
      let keyMe = theKey[0]
      let newestName = this.state.className.choose_proficiencies.map(arr => {
        return arr.filter(prof => {if(prof.name === event.target.value){
          return prof
        }else{return null}
        })
      })   
      let newestArr = newestName.filter(arr => {return arr.length !== 0})
 
      if(this.state.character.proficiency_ids.includes(newestArr[0][0].id)){
        alert("Already Selected")
        }else{
          this.setState({
            chosen: [...this.state.chosen, event.target.value],
            [keyMe]: theNum,
            className: {...this.state.className},
            character: {
            ...this.state.character,
              proficiency_ids: [ newestArr[0][0].id, ...this.state.character.proficiency_ids]
            }
           })
        }  
     }
    
     displaySkillProfs = () =>{
      let keys = Object.keys(this.state)
      let theKey = keys.filter(key => {return key==='skillNum'})
      let theNum = this.state.skillNum - 1
       if(this.state.skillNum !== 0){
        
        return(<Form.Group controlId="exampleForm.ControlSelect2" onChange={(event) => this.setClassList(event, theKey, theNum)}>
            <Form.Label style={{color: 'white'}} >Skills to Choose: {this.state.skillNum}</Form.Label>
            <Form.Control as="select">
              <option>please choose</option>
          {this.state.className.choose_proficiencies[0].map(prof =>
            <option key={prof.id} value={prof.name}>{prof.name}</option>
          )}
          </Form.Control>
        </Form.Group>
        
        )}else{return }
        
      }

     displayInstProfs = () => {
      let keys = Object.keys(this.state)
      let theKey = keys.filter(key => {return key==='instrNum'})
      let theNum = this.state.instrNum - 1
      if(this.state.instrNum !== 0){
        return(<Form.Group controlId="exampleForm.ControlSelect2" onChange={(event) => this.setClassList(event, theKey, theNum)}>
            <Form.Label style={{color: 'white'}}>Intruments to Choose: {this.state.instrNum}</Form.Label>
            <Form.Control as="select">
            <option>please choose</option>
          {this.state.className.choose_proficiencies[1].map(prof =>
            <option key={prof.id} value={prof.name}>{prof.name}</option>
          )}
          </Form.Control>
        </Form.Group>
        
        )}else{return }
      
        
      }
    

    displayToolsProfs = () => {
      let keys = Object.keys(this.state)
      let theKey = keys.filter(key => {return key==='toolNum'})
      let theNum = this.state.toolNum - 1
      if(this.state.toolNum !== 0){
        return(<Form.Group controlId="exampleForm.ControlSelect2" onChange={(event) => this.setClassList(event, theKey, theNum)}>
            <Form.Label style={{color: 'white'}} >Tools to Choose: {this.state.toolNum}</Form.Label>
            <Form.Control as="select">
            <option>please choose</option>
          {this.state.className.choose_proficiencies[2].map(prof =>
            <option key={prof.id} value={prof.name}>{prof.name}</option>
          )}
          </Form.Control>
        </Form.Group>
        )}else{return}      
    }

    stating = (event) => {
      let num = parseInt(event.target.value) ? parseInt(event.target.value) : event.target.value
      let name = event.target.classList[0]
      this.setState({
        character: {
          ...this.state.character,
        [name]: num
        }
      })
    }

    submitForm = (event) => {
      event.preventDefault()
      let character = this.state.character
      const pProf = this.state.className.passive_proficiencies.map(prof => prof.id)
      const sThrows = this.state.className.saving_throws.map(prof => prof.id)
      character.proficiency_ids = [...character.proficiency_ids,...pProf,...sThrows]
      character.user_id = this.props.loggedInUser.id
      debugger
      fetch(`http://${window.location.hostname}:5000/characters`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            character
        })
      })
      .then(resp => resp.json())
      .then(data => console.log(data))
    }

     render(){
 return (
     <div>
    <Form onSubmit={this.submitForm}>
        <Row>
        <Col sm={3}>
    <Form.Group controlId="formHorizontalEmail">
    <Form.Label style={{color: 'white'}} >First Name</Form.Label>
    <Form.Control type="" placeholder="put name first here" className="firstname" onChange={this.stating}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label style={{color: 'white'}} >Last Name</Form.Label>
    <Form.Control type="" placeholder="put name last here" className="lastname" onChange={this.stating}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1" onChange={this.getClass}>
    <Form.Label style={{color: 'white'}} >Character Class</Form.Label>
    <Form.Control as="select">
      <option>Please Choose</option>
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
    <Form.Label style={{color: 'white'}} >Age</Form.Label>
    <Form.Control type="number" className="age" onChange={this.stating}>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label style={{color: 'white'}} >Height In Centimeters</Form.Label>
    <Form.Control type="number" className="height" onChange={this.stating}>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label style={{color: 'white'}} >Weight In Lbs</Form.Label>
    <Form.Control type="number" className="weight" onChange={this.stating}>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label style={{color: 'white'}} >Eye Color</Form.Label>
    <Form.Control as="select" className="eyes" onChange={this.stating}>
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
    <Form.Control as="select" className="skin" onChange={this.stating}>
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
    <Form.Label style={{color: 'black'}} className="hair" onChange={this.stating}>Hair Color</Form.Label>
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
    <Form.Label style={{color: 'black'}} >Background</Form.Label>
    <Form.Control as="textarea" rows="3" className="background" onChange={this.stating}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label style={{color: 'black'}} >Alignment</Form.Label>
    <Form.Control as="select" className='alignment' onChange={this.stating}>
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
  {this.state.className ? this.displaySkillProfs() : null}
  {this.state.className ? this.displayInstProfs() : null}
  {this.state.className ? this.displayToolsProfs() : null}
  <Button variant="primary" type="submit" style={{ width: '10rem' }}>
    Submit
  </Button>
  </Col>

  <Col sm={3}>
  <Card border="primary" style={{ width: '10rem' }}>
    <Card.Body>
      <Card.Title> Points Left: {this.state.abilityScore}</Card.Title>
    </Card.Body>
  </Card>
  <br></br>
  <Card border="primary" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> Chosen Proficiences:</Card.Title>
        <ul>
          {this.displayProf()}
        </ul>
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

