import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiShield, FiZap, FiActivity, FiLayers, FiTarget, FiX } from 'react-icons/fi';
import TiltWrapper from '../components/animations/TiltWrapper';

const dnaNodes = [
    {
        id: 'innovation',
        title: 'Innovation-led R&D',
        icon: <FiCpu />,
        desc: 'Strategic cultivation of emerging architectures and advanced neural systems.',
        details: 'Systematic allocation of engineering resources to rigorous R&D, exploring Web3, Quantum Computing, and Advanced Neural Networks to ensure long-term technological dominance.',
        color: 'from-blue-500 to-cyan-400'
    },
    {
        id: 'scalability',
        title: 'Elastic Architecture',
        icon: <FiLayers />,
        desc: 'Systems engineered for frictionless expansion and multi-region resilience.',
        details: 'Built on serverless and micro-tenant foundations, these architectures facilitate seamless scaling from baseline to millions of concurrent users with sub-millisecond response integrity.',
        color: 'from-indigo-500 to-purple-400'
    },
    {
        id: 'security',
        title: 'Mission-Critical Integrity',
        icon: <FiShield />,
        desc: 'Advanced risk mitigation and zero-trust security hardened at the kernel level.',
        details: 'Zero-trust protocols, automated penetration audits, and SOC2 Stage II alignment are fundamental requirements of the engineering pipeline, not optional additions.',
        color: 'from-red-500 to-orange-400'
    },
    {
        id: 'performance',
        title: 'Operational Speed',
        icon: <FiZap />,
        desc: 'Precision engineering for maximum throughput and flawless execution.',
        details: 'Rigorous optimization targeting 100/100 Lighthouse metrics. Implementation includes Edge Intelligence, specialized low-level caching, and network-layer data compression.',
        color: 'from-yellow-400 to-orange-500'
    },
    {
        id: 'automation',
        title: 'Execution Excellence',
        icon: <FiActivity />,
        desc: 'Autonomous workflows designed to eliminate operational friction and human error.',
        details: 'Everything-as-Code philosophy. From automated infrastructure provisioning to comprehensive regression suites and developer lifecycle management, automation is the core engine.',
        color: 'from-green-400 to-emerald-600'
    },
    {
        id: 'ai-first',
        title: 'Intelligent Systems',
        icon: <FiTarget />,
        desc: 'Cognitive intelligence integrated as a core architectural layer.',
        details: 'Intelligence is the foundation, not an overlay. Architectures feature low-latency inference gateways and vector-native data persistence for real-time strategic agents.',
        color: 'from-pink-500 to-rose-400'
    }
];

const Node = ({ node, isSelected, onClick }) => {
    return (
        <TiltWrapper className="h-full">
            <motion.div
                layout
                onClick={() => onClick(node)}
                className={`relative group cursor-pointer p-6 rounded-[2rem] border transition-all duration-500 h-full ${isSelected
                    ? 'glass-morphism border-accent/50 shadow-lg shadow-accent/20'
                    : 'bg-white/5 border-white/10 hover:border-white/25'
                    }`}
            >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center text-white text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    {node.icon}
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2">{node.title}</h3>
                <p className="text-text-muted text-sm line-clamp-2">{node.desc}</p>

                <div className="mt-4 flex items-center text-accent text-xs font-bold uppercase tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore DNA <span className="text-lg">→</span>
                </div>
            </motion.div>
        </TiltWrapper>
    );
};

const EngineeringDNA = () => {
    const [selectedNode, setSelectedNode] = useState(null);

    return (
        <section id="dna" className="py-24 relative overflow-hidden section-light">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-28">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-[0.4em] uppercase mb-6 text-xs"
                    >
                        Strategic Foundation
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-text-primary tracking-tight"
                    >
                        Architectural <span className="text-gradient">Integrity</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dnaNodes.map((node) => (
                        <Node
                            key={node.id}
                            node={node}
                            isSelected={selectedNode?.id === node.id}
                            onClick={setSelectedNode}
                        />
                    ))}
                </div>

                <AnimatePresence>
                    {selectedNode && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/80 backdrop-blur-xl"
                            onClick={() => setSelectedNode(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="w-full max-w-2xl glass-morphism p-12 rounded-[3rem] border border-white/10 relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${selectedNode.color} opacity-10 blur-3xl -mr-32 -mt-32`} />

                                <button
                                    onClick={() => setSelectedNode(null)}
                                    className="absolute top-8 right-8 text-text-muted hover:text-white transition-colors"
                                >
                                    <FiX size={24} />
                                </button>

                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedNode.color} flex items-center justify-center text-white text-3xl mb-8 shadow-xl`}>
                                    {selectedNode.icon}
                                </div>

                                <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">{selectedNode.title} Strategy</h2>
                                <p className="text-text-primary text-xl leading-relaxed mb-8">{selectedNode.details}</p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <p className="text-accent font-bold text-xs uppercase tracking-widest mb-1">Standard</p>
                                        <p className="text-white font-medium">Enterprise Grade</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <p className="text-accent font-bold text-xs uppercase tracking-widest mb-1">Impact</p>
                                        <p className="text-white font-medium">High Magnitude</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default EngineeringDNA;
