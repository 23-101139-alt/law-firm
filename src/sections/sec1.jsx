import React from 'react';
import '../sections/sec1.css'
import CTA from '../components/common/cta';
import img3 from '../assets/pic3.png'
import img4 from '../assets/pic4.png'
import img5 from '../assets/pic5.png'
import img6 from '../assets/pic6.png'
import img7 from '../assets/pic7.png'

const Sec1 = () => {
    return ( 
        <section className='sec1' id='sec1'>
            <article className='container-sec1'>
                <article className='box-one-sec1'>
                    <h1 className='header-sec1'>Justice Begins </h1>
                    <h1 className='header2-sec1'>With Us</h1>
                </article>

                <figure className='responsive-middle-part'>
         <img className='img-sec2' src={img3} alt='pic'></img>
          <div className='img2-container-sec1'></div>
                </figure>


                <article className='box2-sec1'>
                    <article className='subbox1-sec1'>
                        <p className='para1-sec1'>We provide trusted legal services
                             with integrity, professionalism, and results—focused
                              on protecting your rights.</p>
                        <button className='cta-sec1'>
                        <CTA title='Contact Us' />
                        </button>
                    </article>
                    <figure className='img-container-sec2' >
                        <img className='img-sec1' src={img3} alt='pic'></img>
                        <div className='img-container-sec1'></div>
                    </figure>

                    <article className='box-sub3-sec1'>
                        <p className='para-sub-box3'>Partners With Us — Protecting Your
                             Rights, Every Step of the Way.</p>
                        <figure className='imgs-cont'>
                            <img className='profilee' src={img4} alt='profile'></img>
                             <img className='profilee' src={img5} alt='profile'></img>
                              <img className='profilee' src={img6} alt='profile'></img>
                              <img src={img7} alt='profile'></img>
                        </figure>
                    </article>



                </article>

            </article>
        </section>
     );
}
 
export default Sec1;
<section>

</section>