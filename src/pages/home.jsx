import React from 'react';
import './home.css'
import Headerr from '../components/layout/header';
import Sec1 from '../sections/sec1';
import Sec2 from '../sections/sec2';
import Sec3 from '../sections/sec3';
import Sec4 from '../sections/sec4';
import Sec5 from '../sections/sec5';
import Footerr from '../components/layout/footer';
import Scrolltopcta from '../components/common/scrolltop';


const Home = () => {
    return ( 
        <>
        <Headerr />
        <main>
            <Scrolltopcta />
            <Sec1 />
            <Sec2 />
            <Sec3 />
            <Sec4 />
            <Sec5 />
        </main>
        <Footerr />
        </>
     );
}
 
export default Home;