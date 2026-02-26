import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const sections = [
    { id: 'hero', label: 'Advisory' },
    { id: 'dna', label: 'Integrity' },
    { id: 'leadership', label: 'Strategy' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'projects', label: 'Performance' },
    { id: 'contact', label: 'Engagement' }
];

const ScrollProgression = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 300;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-center gap-8">
            <div className="h-48 w-[2px] bg-white/5 relative rounded-full overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 right-0 bg-accent origin-top"
                    style={{ scaleY, height: '100%' }}
                />
            </div>

            <div className="flex flex-col gap-6">
                {sections.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => scrollToSection(s.id)}
                        className="group relative flex items-center"
                    >
                        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${activeSection === s.id ? 'bg-accent scale-150' : 'bg-white/20 group-hover:bg-white/50'
                            }`} />

                        <span className={`absolute left-6 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 origin-left ${activeSection === s.id ? 'opacity-100 translate-x-0 text-accent' : 'opacity-0 -translate-x-4 pointer-events-none'
                            }`}>
                            {s.label}
                        </span>

                        <div className="absolute left-6 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.3em] text-white/20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 pointer-events-none">
                            {s.label}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ScrollProgression;
