import React, { Component } from 'react';
import './CustomTextInput.css';

class CustomTextInput extends Component {
    constructor(){
        super();
        this.state = {

        };
    }
    render() {

        if(this.props.type === 'textarea') {
            return(
                <textarea name={this.props.name} placeholder={this.props.placeholder} className="CustomTextInput double" rows="6" required onChange={this.props.onChange} />
            );
        }
        else {
            if(this.props.width == undefined) {
                return (
                    <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} className="CustomTextInput" required onChange={this.props.onChange} />
                );
            }
            else {
                return (
                    <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} className="CustomTextInput double" required onChange={this.props.onChange} />
                );
            }
        }
    }
}

export default CustomTextInput;