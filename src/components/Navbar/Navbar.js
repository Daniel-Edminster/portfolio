import React, { Component } from 'react';
import NavItem from '../../components/NavItem/NavItem';

import './Navbar.css';
import Logo from '../../img/dwe.png';
import Icon from '@material-ui/core/Icon';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
// import Home from '@material-ui/icons';

class Navbar extends Component {
    constructor(){
        super();

        this.state = {

        };
    }
    
    setActiveNavItem = () => {

    }

    render() {
        return (
            <div className="Navbar">
                
               <img className="Navbar__Logo__img" src={Logo} alt="Logo." />

                    <div className="Navbar__Menu">
                        {/* <div className="Navbar__Menu__Link"> */}
                        {/* <HomeRoundedIcon /> */}
                        <NavItem icon={<HomeRoundedIcon />} text="HOME" route="/" destination="local" />
                        <NavItem icon={<PersonRoundedIcon />} text="ABOUT" route="/about" destination="local"/>
                        <NavItem icon={<CodeRoundedIcon />} text="SKILLS" route="/skills" destination="local" />
                        <NavItem icon={<WorkRoundedIcon />} text="PROJECTS" route="/portfolio" destination="local" />
                        <NavItem icon={<EmailRoundedIcon />} text="CONTACT" route="/contact" destination="local" />



                    </div>
                    <div className="Navbar__Media">
                    <NavItem icon={<LinkedInIcon />} text="LinkedIn" route="https://www.linkedin.com/in/daniel-edminster/" />
                        <NavItem icon={<GitHubIcon />} text="GitHub" route="https://github.com/daniel-edminster" />
                    {/* <LinkedInIcon/> 
                    <GitHubIcon /> */}
                     </div>
            </div>
        );
    }
}

export default Navbar;
