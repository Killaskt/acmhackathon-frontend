import React from 'react'

import Title from './../reusable/Title/Title';

import './About.css';

const About = () => {
    return(
        <div className="about">
            <Title Title={"About"}/>
            <div className="about-cont">
                <p>
                    Wsu nexus is the Wayne State chapter of ACM's series of events. They will mostly be hackathons but we plan to bring recruitors, presentors, and other events to help students find careers and build their resume. 
                    <p> </p>
                    This month we are hosting a November hackathon which will only be open to Wayne State students, as it is our first event its not at the same scale as we expect our upcoming events. 
                    <p></p>
                    Looking forward we plan to host another, more professional hackathon in Feburary so be sure to keep in touch!
                </p>
            </div>
        </div>
    )
}

export default About;