import React from 'react';
import './form.css'
import CTA from './cta';

const Formm = () => {
    return ( 
        <form className='form'>
            <h2 className='form-title'>Contact Form:</h2>

            <fieldset className='container-input'>
                <fieldset className='fieldset'>
                    <h3 className='input-name'>Name:</h3>
                    <input className='input-form'></input>
                </fieldset>

                <fieldset className='fieldset'>
                    <h3 className='input-name'>Email:</h3>
                    <input className='input-form'></input>
                </fieldset>

                <fieldset className='fieldset'>
                    <h3 className='input-name'>Message:</h3>
                <textarea className='textareaa'></textarea>
                </fieldset>
            </fieldset>

            <CTA  title='Submit'  />
        </form>
     );
}
 
export default Formm;