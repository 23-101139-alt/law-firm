import React from 'react';
import pic1 from '../../assets/pic1.png'
import Navheader from './navheader';
import '../common/dropdown.css'


const Dropdownn = (props) => {
    return ( 
                <ul className={props.stylee}>
                    <Navheader title='Home'  href="#sec1"  />
                    <Navheader title='About Us'  href="#sec2"   />
                    <Navheader title='Services'  href="#sec3"  />
                    <Navheader title='FAQs' href="#sec4"   />
                    <Navheader title='Contact Us' href="#sec5"   />
                   <button className='themecta'>
                        <img src={pic1} alt ='theme'></img>
                    </button>
                </ul>
     );
}
 
export default Dropdownn;