import React from 'react';
import './sec4.css'
import Titlesection from '../components/common/title';
import FAQss from '../components/common/faq';


const Sec4 = () => {
    return ( 
        <section className='sec4'>
            <article className='container-sec4'>
                <article className='title-container-sec4'>
                    <Titlesection stylee= 'bigtitle' stylee2='smalltitle'
                    stylee3='big2title'
                    title='FAQs' title2='Frequently Asked Questions About Our Legal Services' />
                </article>
                
                <article className='faqs-big-container-sec4'>
                    <FAQss />
                </article>
            </article>
        </section>
     );
}
 
export default Sec4;