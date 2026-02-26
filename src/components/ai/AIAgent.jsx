import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX } from 'react-icons/fi';
import { useAIAgent } from '../../hooks/useAIAgent';
import ChatWindow from './ChatWindow';

const AIAgent = () => {
    const agent = useAIAgent();

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            <AnimatePresence>
                {agent.isOpen && (
                    <ChatWindow agent={agent} />
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => agent.setIsOpen(!agent.isOpen)}
                aria-label={agent.isOpen ? "Close AI chat" : "Open AI chat"}
                className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-200 cursor-pointer ${agent.isOpen
                    ? 'bg-red-500/80 backdrop-blur-md rotate-90 border border-white/10'
                    : 'bg-accent hover:bg-accent/90 shadow-accent/40'
                    }`}
            >
                {agent.isOpen ? <FiX size={28} /> : <FiMessageSquare size={28} />}

                {!agent.isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-primary flex items-center justify-center"
                    >
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </motion.div>
                )}
            </motion.button>
        </div>
    );
};

export default AIAgent;
