import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item style={{height: '800px'}}>
        <img 
          className="d-block w-100 "
          src="./img/medved-s-dev.png"
          alt="First slide"
          style={{height: '800px'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

          <Link to="/form"><Button variant='primary'>Обратная связь</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '800px'}}>
        <img 
          className="d-block w-100" 
          src="./img/medved-s-dev2.png"
          alt="Second slide"
          style={{height: '800px'}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: '800px'}}>
        <img 
          className="d-block w-100 "
          src="./img/medved-s-dev3.png"
          alt="Third slide"
          style={{height: '800px'}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider