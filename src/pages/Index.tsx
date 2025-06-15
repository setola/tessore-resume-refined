
import CurriculumTimeline from "@/components/CurriculumTimeline";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillList from "@/components/SkillList";
import { resumeData } from "@/data/resume";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const { basics, work, projects, skills } = resumeData;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <header className="py-10 mb-12 border-b border-[#242733] animate-fade-in">
        <div className="container flex flex-col items-center justify-center">
          <Avatar className="h-24 w-24 mb-4 shadow-lg border-2 border-[#223140]">
            <AvatarImage
              src={basics.picture}
              alt={basics.name}
            />
            <AvatarFallback>
              {basics.name ? basics.name[0] : "?"}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold tracking-tight mb-2">{basics.name}</h1>
          <h2 className="text-lg text-muted font-mono">
            {basics.label}
          </h2>
          <p className="mt-4 max-w-2xl text-center text-muted text-base">{basics.summary}</p>
          <div className="mt-3 flex gap-6 text-accent">
            <a href={`mailto:${basics.email}`} className="hover:underline">Email</a>
            <a href={basics.website} target="_blank" rel="noopener noreferrer">Sito</a>
            {basics.profiles.map((profile) => (
              <a 
                key={profile.network} 
                href={profile.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {profile.network}
              </a>
            ))}
          </div>
        </div>
      </header>
      <section className="container mx-auto px-2 flex flex-col gap-10 animate-fade-in">
        <CurriculumTimeline experiences={work} />
        <ProjectsGrid projects={projects} />
        <SkillList skills={skills} />
      </section>
      <footer className="mt-20 text-center text-xs text-muted py-6">
        © {new Date().getFullYear()} Emanuele Tessore &mdash; aggiornato con ❤️ tramite Lovable.dev
      </footer>
    </main>
  );
};

export default Index;
