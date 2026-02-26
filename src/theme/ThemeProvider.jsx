import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes, defaultTheme } from './themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved && themes[saved] ? saved : defaultTheme;
    });

    useEffect(() => {
        const theme = themes[currentTheme];
        const root = document.documentElement;
        const body = document.body;

        Object.entries(theme.colors).forEach(([key, value]) => {
            const cssVarName = `--${key.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}`;
            root.style.setProperty(cssVarName, value);
            body.style.setProperty(cssVarName, value);

            if (value.startsWith('#')) {
                const hex = value.replace('#', '');
                const r = parseInt(hex.substring(0, 2), 16);
                const g = parseInt(hex.substring(2, 4), 16);
                const b = parseInt(hex.substring(4, 6), 16);
                const rgb = `${r}, ${g}, ${b}`;
                root.style.setProperty(`${cssVarName}-rgb`, rgb);
                body.style.setProperty(`${cssVarName}-rgb`, rgb);
            }
        });

        localStorage.setItem('theme', currentTheme);

        // Set color-scheme for browser UI
        root.style.colorScheme = currentTheme === 'white' ? 'light' : 'dark';

        // Add transitioning class if needed
        root.classList.add('theme-transitioning');
        const timer = setTimeout(() => {
            root.classList.remove('theme-transitioning');
        }, 400);

        return () => clearTimeout(timer);
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
