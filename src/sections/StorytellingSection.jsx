import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const StorytellingSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    const stories = [
        {
            title: "The Engine",
            subtitle: "Strategic Advisory",
            desc: "Expert-led consulting to navigate complex digital transformation, defining the architecture and governance required for absolute enterprise resilience.",
            gradient: "from-accent/10 to-transparent",
        },
        {
            title: "The Lab",
            subtitle: "Product Innovation",
            desc: "We don't just advise; we build. Our innovation lab continuously develops proprietary AI platforms that redefine operational capability.",
            gradient: "from-primary/10 to-transparent",
        },
        {
            title: "The Synergy",
            subtitle: "Dual-Engine Execution",
            desc: "Consulting funds innovation. Innovation strengthens consulting. This cycle creates an execution-ready engineering partner unlike any traditional agency.",
            gradient: "from-secondary/10 to-transparent",
        },
        {
            title: "The Impact",
            subtitle: "Enterprise Scale",
            desc: "From mission-critical cloud migrations to autonomous AI orchestrations, we deploy hardened infrastructure that leads markets.",
            gradient: "from-accent/10 to-transparent",
        }
    ];

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { translateX: 0 },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                    anticipatePin: 1,
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, []);

    return (
        <div className="overflow-hidden">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="flex flex-row w-[400vw] h-screen relative">
                    {stories.map((story, index) => (
                        <section
                            key={index}
                            className="h-screen w-[100vw] flex items-center justify-center relative px-6 md:px-20 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} -z-10`} />

                            {/* Background dynamic elements */}
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent opacity-5 blur-[100px] animate-pulse" />
                            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary opacity-5 blur-[100px] animate-pulse delay-700" />

                            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                <div className="space-y-6">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="text-accent font-bold tracking-[0.4em] uppercase text-sm block"
                                    >
                                        Phase {index + 1}
                                    </motion.span>
                                    <motion.h2
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-6xl md:text-8xl font-black tracking-tighter text-text-primary"
                                    >
                                        {story.title}
                                    </motion.h2>
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-2xl md:text-3xl text-gradient font-bold"
                                    >
                                        {story.subtitle}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-text-muted text-lg md:text-xl leading-relaxed max-w-lg"
                                    >
                                        {story.desc}
                                    </motion.p>
                                </div>

                                <div className="hidden md:flex justify-center relative">
                                    <div className="w-80 h-80 rounded-[3rem] border border-white/5 glass-morphism rotate-12 flex items-center justify-center p-10 group overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        <div className="text-9xl font-black text-white/5 select-none">{index + 1}</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StorytellingSection;
