import React from 'react';
import './form.css'
import CTA from './cta';
import { useState } from 'react';

const Formm = () => {

    const [name, setName]= useState('');
                const [email, setEmail]= useState ('');
    const [message, setMessage] =useState('');
      const [success, setSuccess] = useState('');

    const submitt =( event)=>{
            event.preventDefault();

 if (!name) return setSuccess('All fields are required!');
    if (!email) return setSuccess('All fields are required!');
    if (!email.includes('@')) return setSuccess(' Email is invalid');
    if (!message) return setSuccess('All fields are required!');
    if (message.length < 10) return setSuccess(' Message too short');




 setSuccess('Form submitted successfully!');
    setName('');
    setEmail('');
    setMessage('');
        setTimeout(() => setSuccess(''), 3000);
    };


let messageClass = '';

if (success) {
  if (
    success.includes('required') ||
    success.includes('invalid') ||
    success.includes('short')
  ) {
    messageClass = 'error';
  } else {
    messageClass = 'success';
  }
}


    return ( 
        <form className='form' onSubmit={submitt}>
            <h2 className='form-title'>Contact Form:</h2>

            <fieldset className='container-input'>
                <fieldset className='fieldset'>
                    <h3 className='input-name'>Name:</h3>
                    <input className='input-form'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    
                    ></input>
                </fieldset>

                <fieldset className='fieldset'>
                    <h3 className='input-name'>Email:</h3>
                    <input className='input-form'
                                            value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    
                    ></input>
                </fieldset>

                <fieldset className='fieldset'>
                    <h3 className='input-name'>Message:</h3>
                <textarea className='textareaa'
                value={message}
                        onChange={(event) => setMessage(event.target.value)}
                ></textarea>
                </fieldset>
            </fieldset>

            <CTA  title='Submit' type="submit" />

<div className={messageClass}>{success}</div>



        </form>
     );
}
 
export default Formm;