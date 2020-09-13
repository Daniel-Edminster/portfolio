import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

class NavItem extends Component {
    constructor(){
        super();
        this.state = {
            active: false
        };
    }
    
    render() {
        if(this.props.destination === 'local') {
            return (
                <Link to={this.props.route}>
                <div className="Navbar__Menu__Link">
        
                    <div className="NavItem__Text">{this.props.text}</div>
                    {this.props.icon}
                </div>
                </Link>
            );
        }
        else  {
            return (
                <a target="_blank" href={this.props.route}>
                <div className="Navbar__Menu__Link">
        
                    <div className="NavItem__Text">{this.props.text}</div>
                    {this.props.icon}
                </div>
                </a>
            );
        }
    }
}

export default NavItem;