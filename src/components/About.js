import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

// import { useNavigate } from 'react-router-dom';
// import {Link} from "react-scroll";
import Concordia from "../assets/concordia.webp";
import {TypeAnimation} from "react-type-animation";

import DeansListPDF from '../assets/DeansList.pdf';

const About = () => {
  const {ref, inView} = useInView({
    threshhold: 0.5,
  });

  // const navigate = useNavigate();
  //
  // const handleButtonClick = () => {
  //   navigate('/resume-viewer');
  // };

  return (
      <section className='section' id='about' ref={ref}>
        <div className='container mx-auto'>
          <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
            {/* img */}
            <motion.div
                variants={fadeIn('down', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount:0.3}}
                className='flex-1 bg-contain bg-no-repeat  mix-blend-lighten bg-top'>
              <div className='flex flex-col items-center lg:gap-y-3 ns'>
                <a href='https://www.concordia.ca/'>
                  <img src={Concordia} width={1000} height={300}></img>
                </a>
                <h3 className='h3 max-w-[455px] mb-16'>Cumulative GPA: <span style={{ color: 'green' }}>3.84</span> </h3>
                <h3 className='h3 max-w-[455px] mb-16'>Languages spoken: <TypeAnimation
                    sequence={[
                      'English', 2000, 'French', 2000,
                    ]}
                    speed={50}
                    className='text-accent'
                    wrapper='span'
                    repeat={Infinity}
                    />
                </h3>
                <a 
                  href={DeansListPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#625dec] text-white font-semibold rounded-lg shadow-md hover:bg-[#7a6ffb] transition duration-300 mb-16">
                  2023–2024 Dean's List
                </a>
              </div>
            </motion.div>
            {/* text */}
            <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount:0.3}}
                className='flex-1'>

              <h2 className='h2  font-bold text-accent'>About me</h2>
              <h3 className='h3 mb-4'>Recently graduated in Software Engineering @ Concordia University in Montreal, Canada 🇨🇦</h3>
              {/*<p className='mb-6'>*/}
              {/*  Currently working at Phoenix Solutions Inc. as a Junior Software Engineer*/}
              {/*</p>*/}
              {/* stats */}
              <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                
                <div>
                  <div className='text-[35px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={2} duration={3}/> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Internships <br/> Completed
                  </div>
                </div>
                <div>
                  <div className='text-[35px] font-tertiary text-gradient mb-2'>
                    {inView ? <CountUp start={0} end={25} duration={3}/> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Internship <br/> Months Completed
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default About;