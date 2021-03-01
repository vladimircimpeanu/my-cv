import React, { Component } from 'react';

import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Nature from '../../../assets/images/nature.jpg';
import './contact.css';

class Contact extends Component {
    render() {
        return (

            <div className="contact-body"
                style={{
                    backgroundImage: "url(" + Nature + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div>
                    <img src="https://scontent-bru2-1.xx.fbcdn.net/v/t1.15752-9/151224107_267958914946461_8049113784340459901_n.jpg?_nc_cat=110&ccb=3&_nc_sid=ae9488&_nc_ohc=8GfEliHa_mkAX-Z2ISx&_nc_ht=scontent-bru2-1.xx&oh=6509e659932864a76a77dbf50a671bd0&oe=6058DF49"
                        alt="avatar" />
                </div>
                <div className="contact-list">
                    <h1>Contact me at:</h1>
                    <div>
                        <div>
                            <PhoneAndroidIcon />
                            <p>Phone: +320487680132</p>
                        </div>
                        <div className="list-item">
                            <EmailIcon />
                            <p>Email: vladimir.cimpeanu@yahoo.com</p>
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
                            <a href="">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;