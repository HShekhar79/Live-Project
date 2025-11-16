// src/components/ChatBubble.jsx
import { useEffect, useRef, useState } from "react";
import "./ChatBubble.css";

const SUGGESTIONS = [
  "Get a quick cost estimate",
  "Book a free design call",
  "See kitchen ideas",
  "What’s included in packages?",
];

export default function ChatBubble(){
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from:"bot", text:"Hi! I’m Aura — how can I help you today?" }
  ]);
  const [draft, setDraft] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    if(listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  function send(text){
    const value = (text ?? draft).trim();
    if(!value) return;
    setMessages(m => [...m, { from:"user", text:value }]);
    setDraft("");
    // demo reply
    setTimeout(() => {
      let reply = "Got it! A designer will contact you shortly.";
      if(/estimate|cost|price/i.test(value)) reply = "Use the 'Get Started' button on the hero to get a quick estimate. Want me to open it?";
      if(/call|book/i.test(value)) reply = "Great! Share your phone/email and preferred time — we’ll schedule a callback.";
      setMessages(m => [...m, { from:"bot", text: reply }]);
    }, 550);
  }

  return (
    <>
      <button className="cb-fab" onClick={() => setOpen(o=>!o)} aria-label="Chat">
        {open ? "✖" : "💬"}
      </button>

      <div className={`cb-panel ${open ? "on" : ""}`}>
        <div className="cb-head">
          <div className="cb-title">Chat with <strong>Aura</strong></div>
          <button className="cb-close" onClick={() => setOpen(false)}>✖</button>
        </div>

        <div className="cb-body" ref={listRef}>
          {messages.map((m,i)=>(
            <div key={i} className={`msg ${m.from}`}>{m.text}</div>
          ))}
          {!messages.find(m => m.from === "user") && (
            <div className="cb-suggestions">
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          )}
        </div>

        <div className="cb-input">
          <input
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={e => e.key === "Enter" && send()}
            placeholder="Type your message…"
          />
          <button onClick={() => send()}>Send</button>
        </div>
      </div>
    </>
  );
}
