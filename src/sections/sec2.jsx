import React from 'react';
import '../sections/sec2.css'
import Titlesection from '../components/common/title';
import Icontext from '../components/common/icontext';
import pic8 from '../assets/pic8.png'
import pic9 from '../assets/pic9.png'
import pic10 from '../assets/pic10.png'

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

                        <article className='icons-part'>
                            <Icontext icon1={pic8} title='Legal Integrity'
                            parag='Ethical and transparent in every case.'/>
                            <Icontext icon1={pic9} title='Proven Experience'
                            parag='Years of trusted legal practice.'/>
                            <Icontext icon1={pic10} title='Client Commitment'
                            parag='Focused on your best outcome.'/>
                        </article>


                    </article>
            </article>
        </section>
     );
}
 
export default Sec2;