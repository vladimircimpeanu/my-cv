import React, { Component } from 'react';
import Education from '../../shared/education';
import Experience from '../../shared/experience';
import Languages from '../../shared/languages';
import Skills from '../../shared/skills';
import Nature from '../../../assets/images/nature.jpg';
import './resume.css';

class Resume extends Component {
    render() {
        return (


            < div className="body">
                <div className="left-container" style={{ textAlign: 'center' }}>
                    <img src="https://i.postimg.cc/qMSKNDVw/151224107-267958914946461-8049113784340459901-n.jpg"
                        alt="avatar"
                        style={{
                  
                        }} />
                    <h2>Vladimir-Petruț Cîmpeanu</h2>
                    <h4>Web Developer</h4>
                    <hr />
                    <p>These are my coordinates</p>
                    <h5>Address</h5>
                    <p>City: Cluj-Napoca , Street: Teodor Mihali, Nr: 1</p>
                    <hr />
                    <h5>Phone</h5>
                    <p>0487680132</p>
                    <hr />
                    <h5>Email</h5>
                    <p id="email">vladimir.cimpeanu@yahoo.com</p>
                </div>

                <div className="right-container">
                    <h2>Education</h2>
                    <Education
                        startYear={2007}
                        endYear={2011}
                        schoolName="Highschool - Iulian Pop, Cluj-Napoca"
                        schoolDescription="This school provided me with a turism tehnician diploma."
                    />
                    <Education
                        startYear={2011}
                        endYear={2014}
                        schoolName="Nursing School 'Ocrotirea' , Cluj-Napoca"
                        schoolDescription="This school provided me with a generalist nurse diploma."
                    />
                    <Education
                        startYear={2020}
                        endYear={2021}
                        schoolName="Scoala informala de IT , Cluj-Napoca"
                        schoolDescription="This school provided me with a diploma in web development."
                    />
                    <hr style={{ borderTop: '3px solid white' }} />
                    <h2>Experience</h2>
                    <Experience
                        startYear={2012}
                        endYear={2014}
                        jobName="Cashier/cook at SC SBW FRESH SRL, Cluj-Napoca "
                        jobDescription="Job description:greeted guests, prepared food, ensured sanitation standards,  collected payments, restocked supplies at the sandwich unit area, and did basic paperwork duties. "
                    />
                    <Experience
                        startYear={2016}
                        endYear={2021}
                        jobName="Nurse A1 at Vulpia Bruxelles"
                        jobDescription="Job description: Provided care to patients and residents based on their care plan outlined by their doctor. Accurately monitored and recorded observations on patients' conditions. Maintained accurate records of residents care, financial procedures, and medication administration. Identified care planning needs."
                    />
                    <hr style={{ borderTop: '3px solid white' }} />
                    <Languages />
                    <Skills />
                </div>
            </div>


        )
    }
}

export default Resume;