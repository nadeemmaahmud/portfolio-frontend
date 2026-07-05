import { PROJECTS, ACHIEVEMENTS, PROBLEM_SOLVING_PROFILES } from "../data";

export default function Projects({ dark }) {
  return (
    <section id="projects" className={`transition-colors duration-300 ${dark ? "bg-[#0f0f1a]" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto px-[5%] py-20">

        <p className="font-mono text-xs font-medium text-indigo-400 tracking-widest uppercase mb-1">Work</p>
        <h2 className={`text-3xl font-extrabold mb-1.5 ${dark ? "text-white" : "text-gray-900"}`}>Projects</h2>
        <div className="w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl p-5 border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col gap-3
                bg-gradient-to-br p-[1.5px]`}
              style={{
                background: `linear-gradient(${dark ? "#1a1a2e" : "#ffffff"}, ${dark ? "#1a1a2e" : "#ffffff"}) padding-box, linear-gradient(135deg, var(--tw-gradient-stops)) border-box`,
                border: "1.5px solid transparent",
              }}
            >
              <div className={`rounded-xl p-5 flex flex-col gap-3 h-full ${dark ? "bg-[#1a1a2e]" : "bg-white"}`}>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <div className={`font-extrabold text-base ${dark ? "text-white" : "text-gray-900"}`}>{p.name}</div>
                    <div className={`text-xs mt-0.5 ${dark ? "text-gray-500" : "text-gray-400"}`}>{p.sub}</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border flex-shrink-0 ${dark ? "bg-white/5 border-white/10 text-gray-400" : "bg-gray-50 border-gray-200 text-gray-500"}`}>
                    {p.client}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed flex-1 ${dark ? "text-gray-400" : "text-gray-500"}`}>{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((tag) => (
                    <span key={tag} className={`font-mono text-xs px-2 py-0.5 rounded border ${dark ? "bg-white/5 border-white/10 text-gray-400" : "bg-gray-50 border-gray-200 text-gray-500"}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <p className="font-mono text-xs font-medium text-indigo-400 tracking-widest uppercase mb-1">Competitive Programming</p>
          <h3 className={`text-2xl font-extrabold mb-1.5 ${dark ? "text-white" : "text-gray-900"}`}>Achievements</h3>
          <div className="w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ACHIEVEMENTS.map((a) => (
              <div
                key={a.label}
                className={`rounded-xl p-4 border text-center transition-all hover:-translate-y-0.5
                  ${dark ? "bg-[#1a1a2e] border-white/10" : "bg-white border-gray-200"}`}
              >
                <div className={`text-3xl font-extrabold ${a.color}`}>{a.value}</div>
                <div className={`font-bold text-sm mt-1 ${dark ? "text-white" : "text-gray-800"}`}>{a.label}</div>
                <div className={`text-xs mt-0.5 ${dark ? "text-gray-500" : "text-gray-400"}`}>{a.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem Solving Profiles */}
        <div className="mt-16">
          <p className="font-mono text-xs font-medium text-indigo-400 tracking-widest uppercase mb-1">Online Judges</p>
          <h3 className={`text-2xl font-extrabold mb-1.5 ${dark ? "text-white" : "text-gray-900"}`}>Problem Solving Profiles</h3>
          <div className="w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {PROBLEM_SOLVING_PROFILES.map((profile) => (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl p-4 border block transition-all duration-200 hover:-translate-y-0.5 no-underline ${profile.color}`}
              >
                <div className="flex flex-col h-full justify-between gap-2">
                  <div>
                    <div className="font-extrabold text-sm">{profile.platform}</div>
                    <div className={`font-mono text-[10px] mt-1 truncate ${dark ? "text-gray-400" : "text-gray-500"}`}>
                      @{profile.username}
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold tracking-wider uppercase mt-1">
                    Profile ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}