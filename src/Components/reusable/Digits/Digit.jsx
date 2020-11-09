import React from 'react';

import './Digit.css';

const Digit = (props) => {
    return (
        <div className="digits-cont"> 
            <div className="digit-cont">
                <h3 className="digit">
                    {props.time[1] ? props.time[0] : '0'}        
                </h3>
            </div>
            <div className="digit-cont">
                <h3 className="digit">
                    {props.time[1] ? props.time[1] : props.time[0]}        
                </h3>
            </div>
        </div>
    )
}

export default Digit;