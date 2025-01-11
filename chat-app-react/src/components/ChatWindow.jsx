import { useState, useEffect, useRef } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';

const responses = [
  "That's interesting! Tell me more about it.",
  "I completely understand how you feel.",
  "What do you think we should do about it?",
  "That's great news! 🎉",
  "I had a similar experience last week!",
  "Have you considered trying a different approach?",
  "Let's meet up and discuss this in person.",
  "Thanks for sharing that with me!",
  "I'll look into it and get back to you soon.",
  "That's hilarious! 😄",
  "I need some time to think about this.",
  "Can you provide more details?",
  "I'm not sure I follow. Could you explain?",
  "That's exactly what I was thinking!"
];

const getRandomResponse = () => {
  return responses[Math.floor(Math.random() * responses.length)];
};

const getContextualResponse = (message) => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return "Hey there! How are you doing today? 👋";
  }
  if (lowerMessage.includes('how are you')) {
    return "I'm doing great, thanks for asking! How about you? 😊";
  }
  if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
    return "Take care! Talk to you soon! 👋";
  }
  if (lowerMessage.includes('thank')) {
    return "You're welcome! Always happy to help! 😊";
  }
  if (lowerMessage.includes('?')) {
    return "That's a great question! " + getRandomResponse();
  }
  
  return getRandomResponse();
};

export default function ChatWindow({ chat }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Reset messages when changing chats
  useEffect(() => {
    if (chat) {
      setMessages([
        {
          id: 1,
          text: "Hey! How are you?",
          sent: true,
          time: new Date(Date.now() - 60000)
        },
        {
          id: 2,
          text: "I'm good, thanks! How about you?",
          sent: false,
          time: new Date()
        }
      ]);
    }
  }, [chat?.id]);

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Select a chat to start messaging</p>
      </div>
    );
  }

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sent: true,
        time: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessage('');

      // Show typing indicator
      setIsTyping(true);

      // Simulate received message with varying delay
      const delay = Math.random() * (3000 - 1000) + 1000; // Random delay between 1-3 seconds
      setTimeout(() => {
        setIsTyping(false);
        const replyMessage = {
          id: messages.length + 2,
          text: getContextualResponse(message),
          sent: false,
          time: new Date()
        };
        setMessages(prev => [...prev, replyMessage]);
      }, delay);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b bg-gray-50">
        <img
          src={chat.avatar}
          alt={chat.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <h3 className="font-semibold">{chat.name}</h3>
          <p className="text-sm text-gray-500">
            {isTyping ? 'typing...' : 'Online'}
          </p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-[#e5ded8] min-h-0">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sent ? 'justify-end' : 'justify-start'} mb-4`}
          >
            <div
              className={`rounded-lg p-3 max-w-[70%] ${
                msg.sent ? 'bg-[#dcf8c6]' : 'bg-white'
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs text-gray-500 block text-right">
                {format(msg.time, 'HH:mm')}
              </span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-white rounded-lg p-3">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="mt-auto border-t">
        <form onSubmit={handleSend} className="p-4 bg-gray-50">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="flex-1 rounded-full py-2 px-4 border focus:outline-none focus:border-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}