import React from 'react'
import {Navbar} from 'react-bootstrap'

const Navibar = () => {
    return(
          <Navbar bg={'dark'} variant={'dark'}>
              <Navbar.Brand href="#home">All Summer Days</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Signed in as: <a href="#login">Peter/Gian</a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
    )
}

export default Navibar