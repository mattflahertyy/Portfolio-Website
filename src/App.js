import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import School from './components/School';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkHistory from './components/Work';


const App = () => {
    return (
        <Router>
            <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
                <Header />
                <Banner />
                <Nav />
                <About />
                <School />
                <WorkHistory />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </Router>

    );
};

export default App;