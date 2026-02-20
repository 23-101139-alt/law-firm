import React from 'react';

const Titlesection = (props) => {
    return ( 
        <article className={props.stylee}>
            <h3 className={props.stylee2}>{props.title}</h3>
            <h1 className={props.stylee3}>{props.title2}</h1>
        </article>
     );
}
 
export default Titlesection;