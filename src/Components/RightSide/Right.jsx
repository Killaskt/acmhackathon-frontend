import React from 'react';
import {Redirect, Route, Link} from 'react-router-dom';

import './Right.css';

const Right = () => {

    // https://tripetto.app/run/MKFAENRMQ8

    const participationRedirect = () => {
        return (
            <Link to={{ pathname: "https://tripetto.app/run/MKFAENRMQ8" }} target="_blank" />
            // <Redirect to="/participationform/" />
        )
    }

    return (
        <div className="Right">
            <div className="intro">
                <h2>A Wayne State Tech Hackathon</h2>
                <h4>Powered by the WSU Chapter of the Association of Computing Machinery</h4>
            </div>
            <div className="form-cont">
                <h3>REGISTER:</h3>
                <div className="form-buttons">
                    <a className="btn Particpant" target="_blank" href="https://tripetto.app/run/MKFAENRMQ8">PARTICIPANT</a>
                    <a className="btn Volunteer" target="_blank" href="https://forms.gle/bYBLZM1DW4HqGND18">VOLUNTEER</a>
                    <a className="btn Mentor" target="_blank" href="https://forms.gle/bYBLZM1DW4HqGND18">MENTOR</a>
                </div>
            </div>
            <div className="track-cont">
                <h3>TRACKS:</h3>
                <div className="tracks">
                    <div className="track-circle">
                        <div className="track-inner">
                            <i class="fas fa-fist-raised"></i>
                            <p>Justice</p>
                        </div>
                    </div>
                    <div className="track-circle">
                        <div className="track-inner">
                            <i class="fas fa-medkit"></i>
                            <p>Health</p>
                        </div>
                    </div>
                    <div className="track-circle">
                        <div className="track-inner">
                            <i class="fas fa-book-open"></i>
                            <p>Education</p>
                        </div>
                    </div>
                    <div className="track-circle">
                        <div className="track-inner">
                            <i class="fas fa-music"></i>
                            <p>Music</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Right;
