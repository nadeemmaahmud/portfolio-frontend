import { ACHIEVEMENTS } from "../data";

export default function Achievements({ dark }) {
  return (
    <div className="mt-16">
      <p className="font-mono text-xs font-medium text-indigo-400 tracking-widest uppercase mb-1">
        Competitive Programming
      </p>
      <h3 className={`text-2xl font-extrabold mb-1.5 ${dark ? "text-white" : "text-slate-800"}`}>
        Achievements
      </h3>
      <div className="w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded mb-8" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {ACHIEVEMENTS.map((a) => (
          <div
            key={a.label}
            className={`rounded-xl p-4 border text-center transition-all hover:-translate-y-0.5
              ${dark ? "bg-[#1a1a2e] border-white/10" : "bg-white border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"}`}
          >
            <div className={`text-3xl font-extrabold ${a.color}`}>{a.value}</div>
            <div className={`font-bold text-sm mt-1 ${dark ? "text-white" : "text-slate-700"}`}>
              {a.label}
            </div>
            <div className={`text-xs mt-0.5 ${dark ? "text-gray-500" : "text-slate-600"}`}>
              {a.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
