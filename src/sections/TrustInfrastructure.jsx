import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiGlobe, FiCloud, FiCheckCircle, FiCpu, FiLock, FiServer } from 'react-icons/fi';

const InfrastructureCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="p-8 glass-morphism rounded-[2.5rem] border border-white/10 group hover:border-accent/40 transition-all duration-500"
    >
        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

const TrustInfrastructure = () => {
    return (
        <section id="trust" className="py-24 relative overflow-hidden section-light">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-accent font-bold tracking-widest uppercase mb-4"
                    >
                        Infrastructure Modernization & Resilience
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black text-white mb-8"
                    >
                        Architectural <span className="text-gradient">Durability & Risk Mitigation</span>
                    </motion.h3>
                    <p className="text-text-muted text-xl font-light leading-relaxed max-w-2xl mx-auto opacity-70">
                        Strategic orchestration of elite-grade infrastructure facilitates organizational resilience
                        and operational agility. Engineering for zero-trust integrity and global sovereign reach.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <InfrastructureCard
                        icon={FiShield}
                        title="Kernel-Level Risk Mitigation"
                        desc="Advanced encryption protocols, IAM governance, and automated vector threat detection integrated into the architectural foundation."
                        delay={0.1}
                    />
                    <InfrastructureCard
                        icon={FiGlobe}
                        title="Global Sovereign Reach"
                        desc="Deployment across sovereign cloud-native node networks ensuring sub-20ms latency and data residency compliance."
                        delay={0.2}
                    />
                    <InfrastructureCard
                        icon={FiCloud}
                        title="Elastic Infrastructure Governance"
                        desc="Measured orchestration of serverless foundations that expand precisely with organizational magnitude while maintaining structural integrity."
                        delay={0.3}
                    />
                </div>

                {/* 3D Visual Simulation: Network Graph */}
                <div className="relative h-[400px] glass-morphism rounded-[4rem] border border-white/10 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/50" />

                    {/* Animated Nodes and Links */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 360]
                            }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[600px] h-[600px] border border-accent/10 rounded-full"
                        />
                        <motion.div
                            animate={{
                                scale: [1.1, 1, 1.1],
                                rotate: [360, 0]
                            }}
                            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[400px] h-[400px] border border-accent/20 rounded-full dashed-border"
                        />

                        <div className="relative z-10 text-center">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-24 h-24 bg-accent/20 border border-accent/40 rounded-3xl flex items-center justify-center text-accent mb-6 mx-auto backdrop-blur-md"
                            >
                                <FiLock size={40} />
                            </motion.div>
                            <h4 className="text-2xl font-black text-white uppercase tracking-[0.2em]">Infrastructure Verified</h4>
                            <p className="text-accent font-bold text-xs mt-4 tracking-widest uppercase">Global Compliance Standard SOC2 / HIPAA</p>
                        </div>

                        {/* Floating "Server" Nodes */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-12 h-12 glass-morphism border border-white/20 rounded-xl flex items-center justify-center text-text-muted"
                                initial={{
                                    x: Math.cos(i * 60 * Math.PI / 180) * 200,
                                    y: Math.sin(i * 60 * Math.PI / 180) * 200
                                }}
                                animate={{
                                    y: [Math.sin(i * 60 * Math.PI / 180) * 200 - 10, Math.sin(i * 60 * Math.PI / 180) * 200 + 10]
                                }}
                                transition={{
                                    duration: 2 + i,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                <FiServer size={20} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustInfrastructure;
