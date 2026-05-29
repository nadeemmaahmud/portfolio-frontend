export default function Hero({ dark, goTo }) {
  const btnBase = "px-5 py-2.5 rounded-lg text-sm font-semibold border hover:-translate-y-0.5 transition-all cursor-pointer bg-transparent inline-flex items-center gap-1.5 no-underline";
  const btnDark = "border-white/15 text-white hover:border-indigo-400 hover:text-indigo-400";
  const btnLight = "border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-500";
  const btnOutline = btnBase + " " + (dark ? btnDark : btnLight);

  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-[5%] pt-20 pb-16 w-full">

        <div className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border ${dark ? "bg-indigo-500/15 border-indigo-500/30 text-indigo-300" : "bg-indigo-50 border-indigo-200 text-indigo-600"}`}>
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Open to new opportunities
        </div>

        <h1 className={`text-5xl md:text-6xl font-extrabold leading-tight mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
          Nadim Mahmud
        </h1>

        <p className="font-mono text-lg font-medium bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Python Backend Developer
        </p>

        <p className={`text-base leading-relaxed max-w-lg mb-8 ${dark ? "text-gray-400" : "text-gray-500"}`}>
          Building scalable, production-ready backend systems. From real-time AI chatbots and payment integrations to e-commerce platforms. Based in Dhaka, Bangladesh.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <button onClick={() => goTo("Projects")} className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all cursor-pointer border-none">
            View Projects
          </button>
          <button onClick={() => goTo("Contact")} className={btnOutline}>
            Get in Touch
          </button>
          <a href="/Nadim_Mahmud_Updated.docx" download className={btnOutline}>
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap gap-8">
          {[["4+", "Production Projects"], ["600+", "Problems Solved"], ["3", "International Clients"]].map(([v, l]) => (
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
