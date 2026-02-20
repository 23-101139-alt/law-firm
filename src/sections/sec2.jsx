import React from 'react';
import '../sections/sec2.css'
import Titlesection from '../components/common/title';

const Sec2 = () => {
    return ( 
        <section className='sec2'>
            <article className='container-sec2'>
                    <article className='left-box-sec2'>
                        <article className='sub-left-box-sec2'>
                            <Titlesection stylee= 'bigtitle' stylee2='smalltitle'
                            stylee3='big2title'
                             title='About Us' title2='Your Trusted Legal Partners in Justice'/>
                            <p className='para-sec2'>We build lasting relationships with our 
                            clients by offering clear guidance, strong representation, 
                            and dependable legal support.</p>
                            
                        </article>



                    </article>
            </article>
        </section>
     );
}
 
export default Sec2;