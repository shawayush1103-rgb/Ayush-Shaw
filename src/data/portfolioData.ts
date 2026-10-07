export interface ProjectItem {
  id: string;
  title: string;
  category: 'Business Ideas' | 'Academic Projects' | 'Entrepreneurship Projects' | 'Case Studies' | 'Presentations';
  shortDescription: string;
  problemOrIdea: string;
  role: string;
  skillsUsed: string[];
  outcome: string;
  year: string;
  projectLink?: string;
  isPlaceholder: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    levelDescription: string; // Realistic tag like "Core Subject", "Coursework", "Practical Focus", "Foundational"
    isPlaceholder?: boolean;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: 'Competitions' | 'Certifications' | 'College Activities' | 'Workshops & Seminars' | 'Leadership';
  description: string;
  isPlaceholder: boolean;
}

export interface InterestItem {
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    roleHeadline: string;
    tagline: string;
    bioShort: string;
    bioLong: string[];
    email: string;
    phone: string; // e.g. "[Add Phone Number]"
    location: string;
    college: string;
    degree: string;
    currentYear: string;
    startYear: string; // e.g. "[Add Start Year]"
    expectedGraduationYear: string; // e.g. "[Add Expected Graduation Year]"
    photoUrl: string | null;
    resumeUrl: string; // "[Resume PDF URL]"
    linkedin: string; // "[Add LinkedIn URL]"
    github: string; // "[Add GitHub URL]"
    instagram: string; // "[Add Instagram URL]"
    backgroundTheme?: 'light' | 'navy' | 'aurora';
  };
  currentlyLearning: {
    subject: string;
    area: string;
    description: string;
  }[];
  educationDetails: {
    degree: string;
    institution: string;
    status: string;
    location: string;
    duration: string;
    highlights: string[];
  };
  skills: SkillCategory[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  interests: InterestItem[];
}

