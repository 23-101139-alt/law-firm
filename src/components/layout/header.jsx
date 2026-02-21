import React from 'react';
import '../layout/header.css'
import logo from '../../assets/logo.png'
import Navheader from '../common/navheader';
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import Dropdownn from '../common/dropdown';


const Headerr = () => {
    return ( 
        <header className='headerr'>
            <nav className='nav-headerr'>
                <img src={logo} alt='logo' ></img>
                <ul className='list-nav-header'>
                    <Navheader title='Home' href="#sec1"  />
                    <Navheader title='About Us' href="#sec2"    />
                    <Navheader title='Services' href="#sec3"   />
                    <Navheader title='FAQs'href="#sec4"   />
                    <Navheader title='Contact Us'href="#sec5"   />
                   <button className='themecta'>
                        <img src={pic1} alt ='theme'></img>
                    </button>
                </ul>

                <nav className='burgermenucontainer'>
                    <img src={pic2} alt='burger menu'onClick={() => {
                        const dropdown = document.querySelector('.list-nav-header2');
                        dropdown.classList.toggle('show');
                    }}></img>
                    <Dropdownn stylee='list-nav-header2' />
                </nav>

            </nav>

        </header>
     );
}
 
export default Headerr;