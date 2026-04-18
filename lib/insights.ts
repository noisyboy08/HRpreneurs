export type Article = {
  slug: string;
  tag: string;
  bg: "mint" | "sun" | "coral" | "purple" | "sand" | "cream";
  date: string;
  read: string;
  title: string;
  excerpt: string;
  body: string[];
  author: string;
  featured?: boolean;
};

export const articles: Article[] = [
  {
    slug: "future-workforce-planning",
    tag: "Talent Management", bg: "purple", date: "April 2026", read: "8 min",
    title: "The Future of Workforce Planning: Building Adaptive Organizations",
    excerpt: "As organizations face unprecedented change — from AI integration to demographic shifts — workforce planning has never been more critical.",
    body: [
      "Workforce planning is undergoing a fundamental shift. The static annual headcount plan has given way to dynamic, continuous workforce design — shaped by AI, demographic change, and new talent economics.",
      "Leading organizations now treat workforce planning as a capability-building exercise, not a hiring exercise. Capabilities are designed first; structures and roles follow.",
      "Three practices separate the leaders from the rest: skills taxonomies that refresh quarterly, scenario-based modelling of workforce supply-and-demand, and fluid deployment of talent across internal opportunities.",
      "The firms that win over the next decade will not be those with the largest workforces — they will be those with the most adaptive ones.",
    ],
    author: "Ami Upadhyaya", featured: true,
  },
  {
    slug: "labour-law-2026",
    tag: "Compliance", bg: "coral", date: "March 2026", read: "5 min",
    title: "Navigating Labour Law Amendments in 2026",
    excerpt: "Recent amendments to the Labour Codes bring significant changes to workplace compliance.",
    body: [
      "The 2026 amendments to the Labour Codes introduce material changes across wages, industrial relations, and social security.",
      "Companies must revisit their payroll, leave and gratuity structures to align with the new definitions of 'wages' and 'employee'.",
      "A compliance refresh is no longer optional — it's now a boardroom agenda item.",
    ],
    author: "HRpreneurs Research",
  },
  {
    slug: "coaching-managers",
    tag: "Leadership", bg: "mint", date: "March 2026", read: "6 min",
    title: "Coaching Your Managers: The Missing Link in Performance",
    excerpt: "Most performance gaps begin with managers who haven't been equipped to lead effectively.",
    body: [
      "Most performance systems focus on individuals. But the single biggest driver of team performance is the quality of the immediate manager.",
      "We see the same pattern across 50+ organisations: managers are promoted for individual excellence, then left to figure out leadership on their own.",
      "The fix is mechanical: structured coaching, live feedback rituals, and a clear manager competency model.",
    ],
    author: "HRpreneurs Research",
  },
  {
    slug: "hrms-lessons",
    tag: "HR Technology", bg: "sun", date: "February 2026", read: "7 min",
    title: "HRMS Implementation: Lessons from 50+ Deployments",
    excerpt: "After implementing HRMS for 50+ organizations, we share the patterns that separate successful projects from costly failures.",
    body: [
      "Most HRMS projects fail not because of technology — but because of change management.",
      "The winners invest as much in adoption design as in configuration. They appoint champions in every function.",
      "They pilot, iterate, and measure value at 30, 60, 90 days.",
    ],
    author: "HRpreneurs Research",
  },
  {
    slug: "inclusive-workplaces",
    tag: "Culture", bg: "purple", date: "February 2026", read: "4 min",
    title: "Building Inclusive Workplaces Beyond the D&I Policy",
    excerpt: "True inclusion requires more than a policy. Here are the organizational practices that create genuinely inclusive cultures.",
    body: [
      "A D&I policy is a floor, not a ceiling. Real inclusion is designed into everyday rituals — how meetings run, how decisions are made, how feedback flows.",
      "We've distilled the practices of genuinely inclusive cultures into a 7-ritual framework.",
    ],
    author: "HRpreneurs Research",
  },
  {
    slug: "culture-add",
    tag: "Talent", bg: "mint", date: "January 2026", read: "6 min",
    title: "Hiring for Organizational Fit vs. Cultural Add",
    excerpt: "The shift from 'culture fit' to 'culture add' is a fundamental change in how leading organizations hire talent.",
    body: [
      "'Culture fit' often becomes a proxy for 'people like us'. 'Culture add' forces you to ask a harder question: what does this candidate bring that our culture is missing?",
      "The shift is not semantic — it reshapes your interview process, scorecards, and decision norms.",
    ],
    author: "HRpreneurs Research",
  },
  {
    slug: "gratuity-guide",
    tag: "Payroll", bg: "coral", date: "January 2026", read: "5 min",
    title: "Getting Gratuity Right: A Complete HR Guide",
    excerpt: "Gratuity compliance remains one of the most common sources of statutory risk for Indian employers.",
    body: [
      "Gratuity computation, eligibility and payout timelines are deceptively simple — until you hit the edge cases.",
      "We walk through the 12 most common edge cases and how to handle them defensibly.",
    ],
    author: "HRpreneurs Research",
  },
];
