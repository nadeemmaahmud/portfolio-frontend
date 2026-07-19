import Achievements from "./Achievements";
import ProblemSolving from "./ProblemSolving";

export default function AchievementsSection({ dark }) {
  return (
    <section id="achievements" className={`transition-colors duration-300 ${dark ? "bg-[#0d0d14]" : "bg-[#e2e8f0]"}`}>
      <div className="max-w-4xl mx-auto px-[5%] py-20">
        <Achievements dark={dark} />
        <ProblemSolving dark={dark} />
      </div>
    </section>
  );
}
