import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiBox, FiCheckCircle, FiServer, FiGlobe, FiCpu, FiTrendingUp, FiActivity, FiZap } from 'react-icons/fi';
import TiltWrapper from '../components/animations/TiltWrapper';

const PipelineStep = ({ icon, title, status, isActive, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 ${isActive ? 'glass-morphism border-accent shadow-lg shadow-accent/20' : 'bg-white/5 border-white/5 opacity-50'
            }`}
    >
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${status === 'complete' ? 'bg-green-500 text-white' :
            isActive ? 'bg-accent text-white animate-pulse' : 'bg-white/10 text-text-muted'
            }`}>
            {status === 'complete' ? <FiCheckCircle /> : icon}
        </div>
        <div>
            <p className="text-xs font-bold uppercase tracking-widest text-text-muted">{title}</p>
            <p className={`text-sm font-medium ${isActive ? 'text-white' : 'text-text-muted/50'}`}>
                {status === 'complete' ? 'Verified' : isActive ? 'Processing...' : 'Queued'}
            </p>
        </div>
    </motion.div>
);

const MetricBox = ({ label, value, unit, icon: Icon }) => (
    <TiltWrapper className="h-full">
        <div className="p-6 glass-morphism rounded-[2rem] border border-white/10 h-full">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    <Icon size={20} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">{label}</p>
            </div>
            <div className="flex items-baseline gap-1">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black text-white"
                >
                    {value}
                </motion.span>
                <span className="text-accent font-bold text-sm">{unit}</span>
            </div>
        </div>
    </TiltWrapper>
);

const LiveSimulation = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const [activeStep, setActiveStep] = useState(0);

    // Simulate pipeline progression based on scroll
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest > 0.1 && latest < 0.3) setActiveStep(1);
            else if (latest >= 0.3 && latest < 0.5) setActiveStep(2);
            else if (latest >= 0.5 && latest < 0.7) setActiveStep(3);
            else if (latest >= 0.7) setActiveStep(4);
            else setActiveStep(0);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section ref={containerRef} id="simulation" className="py-24 relative overflow-hidden bg-primary/50">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Pipeline Story */}
                    <div className="lg:col-span-12 xl:col-span-5">
                        <motion.h2 className="text-accent font-bold tracking-widest uppercase mb-4">Real-time Operations</motion.h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-8">
                            Live <span className="text-gradient">System</span> Simulation
                        </h3>
                        <p className="text-text-muted text-lg mb-12 max-w-xl font-normal opacity-80 leading-relaxed">
                            Proprietary deployment frameworks facilitate the entire product lifecycle,
                            ensuring rapid-cadence delivery with mission-critical reliability.
                        </p>

                        <div className="space-y-4 max-w-md relative">
                            {/* Vertical Line Connector */}
                            <div className="absolute left-[36px] top-8 bottom-8 w-[2px] bg-white/5" />

                            <PipelineStep icon={<FiBox />} title="Source Build" status={activeStep > 1 ? 'complete' : ''} isActive={activeStep === 1} delay={0.1} />
                            <PipelineStep icon={<FiCpu />} title="Automated Testing" status={activeStep > 2 ? 'complete' : ''} isActive={activeStep === 2} delay={0.2} />
                            <PipelineStep icon={<FiGlobe />} title="Cloud Deployment" status={activeStep > 3 ? 'complete' : ''} isActive={activeStep === 3} delay={0.3} />
                            <PipelineStep icon={<FiCheckCircle />} title="Live Monitoring" status={activeStep > 4 ? 'complete' : ''} isActive={activeStep === 4} delay={0.4} />
                        </div>
                    </div>

                    {/* Right: Monitoring Dashboards */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <MetricBox icon={FiServer} label="API Requests" value="1.2M" unit="/hr" />
                            <MetricBox icon={FiActivity} label="System Uptime" value="99.9" unit="%" />
                            <MetricBox icon={FiTrendingUp} label="Perf Boost" value="+42" unit="%" />
                            <MetricBox icon={FiZap} label="Response Time" value="18" unit="ms" />
                        </div>

                        {/* Visual Animation: Cloud Visualization */}
                        <div className="mt-8 glass-morphism rounded-[3rem] h-[300px] border border-white/10 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                            <div className="relative z-10 flex flex-col items-center">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="w-24 h-24 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent mb-6"
                                >
                                    <FiGlobe size={48} />
                                </motion.div>
                                <p className="text-white font-bold tracking-widest uppercase text-xs">Global Edge Network Active</p>
                                <div className="flex gap-2 mt-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <motion.div
                                            key={i}
                                            animate={{ opacity: [0.2, 1, 0.2] }}
                                            transition={{ delay: i * 0.2, duration: 1, repeat: Infinity }}
                                            className="w-1.5 h-1.5 rounded-full bg-green-500"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Animated Background Lines */}
                            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    d="M 10 50 Q 50 10 90 50"
                                    fill="none"
                                    stroke="var(--accent)"
                                    strokeWidth="0.5"
                                />
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
                                    d="M 10 60 Q 50 90 90 60"
                                    fill="none"
                                    stroke="var(--accent)"
                                    strokeWidth="0.5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveSimulation;
