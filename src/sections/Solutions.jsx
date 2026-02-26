import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiCpu, FiCloud, FiSmartphone, FiLayout, FiTrendingUp, FiX } from 'react-icons/fi';
import Magnetic from '../components/animations/Magnetic';

const solutions = [
    {
        id: 1,
        title: 'Infrastructure Modernization',
        desc: 'Strategic roadmaps for migrating legacy ecosystems to resilient, high-performance digital foundations.',
        fullDesc: 'Deployment of enterprise-grade modernization strategies focus on absolute consistency, operational continuity, and global architectural scale. Measured advisory for high-stakes transitions.',
        icon: <FiCode size={32} />,
        color: 'from-accent to-transparent',
        stats: ['Ecosystem Audit', 'Strategic Roadmap', 'Scale Governance'],
    },
    {
        id: 2,
        title: 'AI Enablement Strategy',
        desc: 'Authoritative guidance on integrating autonomous intelligence and neural workflows at board-level scale.',
        fullDesc: 'Empowering organizational capability through precision orchestrations of custom LLMs, predictive ethics, and autonomous system governance. Focused on risk-mitigated intelligence adoption.',
        icon: <FiCpu size={32} />,
        color: 'from-secondary to-accent',
        stats: ['Governance Framework', 'Ethics Audit', 'Inference Optimization'],
    },
    {
        id: 3,
        title: 'Cloud-Native Architecture Consulting',
        desc: 'Architectural oversight for high-availability systems engineered with zero-trust security standards.',
        fullDesc: 'Advisory on mission-critical system integrity including infrastructure-as-code paradigms, serverless orchestration, and multi-region resilience. Designed for extreme compliance environments.',
        icon: <FiCloud size={32} />,
        color: 'from-accent/80 to-secondary',
        stats: ['Zero-Trust Design', 'Multi-Region Failover', 'IaC Governance'],
    },
    {
        id: 4,
        title: 'Enterprise Systems Optimization',
        desc: 'Strategic assessment and performance tuning for critical internal administration hubs.',
        fullDesc: 'Harmonization of disparate internal ecosystems through high-fidelity data orchestration. Focused on operational efficiency and precision synchronization across the global enterprise.',
        icon: <FiSmartphone size={32} />,
        color: 'from-accent to-secondary/50',
        stats: ['Throughput Audit', 'Latency Mitigation', 'Data Harmonization'],
    },
    {
        id: 5,
        title: 'Technology Transformation Roadmap',
        desc: 'Long-term digital strategy and advisory for organizations leading market shifts.',
        fullDesc: 'Consultative engagement focusing on architectural debt reduction and the implementation of premium design systems that prioritize user cognition and operational speed.',
        icon: <FiLayout size={32} />,
        color: 'from-secondary to-accent/60',
        stats: ['Debt Mitigation', 'Cognitive Strategy', 'Market IQ'],
    },
    {
        id: 6,
        title: 'Strategic Growth Implementation',
        desc: 'Expert-led deployment of high-performance analytics and market-facing digital assets.',
        fullDesc: 'Measured implementation of intelligence-driven market engines designed to capture and convert high-intent enterprise engagement with absolute brand integrity.',
        icon: <FiTrendingUp size={32} />,
        color: 'from-accent to-secondary',
        stats: ['Conversion Audit', 'Identity Design', 'Growth Governance'],
    },
];

const SolutionCard = ({ solution, setSelected }) => {
    return (
        <motion.div
            layoutId={`solution-${solution.id}`}
            onClick={() => setSelected(solution)}
            whileHover={{ y: -8 }}
            className="group relative p-8 glass-morphism rounded-3xl overflow-hidden cursor-pointer h-full border border-white/5 hover:border-accent/30 transition-all duration-300"
        >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${solution.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-300`} />

            <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-105 group-hover:border-accent/50 transition-all duration-300`}>
                <div className={`text-white group-hover:text-accent transition-colors duration-300`}>{solution.icon}</div>
            </div>

            <h3 className="text-2xl font-black mb-4 group-hover:text-accent transition-colors duration-300 tracking-tight text-text-primary">{solution.title}</h3>
            <p className="text-text-muted leading-relaxed mb-6 line-clamp-2 text-sm md:text-base">{solution.desc}</p>

            <button
                aria-label={`Learn more about ${solution.title}`}
                className="flex items-center text-accent font-bold text-sm uppercase tracking-widest gap-2 group/btn"
            >
                Explore <span className="text-xl transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
            </button>
        </motion.div>
    );
};

const Solutions = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="solutions" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-28">
                    <motion.h2 className="text-accent font-bold tracking-[0.3em] uppercase mb-6 text-xs">Consulting Framework</motion.h2>
                    <h3 className="text-5xl md:text-7xl font-black text-text-primary">Strategic <span className="text-gradient">Advisory Areas</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution) => (
                        <SolutionCard key={solution.id} solution={solution} setSelected={setSelected} />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            className="absolute inset-0 bg-primary/90 backdrop-blur-xl"
                        />

                        <motion.div
                            layoutId={`solution-${selected.id}`}
                            className="relative w-full max-w-5xl bg-primary border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[800px]"
                        >
                            <div className={`w-full md:w-2/5 h-64 md:h-full bg-gradient-to-br ${selected.color} p-12 flex flex-col justify-between relative`}>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -mr-32 -mt-32" />
                                <div className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 text-white">
                                    {selected.icon}
                                </div>
                                <div className="relative z-10">
                                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 line-tight">{selected.title}</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {selected.stats.map(s => (
                                            <span key={s} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-3/5 p-12 overflow-y-auto">
                                <button
                                    onClick={() => setSelected(null)}
                                    aria-label="Close details"
                                    className="absolute top-8 right-8 w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-white hover:text-accent transition-all duration-200 cursor-pointer z-[110]"
                                >
                                    <FiX size={24} />
                                </button>

                                <h4 className="text-accent font-bold tracking-widest uppercase mb-6 text-xs opacity-50">Architectural Context</h4>
                                <p className="text-text-primary text-2xl md:text-3xl font-medium leading-tight mb-10">{selected.fullDesc}</p>

                                <h4 className="text-accent font-bold tracking-widest uppercase mb-6 text-xs opacity-50">Engineering Pillars</h4>
                                <div className="grid grid-cols-2 gap-4 mb-12">
                                    {['Architecture Design', 'Performance Audit', 'Security Hardening', 'Auto-scaling Infra'].map(t => (
                                        <div key={t} className="p-4 glass-morphism rounded-xl border border-white/5 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                            <span className="text-text-muted text-sm font-medium">{t}</span>
                                        </div>
                                    ))}
                                </div>

                                <Magnetic>
                                    <button className="px-12 py-6 bg-accent text-white rounded-xl font-bold transition-all w-full md:w-auto shadow-xl shadow-accent/20">
                                        Request Strategic Audit
                                    </button>
                                </Magnetic>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Solutions;
