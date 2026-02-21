import React from 'react';
import './navfooter.css'


const Navfooter = (props) => {
    return ( 
        <li >
            <a className='list-nav-footer'  href={props.href}   onClick={props.onClick}  >{props.title} </a>
            </li>







     );
}
 
export default Navfooter;