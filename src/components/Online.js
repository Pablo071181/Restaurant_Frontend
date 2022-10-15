import React from 'react';
import Delivery from './sections/Delivery'
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
        <section>
        <Footer />
        </section>
        </main>
 )
}

export default Online
