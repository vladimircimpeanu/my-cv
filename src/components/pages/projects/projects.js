import React, { Component } from 'react';
import { ProgressBar } from 'react-mdl'
import Nature from '../../../assets/images/nature.jpg';
import "./projects.css";

class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }

    render() {
        return (
            <div className="background" style={{
                height: "100%",
                backgroundImage: "url(" + Nature + ")",
                backgroundPosition: 'rightTop',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="content">
                    <div className="tabs">
                        <div onClick={() => { this.setState({ visible: !this.state.visible }) }} className="tab">JavaScript/React projects</div>
                    </div>
                    {this.state.visible ?
                        <div className="cards">
                            <div className="card">
                                <div class="title">
                                    <h1>Login page project #1</h1>
                                </div>
                                <div className="line"></div>
                                <div className="card-bottom">
                                    <div>In this project i made a login page of a movie website.
                                     <a className="github" href="https://github.com/razvantimis/myIMDB_17.3/tree/main/pages/login_register">Github</a>
                                    </div>

                                </div>
                            </div>
                            <div className="card">
                                <div class="title">
                                    <h1>JavaScript project #2</h1>
                                </div>
                                <div className="line"></div>
                                <div className="card-bottom"><div>  Work in progress </div>
                                    <ProgressBar indeterminate />
                                </div>
                            </div>
                        </div> :
                        <div className="cards">
                            <div className="card">
                                <div class="title">
                                    <h1>My CV react project #1</h1>
                                </div>
                                <div className="line"></div>
                                <div className="react-card-bottom">
                                    <div>In this project i made this resume page
                                    <a href="https://github.com/vladimircimpeanu/my-cv">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div >
        )
    }
}

export default Projects;