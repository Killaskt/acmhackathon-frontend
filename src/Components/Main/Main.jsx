import React from 'react';

import About from '../About/About';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import Paths from '../Paths/Paths'
import RegForm from '../RegistrationForm/RegForm.jsx'
import Schedule from '../Schedule/Schedule'

import '../../App.css';

const Main = () => {
    return (
        <div className="main">
            <Banner/>
            <About/>
            <FAQ/>
            <Schedule />
            {/* <Paths/>
            <RegForm/>
            <Schedule/> */}
        </div>
    )
}

export default Main;