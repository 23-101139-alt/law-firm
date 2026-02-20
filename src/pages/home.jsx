import React from 'react';
import './home.css'
import Headerr from '../components/layout/header';
import Sec1 from '../sections/sec1';
import Sec2 from '../sections/sec2';
import Sec3 from '../sections/sec3';


const Home = () => {
    return ( 
        <>
        <Headerr />
        <main>
            <Sec1 />
            <Sec2 />
            <Sec3 />
        </main>
        </>
     );
}
 
export default Home;