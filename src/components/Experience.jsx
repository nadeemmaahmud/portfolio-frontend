import { EXPERIENCES } from "../data";

export default function Experience({ dark }) {
  return (
    <section id="experience" className={`transition-colors duration-300 ${dark ? "bg-[#0f0f1a]" : "bg-[#e2e8f0]"}`}>
      <div className="max-w-4xl mx-auto px-[5%] py-20">

        <p className="font-mono text-xs font-medium text-indigo-400 tracking-widest uppercase mb-1">Career</p>
        <h2 className={`text-3xl font-extrabold mb-1.5 ${dark ? "text-white" : "text-slate-800"}`}>Experience</h2>
        <div className="w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded mb-10" />

        <div className="flex flex-col gap-4">
          {EXPERIENCES.map((e) => (
            <div
              key={e.role}
              className={`relative rounded-xl p-6 border overflow-hidden transition-all duration-200
                hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10
                ${dark ? "bg-[#1a1a2e] border-white/10" : "bg-[#f8fafc] border-slate-200/80"}`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-l-xl" />
              <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                <span className={`font-bold text-base ${dark ? "text-white" : "text-slate-800"}`}>{e.role}</span>
                <span className="font-mono text-xs text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">{e.period}</span>
              </div>
              <p className={`text-sm mb-4 ${dark ? "text-gray-400" : "text-slate-600"}`}>{e.company} · {e.location}</p>
              <ul className="flex flex-col gap-1.5">
                {e.points.map((p, i) => (
                  <li key={i} className={`text-sm leading-relaxed pl-4 relative ${dark ? "text-gray-400" : "text-gray-500"}`}>
                    <span className="absolute left-0 text-indigo-400 top-[-1px]">›</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}