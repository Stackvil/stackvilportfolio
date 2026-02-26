import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as Fiber from '@react-three/fiber';
import * as Drei from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useTheme } from '../../theme/ThemeProvider';

const { Canvas, useFrame } = Fiber;
const { Float, Center, Text3D } = Drei;

const LogoParticles = () => {
    const { themes, currentTheme } = useTheme();
    const activeTheme = themes[currentTheme];
    const pointsRef = useRef();
    const count = 5000;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            // Initial random sphere
            const radius = 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
            pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            pos[i3 + 2] = radius * Math.cos(phi);
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (pointsRef.current) {
            pointsRef.current.rotation.y = time * 0.1;
            pointsRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
        }
    });

    useEffect(() => {
        // Form logo animation
        // For now, we simulate "forming" by shrinking the sphere into a more condensed core
        gsap.to(pointsRef.current.position, {
            z: -2,
            duration: 3,
            ease: "expo.out"
        });
    }, []);

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color={activeTheme.colors.accent}
                transparent
                opacity={0.8}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const CinematicIntro = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 6000); // 6 seconds for intro

        const progressInterval = setInterval(() => {
            setProgress(prev => Math.min(prev + 1, 100));
        }, 50);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[999] bg-primary flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <LogoParticles />
                </Canvas>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-center"
                >
                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tightest mb-4">
                        STACKVIL
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-accent uppercase tracking-widest font-bold text-sm md:text-base"
                    >
                        Engineering Next-Gen Platforms
                    </motion.p>
                </motion.div>

                <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mt-12 relative">
                    <motion.div
                        className="absolute h-full bg-accent left-0"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <p className="text-white/30 text-[10px] uppercase font-bold tracking-tighter">
                    Initializing Infrastructure... {progress}%
                </p>
            </div>

            <button
                onClick={onComplete}
                className="absolute bottom-12 right-12 px-6 py-2 glass-morphism rounded-full text-white/50 hover:text-white transition-all text-xs font-bold uppercase tracking-widest border border-white/10 hover:border-white/20"
            >
                Skip Intro
            </button>
        </motion.div>
    );
};

export default CinematicIntro;
