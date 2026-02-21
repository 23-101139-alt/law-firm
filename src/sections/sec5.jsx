import React from 'react';
import './sec5.css'
import Titlesection from '../components/common/title';
import Icontext from '../components/common/icontext';
import pic16 from '../assets/pic16.png'
import pic17 from '../assets/pic17.png'
import pic18 from '../assets/pic18.png'
import pic19 from '../assets/pic19.png'
import Formm from '../components/common/form';



const Sec5 = () => {
    return ( 
        <section className='sec5'  id='sec5'>
            <article className='container-sec5'>
                <article className='left-box-sec5'>
                    <Titlesection stylee= 'bigtitle' stylee2='smalltitle'
                    stylee3='big2title'
                    title='Contact Us' title2='Get in Touch With Our  Experts for Guidance' />

                    <article className='icons-part'>
                        <Icontext icon1={pic16} title='Phone Number:'
                           parag='+20 123 456 789'/>

                        <Icontext icon1={pic17} title='Email Address:'
                           parag=' info@Unity Legal.com'/>

                        <Icontext icon1={pic18} title='Office Address:'
                           parag='123 Legal Street, Cairo, Egypt'/>

                        <Icontext icon1={pic19} title='Office Hours:'
                           parag='Sun–Thu: 9:00 AM – 6:00 PM'/>
                    </article>

                </article>  

                <article className='right-box-sec5'>
                        <Formm />
                </article>


            </article>
        </section>
     );
}
 
export default Sec5;