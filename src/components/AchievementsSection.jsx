import Achievements from "./Achievements";
import ProblemSolving from "./ProblemSolving";

export default function AchievementsSection({ dark }) {
  return (
    <section id="achievements" className={`transition-colors duration-300 ${dark ? "bg-[#0d0d14]" : "bg-[#f1f5f9]"}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <Achievements dark={dark} />
        <ProblemSolving dark={dark} />
      </div>
    </section>
  );
}
