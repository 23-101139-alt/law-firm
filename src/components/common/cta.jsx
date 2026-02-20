import React from 'react';
import '../common/cta.css'

const CTA = (props) => {
    return ( 
        <button className='ctaa' type='props.type'>
           {props.title}
        </button>
     );
}
 
export default CTA;