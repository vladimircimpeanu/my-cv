import React, { Component } from 'react';

import Nature from '../../../assets/images/nature.jpg';
import "./projects.css";

class Projects extends Component {

    state = {
        visible: true
    }

    render() {
        return (

            <div className="body" style={{

                height: '100%',
                backgroundImage: "url(" + Nature + ")",
                backgroundPosition: 'rightTop',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="tabs">
                    <div onClick={() => { this.setState({ visible: !this.state.visible }) }} className="tab">JavaScript/React projects</div>
                </div>
                {this.state.visible ?
                    <div className="cards">
                        <div className="card">
                            <div class="title">
                                <h1>JavaScript project #1</h1>
                            </div>
                            <div className="line"></div>
                            <div className="card-bottom"><div>In this project i made a login page of a movie website.</div>
                                <a href="https://github.com/razvantimis/myIMDB_17.3/tree/main/pages/login_register">Github</a>
                            </div>
                        </div>
                        <div className="card">
                            <div class="title">
                                <h1>JavaScript project #1</h1>
                            </div>
                            <div className="line"></div>
                            <div className="card-bottom"><div>In this project i made a login page of a movie website.</div>
                                <a href="https://github.com/razvantimis/myIMDB_17.3/tree/main/pages/login_register">Github</a>
                            </div>
                        </div>
                    </div> :
                    <div className="cards">
                        <div className="card">
                            <div class="title">
                                <h1>React project #1</h1>
                            </div>
                            <div className="line"></div>
                            <div className="react-card-bottom"><div>In this project i made this resume page</div>
                                <a href="https://github.com/vladimircimpeanu/my-cv">Github</a>
                            </div>
                        </div>
                    </div>


                }
            </div>

        )
    }
}

export default Projects;