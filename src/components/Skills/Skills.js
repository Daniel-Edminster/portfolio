import React from 'react';
import { ProgressBar } from "react-step-progress-bar";

import './Skills.css';
import '../../animate.css';
import "react-step-progress-bar/styles.css";
import { Helmet } from 'react-helmet';

const Skills = (props) => {
    return (
        <>
        <Helmet>
        <title>Skills | Daniel Edminster</title>
        </Helmet>
        <div className="bg-skills"></div>
        <div className="Skills">
                <div className="tags">&lt;skills&gt;</div>

                <div className="mid">
                    <div className="tags-header">&lt;h1&gt;</div>
                    <h1 className="animate__animated animate__backInDown">My Skills</h1>
                    <div className="tags-header">&lt;/h1&gt;</div>


                    <div className="tags-header">&lt;categories&gt;</div>
                    <div className="Skills__Flex">
                    
                        <div className="Skills__Front-End animate__animated animate__backInLeft">
                        <h2>Front-End</h2>
                        <h4>HTML</h4>
                            <ProgressBar percent={95} filledBackground="linear-gradient(to right, #2dabf9, #0688fa)" unfilledBackground="rgba(0,0,0,0)" />
                            <h4>CSS</h4>
                            <ProgressBar percent={90} filledBackground="linear-gradient(to right, #2dabf9, #0688fa)" unfilledBackground="rgba(0,0,0,0)" />
                            <h4>JavaScript/ES6</h4>
                            <ProgressBar percent={80} filledBackground="linear-gradient(to right, #2dabf9, #0688fa)" unfilledBackground="rgba(0,0,0,0)" />
                            <h4>React.js</h4>
                            <ProgressBar percent={85} filledBackground="linear-gradient(to right, #2dabf9, #0688fa)" unfilledBackground="rgba(0,0,0,0)" />
                        </div>

                        <div className="Skills__Back-End animate__animated animate__backInLeft">
                        <h2>Back-End</h2>
                            <h4>PHP</h4>
                            <ProgressBar percent={95} filledBackground="linear-gradient(to right, #ff3019 ,#cf0404)" unfilledBackground="rgba(0,0,0,0)" />
                            <h4>Node.js</h4>
                            <ProgressBar percent={80} filledBackground="linear-gradient(to right, #ff3019 ,#cf0404)" unfilledBackground="rgba(0,0,0,0)" />
                            <h4>Express.js</h4>
                            <ProgressBar percent={70} filledBackground="linear-gradient(to right, #ff3019 ,#cf0404)" unfilledBackground="rgba(0,0,0,0)" />
                            <h4>Apache 2</h4>
                            <ProgressBar percent={75} filledBackground="linear-gradient(to right, #ff3019 ,#cf0404)" unfilledBackground="rgba(0,0,0,0)" />
                        </div>

                        <div className="Skills__DB animate__animated animate__backInLeft">
                        <h2>Databases</h2>
                            <h4>MySQL</h4>
                            <ProgressBar percent={95} filledBackground="linear-gradient(to right, #299a0b,#299a0b)" unfilledBackground="rgba(0,0,0,0)" />
                            <h4>MongoDB</h4>
                            <ProgressBar percent={70} filledBackground="linear-gradient(to right, #299a0b,#299a0b)" unfilledBackground="rgba(0,0,0,0)" />
                            <h4>PostgreSQL</h4>
                            <ProgressBar percent={75} filledBackground="linear-gradient(to right, #299a0b,#299a0b)" unfilledBackground="rgba(0,0,0,0)" />

                        </div>
                        


                    </div>
                    <div className="tags-header">&lt;/categories&gt;</div>
                </div>
                
                <div className="tags">&lt;/skills&gt;</div>
            
        </div>
        </>
    );
};

export default Skills;