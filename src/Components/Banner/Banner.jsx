import React, {useState, useEffect} from 'react'
import moment from 'moment';

import {Button} from 'react-bootstrap';



import './Banner.css';

const Banner = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        
    }, [])

    return (
        <div className="banner">
            <div className="banner-mid">
                <div className="dolo">
                    <h2 data-text="wsu nexus">wsu nexus</h2>
                </div>
                <Button id="register">REGISTER</Button>
            </div>
            <div className="countdown">

            </div>
            
        </div>
    )
}

export default Banner;