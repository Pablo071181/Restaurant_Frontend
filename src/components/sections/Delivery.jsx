import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://i.postimg.cc/02nw0ktr/Reserva.jpg" />
            <Card.Body>
              <Card.Title>Nuestra Carta</Card.Title>
              <Card.Text>
              La mejor sazón, el mejor sabor, los mejores ingredientes
              </Card.Text>
              <Button variant="primary">Pídelo</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;