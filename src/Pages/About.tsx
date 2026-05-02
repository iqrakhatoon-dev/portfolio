import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 90%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onMouseEnter = (el: HTMLDivElement) => {
    gsap.to(el, {
      y: -5,
      borderColor: "#9CAF88",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(el.querySelector(".skill-title"), {
      color: "#9CAF88",
      duration: 0.3
    });
  };

  const onMouseLeave = (el: HTMLDivElement) => {
    gsap.to(el, {
      y: 0,
      borderColor: "rgba(26, 26, 26, 0.05)",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      duration: 0.3,
      ease: "power2.inOut"
    });
    gsap.to(el.querySelector(".skill-title"), {
      color: "#1A1A1A",
      duration: 0.3
    });
  };

  const skills = ["React", "TypeScript", "Tailwind", "GSAP", "Node.js", "MongoDB", "Express.js"];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="min-h-screen w-full flex items-center justify-center py-16 md:py-24"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full items-start lg:items-center">
  
        <div className="w-full lg:flex-1">
          <h3 className="about-animate text-[#DCAE96] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4">
            About Me
          </h3>
          <h2 className="about-animate text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6 md:mb-8 leading-[1.1]">
            Designing code, <br /> 
            <span className="text-[#9CAF88]">building dreams.</span>
          </h2>
          <p className="about-animate text-[#1A1A1A]/70 leading-relaxed text-base md:text-lg mb-6 max-w-xl">
            Hi, I'm Iqra Khatoon — a Full-Stack Developer from Lakhimpur, Uttar Pradesh, passionate about building clean and responsive web applications. I'm currently on my journey toward learning some more skills.
          </p>
          <p className="about-animate text-[#1A1A1A]/60 leading-relaxed italic border-l-2 border-[#DCAE96] pl-6 text-sm md:text-base">
            "Tech is the tool, but creativity is the soul of every project I build."
          </p>
        </div>

        <div className="w-full lg:flex-1">
          <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 md:gap-4">
            {skills.map((skill) => (
              <div 
                key={skill} 
                onMouseEnter={(e) => onMouseEnter(e.currentTarget)}
                onMouseLeave={(e) => onMouseLeave(e.currentTarget)}
                className="skill-card bg-white p-4 md:p-6 border border-[#1A1A1A]/5 shadow-sm cursor-default"
              >
                <p className="text-[8px] md:text-[10px] text-[#DCAE96] mb-1 font-bold uppercase tracking-widest">Skill</p>
                <h4 className="skill-title text-base md:text-lg font-bold text-[#1A1A1A]">
                  {skill}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
