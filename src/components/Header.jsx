import React, {useState} from 'react'
import { Container, Nav, Navbar, Button, Modal, ModalTitle, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "../App.css"
import { AppContext } from '../App';



const Header = () => {
  const context = React.useContext(AppContext)
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
            <Button variant="primary" onClick={context.handleShow }>
            Войти
              </Button >
              <Button variant="primary" onClick={context.handleShow }>
            Регистрация
              </Button >
          </Nav>
        </Container>
      </Navbar>

      <Modal show={context.show} onHide={context.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Войти</Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Введите email"/>
            </Form.Group>

            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введите пароль"/>
            </Form.Group>

            <Form.Group controlId="fromBasicPassword">
              <Form.Check type="checkbox" label="Remember me"/>
            </Form.Group>

          </Form>
        </Modal.Body>
      </Modal.Header>
      
    </Modal>
    </div>

    

  )
}

export default Header