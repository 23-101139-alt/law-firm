import React from 'react';
import './faq.css'
import pic15 from '../../assets/pic15.png'
import { useState } from 'react';


const FAQss = (props) => {

        const [open, setOpen] = useState(false);

    return ( 

        <article className='faqbox'>
            <article className='subbox-faqs'>
                <h2 className='question'>{props.title}</h2>
                <figure className='img-container-sec4'>
                    <img src={pic15} alt='add'
                     onClick={() => setOpen(!open)} ></img>
                </figure>
            </article>
                        {open && (
                <p className='answer'>
                    {props.parag}
                </p>
            )}
            <div className='line-faqs'></div>
        </article>

     );
}
 
export default FAQss;