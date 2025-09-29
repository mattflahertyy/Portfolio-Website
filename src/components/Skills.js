import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const skills = [
  {
    title: 'Programming Languages',
    items: ['Java', 'C#', 'C', 'C++', 'Python', 'Go', 'JavaScript', 'TypeScript', 'SQL', 'NoSQL'],
  },
  {
    title: 'Web & UI Development',
    items: ['React.js', 'HTML', 'CSS', 'PHP', 'Firebase', 'REST APIs'],
  },
  {
    title: 'Development Environments',
    items: ['VS Code', 'IntelliJ', 'PyCharm', 'CLion', 'Eclipse', 'Visual Studio'],
  },
  {
    title: 'Tools & Platforms',
    items: ['GitHub', 'Jira', 'Azure', 'Figma', 'Power BI', 'Jaspersoft', 'AWS', 'Docker', 'SSMS', 'WebSocket'],
  },
  {
    title: 'Spoken Languages',
    items: ['English (Fluent)', 'French (Fluent)'],
  },
  {
    title: 'Office & Productivity',
    items: ['Microsoft Word', 'Excel', 'PowerPoint', 'Teams'],
  },
];

const Skills = () => {
  return (
    <section className='section' id='skills'>
      <div className='container mx-auto px-4 py-12'>
        {/* Title and subtitle */}
        <motion.div
                    variants={fadeIn('down', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='text-center'>
                    <h1 className='h2 font-bold leading-tight text-accent mb-6'>
                        Skills
                    </h1>
                </motion.div>

        {/* Skill boxes */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {skills.map((category, index) => (
            <div
              key={index}
              className='bg-white/5 border border-white/10 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm h-[200px] flex flex-col justify-start'
            >
              <h4 className='text-lg font-semibold text-red-400 mb-2 tracking-wide text-center'>
                {category.title}
              </h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-20 text-white/90 text-sm leading-relaxed mx-auto justify-center'>
                {category.items.map((item, i) => (
                  <div key={i} className='mb-1 before:content-["•"] before:mr-2'>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
