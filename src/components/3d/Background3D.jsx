import React, { useRef, useState, useMemo } from 'react';
import * as Fiber from '@react-three/fiber';
import * as Drei from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useTheme } from '../../theme/ThemeProvider';

// Re-map for easier use
const { Canvas, useFrame } = Fiber;
const { Points, PointMaterial, Float } = Drei;

const Stars = (props) => {
    const ref = useRef();
    const { themes, currentTheme } = useTheme();
    const activeTheme = themes[currentTheme];

    // Using 6000 to ensure it's a multiple of 3 (x, y, z for each point)
    const sphere = useMemo(() => {
        const data = random.inSphere(new Float32Array(6000), { radius: 1.5 });
        for (let i = 0; i < data.length; i++) {
            if (isNaN(data[i])) data[i] = 0;
        }
        return data;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color={activeTheme.colors.accent}
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const TechObjects = () => {
    const { themes, currentTheme } = useTheme();
    const activeTheme = themes[currentTheme];

    return (
        <>
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[-2, 1, -2]}>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshStandardMaterial color={activeTheme.colors.primary} wireframe />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
                <mesh position={[2, -1, -3]}>
                    <icosahedronGeometry args={[0.6, 1]} />
                    <meshStandardMaterial color={activeTheme.colors.accent} wireframe />
                </mesh>
            </Float>
            <Float speed={3} rotationIntensity={0.5} floatIntensity={1.5}>
                <mesh position={[0, -2, -1]}>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial color={activeTheme.colors.secondary} wireframe />
                </mesh>
            </Float>
        </>
    );
};

const Background3D = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-primary">
            <Canvas
                dpr={[1, 2]}
                performance={{ min: 0.5 }}
                camera={{ position: [0, 0, 1] }}
                gl={{ antialias: false, powerPreference: "high-performance" }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars />
                <TechObjects />
            </Canvas>
        </div>
    );
};

export default Background3D;