export const initialPortfolioData: PortfolioData = {
  personal: {
    name: "Ayush Shaw",
    roleHeadline: "BBA Student | Aspiring Business Professional | Entrepreneurial Mindset",
    tagline: "Driven 2nd-year BBA student passionate about business strategy, financial fundamentals, modern management, and continuous learning.",
    bioShort: "Hello, I'm Ayush Shaw, a second-year BBA student at Vedanta College, passionate about business, entrepreneurship, management and continuous learning.",
    bioLong: [
      "Currently in my second year of the Bachelor of Business Administration (BBA) program at Vedanta College in Kolkata, I am cultivating a strong foundational understanding of how modern enterprises operate, scale, and solve real-world problems.",
      "My academic focus bridges business administration with an entrepreneurial perspective—analyzing case studies, understanding financial drivers, and exploring how emerging technology and innovative management frameworks reshape industries.",
      "I believe in disciplined continuous learning, hands-on team problem-solving, and building practical business acumen that translates from the classroom into high-impact professional environments."
    ],
    email: "shawayush1103@gmail.com",
    phone: "[Add Phone Number]",
    location: "Kolkata, West Bengal, India",
    college: "Vedanta College",
    degree: "Bachelor of Business Administration (BBA)",
    currentYear: "2nd Year",
    startYear: "[Add Start Year]",
    expectedGraduationYear: "[Add Expected Graduation Year]",
    photoUrl: null, // Displays professional monogram or placeholder avatar
    resumeUrl: "[Resume PDF URL]",
    linkedin: "[Add LinkedIn URL]",
    github: "[Add GitHub URL]",
    instagram: "[Add Instagram URL]",
    backgroundTheme: 'light'
  },
  currentlyLearning: [
    {
      subject: "Business Management",
      area: "Core Curriculum",
      description: "Principles of planning, organizing, organizational leadership, and modern corporate frameworks."
    },
    {
      subject: "Organizational Behaviour",
      area: "Management & People",
      description: "Dynamics of workplace psychology, team motivation, cross-functional collaboration, and leadership ethics."
    },
    {
      subject: "Financial Accounting & Analysis",
      area: "Finance & Numbers",
      description: "Understanding financial statements, cost concepts, working capital management, and fiscal evaluation."
    },
    {
      subject: "Marketing Management",
      area: "Market Strategy",
      description: "Consumer behavior fundamentals, segmentation, targeting, positioning, and contemporary digital outreach."
    },
    {
      subject: "Business Analytics & Excel",
      area: "Analytical Tools",
      description: "Data-informed decision making, data visualization, business modeling, and quantitative problem-solving."
    },
    {
      subject: "Entrepreneurship & Innovation",
      area: "Venture Development",
      description: "Identifying market opportunities, lean business model canvas, customer discovery, and startup fundamentals."
    }
  ],
  educationDetails: {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Vedanta College",
    status: "Currently Enrolled (2nd Year)",
    location: "Kolkata, West Bengal, India",
    duration: "[Add Start Year] – [Add Expected Graduation Year]",
    highlights: [
      "Core coursework in Business Management, Finance, Marketing, and Quantitative Techniques",
      "Active participant in classroom case discussions, management presentations, and team business projects",
      "Focused on bridging theoretical business administration with practical real-world execution"
    ]
  },
  skills: [
    {
      category: "Business & Management",
      description: "Core fundamentals of modern organizational operations and business strategy",
      skills: [
        { name: "Business Management Principles", levelDescription: "BBA Core Focus" },
        { name: "Strategic Thinking", levelDescription: "Academic & Conceptual" },
        { name: "Operations Overview", levelDescription: "Coursework" },
        { name: "[Add Business Skill]", levelDescription: "Placeholder", isPlaceholder: true }
      ]
    },
    {
      category: "Communication",
      description: "Articulating ideas clearly across written, verbal, and visual channels",
      skills: [
        { name: "Business Communication", levelDescription: "Formal & Professional" },
        { name: "Interpersonal Skills", levelDescription: "Team Collaborations" },
        { name: "Professional Writing", levelDescription: "Reports & Summaries" },
        { name: "[Add Communication Skill]", levelDescription: "Placeholder", isPlaceholder: true }
      ]
    },
    {
      category: "Leadership & Teamwork",
      description: "Collaborating constructively, taking ownership, and motivating peers",
      skills: [
        { name: "Team Coordination", levelDescription: "Academic Projects" },
        { name: "Conflict Resolution", levelDescription: "Group Work" },
        { name: "Initiative & Ownership", levelDescription: "Self-driven" },
        { name: "[Add Leadership Skill]", levelDescription: "Placeholder", isPlaceholder: true }
      ]
    },
    {
      category: "Entrepreneurship",
      description: "Identifying value propositions, market needs, and sustainable business models",
      skills: [
        { name: "Lean Canvas & Business Ideation", levelDescription: "Conceptual Focus" },
        { name: "Market Problem Identification", levelDescription: "Case Study Practice" },
        { name: "Value Proposition Design", levelDescription: "Student Interest" },
        { name: "[Add Entrepreneurship Skill]", levelDescription: "Placeholder", isPlaceholder: true }
      ]
    },
    {
      category: "Research & Analysis",
      description: "Gathering market insights, synthesizing information, and evaluating data",
      skills: [
        { name: "Secondary Market Research", levelDescription: "Academic Work" },
        { name: "Qualitative Case Analysis", levelDescription: "Classroom Exercises" },
        { name: "Critical Thinking", levelDescription: "Analytical Reasoning" },
        { name: "[Add Research Skill]", levelDescription: "Placeholder", isPlaceholder: true }
      ]
    },
    {
      category: "Presentation & Pitching",
      description: "Structuring compelling presentations and communicating value",
      skills: [
        { name: "Slide Deck Structuring", levelDescription: "Visual Storytelling" },
        { name: "Public Speaking & Delivery", levelDescription: "College Seminars" },
        { name: "[Add Presentation Skill]", levelDescription: "Placeholder", isPlaceholder: true }
      ]
    },
    {
      category: "Digital Skills & Tools",
      description: "Essential productivity and analytical software for modern business workflows",
      skills: [
        { name: "Microsoft Office / Google Workspace", levelDescription: "Proficient Workflow" },
        { name: "Spreadsheet Basics (Excel/Sheets)", levelDescription: "Formulas & Formatting" },
        { name: "Canva & Visual Collateral", levelDescription: "Presentation Design" },
        { name: "[Add Digital Tool / Skill]", levelDescription: "Placeholder", isPlaceholder: true }
      ]
    },
    {
      category: "Other Skills",
      description: "Additional competencies, domain interests, and emerging skills",
      skills: [
        { name: "Time Management", levelDescription: "Academic Discipline" },
        { name: "Adaptability & Curiosity", levelDescription: "Growth Mindset" },
        { name: "[Add Skill]", levelDescription: "Placeholder", isPlaceholder: true }
      ]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Business Model Case Study: Local Retail to Digital Transformation",
      category: "Case Studies",
      shortDescription: "An academic exploration into how traditional regional retailers in Kolkata can leverage hybrid physical-digital strategies to retain market share.",
      problemOrIdea: "Evaluating how local brick-and-mortar storefronts face margin pressure from large quick-commerce networks and exploring sustainable adaptation avenues.",
      role: "Student Researcher & Presenter (BBA Coursework)",
      skillsUsed: ["Market Research", "Business Strategy", "SWOT Analysis", "Presentation Design"],
      outcome: "Delivered a structured 15-minute case analysis highlighting customer loyalty programs and localized supply agility.",
      year: "2024",
      projectLink: "",
      isPlaceholder: false
    },
    {
      id: "project-2",
      title: "Sustainable Campus Venture: Student Peer Exchange Concept",
      category: "Business Ideas",
      shortDescription: "A conceptual lean business model for a verified peer-to-peer textbook and study resource exchange platform tailored for college students.",
      problemOrIdea: "High semester textbook costs and lack of a reliable, localized marketplace for verified college course notes and reference materials.",
      role: "Concept Originator & Strategy Lead",
      skillsUsed: ["Lean Canvas", "Value Proposition Design", "Customer Discovery", "Financial Projections"],
      outcome: "Formulated complete Lean Canvas, pricing model hypothesis, and operational workflow draft.",
      year: "2024",
      projectLink: "",
      isPlaceholder: false
    },
    {
      id: "project-placeholder-1",
      title: "[Add Project Title: Academic Business Project]",
      category: "Academic Projects",
      shortDescription: "[Add a concise 1-2 sentence overview explaining the central business objective or academic paper topic.]",
      problemOrIdea: "[Describe the specific business challenge, market gap, or research question investigated.]",
      role: "[e.g. Lead Author / Team Member / Business Analyst]",
      skillsUsed: ["[Add Skill 1]", "[Add Skill 2]", "[Add Skill 3]"],
      outcome: "[State tangible outcome, e.g. Final Report Submitted, Class Presentation, or Faculty Feedback]",
      year: "[Add Year]",
      projectLink: "",
      isPlaceholder: true
    },
    {
      id: "project-placeholder-2",
      title: "[Add Project Title: Entrepreneurship / Research]",
      category: "Entrepreneurship Projects",
      shortDescription: "[Add description of the venture idea, pitch deck, or feasibility study.]",
      problemOrIdea: "[State the market problem identified and target customer segment.]",
      role: "[e.g. Founder / Co-Developer / Researcher]",
      skillsUsed: ["[Add Skill 1]", "[Add Skill 2]", "[Add Skill 3]"],
      outcome: "[State the current stage or outcome, e.g. Prototype Deck, Survey Data Collected]",
      year: "[Add Year]",
      projectLink: "",
      isPlaceholder: true
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Inter-College Management Quiz & Business Summit",
      organization: "Vedanta College / Academic Forum",
      date: "[Add Month, Year]",
      category: "College Activities",
      description: "Active engagement in inter-college academic activities focusing on contemporary commercial trends and business acumen.",
      isPlaceholder: false
    },
    {
      id: "ach-placeholder-1",
      title: "[Add Competition / Business Plan Contest]",
      organization: "[Add Organizing College or Institution]",
      date: "[Add Date / Year]",
      category: "Competitions",
      description: "[Add brief summary of the competition, challenge format, and your participation details.]",
      isPlaceholder: true
    },
    {
      id: "ach-placeholder-2",
      title: "[Add Certificate / Professional Workshop]",
      organization: "[Add Issuing Organization or Platform]",
      date: "[Add Completion Date]",
      category: "Certifications",
      description: "[Add topic covered, such as Financial Modeling, Digital Marketing, or Excel for Business.]",
      isPlaceholder: true
    },
    {
      id: "ach-placeholder-3",
      title: "[Add Seminar / Leadership Activity]",
      organization: "[Add Host Institution or Student Committee]",
      date: "[Add Date]",
      category: "Leadership",
      description: "[Add details of student leadership responsibility, event coordination, or seminar attendance.]",
      isPlaceholder: true
    }
  ],
  interests: [
    {
      title: "Entrepreneurship & Startups",
      category: "Venture Building",
      description: "Fascinated by how visionary founders identify unmet market needs, build resilient business models, and scale sustainable enterprises from the ground up.",
      iconName: "Rocket"
    },
    {
      title: "Business Strategy & Management",
      category: "Corporate Excellence",
      description: "Studying how companies establish defensible moats, optimize operational efficiencies, and navigate competitive market disruptions.",
      iconName: "TrendingUp"
    },
    {
      title: "Financial Fundamentals",
      category: "Fiscal Acumen",
      description: "Understanding capital allocation, profitability drivers, cash flow dynamics, and the financial architecture that sustains enterprise growth.",
      iconName: "PieChart"
    },
    {
      title: "Modern Marketing & Consumer Psychology",
      category: "Growth & Branding",
      description: "Exploring what drives human decision-making, brand resonance, and how modern omni-channel campaigns earn lasting customer loyalty.",
      iconName: "Megaphone"
    },
    {
      title: "Technology & Business Innovation",
      category: "Future of Commerce",
      description: "Keeping pace with digital business tools, AI automation in commerce, and tech-enabled productivity across enterprise sectors.",
      iconName: "Cpu"
    },
    {
      title: "Personal & Professional Development",
      category: "Continuous Growth",
      description: "Cultivating a disciplined learning routine, executive communication, active listening, and adaptive leadership habits.",
      iconName: "BookOpen"
    }
  ]
};
