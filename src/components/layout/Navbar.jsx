import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Advisory', href: '#' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Strategy', href: '#leadership' },
        { name: 'Case Studies', href: '#projects' },
        { name: 'Engage', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass-morphism border-b border-white/5' : 'py-8 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-3 shrink-0"
                >
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                        <span className="text-white font-black text-xl">S</span>
                    </div>
                    <span className="text-lg font-black tracking-tighter hidden xl:block text-text-primary whitespace-nowrap">
                        STACKVIL <span className="text-accent opacity-60">TECHNOLOGIES PVT LIMITED</span>
                    </span>
                </motion.div>

                <ul className="hidden lg:flex space-x-6 xl:space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a
                                href={link.href}
                                className="text-text-muted text-[10px] font-bold uppercase tracking-[0.2em] xl:tracking-[0.3em] hover:text-text-primary transition-colors duration-300 relative group whitespace-nowrap"
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full" />
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <div className="flex items-center gap-4 xl:gap-6 shrink-0 z-50">
                    <div className="hidden sm:block">
                        {children}
                    </div>
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:block px-6 py-2.5 bg-accent text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 text-sm whitespace-nowrap"
                    >
                        Request Audit
                    </motion.button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
