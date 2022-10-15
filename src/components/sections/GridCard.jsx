import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://i.postimg.cc/02nw0ktr/Reserva.jpg" />
            <Card.Body>
              <Card.Title>Nuestra Historia</Card.Title>
              <Card.Text>
              
Nacimos con el objetivos de posicionarnos como tu mejor alternativa dentro de la gastronomía peruana.
Seguimos Trabajando para darte lo mejor
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;