import { PROJECTS } from "../data";

export default function Projects({ dark }) {
  return (
    <section id="projects" className={`transition-colors duration-300 ${dark ? "bg-[#0f0f1a]" : "bg-[#e2e8f0]"}`}>
      <div className="max-w-4xl mx-auto px-[5%] py-20">

        <p className="font-mono text-xs font-medium text-indigo-400 tracking-widest uppercase mb-1">Work</p>
        <h2 className={`text-3xl font-extrabold mb-1.5 ${dark ? "text-white" : "text-slate-800"}`}>Projects</h2>
        <div className="w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl p-5 border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col gap-3
                bg-gradient-to-br p-[1.5px]`}
              style={{
                background: `linear-gradient(${dark ? "#1a1a2e" : "#f8fafc"}, ${dark ? "#1a1a2e" : "#f8fafc"}) padding-box, linear-gradient(135deg, var(--tw-gradient-stops)) border-box`,
                border: "1.5px solid transparent",
              }}
            >
              <div className={`rounded-xl p-5 flex flex-col gap-3 h-full ${dark ? "bg-[#1a1a2e]" : "bg-[#f8fafc]"}`}>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <div className={`font-extrabold text-base ${dark ? "text-white" : "text-slate-800"}`}>{p.name}</div>
                    <div className={`text-xs mt-0.5 ${dark ? "text-gray-500" : "text-slate-600"}`}>{p.sub}</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border flex-shrink-0 ${dark ? "bg-white/5 border-white/10 text-gray-400" : "bg-slate-100 border-slate-200 text-slate-600"}`}>
                    {p.client}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed flex-1 ${dark ? "text-gray-400" : "text-slate-600"}`}>{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((tag) => (
                    <span key={tag} className={`font-mono text-xs px-2 py-0.5 rounded border ${dark ? "bg-white/5 border-white/10 text-gray-400" : "bg-slate-100 border-slate-200 text-slate-600"}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}