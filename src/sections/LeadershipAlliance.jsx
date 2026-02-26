import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiMap, FiShield, FiTrendingUp } from 'react-icons/fi';

const engagementSteps = [
    {
        title: 'Strategic Assessment',
        desc: 'Rigorous evaluation of current technological debt, operational bottlenecks, and long-term business objectives.',
        icon: <FiTarget />,
        details: 'Deep-dive analysis of organizational readiness and system limitations to establish a baseline for transformation.'
    },
    {
        title: 'Architecture Blueprint',
        desc: 'Design governance for resilient, cloud-native ecosystems that align with enterprise-scale security standards.',
        icon: <FiMap />,
        details: 'Development of detailed technical schematics and infrastructure roadmaps engineered for mission-critical durability.'
    },
    {
        title: 'Implementation Oversight',
        desc: 'Authoritative guidance through the deployment lifecycle, ensuring execution excellence and risk mitigation.',
        icon: <FiShield />,
        details: 'High-level orchestration of cross-functional teams to maintain structural integrity throughout the migration period.'
    },
    {
        title: 'Optimization & Scale',
        desc: 'Measured tuning of system performance and operational throughput to achieve and sustain market leadership.',
        icon: <FiTrendingUp />,
        details: 'Continuous governance and data-driven optimization to ensure the infrastructure evolves with the organizational magnitude.'
    }
];

const LeadershipAlliance = () => {
    return (
        <section id="leadership" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-bold tracking-[0.4em] uppercase mb-8 text-xs"
                    >
                        Long-Term Strategic Partnership
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-text-primary leading-tight tracking-tight"
                    >
                        How We Work With <br />
                        <span className="text-gradient">Leadership Teams</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    {engagementSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="flex items-start gap-8">
                                <span className="text-4xl font-black text-accent/20 font-serif opacity-40 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-accent mb-8 group-hover:border-accent/40 transition-colors">
                                        {step.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold text-text-primary mb-6">{step.title}</h4>
                                    <p className="text-xl text-text-muted font-light leading-relaxed mb-6 max-w-md">{step.desc}</p>
                                    <p className="text-sm text-text-muted/40 font-medium leading-relaxed max-w-sm">{step.details}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Measured Background Element */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-accent/[0.02] to-transparent pointer-events-none" />
        </section>
    );
};

export default LeadershipAlliance;
