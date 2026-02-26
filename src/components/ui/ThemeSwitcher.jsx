import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDroplet, FiCheck } from 'react-icons/fi';
import { useTheme } from '../../theme/ThemeProvider';

const ThemeSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { themes, currentTheme, setTheme } = useTheme();

    return (
        <div className="fixed top-24 right-6 z-[9999]">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 rounded-full glass-morphism border border-white/10 flex items-center justify-center text-accent shadow-xl shadow-black/20 hover:border-accent/50 transition-all duration-300"
            >
                <FiDroplet size={20} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10, x: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10, x: 10 }}
                        className="absolute top-16 right-0 w-64 glass-morphism rounded-3xl p-4 border border-white/10 shadow-2xl backdrop-blur-2xl"
                    >
                        <h3 className="text-text font-bold text-xs uppercase tracking-widest mb-4 px-2 opacity-50">Select Theme</h3>
                        <div className="grid grid-cols-1 gap-2">
                            {Object.values(themes).map((theme) => (
                                <button
                                    key={theme.id}
                                    onClick={() => {
                                        setTheme(theme.id);
                                        setIsOpen(false);
                                    }}
                                    className={`flex items-center justify-between p-3 rounded-2xl transition-all duration-300 group ${currentTheme === theme.id
                                        ? 'bg-accent/10 border-accent/20'
                                        : 'hover:bg-white/5 border-transparent'
                                        } border`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-6 h-6 rounded-full border border-white/10"
                                            style={{
                                                background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})`
                                            }}
                                        />
                                        <span className={`text-sm font-medium ${currentTheme === theme.id ? 'text-accent' : 'text-text-muted transition-colors group-hover:text-text'}`}>
                                            {theme.name}
                                        </span>
                                    </div>
                                    {currentTheme === theme.id && <FiCheck className="text-accent" />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeSwitcher;
