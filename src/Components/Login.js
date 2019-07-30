import React from "react"
import {Form, Button} from "react-bootstrap"
import {Redirect} from "react-router-dom"

const loginUrl = `http://${window.location.hostname}:5000/login`

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            loggedIn : false
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    loginHandler = (e) => {
        e.preventDefault();
        e.persist();
        const data = this.state
        fetch(loginUrl,{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(info => {
            console.log(info)
            if (info.authenticated === "true"){
                this.setState({
                    loggedIn : true
                })
                this.props.updateLoggedInUser(info.userinfo)
            }else{
                alert(info.message)
            }
        })
    }

    render(){
        console.log(this.props)
        return (
                 this.state.loggedIn ? <Redirect to="/characters" /> :
                <div className="loginDiv">
                    <Form>
                    <Form.Group controlId="formGroupUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" name="username" placeholder="Enter username" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.loginHandler} onSubmit={this.loginHandler}>Submit</Button>
                    </Form>
                </div>
            )
    }
}