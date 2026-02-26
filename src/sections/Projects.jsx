import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight, FiX, FiCheck } from 'react-icons/fi';

const projects = [
    {
        id: 'erp',
        title: 'Enterprise ERP System',
        category: 'SaaS / AI',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        tags: ['React', 'Node.js', 'AWS', 'AI'],
        challenge: 'The client needed to centralize operations for 500+ global employees with real-time data sync.',
        strategy: 'Implemented a microservices architecture with a focus on real-time event-driven data processing.',
        results: ['40% reduction in operational overhead', 'Real-time sync across 15 regions', '99.99% system uptime'],
        techStack: 'React Enterprise, NestJS, PostgreSQL, Redis, Kubernetes'
    },
    {
        id: 'healthcare',
        title: 'Healthcare AI Platform',
        category: 'HealthTech',
        image: 'https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=1200',
        tags: ['Python', 'TensorFlow', 'Microservices'],
        challenge: 'Automating diagnostics analysis from multi-format medical data while maintaining HIPAA compliance.',
        strategy: 'Developed a federated learning model to train on sensitive data without centralized exposure.',
        results: ['95% accuracy in early detection', 'HIPAA & SOC2 fully compliant', 'Processed 1M+ records'],
        techStack: 'Python, TensorFlow, FastAPI, MongoDB, Docker'
    },
    {
        id: 'crypto',
        title: 'Crypto Exchange Dashboard',
        category: 'FinTech',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200',
        tags: ['Web3', 'Tailwind', 'Real-time'],
        challenge: 'Building a low-latency trading interface capable of handling high-frequency market data updates.',
        strategy: 'Utilized WebSockets with a specialized React view-layer optimization for high-frequency rendering.',
        results: ['Sub-10ms UI update latency', 'Handled 50k+ peak concurrent users', 'Integrated 12+ chains'],
        techStack: 'React, XState, Socket.io, Solidity, Ethers.js'
    },
];

const ProjectCard = ({ project, index, onExplore }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            onClick={() => onExplore(project)}
            className="group relative rounded-[2.5rem] overflow-hidden glass-morphism h-[500px] border border-white/10 cursor-pointer will-change-transform transition-all duration-300 hover:border-accent/40"
        >
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src={project.image}
                    alt="" // Decorative image, title is in h3
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700 ease-out opacity-40 group-hover:opacity-100 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent z-10" />
            </div>

            <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
                <div className="flex gap-2 mb-6">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-accent border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-accent font-bold text-xs tracking-[0.2em] uppercase mb-2">{project.category}</p>
                <h3 className="text-4xl font-black mb-6 text-white leading-tight tracking-tight">{project.title}</h3>

                <div className="flex items-center gap-4">
                    <button
                        aria-label={`View case study for ${project.title}`}
                        className="flex items-center gap-2 text-white bg-accent px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all duration-200 shadow-xl shadow-accent/20 cursor-pointer"
                    >
                        Story Case Study <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const StoryMode = ({ project, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-primary/95 backdrop-blur-2xl overflow-y-auto"
        >
            <div className="min-h-screen container mx-auto px-6 py-20 relative">
                <button
                    onClick={onClose}
                    aria-label="Close case study"
                    className="fixed top-8 right-8 z-[1001] w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-white hover:bg-accent transition-all duration-200 cursor-pointer"
                >
                    <FiX size={24} />
                </button>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <p className="text-accent font-bold tracking-widest uppercase mb-4">Case Study / {project.category}</p>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8">{project.title}</h1>
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 text-white bg-accent px-8 py-4 rounded-2xl font-bold hover:shadow-accent/50 transition-all">
                                Live Demo <FiExternalLink />
                            </button>
                            <button className="flex items-center gap-2 text-white glass-morphism px-8 py-4 rounded-2xl font-bold border border-white/10 hover:border-white/20 transition-all">
                                View Source <FiGithub />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full h-[500px] rounded-[3rem] overflow-hidden mb-20 border border-white/10"
                    >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-12 xl:col-span-8 space-y-16">
                            <section>
                                <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">The Challenge</h2>
                                <p className="text-text-primary text-xl leading-relaxed opacity-80">{project.challenge}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">The Strategy</h2>
                                <p className="text-text-primary text-xl leading-relaxed opacity-80">{project.strategy}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Tech Stack</h2>
                                <div className="flex flex-wrap gap-3">
                                    {project.techStack.split(', ').map(tech => (
                                        <span key={tech} className="px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-text-primary">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-12 xl:col-span-4">
                            <div className="glass-morphism p-10 rounded-[2.5rem] border border-white/10 sticky top-12">
                                <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest">Results</h3>
                                <ul className="space-y-6">
                                    {project.results.map((result, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                                                <FiCheck size={14} />
                                            </div>
                                            <p className="text-text-primary font-medium">{result}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-24 relative section-light">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <motion.h2 className="text-accent font-bold tracking-widest uppercase mb-4">Engineering Showcase</motion.h2>
                        <motion.h3 className="text-4xl md:text-7xl font-black text-white leading-tight">
                            Category <span className="text-gradient">Defining</span> <br /> Digital Products
                        </motion.h3>
                    </div>
                    <p className="text-text-muted max-w-sm text-lg mb-4 font-normal opacity-80">
                        Engineering digital infrastructure that transforms technological potential into quantifiable competitive advantage for industry leaders.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index + 1}
                            onExplore={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <StoryMode
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
