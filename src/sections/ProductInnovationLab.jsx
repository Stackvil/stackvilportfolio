import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiGitBranch, FiTrendingUp, FiArrowRight, FiCheckCircle, FiX, FiExternalLink, FiLock } from 'react-icons/fi';
import Magnetic from '../components/animations/Magnetic';

const products = [
    {
        title: "AI Automation Platform",
        status: "Coming Soon",
        desc: "Enterprise-grade workflow automation powered by proprietary LLM orchestrations. Engineered for absolute operational resilience.",
        icon: <FiCpu size={24} />,
        delay: 0.1
    },
    {
        title: "Intelligent Workflow System",
        status: "Private Beta",
        desc: "Predictive resource allocation and operational intelligence for global teams. Built on high-availability cloud architecture.",
        icon: <FiGitBranch size={24} />,
        delay: 0.2
    },
    {
        title: "Predictive Analytics Engine",
        status: "In Development",
        desc: "High-frequency data processing architecture for strategic market intelligence. Zero-trust security model standard.",
        icon: <FiTrendingUp size={24} />,
        delay: 0.3
    }
];

const features = [
    "We incubate AI-driven platforms",
    "We build scalable SaaS products",
    "We apply consulting expertise into proprietary technology",
    "Continuous R&D culture"
];

const ProductInnovationLab = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <section id="innovation-lab" className="py-32 relative border-t border-white/5 overflow-hidden">
            {/* Futuristic accent lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-accent font-bold tracking-[0.3em] uppercase mb-6 text-xs drop-shadow-lg drop-shadow-accent/20">Proprietary Assets</h2>
                            <h3 className="text-5xl md:text-7xl font-black mb-8 text-text-primary leading-tight tracking-tight">
                                Product <br /><span className="text-gradient">Innovation Lab</span>
                            </h3>
                            <p className="text-text-muted mb-10 text-xl font-light leading-relaxed max-w-lg">
                                Consulting funds innovation. Innovation strengthens consulting. Execution validates strategy. We are not just a service company; we are an execution-ready engineering partner with continuous R&D capability.
                            </p>

                            <ul className="space-y-4 mb-12">
                                {features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 text-text-primary font-medium"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <FiCheckCircle size={12} />
                                        </div>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>

                            <Magnetic>
                                <button className="px-10 py-4 bg-accent text-white rounded-xl font-bold flex items-center gap-3 hover:shadow-xl hover:shadow-accent/20 transition-all">
                                    View R&D Roadmap <FiArrowRight />
                                </button>
                            </Magnetic>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-6 lg:col-start-7">
                        <div className="grid grid-cols-1 gap-6">
                            {products.map((product, i) => (
                                <motion.div
                                    key={i}
                                    layoutId={`product-${i}`}
                                    onClick={() => setSelectedProduct({ ...product, index: i })}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: product.delay, duration: 0.5, ease: "easeOut" }}
                                    className="group p-8 glass-morphism rounded-3xl border border-white/5 hover:border-accent/40 transition-all duration-300 relative overflow-hidden cursor-pointer"
                                    aria-label={`View details for ${product.title}`}
                                >
                                    {/* Card Hover Glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full" />

                                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center text-white group-hover:text-accent group-hover:scale-105 transition-all duration-300">
                                            {product.icon}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-4 mb-2">
                                                <h4 className="text-2xl font-black text-text-primary tracking-tight">{product.title}</h4>
                                                <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest rounded-full">
                                                    {product.status}
                                                </span>
                                            </div>
                                            <p className="text-text-muted text-sm leading-relaxed max-w-md">{product.desc}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-8 right-8 text-white/20 group-hover:text-accent transition-colors duration-300">
                                        <FiArrowRight size={20} className="transform -rotate-45" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] bg-primary/95 backdrop-blur-2xl overflow-y-auto"
                    >
                        <div className="min-h-screen container mx-auto px-6 py-20 relative">
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="fixed top-8 right-8 z-[1001] w-12 h-12 glass-morphism rounded-full flex items-center justify-center text-white hover:bg-accent transition-all duration-200 cursor-pointer"
                                aria-label="Close product view"
                            >
                                <FiX size={24} />
                            </button>

                            <div className="max-w-4xl mx-auto">
                                <motion.div layoutId={`product-${selectedProduct.index}`} className="glass-morphism rounded-[3rem] p-12 mb-12 border border-white/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 blur-[100px] -mr-32 -mt-32 pointer-events-none" />

                                    <div className="w-20 h-20 rounded-2xl bg-accent text-white flex items-center justify-center mb-8 shadow-2xl shadow-accent/20">
                                        {selectedProduct.icon}
                                    </div>

                                    <div className="flex items-center gap-4 mb-4">
                                        <h1 className="text-4xl md:text-5xl font-black text-white">{selectedProduct.title}</h1>
                                        <span className="px-4 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-widest rounded-full">
                                            {selectedProduct.status}
                                        </span>
                                    </div>

                                    <p className="text-text-muted text-xl leading-relaxed mb-10 max-w-2xl">{selectedProduct.desc}</p>

                                    <div className="flex flex-wrap gap-4">
                                        <button className="flex items-center gap-2 text-white bg-accent px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-accent/40 transition-all cursor-pointer">
                                            Request Beta Access <FiExternalLink />
                                        </button>
                                        <button className="flex items-center gap-2 text-white/50 glass-morphism px-8 py-4 rounded-xl font-bold cursor-not-allowed border border-white/5">
                                            View Documentation (Locked) <FiLock />
                                        </button>
                                    </div>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                    <div className="glass-morphism p-8 rounded-3xl border border-white/5">
                                        <h3 className="text-xl font-black text-text-primary mb-4 uppercase tracking-widest text-xs opacity-50">Technical Specs</h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-3 text-text-primary text-sm font-medium"><div className="w-2 h-2 rounded-full bg-accent" /> Rust-based Microservices Core</li>
                                            <li className="flex items-center gap-3 text-text-primary text-sm font-medium"><div className="w-2 h-2 rounded-full bg-accent" /> Multi-Tenant Distributed Tracing</li>
                                            <li className="flex items-center gap-3 text-text-primary text-sm font-medium"><div className="w-2 h-2 rounded-full bg-accent" /> Custom Finetuned LLM Integration</li>
                                        </ul>
                                    </div>
                                    <div className="glass-morphism p-8 rounded-3xl border border-white/5">
                                        <h3 className="text-xl font-black text-text-primary mb-4 uppercase tracking-widest text-xs opacity-50">Deployment Models</h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-3 text-text-primary text-sm font-medium"><div className="w-2 h-2 rounded-full bg-accent" /> On-Premise Air-Gapped</li>
                                            <li className="flex items-center gap-3 text-text-primary text-sm font-medium"><div className="w-2 h-2 rounded-full bg-accent" /> VPC Dedicated Multi-Region</li>
                                            <li className="flex items-center gap-3 text-text-primary text-sm font-medium"><div className="w-2 h-2 rounded-full bg-accent" /> SOC2 Compliant Cloud Edge</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default ProductInnovationLab;
