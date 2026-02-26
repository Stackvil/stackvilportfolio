import { useState, useCallback, useEffect } from 'react';

const INITIAL_MESSAGES = [
    { id: 1, text: "Strategic Advisory active. How may I assist with your technology transformation objectives today?", isAi: true }
];

const SUGGESTIONS = [
    { id: 'consult', text: 'Strategic Assessment', mode: 'consult' },
    { id: 'tech', text: 'Architecture Audit', mode: 'tech' },
    { id: 'call', text: 'Executive Briefing', mode: 'call' }
];

export const useAIAgent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [isTyping, setIsTyping] = useState(false);
    const [mode, setMode] = useState('idle'); // idle, consult, tech, call
    const [consultData, setConsultData] = useState({ budget: '', timeline: '', type: '' });
    const [callData, setCallData] = useState({ name: '', email: '', company: '' });

    const addMessage = useCallback((text, isAi = false) => {
        setMessages(prev => [...prev, { id: Date.now(), text, isAi }]);
    }, []);

    const simulateAiResponse = useCallback(async (text, delay = 1500) => {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, delay));
        setIsTyping(false);
        addMessage(text, true);
    }, [addMessage]);

    const handleModeChange = useCallback((newMode) => {
        setMode(newMode);
        if (newMode === 'consult') {
            simulateAiResponse("Strategic assessment initiated. What is the estimated magnitude of the transformation budget?");
        } else if (newMode === 'tech') {
            simulateAiResponse("I can provide depth on architectural standards. Are you interested in design governance, scalability audits, or strategic advisory areas?");
        } else if (newMode === 'call') {
            simulateAiResponse("Requesting executive briefing. May I have your name, email, and leadership role?");
        } else {
            setMessages(INITIAL_MESSAGES);
        }
    }, [simulateAiResponse]);

    const handleUserInput = useCallback((input) => {
        addMessage(input, false);

        // Simple logic for modes
        if (mode === 'consult') {
            if (!consultData.budget) {
                setConsultData(prev => ({ ...prev, budget: input }));
                simulateAiResponse("Got it. What's your expected timeline?");
            } else if (!consultData.timeline) {
                setConsultData(prev => ({ ...prev, timeline: input }));
                simulateAiResponse("And what type of project is it? (Web, AI, Mobile, etc.)");
            } else if (!consultData.type) {
                setConsultData(prev => ({ ...prev, type: input }));
                simulateAiResponse("Assessment complete. A strategic overview has been generated for the advisory group. A partner will be in touch shortly.");
                setMode('idle');
            }
        } else if (mode === 'call') {
            // Simple collection simulation
            simulateAiResponse("Thank you. You may select a priority slot for the briefing here: [Calendly Link Placeholder].");
            setMode('idle');
        } else {
            // Default idle response
            simulateAiResponse("Alignment verified. Would you like to explore strategic advisory areas or initiate a formal assessment?");
        }
    }, [mode, consultData, addMessage, simulateAiResponse]);

    return {
        isOpen,
        setIsOpen: (val) => {
            setIsOpen(val);
            if (!val) {
                // Reset on close if needed
            }
        },
        messages,
        isTyping,
        mode,
        suggestions: mode === 'idle' ? SUGGESTIONS : [],
        handleModeChange,
        handleUserInput
    };
};
