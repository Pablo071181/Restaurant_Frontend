import React from 'react';
import Form from 'react-bootstrap/Form';
import Footer from './sections/Footer';
import ButtonContact from './sections/ButtonContact';

const Offline = () => {
    return (
        <main>
        <Form class="d-grid gap-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Déjanos tu correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombres</Form.Label>
        <Form.Control type="text" placeholder="Nombres" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Acepta Condiciones" />
      </Form.Group>
      <ButtonContact />
    </Form>
        <section>
        <Footer />
        </section>
        </main>
 )
}

export default Offline
