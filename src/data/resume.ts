
export interface Experience {
  name: string;
  department?: string;
  highlights?: string[];
  company?: string;
  position?: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  website?: string;
  location?: string;
}

export interface Location {
  countryCode?: string;
  region?: string;
  city?: string;
  address?: string;
  postalCode?: string;
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  keywords?: string[];
  highlights?: string[];
  startDate?: string;
  endDate?: string;
  roles?: string[];
  entity?: string;
  type?: string;
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
    website?: string;
    summary: string;
    location?: Location;
    picture: string;
    profiles: Profile[];
  };
  work: Experience[];
  projects: Project[];
  skills: Skill[];
}

export const resumeData: ResumeData = {
  "basics": {
    "name": "Emanuele Tessore",
    "label": "IT Nerd",
    "picture": "https://www.gravatar.com/avatar/0a45f1fb68f93a8a28bac085c505eacd?size=800",
    //"image": "https://www.gravatar.com/avatar/0a45f1fb68f93a8a28bac085c505eacd?size=800",
    "email": "emanuele.tessore@gmail.com",
    "website": "https://www.emanueletessore.com/",
    "summary": "Hi! my name is **Emanuele** but everybody calls me **Tex** or **Setola**.\n\nI'm a **dev ops**, I was a **web developer** and I'll forever be a **tech enthusiast**.\n\nI've started developing applications in academia, in early 2000, with languages like **C++** and **Java**.\n\nI've always been fascinated by the potential of the Internet, a passion that led me to face **either technical** or **design and marketing** topics.\n\nI also developed a strong interest in automation and interactions between technology and the physical world while exploring micro-controllers, IoT and CNC stuff\n\nTechnology not only is the key point of my professional career, but it’s also my oldest hobby and of course one **passion** that takes me over the years.\n\nI like Linux, OpenSource, Arduino and Raspberry PI, Kubernetes, motorbikes and drums",
    "location": {
      "countryCode": "IT",
      "region": "Venice"
    },
    "profiles": [
      {
        "network": "GitHub",
        "username": "Setola",
        "url": "https://github.com/setola"
      },
      {
        "network": "BitBucket",
        "username": "Setola",
        "url": "https://bitbucket.org/setola/"
      }
    ]
  },
  "work": [
    {
      "name": "DMIND",
      "position": "Dev Ops Manager",
      "department": "Lab (IT dept.)",
      "website": "https://www.dmind.it/",
      "startDate": "2022-06-01",
      "summary": "DMIND is a multi-channel Communication Agency with a strategic consulting approach. We are an interdisciplinary team, organized in dedicated business units, capable of managing all communication assets on and off line.",
      "highlights": [
        "CI/CD Architect for internal and external projects",
        "Transition to containers for development and production environments",
        "Kubernetes Architect for hosting internal and external projects",
        "Servers and network equipment management",
        "Technical advisor for designing and planning of IT architectures"
      ]
    },
    {
      "name": "DigitalMind",
      "position": "Senior Backend Developer",
      "department": "RedBooth Lab (IT dept.)",
      "website": "https://www.digital-mind.it/",
      "startDate": "2018-09-03",
      "endDate": "2022-05-31",
      "summary": "DigitalMind is a multi-media Communication Agency: we take care of everithing from creativity to online and offline communication strategy and planning, including technical stuff for your online projects",
      "highlights": [
        "CI/CD Architect for internal and external projects",
        "Servers and network equipment management",
        "Requirements collection, analysis and development of software solutions",
        "IT consultant and audit for third party installations",
        "Development of custom applications"
      ]
    },
    {
      "name": "Calicantus / WebMaori",
      "position": "Senior Backend Developer",
      "department": "Technical Dept.",
      "website": "https://calicant.us/",
      "startDate": "2016-09-05",
      "endDate": "2018-09-02",
      "summary": "Calicantus offers a **complete outsourcing solution for your e-commerce**; from technology to strategy, logistic, storage and shop management.",
      "highlights": [
        "Custom e-commerce platform development and maintenance",
        "Two way ERP/e-commerce integration",
        "Requirements collection, analysis and development of software solutions",
        "Knowledge of common e-commerce operations and procedures",
        "Update and upgrade legacy code running on production environment"
      ]
    },
    {
      "name": "T.S.W.",
      "position": "Senior Web Developer",
      "department": "Research & Development",
      "website": "http://www.tsw.it/",
      "startDate": "2015-06-17",
      "endDate": "2016-08-12",
      "summary": "T.S.W. is a web agency with a **wide range of knowledge and experience** in every aspect of **digital marketing**.\n\nCustomers are followed through the development process of their web oriented projects: from technical implementation to SEO and SEM strategies.",
      "highlights": [
        "Developing and maintaining websites",
        "Research & Development of new technologies",
        "Project development workflow standardization",
        "Wide use of PHP OOP Patterns on Symfony and Zend framework",
        "Deep direct experience with WordPress API",
        "Node JS for frontend compiling and deploy",
        "Multi-node website Infrastructure configuration and optimization",
        "Experience with Ansible for infrastructure orchestration and automation"
      ]
    },
    {
      "name": "FastBooking",
      "position": "Project Manager and Web Developer",
      "department": "Web Dep. - Research & Development",
      "website": "http://www.fastbooking.com/",
      "startDate": "2010-09-27",
      "endDate": "2015-06-15",
      "summary": "With an extensive array of cutting-edge **e-commerce solutions** on offer, FASTBOOKING brings the digital traveler to hotels’ doorstep.\n\nThey offer **hoteliers** tailor-made strategies and on-going expert advice, boosting their direct sales, improving their operating results and helping them get greater independence.",
      "highlights": [
        "Developing and maintaining websites",
        "Research & Development of new products",
        "Project Manager and client accounting for the Web Package Dept.",
        "SEO for third party websites",
        "Wide experience on AJAX, JavaScript for the DOM and jQuery framework",
        "Extensive experience with PHP and CodeIgniter framework",
        "Deep direct experience with WordPress API"
      ]
    },
    {
      "name": "Citex Network",
      "position": "Co-Owner, CTO",
      "department": "IT Ops",
      "startDate": "2008-09-27",
      "endDate": "2018-09-27",
      "summary": "",
      "highlights": [
        "Developing and maintaining LAMP infrastructure and WordPress network with 30+ websites",
        "WordPress plugins development",
        "DevOps automation and Continuous Integration",
        "SEO for AdSense centered blogs"
      ]
    },
    {
      "name": "Zip Progetti",
      "position": "Technician",
      "department": "Tech Dept.",
      "website": "http://www.zip-progetti.it/",
      "startDate": "2004-09-27",
      "endDate": "2008-09-27",
      "summary": "Communication Agency specialized in radio advertising with a press office delivering multimedial content about local news",
      "highlights": [
        "Developing and maintaining of audio and video streaming equipment",
        "Setup and configuration of web-radio software integrated with website",
        "Net infrastructure setup and maintenance",
        "Development of a multimedia distribution system",
        "Producer and sound engineer"
      ]
    }
  ],
  "volunteer": [
    {
      "organization": "MT-Lab.org Mirano (VE)",
      "position": "Partner",
      "website": "http://mt-lab.org/",
      "startDate": "2000-01-01",
      "endDate": "2009-01-01",
      "summary": "",
      "highlights": [
        "Development, maintenance and SEO for websites and blogs",
        "Linux Server admin",
        "Good knowledge of Wordpress CMS and its APIs",
        "Extended experience in developing PHP applications",
        "Excellent knowledge of SEO techniques and web-marketing",
        "Technical organization for events such as LAN-parties and conferences."
      ]
    },
    {
      "organization": "NGI and GamesNet",
      "position": "Volunteer",
      "website": "http://ngi.it/",
      "startDate": "2000-01-01",
      "endDate": "2009-01-01",
      "summary": "",
      "highlights": [
        "Development and maintenance Gameservers Starsiege: Tribes",
        "Organization tournaments and LAN-party",
        "Linux Server admin",
        "Design and Development of XetBot, an irc bot for gamers",
        "Excellent knowledge of HTML",
        "Experience developing PHP applications",
        "Technical organization of lan parties and tournaments",
        "Excellent knowledge of Java, in particular jConnector",
        "Experience in remote management of systems Gentoo and Debian"
      ]
    }
  ],
  "education": [
    {
      "institution": "Valsalice Salesian Institute",
      "area": "Math and Science Academy",
      "studyType": "High School",
      "startDate": "2002-01-01",
      "endDate": "1997-01-01",
      "gpa": "70/100",
      "courses": []
    }
  ],
  "skills": [
    {
      "name": "Back-End Development",
      "level": "Master",
      "keywords": [
        "PHP",
        "OOP",
        "NodeJS",
        "Symfony",
        "Rabbit MQ",
        "Docker",
        "WordPress"
      ]
    },
    {
      "name": "Cloud Engeneering",
      "level": "Advanced",
      "keywords": [
        "Kubernetes",
        "Docker",
        "AWS",
        "GCE",
        "DigitalOcean",
        "Ansible"
      ]
    },
    {
      "name": "Linux System Administration",
      "level": "Advanced",
      "keywords": ["CLI", "SSH", "Puppet", "Ubuntu", "Kubernetes"]
    },
    {
      "name": "DevOps",
      "level": "Advanced",
      "keywords": [
        "Continuous Integration",
        "Continuous Development",
        "Gitlab CI",
        "Git",
        "TDD"
      ]
    },
    {
      "name": "Front-End Development",
      "level": "Intermediate",
      "keywords": [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Angular",
        "Polymer",
        "Vue",
        "WordPress"
      ]
    }
  ],
  "languages": [
    {
      "language": "Italian",
      "fluency": "Native Speaker"
    },
    {
      "language": "English",
      "fluency": "Good"
    }
  ],
  "interests": [
    {
      "name": "Embedded Systems",
      "keywords": ["Raspberry PI", "Arduino", "ESP 8266/32"]
    },
    {
      "name": "Music",
      "keywords": ["Drums", "Sound Engineering"]
    },
    {
      "name": "Maker",
      "keywords": ["Wood Working", "CNC Machining", "Gardening"]
    },
    {
      "name": "Gamer",
      "keywords": ["RTS", "FPS", "MOBA"]
    }
  ],
  "certificates": [
    {
      "name": "CNC Machine Operator",
      "date": "2024-07-30",
      "issuer": "ENAIP"
    }
  ],
  "references": [
    {
      "name": "Matteo Canever",
      "reference": "Emanuele's passion for the web and technology is huge. We work in the same team and we often collaborate to find solutions and optimize our tools. He's an experienced web developer and project manager and his approach is focused on code quality and reuse."
    },
    {
      "name": "Sebastiano Montino",
      "reference": "Collaborating with Emanuele was certainly challenging because of his natural inclination to make the web a better place. He's a complete web developer: his knowledge is not limited to standard web components like HTML, CSS and JS. He was sa really good collegue to work with."
    }
  ],
  "projects": [
    {
      "name": "Modernize prod infrastructure",
      "description": "Re-designing the production infrastructure to take advantages of containerization technology, orchestrated by Kubernets",
      "highlights": [
        "Research of K8s capabilities",
        "Evaluation of different SaaS offers: AWS, GCE, DigitalOcean",
        "Redaction of yaml files for infrastructure description of every project",
        "Development of Helm charts",
        "Architecture for shared resources such as mysql, nfs and elasticsearch",
        "Metrics collection with Loki/Prometheus visualized in Grafana",
        "Automatic scaling in case of peak demand"
      ],
      "keywords": ["docker", "container", "development"],
      "startDate": "2021-02-01",
      "endDate": "2022-02-01",
      "url": "http://www.dmind.it/",
      "roles": ["Infrastructure Architect"],
      "entity": "DigitalMind",
      "type": "it-ops"
    },
    {
      "name": "Containers in development workflow",
      "description": "Upgrading development workflow from a locally installed LAMP stack to docker containers",
      "highlights": [
        "Research on costs and benefits of using containers while developing tech projects",
        "Comparison of container orchestration tools such as docker-compose",
        "Integration with existing CI/CD josb and pipelines",
        "Development of tailor made docker images",
        "Porting of existing project to docker-compose environment",
        "Tool for syncronize databases and media on dev, stage and prod environments",
        "Bug fixing and new features for CI/CD, docker images and compose files"
      ],
      "keywords": ["docker", "container", "development"],
      "startDate": "2019-02-01",
      "endDate": "2021-02-01",
      "url": "http://www.rblab.it/",
      "roles": ["Software Architect", "IT Ops"],
      "entity": "DigitalMind",
      "type": "it-ops"
    },
    {
      "name": "Graniti Fiandre DAM",
      "description": "A tailor made internal tool for organizing catalogue and marketing images",
      "highlights": [
        "Review, audit, configuration and optimization of the client's IT infrastructure for the project",
        "Requirements collection, analysis and development of software solutions",
        "Integration with client's current available infrastructure (ex. auth management and data shares)",
        "Analysis of the client's media archive",
        "Multi node architecture with decoupled services",
        "Batch process automation via systemd"
      ],
      "keywords": ["digital assets management", "custom platform"],
      "startDate": "2018-10-01",
      "endDate": "2019-10-01",
      "url": "http://www.iris-group.it/",
      "roles": ["Software Architect", "Backend Developer", "IT Ops"],
      "entity": "DigitalMind",
      "type": "full-stack"
    },
    {
      "name": "K-Maori",
      "description": "A fully integrated e-commerce solution",
      "highlights": [
        "Knowledge of common e-commerce operations and procedures",
        "How to update and upgrade legacy code running on production environment",
        "Requirements collection, analysis and development of software solutions",
        "Custom integration with client's ERPs",
        "Customer documentation area modules",
        "B2B functionality with agents and customers",
        "Maintain and add new features",
        "Migrate legacy code and bug-fixing"
      ],
      "keywords": ["e-commerce", "custom platform"],
      "startDate": "2016-09-05",
      "endDate": "2018-08-01",
      "url": "http://www.kmaori.com/",
      "roles": ["Software Architect", "Backend Developer"],
      "entity": "Calicantus",
      "type": "backend"
    },
    {
      "name": "Eden Viaggi",
      "description": "Corporate website selling travel packages",
      "highlights": [
        "Backend development of one of the biggest italian tour operator",
        "Integration between WordPress and based on AS400 custom APIs",
        "DevOps: Project deployment system via Git and Ansible",
        "Heavy load application development and optimization",
        "Multi-node application with message queue"
      ],
      "keywords": [],
      "startDate": "2015-06-17",
      "endDate": "2016-03-27",
      "url": "https://www.edenviaggi.it/",
      "roles": ["Software Architect", "Backend Developer"],
      "entity": "T.S.W.",
      "type": "backend"
    },
    {
      "name": "Blu Hotels",
      "description": "name portal and every chain hotel official website (30+ hotels)",
      "highlights": [
        "Development of the new name portal and single hotel website, wire-framing and UX/UI design",
        "Development of web interface to the name's affiliate system",
        "Development of one way interface between rates manager and website",
        "Project management and client accounting"
      ],
      "keywords": [],
      "startDate": "2016-09-05",
      "endDate": "2018-10-25",
      "url": "http://www.bluhotels.it/",
      "roles": ["Backend Developer", "Project Manager"],
      "entity": "FastBooking",
      "type": "full-stack"
    },
    {
      "name": "Gajardoni Sport",
      "description": "name new e-commerce selling fencing equipment worldwide",
      "highlights": [
        "Installation and maintenance of WooCommerce in a multi-site environment",
        "Development of a one way integration between Danea EasyFatt and WooCommerce"
      ],
      "keywords": [],
      "startDate": "2016-11-03",
      "url": "http://www.gajardoni.com/",
      "roles": ["Backend Developer"],
      "entity": "Citex Network",
      "type": "backend"
    }
  ]
};