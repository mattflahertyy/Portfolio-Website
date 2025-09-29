import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Calendar } from 'lucide-react';

import CAE from '../assets/cae.jpeg';
import Phoenix from '../assets/phoenix.jpeg';
import Reffing from '../assets/pcasa.jpeg';

const WorkExperience = () => {
    // Function to calculate duration between two dates
    const calculateDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = endDate === 'Present' ? new Date() : new Date(endDate);
        
        const diffTime = Math.abs(end - start);
        const diffMonths = diffTime / (1000 * 60 * 60 * 24 * 30.44); // Average days per month
        
        if (diffMonths >= 12) {
            const years = diffMonths / 12;
            return `${years.toFixed(1)} years`;
        } else {
            return `${Math.round(diffMonths)} months`;
        }
    };

    // Function to format date range display
    const formatDateRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const startMonth = start.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        
        if (endDate === 'Present') {
            return `${startMonth} - Present`;
        } else {
            const end = new Date(endDate);
            const endMonth = end.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
            return `${startMonth} - ${endMonth}`;
        }
    };

    const workData = [
        {
            id: 1,
            company: "CAE Inc.",
            position: "Full Stack Developer Intern",
            jobType: "Internship",
            startDate: "September 1, 2024",
            endDate: "April 25, 2025",
            description: `  • Designed and developed front-end components and pages for internal tools using ReactJS and TypeScript.
                            • Engineered backend API endpoints in C# allowing consistent front-end integration and data transfer.
                            • Created and optimized SQL scripts, developed and maintained database tables, views, and indexes to support robust data management and reporting.
                            • Collaborated in an agile environment, participating in sprint planning, grooming, daily scrum meetings and code reviews to maintain a streamlined development process.`,
            image: CAE,
            linkedinUrl: "https://www.linkedin.com/company/cae/",
        },
        {
            id: 2,
            company: "Phoenix Solutions Inc.",
            position: "Junior Software Engineer & IT Technician",
            jobType: "Internship + Part-time",
            startDate: "May 1, 2023",
            endDate: "Present",
            description: `  • Developed an array of SQL queries to generate comprehensive product and inventory reports.
                            • Crafted and implemented visual sales and inventory dashboards in Power BI using SQL queries.
                            • Collaborated within a team to conceptualize and integrate innovative functionalities into the corporate website leveraging agile methodologies employing ReactJS, CSS, and BBj.
                            • Conducted remote video conferences with customers to provide guidance on ODBC connection setups.`,
            image: Phoenix,
            linkedinUrl: "https://www.linkedin.com/company/phoenix-business-systems-inc-/",
        },
        {
            id: 3,
            company: "Soccer Pointe-Claire",
            position: "Referee",
            jobType: "Part-time",
            startDate: "April 1, 2015",
            endDate: "October 31, 2022",
            description: `  • Officiated over 200 games for the Pointe-Claire Soccer Association and regional leagues. 
                            • Ensured fair play, enforced rules, and resolved disputes through effective communication and teamwork.`,
            image: Reffing,
            linkedinUrl: "https://www.linkedin.com/company/soccerpointeclaire/",
        }
    ];

    const handleWorkClick = (linkedinUrl) => {
        window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className='section' id='work'>
            <div className="container mx-auto">
                {/* Header */}
                <motion.div
                    variants={fadeIn('down', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='text-center'>
                    <h1 className='h2 font-bold leading-tight text-accent mb-4'>
                        Work Experience
                    </h1>
                </motion.div>

                {/* Work Experience Timeline */}
                <div className='space-y-2'>
                    {workData.map((work, index) => (
                        <motion.div
                            key={work.id}
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
                                                        src={work.image} 
                                                        alt={work.company}
                                                        className='w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300 cursor-pointer'
                                                        onClick={() => handleWorkClick(work.linkedinUrl)}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className='flex-1 text-center lg:text-left'>
                                            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1.5'>
                                                {/* Left Side - Company Info */}
                                                <div className='flex-1'>
                                                    <div className='flex flex-col lg:flex-row lg:items-center lg:gap-3'>
                                                        {/* Company Info */}
                                                        <div className='flex-1 flex flex-col lg:flex-row lg:items-center lg:gap-3'>
                                                            <div>
                                                                <h3 className='text-lg font-bold text-white transition-colors'>
                                                                    {work.company}
                                                                </h3>
                                                                <div className='flex items-center gap-2 justify-center lg:justify-start'>
                                                                    <h4 className='text-sm font-medium text-white/90'>
                                                                        {work.position}
                                                                    </h4>
                                                                    <span className='inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white'>
                                                                        {work.jobType}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right Side - Meta Information */}
                                                <div className='flex flex-col lg:items-end gap-1.5'>
                                                    {/* Meta Information */}
                                                    <div className='flex flex-wrap justify-center lg:justify-end gap-2 text-xs text-white/70'>
                                                        <span className='px-2 py-0.5 bg-white/10 rounded-full text-xs text-white/80 font-medium border border-white/20'>
                                                            {calculateDuration(work.startDate, work.endDate)}
                                                        </span>
                                                        <div className='flex items-center gap-1'>
                                                            <Calendar className='w-3 h-3' />
                                                            {formatDateRange(work.startDate, work.endDate)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description - Hidden on mobile to save space */}
                                            <div className='hidden lg:block text-white/70 text-sm mt-1.5 leading-relaxed whitespace-pre-line'>
                                                {work.description}
                                            </div>
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

export default WorkExperience;