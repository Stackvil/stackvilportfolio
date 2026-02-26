import { motion } from 'framer-motion';
import { SiReact, SiAmazonwebservices, SiDocker, SiNodedotjs, SiPython, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, SiFramer, SiThreedotjs } from 'react-icons/si';

const techs = [
    { icon: <SiReact size={40} />, name: 'React', color: 'text-blue-400' },
    { icon: <SiAmazonwebservices size={40} />, name: 'AWS', color: 'text-orange-400' },
    { icon: SiDocker && <SiDocker size={40} />, name: 'Docker', color: 'text-blue-500' },
    { icon: <SiNodedotjs size={40} />, name: 'Node.js', color: 'text-green-500' },
    { icon: SiPython && <SiPython size={40} />, name: 'Python', color: 'text-yellow-500' },
    { icon: SiFirebase && <SiFirebase size={40} />, name: 'Firebase', color: 'text-orange-600' },
    { icon: SiTailwindcss && <SiTailwindcss size={40} />, name: 'Tailwind', color: 'text-cyan-400' },
    { icon: SiJavascript && <SiJavascript size={40} />, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiTypescript && <SiTypescript size={40} />, name: 'TypeScript', color: 'text-blue-600' },
    { icon: SiThreedotjs && <SiThreedotjs size={40} />, name: 'Three.js', color: 'text-white' },
];

const TechStack = () => {
    return (
        <section id="tech" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-accent-blue font-bold tracking-widest uppercase mb-4">Our Arsenal</h2>
                    <h3 className="text-4xl md:text-6xl font-bold">Modern <span className="text-gradient">Tech Stack</span></h3>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {techs.filter(t => t.icon).map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.05,
                                ease: "easeOut"
                            }}
                            whileHover={{
                                scale: 1.1,
                                y: -5,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            className={`flex flex-col items-center gap-4 cursor-pointer p-6 glass-morphism rounded-2xl border border-white/5 hover:border-accent/30 transition-colors duration-300 ${tech.color} min-w-[120px]`}
                        >
                            <div className="text-current drop-shadow-2xl">
                                {tech.icon}
                            </div>
                            <span className="text-text-muted font-black text-[10px] uppercase tracking-[0.2em]">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
