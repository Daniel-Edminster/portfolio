import React from 'react';
import { Helmet } from "react-helmet";
import preval from 'preval.macro';

import './Home.css';
import '../../animate.css';

const Home = (props) => {
    const dateTimeStamp = preval`module.exports = new Date().toLocaleString();`
    return (
        <>
        <Helmet>
            <title>Home | Daniel Edminster</title>
        </Helmet>
        
        <div className="bg"></div>
        <div className="bg2"></div>
        <div className="bg3"></div>
        <main className="Home">
            <div className="tags">&lt;home&gt;</div>

            <div>
            <div className="tags-header">&lt;introduction&gt;</div>
            <h1 className="animate__animated animate__backInDown">Hi, <br />I'm Daniel,<br /> a Full-Stack Developer.</h1>
            <div className="tags-header">&lt;/introduction&gt;</div>
            </div>
            
            <div className="Home__Footer">
            <div className="tags">&lt;/home&gt;</div>           
            <p className="Home__Footer__Build">
                Build: {preval`module.exports = new Date().toLocaleString();`}.
                </p>
            </div>
        </main>
        </>
    );
};

export default Home;