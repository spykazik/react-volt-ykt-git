import React, { Component } from 'react'
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar
} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contacts from '../pages/Contacts'
import Home from '../pages/Home'
import styled from 'styled-components'
import Calc from '../pages/calc/Calc'
import Calculator from "../pages/calc/Calculator";
import Editor from "../pages/calc/Editor/Editor";


export default function Header () {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark" fixed="top" >
                <Container >
                    <Navbar.Brand>
                        VOLT YAKUTIA
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responisive-navbar-nav" />
                    <Navbar.Collapse id="responisive-navbar-nav" >
                        <Nav className="ma-auto">
                            <Nav.Link href="/" > Главная </Nav.Link>
                            <Nav.Link href="/about" > О нас </Nav.Link>
                            <Nav.Link href="/contacts" > Контакты </Nav.Link>
                            <Nav.Link href="/blog" > Блог </Nav.Link>
                            <Nav.Link href="/calc" > Посчитать цену </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/calc" component={Calc} />
                    <Route exact path="/calc/Calculator" component={Calculator} />
                    <Route exact path="/calc/Editor" component={Editor} />
                </Switch>
            </Router>
         </>
    )
}

