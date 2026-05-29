import { useState, useEffect } from "react";
import { NAV_LINKS } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("About");

  function goTo(id) {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            setActive(NAV_LINKS.find((l) => l.toLowerCase() === e.target.id) || "About");
        }),
      { threshold: 0.3 }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dark ? "bg-[#0d0d14] text-white" : "bg-gray-50 text-gray-900"}`}>
      <Navbar dark={dark} setDark={setDark} active={active} goTo={goTo} />
      <Hero dark={dark} goTo={goTo} />
      <Experience dark={dark} />
      <Skills dark={dark} />
      <Projects dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}