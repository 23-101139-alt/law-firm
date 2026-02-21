import React from 'react';


const Navheader = (props) => {

        let classes = "navheaderr";

    if (props.active) {
        classes += " active";
    }


    return (  
        <li >
             <a 
              className={classes}
              href={props.href}
              onClick={props.onClick}
            >
                {props.title}
            </a>
        </li>
    );
}
 
export default  Navheader;