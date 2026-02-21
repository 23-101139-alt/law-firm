import React from 'react';


const Navheader = (props) => {
    return (  
        <li >
             <a className='navheaderr' href={props.href}   onClick={props.onClick}  >
                {props.title}
            </a>
        </li>
    );
}
 
export default  Navheader;