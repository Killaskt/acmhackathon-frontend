import React, {useState, useEffect} from 'react';
import countdown from 'countdown';

import {Button} from 'react-bootstrap';

import Digit from './../reusable/Digits/Digit';

import './Banner-mobile.css';

const Banner = (props) => {
    const [time, setTime] = useState(new Date());
    const [event, setEvent] = useState(new Date('2020', '10', '24', '20'));
    const [timeLeft, setTimeLeft] = useState(countdown(new Date(), event));

    const executeScroll = () => props.scroll.current.scrollIntoView();

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(countdown(new Date(), event));
        }, 1000)

        return () => clearInterval(interval);
    })

    return (
        <div className="banner">
            <div className="banner-mid">
                <div className="dolo">
                    <h2 data-text="wsu nexus">wsu nexus</h2>
                </div>
                <Button id="register" onClick={executeScroll}>REGISTER</Button>
            </div>
            <div className="countdown">
                <Digit time={timeLeft.days.toString()}/>
                <h4 className="colons">:</h4>
                <Digit time={timeLeft.minutes.toString()}/>
                <h4 className="colons">:</h4>
                <Digit time={timeLeft.seconds.toString()}/>
            </div>
            
        </div>
    )
}

export default Banner;