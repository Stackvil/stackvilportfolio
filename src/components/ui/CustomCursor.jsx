import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [cursorType, setCursorType] = useState('default');
    const [cursorText, setCursorText] = useState('');

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;

            // Fast direct DOM manipulation for positioning (hardware accelerated)
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
            if (followerRef.current) {
                // Subtle smoothing for follower via CSS transition/transform
                followerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }

            // Optimize target detection (batch reads if possible, but let's keep it simple and fast)
            const target = e.target;
            const isPointer = target.closest('button, a') ||
                window.getComputedStyle(target).cursor === 'pointer';

            const hasTextHover = target.getAttribute('data-cursor-text');

            if (hasTextHover) {
                setCursorType('text');
                setCursorText(hasTextHover);
            } else if (isPointer) {
                setCursorType('pointer');
            } else {
                setCursorType('default');
            }
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Main Cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 will-change-transform flex items-center justify-center rounded-full mix-blend-difference"
                style={{
                    width: cursorType === 'pointer' ? 60 : cursorType === 'text' ? 100 : 12,
                    height: cursorType === 'pointer' ? 60 : cursorType === 'text' ? 100 : 12,
                    backgroundColor: cursorType === 'text' ? 'var(--accent)' : cursorType === 'pointer' ? 'transparent' : 'var(--accent)',
                    border: cursorType === 'pointer' ? '2px solid var(--accent)' : 'none',
                    margin: cursorType === 'pointer' ? '-30px' : cursorType === 'text' ? '-50px' : '-6px',
                    transition: 'width 200ms cubic-bezier(0.23, 1, 0.32, 1), height 200ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease, margin 200ms cubic-bezier(0.23, 1, 0.32, 1)',
                }}
            >
                <AnimatePresence>
                    {cursorType === 'text' && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="text-white text-[10px] font-black uppercase tracking-widest text-center px-2"
                        >
                            {cursorText}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>

            {/* Follower ring - hardware accelerated */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-40 h-40 rounded-full border border-white/5 will-change-transform"
                style={{
                    margin: '-80px',
                    transition: 'transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
            />
        </div>
    );
};

export default CustomCursor;
