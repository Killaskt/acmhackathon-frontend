import React from 'react';

import './Nav.css';


const Nav = () => {
    return (
        <div className="nav">
            <div className="brand">
                {/* WSU Nexus */}
            </div>
            <div className="date-cont">
                <div className="date">
                    Date: <span>11/24 8:00pm</span> - <span>11/25 8:00pm</span> 
                </div>
            </div>
            <div className="logos">
                <div className="acm-cont">
                    <div className="acm"></div>
                </div>
                <div className="wsu-cont">
                    <div className="wsu"></div>
                </div>
            </div>
        </div>
    );
}

export default Nav;