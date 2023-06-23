import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "../App.css"

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Navbar.Brand><Link to={'/'}>Ладушка</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to={'/'}>главное</Link></Nav.Link>
            <Nav.Link><Link to={'/favorites'}>избранное</Link></Nav.Link>
            <Nav.Link><Link to={'/cart'}>корзина</Link></Nav.Link>
            <Nav.Link><Link to={'/description'}>описание</Link></Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">
            <Link to={'/'}>Войти
              </Link></Button >
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header