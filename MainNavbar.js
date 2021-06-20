import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo.png'
import './componentStyles/MainNavbar.scss'

export default function MainNavbar() {
    return (
        <Navbar bg="darkbrown" className="justify-content-between">
            <Navbar.Brand>
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Beer Mug Logo"
                />{' '}
                Bartender
            </Navbar.Brand>
        </Navbar>
    )
}
