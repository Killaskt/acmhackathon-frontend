import React, { useRef } from 'react';

import Banner from '../Banner/Banner';
import About from '../About/About';
import Paths from '../Paths/Paths'
import FAQ from '../FAQ/FAQ';
import Schedule from '../Schedule/Schedule'
import RegForm from '../RegistrationForm/RegForm.jsx'

import '../../App.css';

const Main = () => {
    const scrollRef = useRef(null);
    return (
        <div className="main">
            <Banner scroll={scrollRef}/>
            <About/>
            {/* <Paths/> */}
            <FAQ/>
            <Schedule />
            <RegForm scroll={scrollRef}/>
        </div>
    )
}

export default Main;