import React, { useState, useRef, useEffect } from 'react';
import Groq from 'groq-sdk';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaComments, FaPaperPlane } from 'react-icons/fa';

const apiKey = import.meta.env.VITE_GROQ_API_KEY;
if (!apiKey) {
  console.error('Missing VITE_GROQ_API_KEY in environment variables');
}

const groq = new Groq({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
});

function LetsTalk() {
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: "Hi! I'm Oliveya Choudhury 👋 Ask me anything about my projects, skills, education, or experience!" 
    }
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const systemPrompt = {
      role: 'system',
      content: `You are Oliveya Choudhury. Always respond in a warm, natural, friendly first-person tone. Use clean, polished Markdown formatting in every reply. This includes:

- **Bold** for emphasis and project names.
- Headings like **### Project Name** or **## Skills** when appropriate.
- Bullet lists or numbered lists for features or steps.
- Clickable inline links: [Live Demo](https://example.com) (they will appear blue).
- Code blocks with language tags if showing code snippets.
- Horizontal rules (---) to separate sections if needed.
- NEVER use HTML tags such as <br>, <br/>, <p>, <div>, or any other HTML tags.

Never send raw unformatted text. Always apply Markdown to make responses visually appealing and easy to scan.

**Here is my complete personal information. Answer any question using these facts. If a question is not covered below, politely say: "I'm not sure about that – could you please rephrase or ask something about my projects, skills, education, or experience?" Do NOT make up answers or give error messages.**

--- Personal Details ---
Name: Oliveya Choudhury
Role: MCA student, Full-Stack Developer, ML Enthusiast
Location: India – I am location feasible anywhere, open to remote or on-site opportunities.
Email: choudhuryoliveya15@gmail.com
GitHub: https://github.com/Oliveya-15
LinkedIn: https://www.linkedin.com/in/oliveya-choudhury-868349270/
Resume: https://drive.google.com/file/d/1hPmdMdtMfj2pJjHX7PIU9Kog9gYVe4T-/view?usp=sharing
Certificates: https://drive.google.com/drive/folders/1v2uVrYa7PrE51HBsf_40-kODyGy67WgG

--- HR / Soft Skills ---
- **Location feasibility:** I am location feasible anywhere – open to remote, hybrid, or on-site work.
- **Strengths:** Workaholic, persistent. Once I take up something, I don't stop until it's completed successfully.
- **Weaknesses:** Overthinking and public speaking – but I'm actively working on improving these. I've been practicing mindfulness and taking small speaking opportunities to grow.
- **What I admire in others:** I admire confident people who communicate clearly and uplift the team.
- **Hobbies & Interests:** Art & Craft, Competitive Coding, AI/ML Exploration, Hindu Mythology & Bhagavad Gita, Open Source contributions.
- **Where I see myself in 5 years:** I see myself in an efficient, growth-oriented role where I'm continuously learning, solving real-world problems, and helping others grow – possibly as a tech lead or senior developer.

--- Education ---
- Master of Computer Applications (MCA) at Techno Main Salt Lake, MAKAUT – 2025–2027, YGPA: 8.66
- Bachelor of Computer Applications (BCA) at Siliguri Institute of Technology, MAKAUT (2022–2025) – CGPA: 8.94
- Higher Secondary (12th) at New Town Girls’ High School, WBCHSE (2021–2022) – 94.2%
- Secondary (10th) at New Town Girls’ High School, WBBSE (2019–2020) – 75.2%

--- Skills & Expertise ---
Programming Languages: Python, JavaScript, C
Frontend: HTML5, CSS3, React.js, Tailwind CSS, Responsive Web Design
Backend & Databases: Node.js, Express.js, MongoDB, SQL, DBMS
Machine Learning & AI: Scikit-learn, Pandas, NumPy, Streamlit, Exploratory Data Analysis (EDA)
Tools & Others: Git, GitHub, VS Code, Google Colab, Anaconda, Canva
Core Subjects: DSA, DBMS, OOP, Operating Systems, Computer Networks, Cloud Computing

--- Key Projects (with links) ---
1. **Docify – Doctor Appointment Booking (MERN)** Full-stack platform with role-based authentication.  
   Tech: MongoDB, Express.js, React, Node.js, Tailwind CSS  
   Live: https://docify-frontend-yw8c.onrender.com/  
   Code: https://github.com/Oliveya-15/Docify_MERN_Deployed.git

2. **Health Diagnosis ML Model** Predicts Parkinson’s, Heart Disease, Diabetes with ~85% accuracy.  
   Tech: Python, Scikit-learn, Streamlit  
   Live: https://healthdiagnosismodel.streamlit.app/  
   Code: https://github.com/Oliveya-15/HealthDiagnosisModel.git

3. **Talkify – Chat with PDFs** AI-powered app to upload PDFs and chat with content.  
   Tech: Streamlit + AI  
   Live: https://talkify.streamlit.app/  
   Code: https://github.com/Oliveya-15/Talkify-Deployed

4. **BookWook – Digital Reading Platform** MERN platform for book lovers to read free/paid books, login auth, dark/light mode.  
   Live: https://bookwookweb-frontend.onrender.com/  
   Code: https://github.com/Oliveya-15/BookWookWeb

5. **Ecocean – Sustainable E-Commerce** Responsive frontend for eco-friendly products.  
   Tech: HTML5, CSS3, JavaScript  
   Live: https://sustainable-ecommerce-html-css-js.netlify.app/  
   Code: https://github.com/Oliveya-15/EcommerceApp.git

6. **Classic Snake Game (Python)** Retro Snake game with sound, levels, Pygame.  
   Live: https://oliveya-15.github.io/SnakeGame_Python/  
   Code: https://github.com/Oliveya-15/SnakeGame_Python.git

7. **Weather Forecast Web App** Fetches current weather using OpenWeatherMap API.  
   Tech: HTML, CSS, JavaScript (Vanilla)  
   Live: https://weatherapp-yw8c.onrender.com/  
   Code: https://github.com/Oliveya-15/WeatherApp.git

8. **Personal Finance Assistant (PFA)** Python script with NLP (NLTK) for financial advice.  
   Live: https://financeassistant.streamlit.app/  
   Code: https://github.com/Oliveya-15/PersonalFinanceAssistant.git

9. **Amazon Clone – Landing Page** (Basic)  
   HTML/CSS clone.  
   Live: https://amazon-clonesite-html-css.netlify.app/  
   Code: https://github.com/Oliveya-15/AmazonColne_HTMLCSS.git

10. **Guess The Number Game** Python + Tkinter game with voice assistance, hints, timer, levels.  
    Live: https://oliveya-15.github.io/GUESS-THE-NUMBER/  
    Code: https://github.com/Oliveya-15/GUESS-THE-NUMBER.git

--- Achievements ---
- Consistent Academic Excellence – BCA CGPA 8.94 | MCA YGPA 8.66
- Led multiple technical and cultural college events end-to-end
- Awarded in creative and academic competitions at college level
- 5-Star Python on HackerRank | Multiple industry certifications

--- Professional Objective ---
To secure a challenging internship where I can apply my full-stack development, Machine Learning, and AI skills to deliver impactful solutions while continuously growing in a professional environment.

**Important instructions:**
- If the user asks something that is NOT listed in the above information (e.g., "What is my favorite color?"), respond politely: *"I'm not sure about that – could you please rephrase or ask something about my projects, skills, education, or experience?"*
- Never say "Sorry! I'm having trouble connecting right now" unless there is a real API error.
- Always end your replies by inviting further conversation or asking if the user wants more details about any specific topic.`
    };

    try {
      const response = await groq.chat.completions.create({
        messages: [systemPrompt, ...messages, userMessage],
        model: 'openai/gpt-oss-120b',
        temperature: 0.75,
        max_tokens: 1024,
      });

      const botReply = response.choices[0]?.message?.content || 
        "I'm not sure about that – could you please rephrase or ask something about my projects, skills, education, or experience? 😊";

      setMessages(prev => [...prev, { role: 'assistant', content: botReply }]);
    } catch (error) {
      console.error('Groq API Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I'm experiencing a technical issue right now. Please try again in a moment. 😊" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      name="LetsTalk"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-20 md:pt-14 pb-12 md:pb-6 relative overflow-hidden transition-all duration-300"
    >
      {/* Custom CSS Keyframes matching your About page animations */}
      <style>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-pop-1 { animation: fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-pop-2 { animation: fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; }
        .animate-pop-3 { animation: fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards; opacity: 0; }
      `}</style>

      {/* Dynamic Background Glowing Orbs matching About page */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-200/40 to-blue-200/20 rounded-full blur-3xl pointer-events-none z-[-1]"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-indigo-200/30 rounded-full blur-3xl pointer-events-none z-[-1]"></div>

      <div className="space-y-10">

        {/* Section Header matching About page header style */}
        <div className="text-center space-y-3 animate-pop-1">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-indigo-200/80 shadow-sm text-indigo-700 text-xs font-bold tracking-widest uppercase">
            <FaComments className="text-indigo-600" />
            <span>Interactive Chat</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Let's <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">Talk</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed font-normal">
            Have a question about my technical projects, core expertise, or academic background? Ask me directly!
          </p>
        </div>

        {/* Chat Interface Container - further reduced height for desktop */}
        <div className="animate-pop-2 max-w-4xl md:max-w-6xl mx-auto bg-white/90 backdrop-blur-xl border border-indigo-100/80 rounded-3xl shadow-xl shadow-indigo-500/10 flex flex-col h-[520px] md:h-[380px] overflow-hidden">
          
          {/* Chat Header Bar */}
          <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 px-6 py-4 flex items-center space-x-3 text-white shadow-sm">
            <img 
              src="/logo-white-bg.png" 
              alt="Oliveya Choudhury" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white/40 shadow-sm shrink-0" 
            />
            <div>
              <h3 className="font-bold text-sm tracking-wide">Oliveya Choudhury</h3>
              <p className="text-xs text-indigo-100 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online • Ready to answer your questions
              </p>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-gradient-to-b from-indigo-50/20 to-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <img 
                    src="/logo-white-bg.png" 
                    alt="Oliveya" 
                    className="w-8 h-8 rounded-full object-cover shadow-md shrink-0 mt-1 border border-indigo-100" 
                  />
                )}
                <div className={`max-w-[78%] px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed transition-all ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-br-none shadow-md shadow-indigo-500/20'
                    : 'bg-white text-gray-800 rounded-bl-none shadow-md shadow-indigo-500/5 border border-indigo-100/60'
                }`}>
                  {msg.role === 'user' ? (
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  ) : (
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({ node, ...props }) => (
                          <a {...props} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline hover:text-indigo-800 transition-colors" />
                        ),
                        code: ({ node, inline, className, children, ...props }) => {
                          return inline ? (
                            <code className="bg-indigo-50 text-indigo-700 font-medium rounded px-1.5 py-0.5 text-xs border border-indigo-100" {...props}>{children}</code>
                          ) : (
                            <code className="block bg-gray-900 text-indigo-100 p-3.5 rounded-xl overflow-x-auto text-xs font-mono shadow-inner border border-gray-800" {...props}>{children}</code>
                          );
                        },
                        ul: ({ node, ...props }) => <ul className="list-disc pl-4 space-y-1 my-2" {...props} />,
                        ol: ({ node, ...props }) => <ol className="list-decimal pl-4 space-y-1 my-2" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="font-bold text-gray-900 mt-2 mb-1 text-base" {...props} />,
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                <img 
                  src="/logo.png" 
                  alt="Oliveya" 
                  className="w-8 h-8 rounded-full object-cover shadow-md shrink-0 mt-1 border border-indigo-100" 
                />
                <div className="bg-white text-gray-500 px-5 py-3.5 rounded-2xl rounded-bl-none shadow-md shadow-indigo-500/5 border border-indigo-100/60 flex items-center space-x-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-violet-600 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="ml-1 font-medium text-indigo-900/70">Oliveya is typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer Form */}
          <form onSubmit={sendMessage} className="border-t border-indigo-100/80 p-3 md:p-4 bg-white/80 backdrop-blur-md">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about my projects, skills, education..."
                className="flex-1 min-w-0 px-4 md:px-5 py-2.5 md:py-3 bg-indigo-50/40 border border-indigo-200/80 rounded-xl md:rounded-2xl focus:outline-none focus:border-indigo-600 focus:bg-white text-xs md:text-sm text-gray-800 transition-all shadow-inner"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full hover:opacity-95 transition-all shadow-md shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shrink-0 cursor-pointer"
                title="Send"
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default LetsTalk;