import React from 'react';
import './home.css'
import Headerr from '../components/layout/header';
import Sec1 from '../sections/sec1';


const Home = () => {
    return ( 
        <>
        <Headerr />
        <main>
        <Sec1 />
        </main>
        </>
     );
}
 
export default Home;