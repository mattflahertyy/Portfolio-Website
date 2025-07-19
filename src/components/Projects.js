import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../variants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [expandedDescriptions, setExpandedDescriptions] = useState({});

    const projects = [
        {
            id: 1,
            title: "Smartess (Capstone Project)",
            tech: "React, Typescript, Go, NoSQL",
            description: "Directed a 10-member team for 8 months in orchestrating the development of a home system using React.js, JavaScript, TypeScript, Go and Firebase, split into a website team and a hub device team. Employed Agile development methodologies, conducting weekly meetings to foster collaboration, adaptability, and consistent progress towards project milestones, while orchestrating CI/CD pipelines using GitHub.",
            link: "https://smartess.vercel.app/",
            gradient: "from-blue-500 to-red-600"
        },
        {
            id: 2,
            title: "AI Facial Recognition",
            tech: "Python",
            description: "Developed a robust data preprocessing pipeline, automating tasks like duplicate removal, image resizing, and data splitting to optimize the dataset for AI model training. Trained and evaluated multiple Convolutional Neural Network (CNN) architectures, implementing cross-validation and early stopping to improve model accuracy and reduce overfitting. Conducted bias detection and mitigation based on race and gender metrics, enhancing the model's fairness through targeted data augmentation and evaluation of performance across demographics.",
            link: "https://github.com/mattflahertyy/Machine-Learning-Facial-Recognition/",
            gradient: "from-yellow-500 to-orange-600"
        },
        {
            id: 3,
            title: "Predicting NFL Injuries - ML",
            tech: "Python, Power BI",
            description: "This machine learning project aimed to predict NFL injuries by combining Kaggle data with personally scraped NFL player and injury data. After thorough cleaning and merging, we trained a model to forecast injuries based on weather, age, and position. Utilizing Power BI, we visualized the insights through graphs, offering a comprehensive understanding of injury patterns and contributing factors.",
            link: "https://github.com/mattflahertyy/Predicting-NFL-Injuries",
            gradient: "from-green-500 to-teal-600"
        },
        {
            id: 4,
            title: "CondoConnect",
            tech: "React, JavaScript, NoSQL",
            description: "CondoConnect is a collaborative effort of 10 developers streamlining a condo management system between condo companies and renters/owners. The system offers essential features like account creation, robust user authentication, condo dashboards, and many more features. The tech stack includes a React JS front end along with Javascript and a Firebase DB storage, showcasing proficiency in modern web development tools and technologies.",
            link: "https://github.com/leobrod44/Mini-Capstone/",
            gradient: "from-green-500 to-purple-600"
        },
        {
            id: 5,
            title: "DB Socket Server",
            tech: "Python",
            description: "This Python project is a client/server database program. The server manages a customer database from a text file. Clients interact through a menu, performing operations like finding, adding, updating, and deleting records.",
            link: "https://github.com/mattflahertyy/DBSocketServer",
            gradient: "from-orange-500 to-red-600"
        },
        {
            id: 6,
            title: "Orthello",
            tech: "Java",
            description: "Orthello is a 2D board game which is played through the console.",
            link: "https://github.com/mattflahertyy/Orthello",
            gradient: "from-pink-500 to-rose-600"
        }

    ];

    const maxIndex = projects.length - 3;

    useEffect(() => {
        if (cardRef.current) {
            const style = getComputedStyle(cardRef.current);
            const width = cardRef.current.offsetWidth;
            const marginRight = parseFloat(style.marginRight || 0);
            setCardWidth(width + marginRight);
        }
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const toggleDescription = (id) => {
        setExpandedDescriptions((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <section className='section' id='projects'>
            <div className="container mx-auto">
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='text-center mb-12'>
                    <h1 className='h2 font-bold leading-tight text-accent mb-4'>
                        Projects
                    </h1>
                    <p className='text-white/80 max-w-2xl mx-auto'>
                        Check out some of my personal and academic projects showcasing various languages, technologies and problem-solving approaches.
                    </p>
                </motion.div>

                <div className="relative">
                    <AnimatePresence>
                        {currentIndex > 0 && (
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                onClick={prevSlide}
                                className="absolute left-[-5%] top-1/2 -translate-y-1/2 -translate-x-full z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </motion.button>
                        )}
                    </AnimatePresence>

                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-0.5"
                            animate={{ x: -currentIndex * cardWidth }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                duration: 0.6
                            }}
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    ref={index === 0 ? cardRef : null}
                                    className="group flex-shrink-0 w-[calc(33.333%-1rem)] mr-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: (index % 3) * 0.1,
                                        ease: "easeOut"
                                    }}
                                >
                                    <div className="relative h-full flex flex-col justify-between bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                                        <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-start justify-between mb-4">
                                                <h3 className="text-xl font-bold text-white transition-colors">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            <div className="mb-4">
                                                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 font-medium">
                                                    {project.tech}
                                                </span>
                                            </div>

                                            <p className="text-white/70 text-sm leading-relaxed mb-2 line-clamp-4">
                                                {project.description}
                                            </p>
                                            {project.description.length > 200 && (
                                                <button
                                                    onClick={() => toggleDescription(project.id)}
                                                    className="text-xs text-accent hover:underline mb-4 self-start"
                                                >
                                                    Show more
                                                </button>
                                            )}

                                            {expandedDescriptions[project.id] && (
                                                <div className="absolute inset-0 z-50 bg-black/95 p-3 flex flex-col justify-center items-center text-center text-white">
                                                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                                    <p className="text-sm max-w-md mb-6">{project.description}</p>
                                                    <button
                                                        onClick={() => toggleDescription(project.id)}
                                                        className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition"
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            )}

                                            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 bg-[#625dec] hover:bg-[#5a52d5] text-white px-4 py-1 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                                                >
                                                    View Project
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                                <div className="flex space-x-1">
                                                    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                                                    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <AnimatePresence>
                        {currentIndex < maxIndex && (
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                onClick={nextSlide}
                                className="absolute right-[-5%] top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: maxIndex + 1 }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i === currentIndex ? 'bg-accent w-6' : 'bg-white/30 hover:bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
