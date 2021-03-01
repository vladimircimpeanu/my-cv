import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './homepage.css';

class Home extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="homepage-grid">
                    <Cell col={12}>
                        <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Front End Web Developer</h1>
                            <hr />
                            <p>HTML | CSS | JavaScript | React</p>
                            <div className="social-links">
                                <a href="https://linkedin.com/in/vladimir-petruț-cîmpeanu-ba29331b5" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/vladimircimpeanu" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                <a href="https://www.facebook.com/Vladi92" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;