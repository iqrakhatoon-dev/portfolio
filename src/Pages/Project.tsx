import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  github: string;
  live: string;
}

const Project: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

   const projectData: Project[] = [
    {
      id: "01",
      title: "NEXUS Studio",
      desc: "Premium animated agency site inspired by Lazarev.agency. Mega dropdowns & scroll-triggered video interactions.",
      tech: ["GSAP", "Locomotive Scroll", "Vanilla JS"],
      github: "https://github.com/iqrakhatoon-dev/nexus-studio-website",
      live: "https://nexus-studio-website.vercel.app",
    },
    {
      id: "02",
      title: "Employee Management",
      desc: "Role-based dashboard with Admin & Employee views. Task lifecycle managed via Context API.",
      tech: ["React", "Context API", "Tailwind"],
      github: "https://github.com/iqrakhatoon-dev/Employees-Management-System",
      live: "https://employees-management-system-three.vercel.app",
    },
    {
      id: "03",
      title: "AI Image Generator",
      desc: "I built a premium AI-powered image generation web application using Vanilla JavaScript and HuggingFace Inference API integration.",
      tech: ["HTML5","CSS3", "Tailwind CSS","JavaScript (ES6+)", "OpenAI API"],
      github: "Private Repository",
      live: "https://iq-ai-image-generator.vercel.app",
    },
    {
      id: "04",
      title: "JS Dictionary App",
      desc: "Real-time word search using Fetch API. Displays phonetics, meanings and examples.",
      tech: ["Vanilla JS", "Fetch API", "REST API"],
      github: "https://github.com/iqrakhatoon-dev/dictionary-app",
      live: "https://dictionary-app-eight-teal.vercel.app",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proj-card", {
        scrollTrigger: {
          trigger: ".proj-col",
          start: "top 85%",
        },
        x: -30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full">
      <div className="mb-12">
        <span className="text-[#DCAE96] font-medium tracking-[0.3em] uppercase text-[10px]">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-2 leading-tight">
          Featured <span className="text-[#9CAF88]">Work</span>
        </h2>
      </div>

      <div className="proj-col flex flex-col gap-4">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="proj-card group relative bg-white border border-[#1A1A1A]/10 px-7 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-colors duration-500 hover:border-[#9CAF88]/40 overflow-hidden"
          >
            <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9CAF88] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-[#DCAE96] font-medium tracking-[0.2em] mb-1">
                {project.id}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-2 transition-transform duration-300 group-hover:translate-x-1">
                {project.title}
              </h3>
              <p className="text-[#1A1A1A]/55 text-xs md:text-sm leading-relaxed mb-4 max-w-2xl">
                {project.desc}
              </p>
              
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] bg-[#9CAF88]/10 text-[#7a9468] px-2.5 py-1 font-semibold uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex md:flex-col items-center md:items-end gap-6 md:gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-none border-black/5 w-full md:w-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A]/40 hover:text-[#DCAE96] transition-colors duration-300"
              >
                GitHub ↗
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A]/40 hover:text-[#9CAF88] transition-colors duration-300"
              >
                Live Demo ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
