
import { Experience } from "@/data/resume";
import markdown from '@wcj/markdown-to-html';

interface Props {
  experiences: Experience[];
}

const CurriculumTimeline: React.FC<Props> = ({ experiences }) => (
  <section aria-label="Work experiences" className="mt-10">
    <h2 className="text-2xl mb-6 tracking-tight">Work experiences</h2>
    <ol className="border-l-2 border-accent pl-6">
      {experiences.map((exp, idx) => (
        <li key={exp.company + exp.position} className="mb-10 relative animate-fade-in">
          <div className="absolute -left-3 w-3 h-3 bg-accent rounded-full mt-2 shadow"></div>
          <span className="text-xs text-muted capitalize">
            {exp.startDate} {exp.endDate ? `– ${exp.endDate}` : "– today"}
          </span>
          <div className="text-lg font-semibold mt-1">{exp.position}{' '}
            <span className="text-accent font-normal">@</span>{" "}
            {exp.website && (
              <a href={exp.website} rel="noopener noreferrer" target="_blank" className="">{exp.name}</a>
            ) || (
                <span className="text-muted">{exp.name}</span>
              )}
          </div>
          {exp.location && (
            <div className="text-xs text-muted">{exp.location}</div>
          )}
          {exp.summary && (
            <div className="mt-2 text-base leading-relaxed text-muted" dangerouslySetInnerHTML={{ __html: markdown(exp.summary) }} />
          )}
          {exp.highlights && exp.highlights.length > 0 && (
            <ul className="mt-2 list-disc pl-5 text-base leading-relaxed text-muted">
              {exp.highlights.map((highlight, index) => (
                <li key={index} className="mb-1">{highlight}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  </section>
);

export default CurriculumTimeline;
