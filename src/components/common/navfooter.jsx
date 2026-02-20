import React from 'react';
import './navfooter.css'


const Navfooter = (props) => {
    return ( 
        <li className='list-nav-footer'>{props.title}</li>
     );
}
 
export default Navfooter;