import React from 'react';
import './footer.css'
import logo from '../../assets/logo.png'
import pic20 from '../../assets/pic20.png'
import pic21 from '../../assets/pic21.png'
import pic22 from '../../assets/pic22.png'


const Footerr = () => {
    return ( 
        <footer className='footer'>
            <nav className='box1-footer'>
                <nav className='container-main-info-footer'>
                    <article className='left-box-footer'>
                        <img src={logo} alt='logo' className='logo-footer'></img>
                        <p className='para-footer'>Your legal partner for protection, advice, and advocacy. Committed to helping you every step of the way.</p>
                        <ul className='list-icons-footer'>
                            <li>
                                <img src={pic20} alt='instagram' className='socialmedia-icons'></img>
                            </li>

                            <li>
                                <img src={pic21} alt='x' className='socialmedia-icons'></img>
                            </li>
                            <li>
                                <img src={pic22} alt='facebook' className='socialmedia-icons'></img>
                            </li>
                        </ul>
                    </article>
                </nav>

            </nav>
        </footer>
     );
}
 
export default Footerr;