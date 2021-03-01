import React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage from './pages/homepage/homepage';
import AboutMe from './pages/aboutme/aboutme';
import Contact from './pages/contact/contact';
import Projects from './pages/projects/projects';
import Resume from './pages/resume/resume';


const Main = () => (
    <Switch>
        <Route exact path="/my-cv" component={HomePage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;