import React, { useEffect, useRef } from 'react';
import MyImage from '../assets/Images/My.png';
import gsap from 'gsap';

const FirstPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".animate-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      })
      .from(".photo-container", {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out"
      }, "-=0.5")
      .from(".estb-badge", {
        scale: 0,
        rotation: -45,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-24 pt-24 pb-12 md:py-0 overflow-hidden bg-[#FAF9F6]"
    >
      <div className="w-full md:flex-1 flex flex-col justify-center order-2 md:order-1 mt-12 md:mt-0">
        <span className="animate-text text-[#DCAE96] font-medium tracking-[0.3em] uppercase text-[10px] md:text-[12px] mb-3 inline-block">
          Hello,
        </span>
        
        <div className="overflow-hidden">
          <h1 className="animate-text text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-[#1A1A1A]">
            Iqra <br /> 
            <span className="text-[#9CAF88]">Khatoon</span>
          </h1>
        </div>

        <h2 className="animate-text text-lg md:text-2xl font-light mt-4 text-[#1A1A1A]/60 font-serif italic">
          Full Stack Developer
        </h2>

        <p className="animate-text text-sm mt-6 md:mt-8 max-w-xs md:max-w-sm border-l-2 border-[#DCAE96] pl-5 text-[#1A1A1A]/50 leading-relaxed">
          "Building the Web, one component at a time."
        </p>

        <div className="animate-text flex flex-wrap gap-4 md:gap-6 mt-8 md:mt-10">
          <button className="group relative px-6 md:px-8 py-3 bg-[#1A1A1A] text-white text-[9px] md:text-[10px] uppercase tracking-[0.2em] overflow-hidden">
            <span className="relative z-10"><a href="#projects">View Projects</a></span>
            <div className="absolute inset-0 bg-[#DCAE96] transition-transform duration-300 translate-y-full group-hover:translate-y-0"></div>
          </button>
          
          <button className="px-6 md:px-8 py-3 border border-[#1A1A1A] text-[#1A1A1A] text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
            <a href="#contact">Contact Me</a>
          </button>
        </div>
      </div>

      <div className="w-full md:flex-1 flex justify-center md:justify-end items-center order-1 md:order-2">
        <div className="photo-container relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] aspect-[3/4] bg-white p-2 md:p-3 shadow-[15px_15px_40px_#bebebe,-15px_-15px_40px_#ffffff]">
          <div className="w-full h-full bg-[#f3f3f3] overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={MyImage} 
                  alt="Iqra Khatoon" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
            </div>
            <div className="absolute inset-0 border-[10px] md:border-[15px] border-white/30 pointer-events-none"></div>
          </div>

          <div className="estb-badge absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 bg-[#9CAF88] flex items-center justify-center text-white text-[8px] md:text-[10px] font-bold p-2 md:p-4 text-center leading-tight">
            ESTB. 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
