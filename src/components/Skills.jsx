import { SKILLS } from "../data";

const colorMap = {
  indigo: { dot: "bg-indigo-500", tag: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10" },
  violet: { dot: "bg-violet-500", tag: "text-violet-400 border-violet-500/30 bg-violet-500/10" },
  cyan:   { dot: "bg-cyan-500",   tag: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" },
  emerald:{ dot: "bg-emerald-500",tag: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
  amber:  { dot: "bg-amber-500",  tag: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
  red:    { dot: "bg-red-500",    tag: "text-red-400 border-red-500/30 bg-red-500/10" },
};

export default function Skills({ dark }) {
  return (
    <section id="skills">
      <div className="max-w-4xl mx-auto px-[5%] py-20">

        <p className="font-mono text-xs font-medium text-indigo-400 tracking-widest uppercase mb-1">Toolkit</p>
        <h2 className={`text-3xl font-extrabold mb-1.5 ${dark ? "text-white" : "text-gray-900"}`}>Technical Skills</h2>
        <div className="w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((s) => {
            const c = colorMap[s.color];
            return (
              <div
                key={s.category}
                className={`rounded-xl p-4 border transition-all duration-200 hover:border-indigo-500 hover:-translate-y-0.5
                  ${dark ? "bg-[#1a1a2e] border-white/10" : "bg-white border-gray-200"}`}
              >
                <div className="flex items-center gap-2 font-bold text-sm mb-3">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                  <span className={dark ? "text-white" : "text-gray-800"}>{s.category}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <span key={item} className={`font-mono text-xs px-2 py-0.5 rounded border ${c.tag}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}