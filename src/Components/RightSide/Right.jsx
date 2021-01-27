import React from 'react';

import RightContent from '../RightContent/RightContent.jsx';

import './Right.css';

const Right = () => {

    return (
        <div className="Right">
            <div className="intro">
                <h2>A Wayne State Tech Hackathon</h2>
                <h4>Powered by the WSU Chapter of the Association of Computing Machinery</h4>
            </div>
            <RightContent />
        </div>
    )
}

export default Right;
