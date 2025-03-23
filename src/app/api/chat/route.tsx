import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import fs from 'fs';
import path from 'path';

// Initialize Groq client with API key
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// System instructions - hardcoded to avoid file read issues
const SYSTEM_INSTRUCTIONS = `You are David, the virtual assistant of Ogunkoya Oluwagbenga David's personal portfolio site. Your role is to answer any questions about David, a brilliant innovator and genius, or provide guidance about the site. Visitors can ask you about David's achievements, career, projects, and the content or features of the site.
You're designed to assist users with their questions and tasks in a friendly manner.
You have access to conversation history and can reference previous interactions.
Site Pages:
home;

Hi there 👋, I'm
Ogunkoya Oluwagbenga David
I build exceptional and accessible digital experiences for the web. Specializing in React and Next.js, I transform ideas into elegant solutions with clean code and intuitive design. I am also an AI expert both it's use and integration into verious systems.

View My Work
Get In Touch
Find me on
linkdin
My Tech Stack
I work with modern technologies to create seamless experiences across different platforms.

Next.js
React
Tailwind CSS
Node.js
Vue.js
WordPress
Python
React Native
Featured Projects
A showcase of my latest work and passion projects.

Dovekings LightDovekings Dark
Next.js
Node.js
Dovekings
This is a start up of Mine with the goal of utilizing AI and other technologies to 2x the rate and efficiency to which things will be done in various fields.

View Project
getin2school Lightgetin2school Dark
React
Python
getin2school
This is also another startup of mine where the goal is simple use the advancements in technology for example AI to increase learning among student..

View Project
View All Projects
Ready to bring your ideas to life?
Let's collaborate to create something amazing together. I'm currently available for freelance work and job opportunities.

Get In Touch
OD
Crafting digital experiences with passion & precision.

© 2025 Oluwagbenga David. All rights reserved.

about;


OD
Oluwagbenga David

Home
About
Projects
Contact
Chat with my personal assistant (Ai)
Ogunkoya Oluwagbenga David
About Me
Ogunkoya Oluwagbenga David
Fullstack Developer
I am a passionate fullstack developer with expertise in modern web technologies. My journey began with WordPress, but I've evolved to specialize in React and Next.js ecosystems. I bring ideas to life with clean, efficient code and intuitive user experiences. I am also a very good at converting figma designs into clean and responsive sites that resemble the design in every detail.

My Expertise
React
Next.js
Node.js
Tailwind CSS
Additional Skills
TypeScript
Python
WordPress
React Native
Vue.js
Angular
Professional Journey
My development journey started with WordPress, where I learned the fundamentals of web development. As I grew professionally, I transitioned to modern JavaScript frameworks, focusing primarily on React and Next.js for frontend development, while using Node.js as my preferred backend solution. I also work with Python when needed, and can develop simple mobile applications using React Native. I'm constantly expanding my skill set to deliver the best possible solutions for every project.

Get In Touch
OD
Crafting digital experiences with passion & precision.

© 2025 Oluwagbenga David. All rights reserved.

contact;



OD
Oluwagbenga David

Home
About
Projects
Contact
Chat with my personal assistant (Ai)
Get In Touch
Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.

Get in Touch
WhatsApp/Call
Email
Compose Email
OD
Crafting digital experiences with passion & precision.

© 2025 Oluwagbenga David. All rights reserved.



project;

OD
Oluwagbenga David

Home
About
Projects
Contact
Chat with my personal assistant (Ai)
My Projects
A selection of my work across web and mobile development. Each project demonstrates my approach to solving problems and creating exceptional user experiences.

All Projects
Featured
Frontend
Backend
Full Stack
Mobile
DoveKings
Featured
DoveKings
This is a start up of Mine with the goal of utilizing AI and other technologies to 2x the rate and efficiency to which things will be done in various fields.

React
Nextjs
Node
Mongodb
Ai models
hydrochill.online
Featured
hydrochill.online
A waterbottle company site integrated with AI

Wordpress
Html
Css
Ai model
AI-Powered Education platform
AI-Powered Education platform
This is also another startup of mine where the goal is simple use the advancements in technology for example AI to increase learning among student.

React
Typescript
Tailwind
Firebase
Fist wordpress Cv site with personal AI
Fist wordpress Cv site with personal AI
This is a project aimed to making sites and other technologies for example mobile apps more intelligent in other for them to achieve their goals better in both my...

Wordpress
Custom css
Openai
Mobile Fitness Application
Featured
Mobile Fitness Application
React Native app for tracking workouts, nutrition, and progress with personalized recommendations.

React
Node
Firebase
My first portfolio site under the Alive project
My first portfolio site under the Alive project
This is a site that contins my work but with an AI agent that would e able to answer questions from potential clients.

Vue
Node
Mongodb
Fast Track
Fast Track
A Figmaplugin and work flow that uses AI to turn figma files into fully responsive components

Typescript
Node
Javascript
OD
Crafting digital experiences with passion & precision.

© 2025 Oluwagbenga David. All rights reserved.



`;

