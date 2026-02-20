import React from 'react';
import './faq.css'
import pic15 from '../../assets/pic15.png'

const FAQss = () => {
    return ( 

        <article className='faqbox'>
            <article className='subbox-faqs'>
                <h2 className='question'>How can I schedule a 
                    consultation with a lawyer?</h2>
                <figure className='img-container-sec4'>
                    <img src={pic15} alt='add'></img>
                </figure>
            </article>
            <div className='line-faqs'></div>
        </article>

     );
}
 
export default FAQss;