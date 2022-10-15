import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CarouselFadeExample() {
  return (
    <Container>
      <Row>
      <Col>
    
    <Carousel fade>
      
      <Carousel.Item>
        <div>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/3JWb8YZP/Slider3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Delicia Italiana</h3>
          <p>Preparado con los mejores ingredientes</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/ncLNXvnS/Slider1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Parrillas</h3>
          <p>Preparado con las mejores carnes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/76DWwzBV/Slider2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Delicia Oriental</h3>
          <p>
            Los mejores sabores del Oriente
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
  );
}

export default CarouselFadeExample;