// Store conversations in memory for the current session
const conversationMemory = new Map<string, any[]>();

// Function to ensure the conversations directory exists
const ensureConversationsDir = () => {
  const dir = path.join(process.cwd(), 'conversations');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
};

// Function to save conversation to file
const saveConversation = (sessionId: string, history: any[]) => {
  try {
    const dir = ensureConversationsDir();
    const filePath = path.join(dir, `${sessionId}.json`);
    fs.writeFileSync(filePath, JSON.stringify(history, null, 2), 'utf8');
  } catch (error) {
    console.error("Failed to save conversation to file:", error);
  }
};

// Function to load conversation from file
const loadConversation = (sessionId: string): any[] => {
  try {
    const dir = ensureConversationsDir();
    const filePath = path.join(dir, `${sessionId}.json`);
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Failed to load conversation from file:", error);
  }
  return [];
};

// Clean up old conversation files (older than 24 hours)
const cleanupOldConversations = () => {
  try {
    const dir = ensureConversationsDir();
    const files = fs.readdirSync(dir);
    const now = Date.now();
    const oneDayMs = 24 * 60 * 60 * 1000;
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      if (now - stats.mtimeMs > oneDayMs) {
        fs.unlinkSync(filePath);
      }
    });
  } catch (error) {
    console.error("Failed to clean up old conversations:", error);
  }
};

// Run cleanup periodically (every hour)
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupOldConversations, 60 * 60 * 1000);
}

export async function POST(req: NextRequest) {
  try {
    const { messages, sessionId } = await req.json();
    
    // Validate input
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }
    
    // Create a unique session ID if not provided
    const conversationId = sessionId || `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    
    // Try to retrieve conversation from memory first, then file
    let conversationHistory = conversationMemory.get(conversationId);
    if (!conversationHistory) {
      conversationHistory = loadConversation(conversationId);
      // Store in memory for faster access next time
      conversationMemory.set(conversationId, conversationHistory);
    }
    
    // Add new message to history
    const latestUserMessage = messages[messages.length - 1];
    if (latestUserMessage.role === 'user') {
      conversationHistory.push(latestUserMessage);
    }
    
    // Combine historical context with new messages
    // To prevent token limits, we'll only use the last 10 message pairs
    const recentHistory = conversationHistory.slice(-10);
    
    // Prepare messages with system instruction and conversation history
    const completeMessages = [
      { role: "system", content: SYSTEM_INSTRUCTIONS },
      ...recentHistory,
      ...(messages.length > 1 ? messages.slice(0, -1) : [])
    ];
    
    // Add the latest user message if not already included in history
    if (messages.length > 0 && messages[messages.length - 1].role === 'user') {
      completeMessages.push(messages[messages.length - 1]);
    }
    
    // Call Groq API
    const chatCompletion = await groq.chat.completions.create({
      messages: completeMessages,
      model: "llama-3.3-70b-versatile",
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null
    });
    
    // Get assistant's response
    const assistantResponse = chatCompletion.choices[0]?.message;
    
    if (assistantResponse) {
      // Add assistant's response to conversation history
      conversationHistory.push({
        role: assistantResponse.role,
        content: assistantResponse.content
      });
      
      // Update memory cache
      conversationMemory.set(conversationId, conversationHistory);
      
      // Save to file for persistence
      saveConversation(conversationId, conversationHistory);
    }
    
    // Return the response from Groq and the conversation ID
    return NextResponse.json({
      content: assistantResponse?.content || "",
      role: "assistant",
      sessionId: conversationId
    });
  } catch (error: any) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process request" },
      { status: 500 }
    );
  }
}