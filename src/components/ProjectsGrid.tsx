
import { Project } from "@/data/resume";

interface Props {
  projects: Project[];
}

const ProjectsGrid: React.FC<Props> = ({ projects }) => (
  <section aria-label="Progetti curati" className="mt-10">
    <h2 className="text-2xl mb-6 tracking-tight">Progetti curati</h2>
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((proj) => (
        <li key={proj.name} className="bg-[#141724] p-6 rounded-lg border border-[#242733] hover:scale-105 transition-transform">
          <div className="text-lg font-semibold text-foreground mb-1">
            {proj.url ? (
              <a href={proj.url} target="_blank" rel="noopener noreferrer" className="">
                {proj.name}
              </a>
            ) : (
              proj.name
            )}
          </div>
          <div className="text-muted text-sm">{proj.description}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default ProjectsGrid;
