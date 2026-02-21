import React from 'react';
import './footer.css'
import logo from '../../assets/logo.png'
import pic20 from '../../assets/pic20.png'
import pic21 from '../../assets/pic21.png'
import pic22 from '../../assets/pic22.png'
import Listheader from '../common/biglisttext';
import Navfooter from '../common/navfooter';


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

                 <nav className='right-box-footer'>
                    <nav className='list1-footer'>
                                            <Listheader title='Quick Links'/>
                            <ul className='list-footerr'>
                                <Navfooter title='Home' href="#sec1"  />
                                <Navfooter title='About Us'href="#sec2"  />
                                <Navfooter title='Services' href="#sec3" />
                                <Navfooter title='FAQs' href="#sec4"  />
                                <Navfooter title='Contact Us' href="#sec5"  />
                            </ul>
                    </nav>
                    <nav className='list1-footer'>
                                            <Listheader title='Legal'/>
                            <ul className='list-footerr'>
                                <Navfooter title='Terms & Conditions' />
                                <Navfooter title='Cookies' />
                                <Navfooter title='Privacy Policy' />
                            
                            </ul>
                    </nav>

                   
                </nav>



                </nav>


            </nav>

            <div className='last-part-footer'>
                <h4 className='smalltext'>@2026,UnityLegal,AllRightsReservedbyUnityLegal</h4>
            </div>
        </footer>
     );
}
 
export default Footerr;