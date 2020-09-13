import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton';



import './About.css';
import '../../animate.css';

import headshot from '../../img/1squared_small.jpg';
import CV from '../../docs/Daniel_Edminster_CV_9_20.pdf';
import CustomTextInput from '../CustomTextInput/CustomTextInput';

class About extends Component {
    constructor() {
        super();
        this.state = {
            expanded: false
        }
    }



    render() {

        // let CV = '#';
        return (
            <>
        <Helmet>
        <title>About | Daniel Edminster</title>
        </Helmet>
         <div className="bg-about"></div>
            <div className="About">
            <div className="header-group">
            <div className="tags">&lt;about&gt;</div>

            <div className="tags-header">&lt;h1&gt;</div>
                    <h1 className="animate__animated animate__backInDown">About Me</h1>
            <div className="tags-header">&lt;/h1&gt;</div>
            <div className="mid">
            <div className="tags-header">&lt;flavor-text&gt;</div>
            <div className="About__Description">
                <img src={headshot} className="animate__animated animate__fadeIn animate__delay-1s About__Headshot" />
                
            <p className="animate__animated animate__flipInX animate__delay-2s"> I am a Washington, D.C. based Full Stack Developer ready to take on new, complex challenges. 
Diligent problem-solver and unapologetic techie with an insatiable desire and motivation to learn.
</p>
</div>
<div className="tags-header">&lt;/flavor-text&gt;</div>

<div className="tags-header">&lt;links&gt;</div>
            <div className="About__Description">
            <a href={CV} ><CustomButton text="Resume" /></a> 
            <Link to="/portfolio" ><CustomButton text="Portfolio" /></Link> 
            <Link to="/contact"><CustomButton text="Contact" /></Link>
            </div>
<div className="tags-header">&lt;/links&gt;</div>

            
            </div>
            </div>

            <div className="tags">&lt;/about&gt;</div>

                
            </div>
            </>
        );
    }
}

export default About;