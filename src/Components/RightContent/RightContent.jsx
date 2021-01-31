import React from 'react';
import {
    OverlayTrigger, 
    Tooltip
} from 'react-bootstrap'
import Faq from 'react-faq-component';

import '../RightSide/Right.css';

const RightContent = () => {

    const renderTooltip = (props) => (
        <Tooltip className="track-tooltip">
            {props}
        </Tooltip>
    );

    const data = {
        title: "FAQ",
        rows: [
            {
                title: "Why Join a Hackathon?",
                content: `Hackathons are a place for beginners to try and test new technologies, while they are also great places for professionals to challenge themselves to build architecturally and/or theoretically applications. They are a playground for developers to really learn and dive into technologies they hear name-dropped all the time.`,
            },
            {
                title: "How many people can be on a Team?",
                content:
                    "The max number of people on a team is 4 people! The team must be made up of high school or college students from anywhere. Teams help you learn how to delegate work and also share code amongst each other so its highly encouraged!",
            },
            {
                title: "Do I need a team?",
                content: `No. You can work on a project alone, but if you can also come with a team or (if you message an organizer or mark "Willing to join a Random Team" then one can be organized for you!`,
            },
            {
                title: "What is the registration process?",
                content: `After filling out the registration form, an email will come to your inbox that has the discord link in order for you to join the server!`,
            },
            {
                title: "What is the medium of the event?",
                content: <p>The entire event will take place on Discord, Devpost (to submit projects) and maybe Zoom! From opening to closing ceremony! Discord is an amazing space to message, direct message, or even voice chat! Feel free to download discord at their website, <a href="https://discord.com/download">HERE</a>.</p>,
            },
            {
                title: "How much does it cost?",
                content: `Absolutely Nothing!.`,
            },
            {
                title: "Who can attend?",
                content: <p>This hackathon is open to all high school and college students!</p>,
            },
            {
                title: "How does mentoring work?",
                content: 'We have a small team of volunteers that will be available for any questions that you may have while working on your project. Our team has a broad scope from React to Endpoints to AWS to Pandas to Tensorflow and more!',
            },
            {
                title: "What if I'm a beginner?",
                content: 'Hackathons are the greatest places to grow, learn, and develop whether you are a beginner or a programmer in the field. They allow you to hone your creativeness while pushing you to succeed at a certain deadline!',
            },
            {
                title: "Will there be prizes?",
                content: 'TBA!',
            },
        ],
    };
    
    const styles = {
        bgColor: 'rgba(31, 31, 31, 1)',
        titleTextColor: "white",
        rowTitleColor: "white",
        rowTitleTextSize: '1.1em',
        rowContentColor: 'white',
        arrowColor: "white",
    };
    
    const config = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div className="right-content">
            <div className="form-cont">
                <h3>REGISTER:</h3>
                <div className="form-buttons">
                    <div className="btn Particpant"><a target="_blank" href="https://tripetto.app/run/MKFAENRMQ8">PARTICIPANT</a></div>
                    <div className="btn Volunteer"><a target="_blank" href="https://forms.gle/bYBLZM1DW4HqGND18">VOLUNTEER</a></div>
                    <div className="btn Mentor"><a target="_blank" href="https://forms.gle/bYBLZM1DW4HqGND18">MENTOR</a></div>
                </div>
            </div>
            <div className="track-cont">
                <h3>TRACKS:</h3>
                <div className="tracks">
                    <div className="track-circle">
                        <div className="track-inner">
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip(
                                        <p>This track is expected to have projects that are related to solving social issues that affect our current society.</p>
                                )}
                            >
                                <div>
                                    <i class="fas fa-fist-raised"></i>
                                    <p>Empowerment</p>
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className="track-circle">
                        <div className="track-inner">
                        <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip(
                                    <p>This track is expected to have projects that are related to software solutions to health issues.</p>
                                )}
                            >
                                <div>
                                    <i class="fas fa-medkit"></i>
                                    <p>Health</p>
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className="track-circle">
                        <div className="track-inner">
                        <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip(
                                    <p>This track is expected to have projects that are either related to helping ease of access to education in order to make it free and accessible for everyone or helping smooth the transition into our new standard of distance learning.</p>
                                )}
                            >
                                <div>
                                    <i class="fas fa-book-open"></i>
                                    <p>Education</p>
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className="track-circle">
                        <div className="track-inner">
                        <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip(
                                    <p>This track is expected to have software projects related to music. This can be anywhere from creating a machine learning music generator to a new way to compress music files.</p>
                                )}
                            >
                                <div>
                                    <i class="fas fa-music"></i>
                                    <p>Music</p>
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="desc-cont">
                    <h2 className="desc-label">What is WSU Nexus?</h2>
                    <p className="desc">
                        WSU Nexus is the Wayne State chapter of ACM's series of events. They will mostly be 
                        hackathons but we plan to bring recruitors, presentors, and other events to help students 
                        find careers and build their resumes.
                    </p>
                </div>
            </div>
            <div className="faq">
            <Faq data={data} styles={styles} config={config} />
            </div>
        </div>
    )
}

export default RightContent;