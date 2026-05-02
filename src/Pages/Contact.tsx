import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Vite .env file se access_key ko read karne ka sahi tarika
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/iqrakhatoon-dev" },
    { name: "LinkedIn", url: "https://linkedin.com/in/iqrakhatoon-dev" },
    { name: "Instagram", url: "https://www.instagram.com/iqrakhatoon.dev/" },
    { name: "Email", url: "mailto:iqrakhatoonnn@gmail.com" }
  ];

  return (
    <div ref={sectionRef} className="w-full min-h-screen flex items-center py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-start">
 
        {/* Left Side: Text and Social Links */}
        <div className="contact-animate w-full">
          <span className="text-[#DCAE96] font-medium tracking-[0.3em] uppercase text-[10px] md:text-xs">
            Say Hello
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#1A1A1A] mt-4 leading-[1.1] tracking-tighter">
            Let's work <br /> 
            <span className="text-[#9CAF88]">together.</span>
          </h2>
          <p className="text-[#1A1A1A]/60 mt-6 md:mt-8 max-w-sm leading-relaxed text-sm md:text-base">
            I'm currently available for freelance work or full-time positions. If you have a project that needs some creative injection, let's talk.
          </p>

          <div className="mt-8 md:mt-12 grid grid-cols-2 gap-4 max-w-xs">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50 hover:text-[#9CAF88] transition-colors duration-300 flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-[#DCAE96] rounded-full"></span>
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <form 
          className="contact-animate flex flex-col gap-6 bg-white p-6 md:p-8 border border-black/5 shadow-sm w-full"
          action="https://api.web3forms.com/submit" 
          method="POST"
        >
          {/* Key dynamically .env file se load hogi */}
          <input type="hidden" name="access_key" value={accessKey} />

          <div className="flex flex-col gap-1 md:gap-2">
            <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40 italic">Full Name</label>
            <input 
              name="name" 
              required 
              type="text" 
              className="bg-transparent border-b border-black/10 py-2 outline-none focus:border-[#DCAE96] transition-colors text-sm" 
              placeholder="Your Name" 
            />
          </div>
          
          <div className="flex flex-col gap-1 md:gap-2">
            <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40 italic">Email Address</label>
            <input 
              name="email" 
              required 
              type="email" 
              className="bg-transparent border-b border-black/10 py-2 outline-none focus:border-[#9CAF88] transition-colors text-sm" 
              placeholder="email@example.com" 
            />
          </div>

          <div className="flex flex-col gap-1 md:gap-2">
            <label className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40 italic">How can I help?</label>
            <textarea 
              name="message" 
              required 
              rows={3} 
              className="bg-transparent border-b border-black/10 py-2 outline-none focus:border-[#9CAF88] transition-colors resize-none text-sm" 
              placeholder="Tell me about your project" 
            />
          </div>

          <button className="mt-2 md:mt-4 px-6 md:px-8 py-3 md:py-4 bg-[#1A1A1A] text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#DCAE96] transition-colors duration-300 shadow-xl shadow-black/5">
            Send Inquiry
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
