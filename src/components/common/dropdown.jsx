import React from 'react';
import pic1 from '../../assets/pic1.png'
import Navheader from './navheader';
import '../common/dropdown.css'
import { useState } from 'react';


const Dropdownn = (props) => {

    const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('darkmode', !darkMode);
  };




    const [active, setActive] = useState("sec1");
    return ( 
                <ul className={props.stylee}>
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
                   <button className='themecta'  onClick={toggleTheme}>
                        <img src={pic1} alt ='theme'></img>
                    </button>
                </ul>
     );
}
 
export default Dropdownn;