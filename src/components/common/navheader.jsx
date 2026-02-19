import React from 'react';


const Navheader = (props) => {
    return (  
        <li className={props.stylee}>
            {props.title}
        </li>
    );
}
 
export default  Navheader;