// app/AiChat.tsx
import React from 'react';

import ChatComponent from './components/ChatComponent';


export default function AiChat() {
  return (
   
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Chat with Groq AI</h1>
        <ChatComponent />
      </div>
     
  );
}