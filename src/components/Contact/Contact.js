import React, { Component } from 'react';
import './Contact.css';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from 'react-helmet';

import '../../animate.css';

import axios from 'axios';

// import 

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            submitted: false,
            formName: '',
            formSubject: '',
            formEmail: '',
            formMessage: '',
            show: false
        }
    }

    toggleInfo = event => {
        event.preventDefault();
        console.log('toggled');
        this.setState({ show: !this.state.show })
    }

    setName = (event) => {
        let name = event.target.value;
        
        this.setState({
            formName: name
        });
    }

    setSubject = (event) => {
        let subject = event.target.value;
        this.setState({
            formSubject: subject
        });
    }

    setEmail = (event) => {
        let email = event.target.value;
        this.setState({
            formEmail: email
        })
    }

    setMessage = (event) => {
        let message = event.target.value;
        this.setState({
            formMessage: message
        })
    }

    submitHandler = (event) => {
        console.log(this.state);
        alert('submithandler')
        event.preventDefault();
        event.stopPropagation();
        let errs = [];
        if(this.state.formName === '')
            errs.push("You must provide your name.");
        if(this.state.formEmail === '')
            errs.push("You must provide your email.");
        if(this.state.formSubject === '')
            errs.push("You must provide a subject");
        if(this.state.formMessage === '')
            errs.push("You must provide a message.");

        if(errs.length > 0)
            console.log(errs)
        else {
            console.log("No errors, submitting..");

            let data = new FormData();
            data.set('name', this.state.formName);
            data.set('email', this.state.formEmail);
            data.set('subject', this.state.formSubject);
            data.set('message', this.state.formMessage);

            axios({
                method: 'POST',
                url: 'email-parser.php',
                data: data,
                headers: { 
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => console.log(res))
            .catch(err => console.log(err))


            this.setState({ submitted: true })
        }
    }

    render() {
        return (
            <>
            <Helmet>
                <title>Contact | Daniel Edminster</title>
            </Helmet>
            <div className="bg-contact"></div>
            <div className="Contact">
                    <div className="tags">&lt;contact&gt;</div>

                    <div>
                    <div className="tags-header">&lt;h1&gt;</div>
                    <h1 className="animate__animated animate__backInDown">Contact me</h1>
                    <div className="tags-header">&lt;/h1&gt;</div>
                    <div className="tags-header">&lt;info&gt;</div>
                    <div className="Contact__Form animate__animated animate__backInLeft">
                        <p>Interested in working with me? I am available for freelance work or full-time hire. I would love to hear more about your companies or current projects you are working on. Please feel free to contact me:</p>
                    <a className="showMe" onClick={this.toggleInfo}>Show Contact info</a>

                    {this.state.show === true ? 
                        
                            <p>E: {process.env.REACT_APP_EMAIL} <br />
                             P: {process.env.REACT_APP_PHONE} </p>    
                        
                    
                    :
                    
                        '' 
                    }
                    </div>    

                     
                    <div className="tags-header">&lt;/info&gt;</div>



                    </div>

                    <div className="tags">&lt;/contact&gt;</div>

                
            </div>
            </>
        );
    }
}

export default Contact;