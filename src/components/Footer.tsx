import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/iqrakhatoon-dev" },
    { name: "LinkedIn", url: "https://linkedin.com/in/iqrakhatoon-dev" },
    { name: "Instagram", url: "https://www.instagram.com/iqrakhatoon.dev/" },
    { name: "Email", url: "mailto:iqrakhatoonnn@gmail.com" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-link", {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="py-16 md:py-20 border-t border-black/5 flex flex-col items-center gap-8 bg-[#FAF9F6]"
    >
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link group relative text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/60 hover:text-[#9CAF88] transition-colors duration-300 pb-1"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#9CAF88] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 px-6 text-center">
        <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/30">
          © 2026 Iqra Khatoon — All Rights Reserved
        </p>
        <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-[#1A1A1A]/20">
          Crafted with <span className="text-[#DCAE96]">React</span> &{" "}
          <span className="text-[#9CAF88]">GSAP</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
