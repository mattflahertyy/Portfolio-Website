import React from 'react';
//images
import Image from '../assets/laptop.png';
//import Image from '../assets/pfp.png';

//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import {fadeIn} from '../variants';

import { Link } from 'react-scroll';
// import {BiUser} from "react-icons/bi";

// Import resume PDF
import ResumePDF from '../assets/MatthewFlahertyResume.pdf';

const Banner = () => {
  return (
      <section className='min-h[85vh] lg:min-h-[78vh] flex items-center' id='home'>
        <div className='container mx-auto'>
          <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
            {/*text*/}
            <div className='flex-1 text-center font-secondary lg:text-left'>
              <motion.h1
                  variants={fadeIn('up',0.3)}
                  initial= 'hidden'
                  whileInView={'show'}
                  viewport={{once:false, amount:0.7}}
                  className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'
              >
                Matthew <span>Flaherty</span> </motion.h1>
              <motion.div  variants={fadeIn('up',0.4)}
                           initial= 'hidden'
                           whileInView={'show'}
                           viewport={{once:false, amount:0.7}}
                           className='mb-6 text-[36px] lg:text-[45px] font-secondary font-semibold uppercase leading-[-1]'>

                <span className='text-white mr-4'>I am a</span>
                <TypeAnimation
                    sequence={[
                      'Software Engineer', 2000,
                    ]}
                    speed={10}
                    className='text-accent'
                    wrapper='span'
                    repeat={Infinity}
                />
              </motion.div>
              <motion.p
                  variants={fadeIn('up',0.5)}
                  initial= 'hidden'
                  whileInView={'show'}
                  viewport={{once:false, amount:0.7}}
                  className='mb-8 max-w-lg mx-auto lg:mx-0'>Recently graduated in Software Engineering.</motion.p>
              <motion.div
                  variants={fadeIn('up',0.6)}
                  initial= 'hidden'
                  whileInView={'show'}
                  viewport={{once:false, amount:0.7}}
                  className='flex max-w-max gap-x-1 items-center mb-12 mx-auto lg:mx-0'>
          
                  <Link to="about" activeClass="active" smooth={true} spy={true} className="cursor-pointer">
                    <button className="px-5 py-1 rounded-md bg-[#625dec] text-white font-medium text-base hover:bg-[#7a6ffb] transition select-none">
                      About Me
                    </button>
                  </Link>

                  <Link to="projects" activeClass="active" smooth={true} spy={true} className="cursor-pointer mx-6">
                    <button className="px-5 py-1 rounded-md bg-[#625dec] text-white font-medium text-base hover:bg-[#7a6ffb] transition select-none">
                      My Projects
                    </button>
                  </Link>

                  <Link to="contact" activeClass="active" smooth={true} spy={true} className="cursor-pointer">
                    <button className="px-5 py-1 rounded-md bg-[#625dec] text-white font-medium text-base hover:bg-[#7a6ffb] transition select-none">
                      Contact Me
                    </button>
                  </Link>
              </motion.div>
              <motion.div
                variants={fadeIn('up',0.6)}
                initial= 'hidden'
                whileInView={'show'}
                viewport={{once:false, amount:0.7}}
                className='flex max-w-max gap-x-1 items-center mb-12 mx-auto lg:mx-0 lg:pl-[16%]'>
                <a 
                  href={ResumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-1 rounded-md bg-[#625dec] text-white font-medium text-base hover:bg-[#7a6ffb] transition select-none cursor-pointer inline-block text-center">
                  View My Resume
                </a>
              </motion.div>
              {/*socials*/}
              <motion.div
                  variants={fadeIn('up',0.7)}
                  initial= 'hidden'
                  whileInView={'show'}
                  viewport={{once:false, amount:0.7}}
                  className='flex text[-20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              </motion.div>
            </div>
            {/*image*/}
            <motion.div  variants={fadeIn('down',0.5)}
                         initial= 'hidden'
                         whileInView={'show'}
                         className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
              <img src={Image} alt='' />
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Banner;