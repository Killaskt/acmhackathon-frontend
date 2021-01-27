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
                title: "Lorem ipsum dolor sit amet,",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "What is the package version",
                content: <p>current version is 1.2.1</p>,
            },
        ],
    };
    
    const styles = {
        bgColor: 'rgba(31, 31, 31, 1)',
        titleTextColor: "white",
        rowTitleColor: "white",
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