import React from 'react'

import Title from './../reusable/Title/Title';
import Accord from './../reusable/Accord/Accord';

import './FAQ.css';
import { Col, Row, Tab, Nav, Sonnet } from 'react-bootstrap';

const Q_A = [
    {
        "Question": "What is a hackathon?", 
        "Answer": "Pretty much the coolest thing ever. Hackathons foster a sense of community, drive innovation, and build the technical leaders of the future. Here at HackPSU, our goal is to create a collaborative environment where people can both innovate and learn new skills", 
    },
    {
        "Question": "How many people can be on a Team?", 
        "Answer": "The max a team can have is anything up to 3 people! At least one team member needs to be a Wayne State Student. Teams help you learn how to delegate work and also share code amongst each other so its highly encouraged!", 
    },
    {
        "Question": "Do i need a Team?", 
        "Answer": "No. You can work on a project alone, but if you can also come with a team or (if you message an organizer or mark \"Willing to join a Random Team\" then one can be organized for you!", 
    },
    {
        "Question": "What is the registration process?", 
        "Answer": "After filling out the registration form below, an email will come to your inbox that has the discord link in order for you to join the server!", 
    },
    {
        "Question": "What is the medium of the event?", 
        "Answer": "The entire event will take place on Discord, Devpost (to submit projects) and maybe Zoom! From opening to closing ceremony! Discord is an amazing space to message, direct message, or even voice chat! Feel free to donwload discord at their website, https://discord.com/download.", 
    },
    {
        "Question": "How much does it cost?", 
        "Answer": "Absolutely Nothing! Keep in mind though, you must be a wayne state student or have a wayne state student in your group.", 
    },
    {
        "Question": "Do you have to be a WSU student?", 
        "Answer": "Sadly you do. We plan on hosting a completely open hackathon in Feburary, but for this November Hackathon you must be a Wayne State Student.", 
    },
    {
        "Question": "How will mentoring work?", 
        "Answer": "We have a small team of volunteers that will be available for any questions that you may have while working on your project. Our team has a broad scope from React to Endpoints to AWS to Pandas to Tensorflow and more!", 
    },
    {
        "Question": "What if I'm a beginner?", 
        "Answer": "Hackathons are the greatest places to grow, learn, and develop whether you are a beginner or a programmer in the field. They allow you to hone your creativeness while pushing you to succeed at a certain deadline!", 
    }
];

const NavTabs = (tabs) => {
    return tabs.map((q, i) => 
        <Nav.Item>
            <Nav.Link key={i} eventKey={i}>{q.Question}</Nav.Link>
        </Nav.Item>
    )
}

const TabAnswer = (ans) => {
    return ans.map((q, i) => 
        <Tab.Pane key={i} eventKey={i}>
            <p>{q.Answer}</p>
        </Tab.Pane>
    )
}

const FAQ = () => {
    return (
        <div className="FAQ">
            <Title Title={'FAQ'}/>
            {/* <div className="FAQ-accordians-cont">
                <div className="FAQ-accordians">
                    <Accord header={'What is a hackathon?'} body={""}/>
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
            </div> */}
            <div className="FAQ-cont">
                <Tab.Container id="left-tabs" defaultActiveKey="0">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            {(NavTabs(Q_A))}
                        </Nav>
                        </Col>
                        <Col sm={9} id="Tab-col">
                            <Tab.Content id="Tab-cont">
                                {(TabAnswer(Q_A))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    );
}

export default FAQ;