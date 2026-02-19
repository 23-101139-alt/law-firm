import React from 'react';
import pic1 from '../../assets/pic1.png'
import Navheader from './navheader';
import '../common/dropdown.css'

const Dropdownn = (props) => {
    return ( 
                <ul className={props.stylee}>
                    <Navheader title='Home' stylee= 'navactive'  />
                    <Navheader title='About Us' stylee= 'navinactive'  />
                    <Navheader title='Services' stylee= 'navinactive'  />
                    <Navheader title='FAQs' stylee= 'navinactive'  />
                    <Navheader title='Contact Us' stylee= 'navinactive'  />
                   <button className='themecta'>
                        <img src={pic1} alt ='theme'></img>
                    </button>
                </ul>
     );
}
 
export default Dropdownn;