import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeProvider';

const Layer = ({ position, color, title, desc, index, onHover }) => {
    const { themes, currentTheme } = useTheme();
    const activeTheme = themes[currentTheme];
    const [hovered, setHovered] = useState(false);
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
        }
    });

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh
                    ref={meshRef}
                    onPointerOver={() => { setHovered(true); onHover({ title, desc }); }}
                    onPointerOut={() => { setHovered(false); onHover(null); }}
                >
                    <boxGeometry args={[4, 0.2, 2.5]} />
                    <meshStandardMaterial
                        color={hovered ? activeTheme.colors.accent : color}
                        transparent
                        opacity={0.8}
                        emissive={hovered ? activeTheme.colors.accent : "#000"}
                        emissiveIntensity={hovered ? 2 : 0}
                    />
                </mesh>
            </Float>

            <Text
                position={[0, 0.5, 0]}
                fontSize={0.2}
                color="white"
                anchorX="center"
                anchorY="middle"
            >
                {title}
            </Text>
        </group>
    );
};

const ArchitectureModel = ({ onHover }) => {
    const layers = [
        { title: "Frontend Layer", desc: "Next.js, React, Tailwind CSS for elite performance.", color: "#3b82f6", pos: [0, 2, 0] },
        { title: "API Layer", desc: "GraphQL & RESTful microservices architecture.", color: "#6366f1", pos: [0, 1, 0] },
        { title: "AI Engine", desc: "LLMs, Neural Networks, and Vector Databases.", color: "#a855f7", pos: [0, 0, 0] },
        { title: "Data Storage", desc: "PostgreSQL, Redis, and S3 for hyper-scale.", color: "#ec4899", pos: [0, -1, 0] },
        { title: "Cloud (AWS)", desc: "Global infra with Terraformed automation.", color: "#f59e0b", pos: [0, -2, 0] },
    ];

    return (
        <group rotation={[0, -Math.PI / 4, 0]}>
            {layers.map((layer, i) => (
                <Layer key={i} index={i} position={layer.pos} {...layer} onHover={onHover} />
            ))}
        </group>
    );
};

const SystemArchitecture = () => {
    const [activeInfo, setActiveInfo] = useState(null);

    return (
        <section className="py-24 relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 text-center mb-16 z-10">
                <h2 className="text-accent font-bold tracking-widest uppercase mb-4">The Blueprint</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-text-primary">
                    High-Performance <span className="text-gradient">Systems</span>
                </h3>
            </div>

            <div className="w-full h-[600px] relative cursor-pointer">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <ArchitectureModel onHover={setActiveInfo} />
                </Canvas>

                {/* Info panel */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: activeInfo ? 1 : 0, y: activeInfo ? 0 : 20 }}
                        className="glass-morphism p-6 rounded-2xl border border-accent/30 backdrop-blur-xl text-center"
                    >
                        <h4 className="text-xl font-bold mb-2 text-text-primary">{activeInfo?.title}</h4>
                        <p className="text-text-muted text-sm">{activeInfo?.desc}</p>
                    </motion.div>
                </div>
            </div>

            <div className="mt-10 text-text-muted text-sm flex gap-8">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-accent" /> Scalability</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-primary" /> Reliability</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-secondary" /> Security</div>
            </div>
        </section>
    );
};

export default SystemArchitecture;
