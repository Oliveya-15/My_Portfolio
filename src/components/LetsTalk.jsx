import React, { useState, useRef, useEffect } from 'react';
import Groq from 'groq-sdk';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
- Master of Computer Applications (MCA) at MAKAUT – 1st Year, SGPA: 8.68
- Bachelor of Computer Applications (BCA) at Siliguri Institute of Technology, MAKAUT (2022–2025) – CGPA: 8.94
- Higher Secondary (12th) at New Town Girls’ High School, WBCHSE (2021–2022) – 94.2%
- Secondary (10th) at New Town Girls’ High School, WBBSE (2019–2020) – 75.2%

--- Skills & Expertise ---
Programming Languages: Python, JavaScript, C
Frontend: HTML5, CSS3, React.js, Tailwind CSS, Responsive Web Design
Backend & Databases: Node.js, Express.js, MongoDB, SQL
Machine Learning & AI: Scikit-learn, Pandas, NumPy, Streamlit, Exploratory Data Analysis (EDA)
Tools & Others: Git, GitHub, VS Code, Google Colab, Anaconda, Canva
Core Subjects: DSA, DBMS, OOP, Operating Systems, Computer Networks, Cloud Computing

--- Key Projects (with links) ---
1. **Docify – Doctor Appointment Booking (MERN)**  
   Full-stack platform with role-based authentication.  
   Tech: MongoDB, Express.js, React, Node.js, Tailwind CSS  
   Live: https://docify-frontend-yw8c.onrender.com/  
   Code: https://github.com/Oliveya-15/Docify_MERN_Deployed.git

2. **Health Diagnosis ML Model**  
   Predicts Parkinson’s, Heart Disease, Diabetes with ~85% accuracy.  
   Tech: Python, Scikit-learn, Streamlit  
   Live: https://healthdiagnosismodel.streamlit.app/  
   Code: https://github.com/Oliveya-15/HealthDiagnosisModel.git

3. **Talkify – Chat with PDFs**  
   AI-powered app to upload PDFs and chat with content.  
   Tech: Streamlit + AI  
   Live: https://talkify.streamlit.app/  
   Code: https://github.com/Oliveya-15/Talkify-Deployed

4. **BookWook – Digital Reading Platform**  
   MERN platform for book lovers to read free/paid books, login auth, dark/light mode.  
   Live: https://bookwookweb-frontend.onrender.com/  
   Code: https://github.com/Oliveya-15/BookWookWeb

5. **Ecocean – Sustainable E-Commerce**  
   Responsive frontend for eco-friendly products.  
   Tech: HTML5, CSS3, JavaScript  
   Live: https://sustainable-ecommerce-html-css-js.netlify.app/  
   Code: https://github.com/Oliveya-15/EcommerceApp.git

6. **Classic Snake Game (Python)**  
   Retro Snake game with sound, levels, Pygame.  
   Live: https://oliveya-15.github.io/SnakeGame_Python/  
   Code: https://github.com/Oliveya-15/SnakeGame_Python.git

7. **Weather Forecast Web App**  
   Fetches current weather using OpenWeatherMap API.  
   Tech: HTML, CSS, JavaScript (Vanilla)  
   Live: https://weatherapp-yw8c.onrender.com/  
   Code: https://github.com/Oliveya-15/WeatherApp.git

8. **Personal Finance Assistant (PFA)**  
   Python script with NLP (NLTK) for financial advice.  
   Live: https://financeassistant.streamlit.app/  
   Code: https://github.com/Oliveya-15/PersonalFinanceAssistant.git

9. **Amazon Clone – Landing Page** (Basic)  
   HTML/CSS clone.  
   Live: https://amazon-clonesite-html-css.netlify.app/  
   Code: https://github.com/Oliveya-15/AmazonColne_HTMLCSS.git

10. **Guess The Number Game**  
    Python + Tkinter game with voice assistance, hints, timer, levels.  
    Live: https://oliveya-15.github.io/GUESS-THE-NUMBER/  
    Code: https://github.com/Oliveya-15/GUESS-THE-NUMBER.git

--- Achievements ---
- Consistent Academic Excellence – BCA CGPA 8.94 | MCA 1st Year SGPA 8.68
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
        model: 'llama-3.1-8b-instant',
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
    <div name="LetsTalk" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-2">Let's Talk</h1>
      <p className="text-gray-600 mb-8">Ask me anything about my work, skills, projects, or experience!</p>

      <div className="bg-slate-100 rounded-3xl shadow-xl flex flex-col h-[480px] max-w-4xl mx-auto border border-gray-200">
        
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] px-6 py-4 rounded-3xl text-[15.5px] leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-black text-white rounded-br-none'
                  : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
              }`}>
                {msg.role === 'user' ? (
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                ) : (
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      a: ({ node, ...props }) => (
                        <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800" />
                      ),
                      code: ({ node, inline, className, children, ...props }) => {
                        return inline ? (
                          <code className="bg-gray-100 rounded px-1 py-0.5 text-sm" {...props}>{children}</code>
                        ) : (
                          <code className="block bg-gray-800 text-white p-3 rounded-md overflow-x-auto text-sm" {...props}>{children}</code>
                        );
                      }
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-500 px-6 py-4 rounded-3xl rounded-bl-none shadow-sm">
                Oliveya is typing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={sendMessage} className="border-t border-gray-200 p-5 bg-white rounded-b-3xl">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 px-6 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-black"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-black text-white px-10 py-4 rounded-3xl hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LetsTalk;