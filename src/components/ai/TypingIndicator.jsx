import { motion } from 'framer-motion';

const TypingIndicator = () => {
    return (
        <div className="flex gap-1 p-3 glass-morphism rounded-2xl w-fit">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                    }}
                    className="w-1.5 h-1.5 bg-accent-blue rounded-full"
                />
            ))}
        </div>
    );
};

export default TypingIndicator;
