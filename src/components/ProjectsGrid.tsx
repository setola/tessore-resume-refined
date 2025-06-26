
import { Project } from "@/data/resume";

interface Props {
  projects: Project[];
}

const ProjectsGrid: React.FC<Props> = ({ projects }) => (
  <section aria-label="Project I've worked on" className="mt-10">
    <h2 className="text-2xl mb-6 tracking-tight">Main Projects</h2>
    <ul className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
      {projects.map((proj) => (
        <li key={proj.name} className="bg-[#141724] p-6 rounded-lg border border-[#242733] hover:scale-105 transition-transform">
          <div className="text-lg font-semibold text-foreground mb-1">
            {proj.url ? (
              <a href={proj.url} target="_blank" rel="noopener noreferrer" className="">
                {proj.name} @ {proj.entity || "Unknown Company"}
              </a>
            ) : (
              proj.name
            )}
          </div>
          <div className="text-muted">{proj.description}</div>
          {proj.highlights && proj.highlights.length > 0 && (
            <ul className="mt-2 list-disc pl-5 text-base leading-relaxed text-muted">
              {proj.highlights.map((highlight, index) => (
                <li key={index} className="mb-1">{highlight}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default ProjectsGrid;
