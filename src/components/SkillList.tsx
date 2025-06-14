
import { Skill } from "@/data/resume";

interface Props {
  skills: Skill[];
}

const SkillList: React.FC<Props> = ({ skills }) => (
  <section aria-label="Competenze" className="mt-10">
    <h2 className="text-2xl mb-6 tracking-tight">Skill</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map(skill => (
        <div key={skill.name} className="bg-[#141724] p-4 rounded border border-[#232736]">
          <div className="font-medium text-accent mb-1">{skill.name}</div>
          <ul className="flex flex-wrap gap-2 mt-1">
            {skill.keywords.map(k => (
              <li key={k} className="px-2 py-0.5 bg-[#282b3a] text-foreground text-xs rounded">{k}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default SkillList;
