import React, { useState } from 'react'
import { Card, Nav, Tab, Tabs } from 'react-bootstrap';

import Title from './../reusable/Title/Title';

// import './Schedule.css';

const Schedule = () => {
    const [key, setKey] = useState();
    
    return (
        <div className="schedule">
            <Title Title={'Schedule'}/>
			<div className="schedule-cont">
                <Tabs
                    id="schedule-tabs"
                    activeKey={key}
                    onSelect={key => setKey(key)}
                    >
                    <Tab eventKey="home" title="Tuesday, Nov 24">
                        <div className="events">
                            <div className="event">
                                <div className="eventname">
                                    Opening Ceremony
                                </div>
                                <div className="eventtime">
                                    8:00pm
                                </div>
                            </div>
                            <div className="event">
                                <div className="eventname">
                                    Hacking Starts
                                </div>
                                <div className="eventtime">
                                    9:00pm
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Wednesday, Nov 25">
                    <div className="events">
                            <div className="event">
                                <div className="eventname">
                                    Project Submissions
                                </div>
                                <div className="eventtime">
                                    7:00pm
                                </div>
                            </div>
                            <div className="event">
                                <div className="eventname">
                                    Closing Ceremony
                                </div>
                                <div className="eventtime">
                                    8:00pm
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Schedule;