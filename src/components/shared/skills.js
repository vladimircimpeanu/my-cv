import React, { Component } from 'react';


class Skills extends Component {
    render() {
        return (<div>
            <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Skills</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ textDecoration: 'underline' }}>Technical Skills</h3>
                    <ul style={{ fontSize: '20px', textAlign: 'start', marginLeft: '-15px' }}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Github</li>
                    </ul>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ textDecoration: 'underline' }}>Soft Skills</h3>
                    <ul style={{ fontSize: '20px', textAlign: 'start', marginLeft: '-15px' }}>
                        <li>Organization</li>
                        <li>Adaptability</li>
                        <li>Critical thinking</li>
                        <li>Teamwork</li>
                        <li>Integrity</li>
                        <li>Problem-solving</li>
                        <li>Creativity</li>
                        <li>Empathy</li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default Skills;
