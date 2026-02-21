import React from 'react';
import '../layout/header.css'
import logo from '../../assets/logo.png'
import Navheader from '../common/navheader';
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import Dropdownn from '../common/dropdown';
import { useState } from 'react';


const Headerr = () => {
    const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('darkmode', !darkMode);
  };

const [active, setActive] = useState("sec1");



    return ( 
        <header className='headerr'>
            <nav className='nav-headerr'>
                <img src={logo} alt='logo'className='logoo' ></img>
                <ul className='list-nav-header'>
                <Navheader 
                title='Home' 
                href="#sec1" 
                active={active === "sec1"} 
                onClick={() => setActive("sec1")} 
                />

                <Navheader 
                title='About Us' 
                href="#sec2" 
                active={active === "sec2"} 
                onClick={() => setActive("sec2")} 
                />

                <Navheader 
                title='Services' 
                href="#sec3" 
                active={active === "sec3"} 
                onClick={() => setActive("sec3")} 
                />

                <Navheader 
                title='FAQs' 
                href="#sec4" 
                active={active === "sec4"} 
                onClick={() => setActive("sec4")} 
                />

                <Navheader 
                title='Contact Us' 
                href="#sec5" 
                active={active === "sec5"} 
                onClick={() => setActive("sec5")} 
                />
                   <button className='themecta' onClick={toggleTheme}>
                        <img className='theme-imgg' src={pic1} alt ='theme' ></img>
                    </button>
                </ul>

                <nav className='burgermenucontainer'>
                    <img className='burgermeu' src={pic2} alt='burger menu'onClick={() => {
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