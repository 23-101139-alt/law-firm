import React from 'react';
import './scrolltop.css'
import pic23 from '../../assets/pic23.png'

const Scrolltopcta = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    
    return ( 
        <button className='fixedcta' onClick={scrollToTop}>
            <img src={pic23} alt='scrolltop' ></img>
        </button>
     );
}
 
export default Scrolltopcta;