import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTarget, FiArrowRight, FiActivity } from 'react-icons/fi';

const PersonalizationContext = createContext();

export const PersonalizationProvider = ({ children }) => {
    const [userType, setUserType] = useState('transformation'); // Default to Transformation Roadmap

    const contentMap = {
        transformation: {
            heroTitle: 'Strategic Technology & AI Consulting. Enterprise Execution. <span className="text-gradient">Product Innovation.</span>',
            heroDesc: 'We advise, architect, and build intelligent digital systems — while developing next-generation AI platforms.',
            cta: 'Request Executive Briefing',
            consultingFocus: 'Strategic Consulting & Product Lab'
        },
        architecture: {
            heroTitle: 'Resilient <span className="text-gradient">Cloud-Native Architecture</span>',
            heroDesc: 'Measured technical advisory and high-stakes infrastructure consulting for mission-critical enterprise environments.',
            cta: 'Schedule Architecture Audit',
            consultingFocus: 'Architecture Consulting'
        },
        enablement: {
            heroTitle: 'Strategic <span className="text-gradient">AI Enablement Advisory</span>',
            heroDesc: 'Confident governance and AI-first operational roadmaps designed to modernize enterprise systems and mitigate transition risks.',
            cta: 'Initiate Strategic Assessment',
            consultingFocus: 'AI Enablement Strategy'
        }
    };

    return (
        <PersonalizationContext.Provider value={{ userType, setUserType, content: contentMap[userType] || contentMap['transformation'] }}>
            {children}
        </PersonalizationContext.Provider>
    );
};

export const usePersonalization = () => useContext(PersonalizationContext);

export const StickyCTA = () => {
    const { content } = usePersonalization();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 1000);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90vw] md:w-auto"
                >
                    <div className="glass-morphism px-8 py-4 rounded-2xl border border-accent/30 shadow-2xl shadow-accent/20 flex flex-col md:flex-row items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                <FiActivity className="animate-pulse" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Strategic Partnership</p>
                                <p className="text-white font-bold text-sm">{content.consultingFocus}</p>
                            </div>
                        </div>
                        <button className="bg-accent text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-accent/40 transition-all flex items-center gap-2 whitespace-nowrap">
                            {content.cta} <FiArrowRight />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const UserTypeSelector = () => {
    const { userType, setUserType } = usePersonalization();
    const [isOpen, setIsOpen] = useState(false);

    const types = [
        { id: 'transformation', label: 'Transformation Roadmap' },
        { id: 'architecture', label: 'Architecture Governance' },
        { id: 'enablement', label: 'AI Strategy & Enablement' }
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 glass-morphism border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-white transition-all"
            >
                <FiTarget className="text-accent" />
                Mode: {types.find(t => t.id === userType)?.label || 'Transformation Roadmap'}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-full mt-4 w-64 glass-morphism border border-white/10 rounded-[2rem] p-4 shadow-2xl"
                    >
                        <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-4 px-4">Identify Your Type</p>
                        <div className="space-y-2">
                            {types.map(t => (
                                <button
                                    key={t.id}
                                    onClick={() => {
                                        setUserType(t.id);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${userType === t.id ? 'bg-accent text-white' : 'text-text-muted hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
