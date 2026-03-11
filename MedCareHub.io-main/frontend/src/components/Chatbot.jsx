import React, { useState, useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import chatbotData from '../assets/chatbotData';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      // Try exact match first
      let answer = chatbotData.find(q => input.toLowerCase().includes(q.q.toLowerCase()))?.a;
      // If no exact match, try similarity by keyword presence
      if (!answer) {
        const inputWords = input.toLowerCase().split(/\W+/).filter(Boolean);
        let maxScore = 0;
        let bestMatch = null;
        chatbotData.forEach(q => {
          const qText = q.q.toLowerCase();
          let score = 0;
          inputWords.forEach(word => {
            if (qText.includes(word)) score++;
          });
          if (score > maxScore) {
            maxScore = score;
            bestMatch = q;
          }
        });
        if (bestMatch && maxScore > 0) {
          answer = bestMatch.a;
        } else {
          answer = "I'm not sure about that. Could you try rephrasing your question? Or you can contact our support team for more help.";
        }
      }
      const botMsg = { sender: 'bot', text: answer };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating open button */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-primary p-4 rounded-full shadow-lg hover:scale-110 transition-all animate-bounce group"
          onClick={() => setOpen(true)}
        >
          <div className="relative">
            <img src={assets.chats_icon} alt="Chatbot" className="w-7 h-7" />
            {/* Tooltip */}
            <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-lg shadow-lg text-sm text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Chat with MedCareBot
            </div>
          </div>
        </button>
      )}

      {/* Chatbot popup */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[90vw] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-primary to-primary/80 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full p-2 shadow-inner">
                <img src={assets.logo} alt="Bot" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-white font-semibold block">MedCareBot</span>
                <span className="text-white/80 text-sm">Always here to help</span>
              </div>
            </div>
            <button 
              onClick={() => setOpen(false)} 
              className="text-white/80 hover:text-white transition-colors text-xl"
            >
              ×
            </button>
          </div>

          {/* Chat area */}
          <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto max-h-[60vh] min-h-[300px] bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center space-y-4 my-8">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full p-4">
                  <img src={assets.logo} alt="Welcome" className="w-full h-full object-contain" />
                </div>
                <div className="text-gray-500 text-sm max-w-xs mx-auto">
                  Hi! I'm MedCareBot. I can help you with bookings, general queries, and website navigation. How can I assist you today?
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                <div className={`flex items-end gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={msg.sender === 'user' ? assets.profile_pic : assets.logo} 
                      alt={msg.sender} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div 
                    className={`px-4 py-2 rounded-2xl ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-white rounded-br-none' 
                        : 'bg-white shadow-md rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 animate-fade-in">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src={assets.logo} alt="Bot" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white shadow-md rounded-full px-4 py-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Input area */}
          <div className="p-4 border-t bg-white rounded-b-2xl">
            <div className="flex items-center gap-2 bg-gray-50 rounded-full border focus-within:border-primary transition-colors p-1">
              <input
                type="text"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
                placeholder="Type your question..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:hover:bg-primary"
                onClick={handleSend}
                disabled={!input.trim()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot; 