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
                    <FAQss title='How can I schedule
                     a consultation with a lawyer?' 
                     parag='                    You can schedule a consultation by contacting our office 
                    via phone, email, or through our online booking form.'
                     />

                    <FAQss title='What are your fees and payment options?' 
                     parag='  Our fees vary depending on the service. 
                     We accept payments via credit card, bank transfer, 
                     and online payment platforms.'
                     />

                    <FAQss title='How long does it usually take to resolve a case?' 
                     parag='  The duration of a case depends on its complexity,
                      but we strive to resolve matters as efficiently
                       as possible while ensuring the best outcome for our
                        clients.'
                     />

                    <FAQss title='How will I be updated on the progress of my case?' 
                     parag='We provide regular updates through email, phone calls,
                      or in-person meetings, keeping you informed at every step
                       of your case.'
                     />

                            <FAQss title='Can I speak directly with the attorney?' 
                     parag='Yes! You can schedule direct consultations with 
                     your attorney to discuss your case and get personalized 
                     guidance.'
                     />


                </article>
            </article>
        </section>
     );
}
 
export default Sec4;