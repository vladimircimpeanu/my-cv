import React, { Component } from 'react';

import Nature from '../../../assets/images/nature.jpg';
import './aboutme.css'

class About extends Component {
    render() {
        return (

            <div className="contact-body"
                style={{
                    backgroundImage: "url(" + Nature + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                <div class="body-list">

                    <div class="top-part">
                        <div><h1>About me:</h1></div>
                        <div class="first">
                            <p id="first-p">Hi I am Vladimir!</p> <p id="second-p"> I am a web developer with a passion for designing.
                      On this website you can see my resume , how to contact me and some projects I've been working on</p>
                        </div>

                    </div>
                    <div class="bottom-part">
                        <div id="left"><p id="first-left-p">My passions:</p> <p id="second-left-p">coding , camping , guitar , summer sports and gaming</p></div>
                        <div id="right"><p>I lived in Belgium for 6 years which provided me with the oportunity to learn french. I am a very outgoing person always looking for new challenges.</p></div>
                    </div>
                </div>
            </div>



        )
    }
}

export default About;