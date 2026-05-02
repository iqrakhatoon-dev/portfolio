import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skill: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillGroups = [
    { 
      category: "Frontend", 
      tools: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "GSAP", "Framer Motion"] 
    },
    { 
      category: "Backend", 
      tools: ["Node.js", "Express.js", "MongoDB"] 
    },
    { 
      category: "Deployment & Version Control", 
      tools: ["Git", "GitHub", "Vercel"] 
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-box", {
        scrollTrigger: {
          trigger: ".skill-grid",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div className="mb-12">
        <span className="text-[#DCAE96] font-medium tracking-[0.3em] uppercase text-[10px]">
          Technical Expertise
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-2 leading-tight">
          Tools & <span className="text-[#9CAF88]">Skills</span>
        </h2>
      </div>

      <div className="skill-grid flex flex-col gap-10">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-5">

            <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#DCAE96] border-l-2 border-[#DCAE96] pl-4">
              {group.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {group.tools.map((tool) => (
                <div 
                  key={tool} 
                  className="skill-box group bg-white border border-[#1A1A1A]/5 px-6 py-3 transition-colors duration-300 hover:border-[#9CAF88]/40"
                >
                  <p className="text-xs md:text-sm font-bold text-[#1A1A1A]/60 group-hover:text-[#9CAF88] transition-colors">
                    {tool}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
