import React from 'react';
import '../common/icontext.css'


const Icontext = (props) => {
    return ( 
        <article className='iconcontainer-sec2'>
            <div className='icon-container2'>
            <figure className='icon-container'>
                <img src={props.icon1} alt='icon'></img>
            </figure>
            </div>
            <article className='text-part-column'>
                <h2 className='title-icon'>{props.title}</h2>
                 <p className='para-icon'>{props.parag}</p>
            </article>
        </article>
     );
}
 
export default Icontext;