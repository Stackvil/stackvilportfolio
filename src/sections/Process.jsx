import { motion } from 'framer-motion';

const steps = [
    { title: 'Strategic Alignment', desc: 'Alignment with leadership teams to define mission-critical transformation objectives.' },
    { title: 'Ecosystem Design', desc: 'Crafting authoritative architectural blueprints for resilient, cloud-native foundations.' },
    { title: 'Execution Governance', desc: 'Measured oversight during the implementation of high-stakes technology transformation.' },
    { title: 'Resilience Audit', desc: 'Rigorous validation of system integrity, security posture, and operational throughput.' },
    { title: 'Measured Optimization', desc: 'Long-term advisory for continuous infrastructure modernization and performance scale.' },
];

const Process = () => {
    return (
        <section id="leadership-methodology" className="py-32 relative overflow-hidden bg-primary/30">
            <div className="container mx-auto px-6">
                <div className="mb-24">
                    <h2 className="text-accent font-bold tracking-[0.4em] uppercase mb-6 text-xs">Engagement Methodology</h2>
                    <h3 className="text-5xl md:text-7xl font-black text-text-primary tracking-tight">The <span className="text-gradient">Strategic Roadmap</span></h3>
                </div>

                <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-blue opacity-20 hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center max-w-[200px]"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary border-2 border-accent-blue flex items-center justify-center mb-6 relative group">
                                <div className="absolute inset-0 rounded-full bg-accent-blue opacity-20 group-hover:scale-150 transition-transform duration-500 blur-xl" />
                                <span className="text-2xl font-bold text-accent-blue">{index + 1}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-text-primary">{step.title}</h4>
                            <p className="text-text-muted text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
