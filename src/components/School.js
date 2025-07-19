import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import {Calendar } from 'lucide-react';
import ConcordiaLogo from '../assets/concordialogo.png'
import JAC from '../assets/john-abbott.png';
import Loyola from '../assets/loyola.png';

const School = () => {
    const educationData = [
        {
            id: 1,
            school: "Concordia University",
            program: "Master's of Applied Science - Information Systems Security",
            status: "In Progress",
            year: "2025 - Present",
            description: "Thesis focused on advanced cybersecurity techniques with an emphasis on AI systems. Exploring the intersection of prompt injection attacks and LLM vulnerabilities, including methods to jailbreak language models through adversarial prompting. Research aims to identify, categorize, and mitigate security threats in generative AI systems. Expected to graduate in 2027.",
            achievements: [],
            image: ConcordiaLogo,
            linkedinUrl: "https://www.concordia.ca/",
        },
        {
            id: 2,
            school: "Concordia University",
            program: "Bachelor's of Engineering - Software Engineering",
            status: "Completed",
            year: "2022 - 2025",
            description: "Completed a four-year program focused on software development and engineering principles. Gained proficiency in multiple programming languages and technologies through coursework and hands-on projects including an 8 month capstone. Recognized for academic excellence with placement on the Dean's List and graduatied with distinction.",
            achievements: ["Graduated with Distinction", "Dean's List 2023-2024"],
            image: ConcordiaLogo,
            linkedinUrl: "https://www.concordia.ca/",
        },
        {
            id: 3,
            school: "John Abbott College",
            program: "Sciences",
            status: "Completed",
            year: "2018 - 2022",
            description: "Pre-university education providing essential academic preparation in science and technology.",
            achievements: ["Honor Roll"],
            image: JAC,
            linkedinUrl: "https://johnabbott.qc.ca/",
        },
        {
            id: 4,
            school: "Loyola High School",
            program: "",
            status: "Completed",
            year: "2013 - 2018",
            description: "Foundation education with strong academic performance.",
            achievements: [],
            image: Loyola,
            linkedinUrl: "https://loyola.ca/",
        }
    ];

    const handleSchoolClick = (linkedinUrl) => {
        window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className='section' id='school'>
            <div className="container mx-auto">
                {/* Header */}
                <motion.div
                    variants={fadeIn('down', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='text-center'>
                    <h1 className='h2 font-bold leading-tight text-accent mb-4'>
                        Education
                    </h1>
                </motion.div>

                {/* Education Timeline */}
                <div className='space-y-4'>
                    {educationData.map((education, index) => (
                        <motion.div
                            key={education.id}
                            variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                            className="group"
                        >
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                                <div className="p-2.5">
                                    <div className='flex flex-col lg:flex-row gap-2 items-center'>
                                        {/* Image Container */}
                                        <div className='flex-shrink-0 lg:w-20 w-full scale-75'>
                                            <div className='relative group/image'>
                                            <div className='rounded-lg overflow-hidden flex justify-center items-center'>
                                                <img 
                                                    src={education.image} 
                                                    alt={education.school}
                                                    className='w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300 cursor-pointer'
                                                    onClick={() => handleSchoolClick(education.linkedinUrl)}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className='flex-1 text-center lg:text-left'>
                                            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1.5'>
                                                {/* Left Side - School Info */}
                                                <div className='flex-1'>
                                                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-3'>
                                                    {/* School Info */}
                                                    <div className='flex-1 flex flex-col lg:flex-row lg:items-center lg:gap-3'>
                                                        <div>
                                                        <h3 className='text-lg font-bold text-white transition-colors'>
                                                            {education.school}
                                                        </h3>
                                                        <h4 className='text-sm font-medium text-white/90'>
                                                            {education.program}
                                                        </h4>
                                                        </div>
                                                    </div>
                                                    </div>

                                                </div>

                                                {/* Right Side - Meta & Achievements */}
                                                <div className='flex flex-col lg:items-end gap-1.5'>
                                                    {/* Meta Information */}
                                                    <div className='flex flex-wrap justify-center lg:justify-end gap-2 text-xs text-white/70'>
                                                        <div className='flex items-center gap-1'>
                                                            <Calendar className='w-3 h-3' />
                                                            {education.year}
                                                        </div>
                                                        <span
                                                            className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium
                                                            ${education.status === "Completed" ? "bg-green-600 text-white" : ""}
                                                            ${education.status === "In Progress" ? "bg-orange-500 text-white" : ""}`}
                                                        >
                                                            {education.status}
                                                        </span>
                                                    </div>

                                                    {/* Achievements */}
                                                    <div className='flex flex-wrap justify-center lg:justify-end gap-1'>
                                                        {education.achievements.map((achievement, i) => (
                                                            <span 
                                                                key={i}
                                                                className='px-2 py-0.5 bg-white/10 rounded-full text-xs text-white/80 font-medium border border-white/20'
                                                            >
                                                                {achievement}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description - Hidden on mobile to save space */}
                                            <p className='hidden lg:block text-white/70 text-sm mt-1.5 leading-relaxed'>
                                                {education.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default School;