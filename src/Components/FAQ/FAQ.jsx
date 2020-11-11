import React from 'react'

import Title from './../reusable/Title/Title';
import Accord from './../reusable/Accord/Accord';

import './FAQ.css';

const FAQ = () => {
    return (
        <div className="FAQ">
            <Title Title={'FAQ'}/>
            <div className="FAQ-accordians-cont">
                <div className="FAQ-accordians">
                    <Accord header={'What is a hackathon?'} body={"Pretty much the coolest thing ever. Hackathons foster a sense of community, drive innovation, and build the technical leaders of the future. Here at HackPSU, our goal is to create a collaborative environment where people can both innovate and learn new skills"}/>
                    <Accord header={'Do i need a Team?'} body={'No. You can work on a project alone, but if you can also come with a team or (if you message an organizer or mark "Willing to join a Random Team" then one can be organized for you!'}/>
                </div>
                <div className="FAQ-accordians">
                    <Accord header={'How many people can be on a Team?'} body={'The max a team can have is anything up to 3 people!'}/>
                    <Accord header={'What is the registration process?'} body={'After filling out the registration form below, an email will come to your inbox that has the discord link in order for you to join the server!'}/>
                </div>
                <div className="FAQ-accordians">
                    <Accord header={'What is the medium of the event?'} body={'The entire event will take place on Discord, Devpost (to submit projects) and maybe Zoom! From opening to closing ceremony! Discord is an amazing space to message, direct message, or even voice chat! Feel free to donwload discord at their website, https://discord.com/download.'}/>
                    <Accord header={'How much does it cost?'} body={'Absolutely Nothing!'}/>
                </div>
                <div className="FAQ-accordians">
                    <Accord header={'How will mentoring work?'} body={'We have a small team of volunteers that will be available for any questions that you may have while working on your project. Our team has a broad scope from React to Endpoints to AWS to Pandas to Tensorflow and more!'}/>
                    <Accord header={'What if I\'m a beginner?'} body={'Hackathons are the greatest places to grow, learn, and develop whether you are a beginner or a programmer in the field. They allow you to hone your creativeness while pushing you to succeed at a certain deadline!'}/>
                </div>
            </div>
        </div>
    );
}

export default FAQ;