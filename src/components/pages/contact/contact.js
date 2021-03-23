import React, { Component } from 'react';

import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import '../../../assets/images/nature.jpg';
import './contact.css';


class Contact extends Component {
    render() {
        return (

            < div className="contact-body" >
                <div>
                    <img src="https://i.postimg.cc/qMSKNDVw/151224107-267958914946461-8049113784340459901-n.jpg"
                        alt="avatar" />
                </div>
                <div className="contact-list">
                    <div>
                        <h1>Contact me at:</h1>
                        <div>
                            <PhoneAndroidIcon />
                            <p>Phone: +320487680132</p>
                        </div>
                        <div className="list-item">
                            <EmailIcon />
                            <a href="mailto: vladimir.cimpeanu@yahoo.com">Email</a>
                        </div>
                        <div>
                            <FacebookIcon />
                            <a href="https://www.facebook.com/Vladi92">Facebook</a>
                        </div>
                        <div>
                            <GitHubIcon />
                            <a href="https://github.com/vladimircimpeanu">Github</a>
                        </div>
                        <div>
                            <LinkedInIcon />
                            <a href="https://linkedin.com/in/vladimir-petruț-cîmpeanu-ba29331b5">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default Contact;