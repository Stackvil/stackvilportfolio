import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Magnetic from '../components/animations/Magnetic';
import { usePersonalization } from '../components/PersonalizationEngine';

const Hero = () => {
    const { content } = usePersonalization();

    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-6xl mx-auto"
                >


                    <h1
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight text-text-primary leading-[1.1] text-balance"
                        dangerouslySetInnerHTML={{ __html: content.heroTitle }}
                    />

                    <div className="max-w-4xl mx-auto mb-16 space-y-6">
                        <p className="text-accent font-black text-[10px] md:text-xs tracking-[0.4em] uppercase">
                            Dual-Engine Technology Company
                        </p>
                        <p className="text-text-muted text-xl md:text-3xl leading-relaxed font-light opacity-90">
                            {content.heroDesc}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <Magnetic>
                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label={content.cta}
                                className="px-12 py-6 bg-accent text-white rounded-xl font-bold transition-all text-lg shadow-xl shadow-accent/20 cursor-pointer"
                            >
                                {content.cta}
                            </motion.button>
                        </Magnetic>
                        <Magnetic>
                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="Request Strategic Audit"
                                className="px-12 py-6 glass-morphism text-white rounded-xl font-bold hover:bg-white/10 transition-all text-lg border border-white/10 cursor-pointer"
                            >
                                Request Strategic Audit
                            </motion.button>
                        </Magnetic>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-text-muted uppercase tracking-widest text-[10px] font-black">Explore Deep</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent opacity-50" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
