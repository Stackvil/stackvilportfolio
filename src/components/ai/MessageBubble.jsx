import { motion } from 'framer-motion';

const MessageBubble = ({ message, isAi }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex ${isAi ? 'justify-start' : 'justify-end'} mb-4`}
        >
            <div
                className={`max-w-[80%] p-4 rounded-2xl ${isAi
                    ? 'glass-morphism text-text-primary rounded-tl-none'
                    : 'bg-accent text-white rounded-tr-none shadow-lg shadow-accent/20'
                    }`}
            >
                <p className="text-sm leading-relaxed">{message}</p>
            </div>
        </motion.div>
    );
};

export default MessageBubble;
