import { PROBLEM_SOLVING_PROFILES } from "../data";

export default function ProblemSolving({ dark }) {
  return (
    <div className="mt-16">
      <p className="font-mono text-xs font-medium text-indigo-400 tracking-widest uppercase mb-1">
        Online Judges
      </p>
      <h3 className={`text-2xl font-extrabold mb-1.5 ${dark ? "text-white" : "text-gray-900"}`}>
        Problem Solving Profiles
      </h3>
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
  );
}
