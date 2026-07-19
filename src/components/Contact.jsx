export default function Contact({ dark }) {
  return (
    <section id="contact">
      <div className="max-w-4xl mx-auto px-[5%] py-20">

        <p className="font-mono text-xs font-medium text-indigo-400 tracking-widest uppercase mb-1">Let's Talk</p>
        <h2 className={`text-3xl font-extrabold mb-1.5 ${dark ? "text-white" : "text-slate-800"}`}>Get in Touch</h2>
        <div className="w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded mb-10" />

        <div className={`rounded-2xl border p-10 text-center relative overflow-hidden
          ${dark ? "bg-[#1a1a2e] border-white/10" : "bg-white border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
          <h3 className={`text-2xl font-extrabold mb-2 relative ${dark ? "text-white" : "text-slate-800"}`}>
            Open to new opportunities 👋
          </h3>
          <p className={`text-sm mb-6 max-w-sm mx-auto relative ${dark ? "text-gray-400" : "text-slate-600"}`}>
            Looking for a backend engineering role where clean architecture and reliable systems are valued. Feel free to reach out.
          </p>
          <div className="flex justify-center flex-wrap gap-3 relative">
            <a href="mailto:nadeemmaahmud.cse@gmail.com"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all no-underline">
              ✉ Email Me
            </a>
            <a href="https://github.com/nadeemmaahmud" target="_blank" rel="noreferrer"
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold border hover:-translate-y-0.5 transition-all no-underline
                ${dark ? "border-white/15 text-white hover:border-indigo-400 hover:text-indigo-400" : "border-slate-200 text-slate-700 hover:border-indigo-500 hover:text-indigo-600"}`}>
              🐙 GitHub
            </a>
            <a href="https://linkedin.com/in/nadeemmaahmud" target="_blank" rel="noreferrer"
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold border hover:-translate-y-0.5 transition-all no-underline
                ${dark ? "border-white/15 text-white hover:border-indigo-400 hover:text-indigo-400" : "border-slate-200 text-slate-700 hover:border-indigo-500 hover:text-indigo-600"}`}>
              💼 LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}