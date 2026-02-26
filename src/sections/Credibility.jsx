import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiShield, FiGlobe, FiZap, FiTarget } from 'react-icons/fi';

const StatCounter = ({ end, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const step = end / (duration * 60);
            const timer = setInterval(() => {
                start += step;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const Credibility = () => {
    const stats = [
        { label: "Successful Deployments", value: 250, suffix: "+", icon: <FiGlobe /> },
        { label: "Uptime Reliability", value: 99, suffix: ".9%", icon: <FiZap /> },
        { label: "Projects Delivered", value: 500, suffix: "+", icon: <FiTarget /> },
        { label: "Security Guaranteed", value: 100, suffix: "%", icon: <FiShield /> },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-primary/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-8 glass-morphism rounded-3xl border border-white/5 group hover:border-accent/30 transition-all duration-500"
                        >
                            <div className="text-3xl text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                                {stat.icon}
                            </div>
                            <h4 className="text-5xl font-black mb-2 text-text-primary tabular-nums">
                                <StatCounter end={stat.value} suffix={stat.suffix} />
                            </h4>
                            <p className="text-text-muted uppercase tracking-widest text-xs font-bold">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-flex flex-wrap justify-center items-center gap-12 p-8 glass-morphism rounded-[2.5rem] border border-white/5"
                    >
                        <div className="text-text-muted font-bold uppercase tracking-[0.3em] text-[10px] w-full mb-4">Enterprise Trusted Partner</div>
                        {['AWS Certified', 'GDPR Compliant', 'ISO 27001', 'SOC2 Stage II'].map(cert => (
                            <span key={cert} className="text-text-muted font-bold text-sm hover:text-text-primary transition-colors cursor-default">{cert}</span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Credibility;
