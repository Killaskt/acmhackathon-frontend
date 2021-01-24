import React from 'react';

import Left from './../LeftSide/Left.jsx';
import Right from './../RightSide/Right.jsx';

import './Main.css';

const Main = () => {

    return (
        <div className="main">
            <Left />
            <div></div>
            <Right />
        </div>
    )
}

export default Main;