import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';

const skills = [
  {
    name: 'Java and JavaScript',
    description: 'Java is my strongest programming language and the first one I learned. JavaScript was the second language I learned and used it for many of my personal projects.',
  },
  {
    name: 'Python',
    description: 'Solid overall in Python - one of my favorite languages especially when dealing with big data.',
  },
    {
    name: 'C#, C and C++',
    description: 'With C# being my strongest of the 3, I am also proficient in C++ and some C.',
  },
      {
    name: 'React Js, HTML, CSS and PHP',
    description: 'I am accomplished with most design languages which were needed for personal projects, including react which was used for this website.',
  },
  {
    name: 'SQL',
    description: 'Strong background in SQL from my previous internship.',
  }
]

const platforms = [
  {
    name: "VS Code, Eclipse, IntelliJ, Pycharm and CLion",
    description:"I am most comfortable using any of these Integrated Development Environments."
  },
  {
    name: "Power BI, Figma, Jira and Microsoft Teams",
    description:"Solid overall experience with from my previous work experience."
  }
]


const Services = () => {
  return (
    <section className='section' id='skills'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          { /* text & image */}
          <motion.div 
          variants={fadeIn('right', 0.3)} 
          initial='hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount:0.3}} 
          className='flex-1 lg:bg-skills lg:bg-bottom bg-no-repeat mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>Skills</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Here are some programming languages, IDE's and applications I excel in.</h3>

            <div>
              {platforms.map((skill, index)=> {
                // destructure service
                const {name, description} = skill;
                return (
                    <div className=' mb-[10px]' key={index}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4' style={{ color: 'red' }}>{name}</h4>
                        <p className='font-secondary leading-tight'>{description}</p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                        {/*add language logos here*/}
                      </div>
                    </div>
                );
              })}
            </div>
          </motion.div>
          { /* skills */}





          <motion.div 
          variants={fadeIn('left', 0.5)} 
          initial='hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount:0.3}} 
          className='flex-1'>
            {/* service list */}
            <div>
              {skills.map((skill, index)=> {
                // destructure service
                const {name, description} = skill;
                return (
                  // <div className='border-b border-white/20 h-[120px] mb-[38px] flex' key={index}>
                    <div className='mb-[10px]' key={index}>
                    <div className='max-w-[476px]'>
                       <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4' style={{ color: 'red' }}>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      {/*add language logos here*/}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
    );
};

export default Services;
