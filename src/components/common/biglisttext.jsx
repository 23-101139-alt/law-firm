import React from 'react';
import './biglisttext.css'


const Listheader = (props) => {
    return ( <nav className='listfootertitle'>
{props.title}
    </nav> );
}
 
export default Listheader;