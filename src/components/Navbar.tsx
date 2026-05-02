import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false); // Menu close on click
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = ["About", "Projects", "Skills", "Contact"];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between h-20 px-6 md:px-24 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-black/5"
    >
      <div className="nav-item text-2xl font-bold tracking-tighter text-[#1A1A1A]">
        IQRA<span className="text-[#DCAE96]">.</span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => handleScroll(e, item.toLowerCase())}
            className="nav-item text-xs uppercase tracking-widest text-[#1A1A1A]/70 hover:text-[#DCAE96] transition-colors duration-300 font-semibold"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="nav-item hidden sm:block">
          <a
            href="/Iqra_Khatoon_Resume.pdf"
            download
            className="text-[10px] uppercase tracking-[0.2em] font-bold border-b-2 border-[#9CAF88] pb-1 hover:text-[#9CAF88] transition-colors duration-300"
          >
            Download CV
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-[60]"
        >
          <span className={`h-0.5 w-6 bg-black transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-0.5 w-6 bg-black transition-all ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 w-6 bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      <div className={`fixed inset-0 bg-[#FAF9F6] z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => handleScroll(e, item.toLowerCase())}
            className="text-2xl uppercase tracking-widest font-bold text-[#1A1A1A]"
          >
            {item}
          </a>
        ))}
        <a
          href="/Iqra_Khatoon_Resume.pdf"
          download
          className="mt-4 text-xs uppercase tracking-widest font-bold border-b-2 border-[#9CAF88] pb-1"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
