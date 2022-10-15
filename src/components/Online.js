import React from 'react';
import Delivery from './sections/Delivery'
import Container from 'react-bootstrap/Container';
import Footer from './sections/Footer';

const Online = () => {
    return (
        <main>
        <div className="sec__one">
               <h1> Delivery </h1>
        </div>
        <section>
            <Delivery />
        </section>
        <Container>
              <p> </p>
              <p> </p>
       </Container>
        <section>
        <Footer />
        </section>
        </main>
 )
}

export default Online
