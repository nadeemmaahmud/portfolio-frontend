import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

const TEXTS = [
  "backend developer",
  "software engineer", 
  "python developer",
  "django developer",
  "api architect",
  "problem solver",
  "competitive programmer",
];

export default function Navbar({ dark, setDark, active, goTo }) {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, 2000);
      return () => clearTimeout(t);
    }

    const current = TEXTS[textIndex];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      setPaused(true);
      return;
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 45);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % TEXTS.length);
    }
  }, [charIndex, deleting, paused, textIndex]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-[5%] border-b backdrop-blur-md transition-colors duration-300 ${dark ? "bg-[#0d0d14]/90 border-white/10" : "bg-white/90 border-gray-200"}`}>

      {/* Logo */}
      <span className="font-mono text-xs sm:text-sm font-medium flex items-center gap-0 truncate mr-2">
        <span className="text-indigo-400">nadim@portfolio:~$</span>
        <span className="inline-block min-w-[100px] ml-1.5 text-left">
          <span className={dark ? "text-gray-300" : "text-gray-600"}>{displayed}</span>
          <span className="inline-block w-[2px] h-[13px] ml-[2px] align-middle bg-indigo-400 animate-[blink_1s_step-end_infinite]" />
        </span>
      </span>

      {/* Right controls */}
      <div className="flex items-center gap-1.5">
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => goTo(l)}
              className={`text-sm font-medium px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer border-none ${active === l ? "text-indigo-400 bg-indigo-500/15" : dark ? "text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10" : "text-gray-500 hover:text-indigo-500 hover:bg-indigo-50"}`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Theme Toggle (always visible) */}
        <button
          onClick={() => setDark(!dark)}
          title={dark ? "Switch to light mode" : "Switch to dark mode"}
          className={`flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 cursor-pointer ${dark ? "bg-indigo-500/15 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/25" : "bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200"}`}
        >
          {dark ? "☀️" : "🌙"}
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 cursor-pointer ${dark ? "bg-white/5 border-white/10 text-white" : "bg-gray-100 border-gray-200 text-gray-800"}`}
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Overlay */}
      {isOpen && (
        <div className={`absolute top-14 left-0 right-0 border-b flex flex-col p-4 gap-1.5 md:hidden transition-all duration-300 ${dark ? "bg-[#0d0d14]/95 border-white/10" : "bg-white/95 border-gray-200"}`}>
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => {
                goTo(l);
                setIsOpen(false);
              }}
              className={`w-full text-left text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 cursor-pointer border-none ${active === l ? "text-indigo-400 bg-indigo-500/15" : dark ? "text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10" : "text-gray-500 hover:text-indigo-500 hover:bg-indigo-50"}`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}