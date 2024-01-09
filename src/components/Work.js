import React from 'react';

import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';
//img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
import {Link} from "react-scroll";

const Work = () => {
    return (
        <section className='section' id='work'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount:0.3}}
                        className='flex-1  mb-10 lg:mb-0 '>
                        {/*text*/}
                        <div>
                            <h1 className='h2 leading-tight text-accent'>
                                My latest Work.
                            </h1>
                            <table className='w-full h-full flex items-center' style={{ width: '205%'}}>
                                <tbody>
                                <tr>
                                    <td className="border border-white p-4 flex items-center">
                                        <p>Github Links</p>
                                    </td>
                                    <td className="border border-white p-4">
                                        <p>Description</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-white p-4">
                                        <button className='btn btn-sm'>
                                            <a href="https://github.com/mattflahertyy/Amazawn" target="_blank" rel="noopener noreferrer">
                                                Amazawn
                                            </a>
                                        </button>
                                        <br/>
                                        <p>React, Java, SQL</p>
                                    </td>
                                    <td className="border border-white p-4">
                                        <p>The Amazawn project, a collaborative effort of six developers, employs sprint strategies and an MVC system. This platform streamlines shipping services, offering essential features like account creation, robust user authentication, real-time tracking, and an efficient email notification system. The tech stack includes a React front end, Java-based backend, and SQL database, showcasing proficiency in modern web development tools and technologies.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-white p-4">
                                        <button className='btn btn-sm'>
                                            <a href="https://github.com/mattflahertyy/Predicting-NFL-Injuries" target="_blank" rel="noopener noreferrer">
                                                Prediciting NFL Injuries
                                            </a>
                                        </button>
                                        <p>Python, Power BI</p>
                                    </td>
                                    <td className="border border-white p-4">
                                        <p>This machine learning project aimed to predict NFL injuries by combining Kaggle data with personally scraped NFL player and injury data. After thorough cleaning and merging, we trained a model to forecast injuries based on weather, age, and position. Utilizing Power BI, we visualized the insights through graphs, offering a comprehensive understanding of injury patterns and contributing factors.</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <span className='text-3x1 text-white'>All projects available on my github:            </span>
                            <button className='btn btn-sm'>
                                <a href="https://github.com/mattflahertyy" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </button>
                        </div>
                        {/*image*/}
                        {/*          <div className='groupe relative overflow-hidden border-2 border-white/50 rounded-x1'>*/}
                        {/*            /!*overlay*!/*/}
                        {/*          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>*/}
                        {/*          /!*img*!/*/}
                        {/*          <img className='group-hover:scale-125  transition-all duration-500' src={Img3} alt=''/>*/}
                        {/*          /!*pretitle*!/*/}
                        {/*          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>UI/UX Design</div>*/}
                        {/*          /!*<span className='text-gradient'>UI/UX Designt</span>*!/*/}
                        {/*          /!*title*!/*/}
                        {/*          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>*/}
                        {/*<span className='text-3x1 text-white'>Project Title</span>*/}
                        {/*          </div>*/}
                        {/*          </div>*/}
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount:0.3}}
                        className='flex-1 flex flex-col gap-y-10'>{/*image*/}</motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;