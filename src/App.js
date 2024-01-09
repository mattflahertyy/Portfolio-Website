import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
// import ResumeViewer from './components/ResumeViewer';
// import Amazawn from './components/Amazawn';

const App = () => {
    return (
        <Router>
            <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
                <Header />
                <Banner />
                <Nav />
                <About />
                {/*<Routes>*/}
                {/*/!*    <Route path='/resume-viewer' component={ResumeViewer} />*!/*/}
                {/*/!*    <Route path='/' component={About} />*!/*/}
                {/*/!*    <Route path='/' component={Work} />*!/*/}
                {/*/!*    <Route path='/' component={Contact} />*!/*/}
                {/*    <Route path="/amazawn" component={<Amazawn />} />*/}
                {/*</Routes>*/}
                {/*<Services />*/}
                <Work />
                <Contact />
                {/*<ResumeViewer/>*/}
                <div className='h-[4000px]'></div>
            </div>
        </Router>

    );
};

export default App;