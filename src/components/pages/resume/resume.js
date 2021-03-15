import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../../shared/education';
import Experience from '../../shared/experience';
import Languages from '../../shared/languages';
import Skills from '../../shared/skills';
import Nature from '../../../assets/images/nature.jpg';
import './resume.css';

class Resume extends Component {
    render() {
        return (
            <div className="background" style={{
                height: '100%',
                backgroundImage: "url(" + Nature + ")",
                backgroundPosition: 'rightTop',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                < Grid >
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="https://scontent-bru2-1.xx.fbcdn.net/v/t1.15752-9/151224107_267958914946461_8049113784340459901_n.jpg?_nc_cat=110&ccb=3&_nc_sid=ae9488&_nc_ohc=8GfEliHa_mkAX-Z2ISx&_nc_ht=scontent-bru2-1.xx&oh=6509e659932864a76a77dbf50a671bd0&oe=6058DF49"
                                alt="avatar"
                                style={{
                                    marginLeft: '20px',
                                    marginBottom: '-82px',
                                    height: '350px',
                                    clipPath: 'polygon(78% 0px, 100% 47%, 80% 75%, -153% 100%, 0px 20%)'
                                }}
                            />
                        </div>
                        <h2 style={{ textAlign: 'center', color: 'white' }}>Vladimir-Petruț Cîmpeanu</h2>
                        <h4 style={{ color: 'white', textAlign: 'center' }}>Web Developer</h4>
                        <hr style={{ borderTop: '3px solid white ', width: '100%' }} />
                        <p style={{ color: 'white', fontSize: '30px', textAlign: 'center', textDecoration: 'underline' }}>These are my coordinates</p>

                        <h5 style={{ color: 'white', marginTop: '0px', fontSize: '30px' }}>Address</h5>
                        <p style={{ color: 'white', fontSize: '20px' }}>City: Cluj-Napoca , Street: Teodor Mihali, Nr: 1</p>
                        <hr style={{ borderTop: '3px solid white ', width: '100%' }} />
                        <h5 style={{ color: 'white', fontSize: '30px' }}>Phone</h5>
                        <p style={{ color: 'white', fontSize: '20px' }}>0487680132</p>
                        <hr style={{ borderTop: '3px solid white ', width: '100%' }} />
                        <h5 style={{ color: 'white', fontSize: '30px' }}>Email</h5>
                        <p style={{ color: 'white', fontSize: '20px' }}>vladimir.cimpeanu@yahoo.com</p>

                    </Cell>
                    <Cell className="resume-right-col" style={{ marginLeft: '100px' }} col={6}>
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


                    </Cell>
                </ Grid>
            </div>
        )
    }
}

export default Resume;