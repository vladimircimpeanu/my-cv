import React, { Component } from 'react';

import Nature from '../../../assets/images/nature.jpg';
import './aboutme.css'

class About extends Component {
    render() {
        return (

            <div className="contact-body"
                style={{
                    height: '100%',
                    backgroundImage: "url(" + Nature + ")",
                    backgroundPosition: 'rightTop',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div class="body-list">

                    <div class="top-part">
                        <div id="aboutMe">About me:</div>
                        <div class="first">
                            <p>Hi I am Vladimir!I am a web developer with a passion for designing.
                         On this website you can see my resume , how to contact me and some projects I've been working on</p>
                        </div>

                    </div>
                    <div >
                        <div id="left"><p>My passions are: coding , camping , guitar , summer sports and gaming</p></div>
                        <div id="right"><p>I lived in Belgium for 6 years which provided me with the oportunity to learn french.
                         I am also a very outgoing person always looking for new challenges.</p></div>
                    </div>
                    
                </div>
            </div>



        )
    }
}

export default About;