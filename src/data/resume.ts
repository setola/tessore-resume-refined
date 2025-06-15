
export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  website?: string;
  location?: string;
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  keywords?: string[];
}

export interface Skill {
  name: string;
  level?: string;
  keywords: string[];
}

export interface Profile {
  network: string;
  username?: string;
  url: string;
}

export interface ResumeData {
  basics: {
    name: string;
    label: string;
    email: string;
    website: string;
    summary: string;
    picture: string;
    profiles: Profile[];
  };
  work: Experience[];
  projects: Project[];
  skills: Skill[];
}

export const resumeData: ResumeData = {
  basics: {
    name: "Emanuele Tessore",
    label: "Software Developer | Technical Lead",
    email: "emanuele@tessore.com",
    website: "https://www.emanueletessore.com",
    summary: "Sviluppatore, consulente e progettista software con esperienza su web, mobile, cloud e architetture moderne.",
    picture: "https://www.gravatar.com/avatar/0a45f1fb68f93a8a28bac085c505eacd?size=800",
    profiles: [
      {
        network: "GitHub",
        username: "setola",
        url: "https://github.com/setola"
      },
      {
        network: "LinkedIn",
        username: "emanueletessore",
        url: "https://www.linkedin.com/in/emanueletessore/"
      }
    ]
  },
  work: [
    {
      company: "Setola",
      position: "CTO & Co-Founder",
      startDate: "2017-04",
      endDate: undefined,
      summary: "Sviluppo prodotto, leadership tecnica, architettura e consulenza per clienti e partner.",
      website: "https://www.setola.com",
      location: "Torino, Italia"
    },
    {
      company: "Three Bridges",
      position: "Consulente Software",
      startDate: "2020-01",
      endDate: undefined,
      summary: "Progetti digitali per realtà enterprise e PMI, soluzioni cloud native e sviluppo software su misura.",
      website: "https://threebridges.it",
      location: "Italia"
    },
    // Puoi aggiungere nuove esperienze qui...
  ],
  projects: [
    {
      name: "Setola Platform",
      description: "Piattaforma di marketing e loyalty per il mondo retail, gestione campagne e analytics.",
      url: "https://www.setola.com"
    },
    {
      name: "Touchpoint Analytics",
      description: "Sistema real-time di analisi dati clienti e processi, da retail a manufacturing.",
    },
    {
      name: "Ai4Industry",
      description: "Integrazione AI in pipeline industriali, advisory, PoC e progetti pilota.",
      url: "https://ai4industry.com"
    }
    // Altri progetti...
  ],
  skills: [
    {
      name: "Linguaggi",
      keywords: ["TypeScript", "Python", "C#", "Go", "SQL", "HTML/CSS"]
    },
    {
      name: "Framework / Tech",
      keywords: ["React", "Node.js", "Next.js", "PostgreSQL", "Azure", "AWS", "Docker", "Terraform"]
    },
    {
      name: "Soft Skills",
      keywords: ["Leadership tecnica", "Mentoring", "Problem Solving", "Comunicazione efficace"]
    }
  ]
};
