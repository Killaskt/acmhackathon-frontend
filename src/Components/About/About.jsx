import React from 'react'

import Title from './../reusable/Title/Title';

import './About.css';

const About = () => {
    return(
        <div className="about">
            <Title Title={"About"}/>
            <div className="about-cont">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, necessitatibus natus deserunt eos numquam neque expedita consequatur quia ipsam, aperiam sunt dolor eum consequuntur dignissimos tempora voluptatum nulla doloribus laboriosam?
                </p>
            </div>
        </div>
    )
}

export default About;