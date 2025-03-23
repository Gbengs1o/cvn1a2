// app/components/ChatComponent.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDlmode } from '@/app/components/dlmode';

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function ChatComponent() {
  const { darkMode } = useDlmode();
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState<boolean>(false);

  // Load messages from localStorage on initial render
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        if (Array.isArray(parsedMessages)) {
          setMessages(parsedMessages);
        }
      } catch (error) {
        console.error('Error parsing saved messages:', error);
      }
    }
  }, []);

  // Only scroll to bottom when new messages are added or when manually triggered
  useEffect(() => {
    if (shouldScrollToBottom && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      setShouldScrollToBottom(false);
    }
  }, [shouldScrollToBottom, messages]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setShouldScrollToBottom(true); // Trigger scroll on new message

    try {
      // Prepare messages for API call - only send user and assistant messages
      const chatHistory = messages.filter(msg => msg.role === "user" || msg.role === "assistant");
      
      // Call our API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          messages: [...chatHistory, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      // Add assistant response to chat
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: data.content 
      }]);
      setShouldScrollToBottom(true); // Trigger scroll on response
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Sorry, I encountered an error. Please try again." 
      }]);
      setShouldScrollToBottom(true); // Trigger scroll on error
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  };

  // Function to manually scroll to bottom
  const scrollToBottom = () => {
    setShouldScrollToBottom(true);
  };

  return (
    <div className={`flex flex-col h-screen max-w-3xl mx-auto p-4 transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h1 className="text-3xl font-bold mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
            Chat with AI Assistant
          </span>
        </h1>
        <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto mb-2"></div>
      </motion.div>

      <div className="flex justify-between mb-4">
        <h2 className="font-semibold">Chat History</h2>
        <div className="flex gap-2">
          {messages.length > 0 && (
            <button 
              onClick={scrollToBottom}
              className="text-blue-500 hover:text-blue-700 text-sm px-3 py-1 rounded-md transition-all hover:bg-blue-100 dark:hover:bg-blue-900/30"
              aria-label="Scroll to bottom"
            >
              ↓ Bottom
            </button>
          )}
          <button 
            onClick={clearChat}
            className="text-red-500 hover:text-red-700 text-sm px-3 py-1 rounded-md transition-all hover:bg-red-100 dark:hover:bg-red-900/30"
          >
            Clear Chat
          </button>
        </div>
      </div>
      
      <motion.div 
        ref={chatContainerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex-1 overflow-y-auto mb-4 rounded-xl shadow-lg p-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border border-gray-200'}`}
      >
        {messages.length === 0 ? (
          <div className="text-center my-10 opacity-70">
            <p className="text-lg mb-2">Start a conversation with the AI</p>
            <p className="text-sm">Ask a question or request information</p>
          </div>
        ) : (
          messages.map((message, index) => (
            message.role !== "system" && (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mb-4 p-4 rounded-lg ${
                  message.role === "user" 
                    ? `${darkMode ? 'bg-blue-600/30 text-blue-100' : 'bg-blue-100 text-blue-800'} ml-auto` 
                    : `${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-800'}`
                } max-w-[80%] ${message.role === "user" ? "ml-auto" : "mr-auto"} shadow-sm`}
              >
                <p className={`text-sm font-semibold mb-1 ${message.role === "user" ? 'text-blue-400' : 'text-gray-500'}`}>
                  {message.role === "user" ? "You" : "AI"}
                </p>
                <p className="leading-relaxed">{message.content}</p>
              </motion.div>
            )
          ))
        )}
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg max-w-[80%] mr-auto shadow-sm ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-800'}`}
          >
            <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>AI</p>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </motion.div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className={`flex-1 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-300 ${
            darkMode 
              ? 'bg-gray-700 border-gray-600 focus:border-blue-500 text-white placeholder:text-gray-400' 
              : 'bg-gray-50 border border-gray-300 focus:border-blue-500 text-gray-800'
          }`}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="bg-gradient-to-r from-blue-600 to-teal-400 text-white px-6 py-3 rounded-lg font-bold transition-transform transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          disabled={isLoading || !input.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
}