import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';


const App = () => {
    return (
        <Router>
            <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
                <Header />
                <Banner />
                <Nav />
                <About />
                <Work />
                <Skills />
                <Contact />
                <div className='h-[4000px]'></div>
            </div>
        </Router>

    );
};

export default App;