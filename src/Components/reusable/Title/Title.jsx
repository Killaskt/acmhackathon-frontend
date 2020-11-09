import React from 'react';

import "./Title.css";

const Title = (props) => {

    return (
        <div className="Title-cont">
            <h3 className="Title">
                {props.Title}
            </h3>
        </div>
    );
}

export default Title;