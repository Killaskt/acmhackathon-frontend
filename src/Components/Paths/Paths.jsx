import React from 'react'

import Title from './../reusable/Title/Title';

import './Paths.css';

const Paths = () => {
    return (
        <div className="paths">
            <Title Title={'Paths'} />
            <div className="path-cont">
                <div className="ribbon">
                    <div className="ribbon-header">UI/UX</div>
                    <div className="inside">
                        <p>This path is all about UX and Graphical Design. It can be an app, website, game, etc. It is measured based on intuitiveness and other UI/UX principles. <br></br> <a id="ux-link" href="https://xd.adobe.com/ideas/process/ui-design/4-golden-rules-ui-design/">click here for more info</a></p>  
                    </div>
                    <div className="ribbon-2"></div>
                </div>
                <div className="ribbon">
                    <div className="ribbon-header">Development</div>
                    <div className="inside">
                        This path is all about developing some sort of technology using any language, framework, or resource out there. It is measured based on creativiness, uniqueness, and interesting uses of technology.
                    </div>
                    <div className="ribbon-3"></div>
                </div>
            </div>
        </div>
    );
}

export default Paths;