import React from 'react';
import '../layout/header.css'
import logo from '../../assets/logo.png'
import Navheader from '../common/navheader';
import pic1 from '../../assets/pic1.png'

const Headerr = () => {
    return ( 
        <header className='headerr'>
            <nav className='nav-headerr'>
                <img src={logo} alt='logo' ></img>
                <ul className='list-nav-header'>
                    <Navheader title='Home' stylee= 'navactive'  />
                    <Navheader title='About Us' stylee= 'navinactive'  />
                    <Navheader title='Services' stylee= 'navinactive'  />
                    <Navheader title='FAQs' stylee= 'navinactive'  />
                    <Navheader title='Contact Us' stylee= 'navinactive'  />
                   <button className='themecta'>
                        <img src={pic1} alt ='theme'></img>
                    </button>
                </ul>

            </nav>

        </header>
     );
}
 
export default Headerr;