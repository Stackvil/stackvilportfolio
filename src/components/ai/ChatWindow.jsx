import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiX, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

const ChatWindow = ({ agent }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [agent.messages, agent.isTyping]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = e.target.message.value;
        if (!input.trim()) return;
        agent.handleUserInput(input);
        e.target.reset();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[600px] glass-morphism rounded-[2rem] z-50 flex flex-col overflow-hidden shadow-2xl border border-white/10"
        >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                            SV
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-primary rounded-full" />
                    </div>
                    <div>
                        <h3 className="font-bold text-text-primary text-sm uppercase tracking-tight">Strategy Advisory Agent</h3>
                        <p className="text-[10px] text-accent font-black uppercase tracking-[0.2em]">Intelligence active</p>
                    </div>
                </div>
                <button
                    onClick={() => agent.setIsOpen(false)}
                    className="w-8 h-8 flex items-center justify-center text-text-muted hover:text-white transition-colors"
                >
                    <FiX size={20} />
                </button>
            </div>

            {/* Messages */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide"
            >
                {agent.messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg.text} isAi={msg.isAi} />
                ))}
                {agent.isTyping && <TypingIndicator />}
            </div>

            {/* Suggestions */}
            {agent.suggestions.length > 0 && (
                <div className="px-6 py-2 flex gap-2 overflow-x-auto no-scrollbar">
                    {agent.suggestions.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => agent.handleModeChange(s.mode)}
                            className="px-4 py-2 whitespace-nowrap bg-white/5 border border-white/10 rounded-full text-xs font-medium text-text-muted hover:bg-accent/20 hover:text-white hover:border-accent/50 transition-all"
                        >
                            {s.text}
                        </button>
                    ))}
                </div>
            )}

            {/* Footer */}
            <form onSubmit={handleSubmit} className="p-6 border-t border-white/10 bg-white/5">
                <div className="relative">
                    <input
                        name="message"
                        autoComplete="off"
                        placeholder="Type your message..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-4 pr-12 text-sm text-text-primary focus:border-accent/50 outline-none transition-all placeholder:text-text-muted/50"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center hover:bg-accent/80 transition-colors"
                    >
                        <FiSend size={18} />
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default ChatWindow;
