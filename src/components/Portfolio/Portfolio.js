import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './Portfolio.css';
import '../../animate.css';
import endever from '../../img/endever.gif';
import gob from '../../img/gob.PNG';
import gob2 from '../../img/gob2.png';
import tnc from '../../img/tnc.PNG';
import unsplash from '../../img/unsplash.png';
import dex from '../../img/dex.png';
import reactlibrary from '../../img/reactlibrary.png'
import hangman from '../../img/hangman.png';

class Portfolio extends Component {
    render() {
        return (
<>
        <Helmet>
        <title>Portfolio | Daniel Edminster</title>
        </Helmet>
        <div className="bg-portfolio"></div>

        <div className="Portfolio">
                <div className="tags">&lt;portfolio&gt;</div>

                <div className="mid">
                    <div className="tags-header">&lt;h1&gt;</div>
                    <h1 className="animate__animated animate__backInDown">My Portfolio</h1>
                    <div className="tags-header">&lt;/h1&gt;</div>


                    <div className="tags-header">&lt;projects&gt;</div>
                    <div className="Portfolio__Flex animate__animated animate__backInLeft">
                    
                        <div className="Portfolio__Project">
                            <img className="Portfolio__Project__img" src={gob2} />

                        <h3>Game of Bands</h3>
                        <p className="Portfolio__Project__Description">The Game of Bands website is a full CRUD application secured with Reddit single sign on, built with MongoDB, Express.js, React.js, and Node.js</p>
                        <h5>Availability: <a href="https://gameofbands.danieledminster.com" className="PortDemo">Demo</a> | <a href="https://github.com/daniel-edminster/Game-of-Bands-FrontEnd" className="PortDemo">GitHub (Front-End)</a> | <a href="https://github.com/daniel-edminster/Game-of-Bands-Express" className="PortDemo">GitHub (Back-End)</a></h5> 

                        </div>

                        <div className="Portfolio__Project">
                            <img className="Portfolio__Project__img" src={tnc} />

                        <h3>Top Notch Co.</h3>
                        <p className="Portfolio__Project__Description">The Top Notch Co. CRUD application was built to support a client's game controller fabrication business. Features an interactive order form, protected admin panel, and business metrics. Built with Linux, Apache, MySQL, and PHP.</p>
                        <h5>Availability: Closed source</h5> 

                        </div>

                        <div className="Portfolio__Project">
                            <img className="Portfolio__Project__img" src={endever} />

                        <h3>EnDever</h3>
                        <p className="Portfolio__Project__Description">I built a React front-end to EnDever, a tinder-like application for connecting with other developers. Also made contributions to the Github Single Sign on feature.</p>
                        <h5>Availability: <a href="https://agitated-panini-b410aa.netlify.app/" className="PortDemo">Demo</a> | <a href="https://github.com/digitalfences/EnDeverFrontEnd" className="PortDemo">GitHub</a></h5> 
                        </div>

                        <div className="Portfolio__Project">
                            <img className="Portfolio__Project__img" src={reactlibrary} />

                        <h3>React Component Library</h3>
                        <p className="Portfolio__Project__Description">I built out a variety of reusable stateful and functional components using React.js from an Adobe XD documents and made them all accessible through a storybook library.</p>
                        <h5>Availability: <a href="https://danieledminster.com/react-library" className="PortDemo">Demo</a> | <a href="https://github.com/Daniel-Edminster/React-Component-Library" className="PortDemo">GitHub</a></h5> 
                        </div>

                        <div className="Portfolio__Project">
                            <img className="Portfolio__Project__img" src={hangman} />

                        <h3>Hangman Game</h3>
                        <p className="Portfolio__Project__Description">I programmed a Hangman game using ASCII art in vanilla JavaScript, HTML, and CSS. Switchable to a Harry Potter theme.  </p>
                        <h5>Availability: <a href="https://daniel-edminster.github.io/ga-hangman-game/index.html" className="PortDemo">Demo</a> | <a href="https://github.com/Daniel-Edminster/ga-hangman-game" className="PortDemo">GitHub</a></h5> 
                        </div>

                        <div className="Portfolio__Project">
                            <img className="Portfolio__Project__img" src={dex} />

                        <h3>PokeDex</h3>
                        <p className="Portfolio__Project__Description">The PokeDex project was built to both test my knowledge of vanilla JavaScript and CSS as well as portray my love for Pokemon. Features PokeDex Data from PokeApi and a custom PokeDex modal heavily inspired by the Pokemon series. Built with HTML5/CSS3/JavaScript.</p>
                        <h5>Availability: <a href="https://daniel-edminster.github.io/ga-ui-pattern/" className="PortDemo">Demo</a> | <a href="https://github.com/daniel-edminster/ga-ui-pattern" className="PortDemo">GitHub</a></h5> 
                        </div>


                        <div className="Portfolio__Project">
                            <img className="Portfolio__Project__img" src={unsplash} />

                        <h3>Unsplash Mockup</h3>
                        <p className="Portfolio__Project__Description">I completed the Unsplash Mockup project during my time at General Assembly. We were tasked with taking an Adobe XD file and turning it into functional HTML and CSS, as well as making it fully responsive whether a responsive mockup existed or not.</p>
                        <h5>Availability: <a href="https://daniel-edminster.github.io/ga-responsive-website/" className="PortDemo">Demo</a> |  <a href="https://gtihub.com/daniel-edminster/ga-responsive-website/" className="PortDemo">GitHub</a></h5> 
                        </div>


                    </div>
                    <div className="tags-header">&lt;/projects&gt;</div>
                </div>
                
                <div className="tags">&lt;/portfolio&gt;</div>
            
        </div>
        </>
        );
    }
}

export default Portfolio;