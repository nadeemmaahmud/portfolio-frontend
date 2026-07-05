export default function Hero({ dark, goTo }) {
  const btnBase = "px-5 py-2.5 rounded-lg text-sm font-semibold border hover:-translate-y-0.5 transition-all cursor-pointer bg-transparent inline-flex items-center gap-1.5 no-underline";
  const btnDark = "border-white/15 text-white hover:border-indigo-400 hover:text-indigo-400";
  const btnLight = "border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-500";
  const btnOutline = btnBase + " " + (dark ? btnDark : btnLight);

  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-[5%] pt-20 pb-16 w-full">

        <h1 className={`text-5xl md:text-6xl font-extrabold leading-tight mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
          Nadim Mahmud
        </h1>

        <p className="font-mono text-lg font-medium bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Backend Developer (Python)
        </p>

        <p className={`text-base leading-relaxed max-w-lg mb-8 ${dark ? "text-gray-400" : "text-gray-500"}`}>
          Backend Engineer passionate about crafting scalable server architectures and efficient APIs. I bridge the gap between AI services and production apps, while continuously refining my logical thinking through competitive programming.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <button onClick={() => goTo("Projects")} className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all cursor-pointer border-none">
            View Projects
          </button>
          <button onClick={() => goTo("Contact")} className={btnOutline}>
            Get in Touch
          </button>
          <a href="/Nadim_Mahmud.pdf" download="Nadim_Mahmud_CV.pdf" className={btnOutline}>
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap gap-8">
          {[["4+", "Production Projects"], ["600+", "Problems Solved"], ["4", "International Clients"]].map(([v, l]) => (
            <div key={l} className="border-l-2 border-indigo-500 pl-3">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{v}</div>
              <div className={`text-xs mt-0.5 font-medium ${dark ? "text-gray-400" : "text-gray-500"}`}>{l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
