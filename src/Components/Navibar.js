import React from 'react'
import {Navbar} from 'react-bootstrap'

const Navibar = (props) => {
    return(
          <Navbar bg={'dark'} variant={'dark'} className="navibar">
              <Navbar.Brand>All Summer Days</Navbar.Brand>
              <span className="navibar">by Gian Libunao and Peter Viss with consultations from Matthew Williams</span>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                {props.loggedInUser.username ? props.loggedInUser.username : "Login"} 
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
    )
}

export default Navibar