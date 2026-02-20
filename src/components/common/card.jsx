import React from 'react';
import '../common/card.css'


const Cardsec3 = (props) => {
    return ( 
        <article className='card-sec3'>
            <figure className='img-wrapper'>
                <img className='img-sec3'  src={props.img} alt='img'></img>
            </figure>
            <h2 className='header-title-sec3'>{props.title}</h2>
            <p className='para-title-sec3'>{props.para}</p>
        </article>
     );
}
 
export default Cardsec3;