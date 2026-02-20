import React from 'react';
import '../sections/sec3.css'
import Titlesection from '../components/common/title';
import Cardsec3 from '../components/common/card';
import pic12 from '../assets/pic12.png'
import pic13 from '../assets/pic13.png'
import pic14 from '../assets/pic14.png'
import CTA from '../components/common/cta';

const Sec3 = () => {
    return ( 

        <section className='sec3'>
            <article className='container-sec3'>
                 <Titlesection  stylee= 'bigtitle2' 
                stylee2='smalltitle2'
                stylee3='big2title2'
                title='Services' 
                title2='Legal Services Tailored to Your Needs'/>
                

                <article className='container-cards-sec3'>
                    <Cardsec3 img={pic12} title='Corporate Law' 
                    para='Guiding businesses with contracts,
                     compliance, and corporate disputes.'/>

                     <Cardsec3 img={pic13} title='Family Law' 
                    para='Protecting your family’s rights in divorce,
                     custody, and related matters.'/>

                     <Cardsec3 img={pic14} title='Criminal Defense' 
                    para='Providing strong defense for criminal cases
                     to secure the best outcomes.'/>

                </article>

                <button className='cta-sec3'>
                    <CTA title='View All' />
                </button>



            </article>
        </section>
     );
}
 
export default Sec3;