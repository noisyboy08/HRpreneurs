export type Service = {
  slug: string;
  number: string;
  tag: string;
  title: string;
  short: string;
  description: string;
  bg: "mint" | "sun" | "coral" | "purple" | "sand" | "cream";
  offerings: string[];
  benefits: string[];
  process: { step: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "talent-acquisition",
    number: "01",
    tag: "Talent",
    title: "Talent Acquisition",
    short: "End-to-end recruitment from executive search to mass hiring tailored to your industry.",
    description: "We run full-funnel hiring programs — from executive search to volume recruiting — built around your industry, stage and culture.",
    bg: "mint",
    offerings: [
      "Executive Search & Leadership Hiring",
      "Lateral & Mid-senior Recruitment",
      "Mass Hiring & Campus Programs",
      "Diversity & Inclusion Recruiting",
      "Employer Branding & Talent Marketing",
      "Recruitment Process Outsourcing (RPO)",
    ],
    benefits: [
      "40% faster time-to-hire through structured pipelines",
      "Rigorous screening — technical, behavioural, cultural",
      "Industry-specialised recruiters with domain fluency",
      "Transparent SLAs and reporting",
    ],
    process: [
      { step: "01", title: "Discovery",      body: "We map the role, scorecards, compensation bands and cultural markers." },
      { step: "02", title: "Sourcing",       body: "Multi-channel sourcing — networks, databases, referrals, passive outreach." },
      { step: "03", title: "Assessment",     body: "Structured evaluation blending competency interviews and bespoke assessments." },
      { step: "04", title: "Close & Onboard",body: "Offer negotiation, reference checks, and a 90-day success check-in." },
    ],
    faqs: [
      { q: "What industries do you recruit for?", a: "Banking, Technology, Pharma, FMCG, Real Estate, Media, Education, Energy and more." },
      { q: "How do you charge?",                  a: "Flexible engagement models — retained, contingent and subscription RPO." },
    ],
  },
  {
    slug: "hr-consulting",
    number: "02",
    tag: "Advisory",
    title: "HR Consulting",
    short: "Strategic HR advisory aligning people practices with business objectives.",
    description: "We partner with leadership teams to design people strategies that compound — org design, rewards, performance and capability.",
    bg: "sun",
    offerings: [
      "Organisational Design & Restructuring",
      "Compensation & Benefits Benchmarking",
      "Performance Management Systems",
      "HR Policy Architecture & Employee Handbook",
      "Culture Diagnostics & Transformation",
      "M&A Integration & Workforce Planning",
    ],
    benefits: [
      "Strategies grounded in data, benchmarks and industry context",
      "Leadership alignment through structured workshops",
      "Implementation-first approach — no ivory-tower decks",
      "Measurable KPIs and quarterly governance reviews",
    ],
    process: [
      { step: "01", title: "Diagnose",   body: "Interviews, surveys and data pulls to surface the real constraints." },
      { step: "02", title: "Design",     body: "Co-create solutions with leadership aligned to strategy and culture." },
      { step: "03", title: "Deploy",     body: "Roll out with communications, enablement and change-management support." },
      { step: "04", title: "Measure",    body: "Set KPIs, dashboards, and quarterly governance cadence." },
    ],
    faqs: [
      { q: "How long does a consulting engagement run?", a: "Most programs run 3 to 9 months depending on scope and scale." },
      { q: "Do you work with startups?",                 a: "Yes — we have a dedicated practice for Series A to Series D companies." },
    ],
  },
  {
    slug: "payroll-compliance",
    number: "03",
    tag: "Compliance",
    title: "Payroll & Compliance",
    short: "Timely salary processing with full statutory compliance — ESI, Gratuity, Labour Law.",
    description: "Accurate, on-time payroll with watertight statutory compliance across PF, ESI, PT, Gratuity, Bonus and Labour Law filings.",
    bg: "coral",
    offerings: [
      "Monthly Payroll Processing & Payslips",
      "Statutory Compliance — PF, ESI, PT, LWF",
      "Gratuity, Bonus & Leave Encashment",
      "Income Tax Computation & TDS Returns",
      "Labour Law Registrations & Filings",
      "Audit Support & Contractor Compliance",
    ],
    benefits: [
      "100% statutory accuracy — zero-miss track record",
      "Secure cloud payroll with employee self-service portal",
      "Multi-state, multi-entity compliance",
      "Monthly compliance certificate and audit readiness",
    ],
    process: [
      { step: "01", title: "Setup",      body: "Data migration, policy mapping, and statutory registrations." },
      { step: "02", title: "Process",    body: "Monthly inputs, reconciliations and approvals with full audit trail." },
      { step: "03", title: "Disburse",   body: "Salary disbursement, payslips and tax statements to employees." },
      { step: "04", title: "Report",     body: "Filings, challans, MIS and compliance certificates to leadership." },
    ],
    faqs: [
      { q: "Can you handle multi-state payroll?", a: "Yes — we manage payroll across all Indian states with state-specific compliance." },
      { q: "Do you integrate with our HRMS?",     a: "We integrate with all major HRMS platforms and also provide our own." },
    ],
  },
  {
    slug: "learning-development",
    number: "04",
    tag: "Learning",
    title: "Learning & Development",
    short: "Leadership training and reskilling programs that build future-ready teams.",
    description: "Curated learning journeys for leaders, managers and individual contributors — blended, outcome-led and measurable.",
    bg: "purple",
    offerings: [
      "Leadership Development Programs",
      "Manager Effectiveness & Coaching",
      "Technical Upskilling & Reskilling",
      "Behavioural & Soft-skills Training",
      "Onboarding & Induction Design",
      "Learning Experience Platforms (LXP)",
    ],
    benefits: [
      "Curriculum built from your competency model",
      "Blended delivery — classroom, digital, cohort",
      "Gamified experiences with measurable outcomes",
      "Coaching and reinforcement for behavioural stickiness",
    ],
    process: [
      { step: "01", title: "Needs Map", body: "Capability diagnostics and skill-gap analysis across roles." },
      { step: "02", title: "Curate",    body: "Design blended learning journeys mapped to business outcomes." },
      { step: "03", title: "Deliver",   body: "Multi-modal delivery — workshops, digital modules, cohorts, coaching." },
      { step: "04", title: "Measure",   body: "Kirkpatrick-level evaluation with manager feedback loops." },
    ],
    faqs: [
      { q: "Do you provide online LMS?", a: "Yes — we deploy both proprietary and best-in-class third-party LXPs." },
      { q: "How are programs measured?", a: "Behavioural change, business KPIs, and 90-day reinforcement checks." },
    ],
  },
  {
    slug: "hr-technology",
    number: "05",
    tag: "Technology",
    title: "HR Technology",
    short: "HRMS implementation, ATS, dashboards, and HR automation for modern operations.",
    description: "We select, implement and stabilise HR tech stacks — HRMS, ATS, LMS, performance and analytics — for scale and adoption.",
    bg: "mint",
    offerings: [
      "HRMS Selection & Implementation",
      "Applicant Tracking Systems (ATS)",
      "Performance & Goal-setting Platforms",
      "HR Analytics & Dashboards",
      "Process Automation & RPA",
      "Employee Self-service Portals",
    ],
    benefits: [
      "Vendor-neutral advisory, adoption-first design",
      "Certified implementation partners across major suites",
      "Data migration with zero loss guarantee",
      "Custom analytics and board-ready dashboards",
    ],
    process: [
      { step: "01", title: "Audit",      body: "Map current tech stack, gaps, and integration landscape." },
      { step: "02", title: "Select",     body: "RFP, vendor comparison, total cost of ownership analysis." },
      { step: "03", title: "Implement",  body: "Configuration, data migration, UAT and go-live." },
      { step: "04", title: "Adopt",      body: "Enablement, governance and continuous improvement." },
    ],
    faqs: [
      { q: "Which HRMS do you work with?", a: "Keka, Darwinbox, SAP SuccessFactors, Workday, Zoho People and many more." },
      { q: "Do you support custom builds?", a: "Yes — we build custom HR modules and dashboards for unique workflows." },
    ],
  },
  {
    slug: "managed-hr",
    number: "06",
    tag: "End-to-end",
    title: "Managed HR Services",
    short: "Complete hire-to-retire HR outsourcing so your leadership can focus on growth.",
    description: "A fully-outsourced HR function — operations, compliance, employee lifecycle — delivered by a dedicated HRpreneurs pod.",
    bg: "sun",
    offerings: [
      "Hire-to-Retire Employee Lifecycle",
      "Dedicated HR Business Partner Pod",
      "Policy, Handbook & Governance",
      "Employee Engagement & Rewards",
      "Statutory Compliance & Audit",
      "Leadership Reporting & Dashboards",
    ],
    benefits: [
      "Scale the HR function without fixed-cost overhead",
      "Senior HR leadership as a service — fractional CHRO",
      "Predictable monthly retainer with transparent SLAs",
      "Ready-to-use HR playbooks and templates",
    ],
    process: [
      { step: "01", title: "Transition", body: "Audit existing processes, policies and tools." },
      { step: "02", title: "Stabilise",  body: "Close gaps, fix compliance, ship quick wins." },
      { step: "03", title: "Operate",    body: "Run day-to-day HR operations with SLAs." },
      { step: "04", title: "Elevate",    body: "Drive strategic projects — culture, talent, rewards." },
    ],
    faqs: [
      { q: "Minimum company size?", a: "We work with organisations from 25 to 10,000+ employees." },
      { q: "Contract length?",      a: "Typically 12-month engagements with quarterly reviews and flexibility to scale." },
    ],
  },
];

export type Sector = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bg: "mint" | "sun" | "coral" | "purple" | "sand" | "cream";
  icon: string;
  highlights: string[];
  services: string[];
};

export const sectors: Sector[] = [
  { slug: "banking",         title: "Banking & Financial",   short: "Compliance, workforce planning, and talent acquisition for banks, NBFCs and financial institutions.",
    description: "Regulatory-first HR for banks, NBFCs, AMCs and fintechs. From branch hiring to leadership succession, we understand the rhythm of the sector.",
    bg: "mint",   icon: "🏦",
    highlights: ["40+ BFSI clients", "Branch & regional hiring engines", "Regulatory compliance (RBI, IRDAI)", "Succession planning"],
    services: ["Talent Acquisition", "Payroll & Compliance", "Leadership Hiring", "HR Consulting"] },
  { slug: "technology",      title: "Technology & Telecom", short: "Tech-talent hiring, workforce planning, and HR automation for IT and telecom companies scaling rapidly.",
    description: "Hyper-scalable recruitment and HR operations for SaaS, product, services and telecom organisations.",
    bg: "sun",    icon: "💻",
    highlights: ["Tech-first sourcing stack", "Product & engineering hiring", "HRMS + ATS integration", "Startup to IPO support"],
    services: ["Talent Acquisition", "HR Technology", "Learning & Development", "Managed HR"] },
  { slug: "media",           title: "Media & Entertainment", short: "Specialized HR for productions, satellite channels, digital content, OTT platforms, and music companies.",
    description: "Project-based hiring, creative talent acquisition and unique compliance needs for the M&E industry.",
    bg: "coral",  icon: "🎬",
    highlights: ["Project & gig workforce models", "Creative talent pipelines", "Short-form content teams", "On-location compliance"],
    services: ["Talent Acquisition", "Payroll & Compliance", "HR Consulting"] },
  { slug: "real-estate",     title: "Real Estate & Infra",  short: "End-to-end HR solutions for real estate developers, property management, and construction organizations.",
    description: "From project managers and sales teams to factory and site workforces, we handle hiring, payroll and labour-law.",
    bg: "purple", icon: "🏗️",
    highlights: ["Site and head-office workforce", "Contractor compliance", "Sales team hiring engines", "Labour law filings"],
    services: ["Talent Acquisition", "Payroll & Compliance", "HR Consulting", "Managed HR"] },
  { slug: "pharma",          title: "Pharma & Healthcare",  short: "Regulatory-compliant HR for pharma, healthcare, and life-sciences organizations across India.",
    description: "Medical representatives, R&D scientists, hospital staff — all with tight regulatory and compliance requirements.",
    bg: "mint",   icon: "💊",
    highlights: ["Field-force recruitment", "R&D and scientific hiring", "DCGI & FDA compliance", "Clinical trial workforce"],
    services: ["Talent Acquisition", "Payroll & Compliance", "Learning & Development"] },
  { slug: "fmcg",            title: "FMCG & Consumer Goods",short: "High-volume talent acquisition, sales force management, and workforce planning for FMCG organizations.",
    description: "Sales, distribution, factory, and marketing workforce — we scale with your growth across geographies.",
    bg: "sun",    icon: "🛒",
    highlights: ["Pan-India sales hiring", "Distributor network HR", "Factory workforce models", "Trade-marketing teams"],
    services: ["Talent Acquisition", "Payroll & Compliance", "Managed HR", "HR Consulting"] },
  { slug: "ecommerce",       title: "E-Commerce & Retail",  short: "Agile HR solutions for fast-growing e-commerce and retail organizations including seasonal workforce management.",
    description: "Seasonal scale-ups, warehousing, last-mile, customer success — we deploy workforce when you need it most.",
    bg: "coral",  icon: "🛍️",
    highlights: ["Seasonal hiring waves", "Warehouse & last-mile staffing", "Customer support teams", "Retail store hiring"],
    services: ["Talent Acquisition", "Managed HR", "HR Technology"] },
  { slug: "energy",          title: "Energy & Utilities",   short: "Workforce governance and labour compliance for energy, utilities, and infrastructure sector organizations.",
    description: "Solar, wind, O&G and utility projects need niche engineering talent and complex labour-law compliance.",
    bg: "purple", icon: "⚡",
    highlights: ["Niche engineering search", "Site-level compliance", "Contract labour management", "Project hiring models"],
    services: ["Talent Acquisition", "Payroll & Compliance", "HR Consulting"] },
  { slug: "education",       title: "Education & Learning", short: "HR support for educational institutions, EdTech companies, and professional learning organizations.",
    description: "Faculty hiring, EdTech growth teams, and compliance tailored for the education vertical.",
    bg: "mint",   icon: "🎓",
    highlights: ["Faculty & academic leadership", "EdTech engineering & sales", "AICTE / UGC compliance", "Leadership development"],
    services: ["Talent Acquisition", "Learning & Development", "HR Consulting"] },
  { slug: "insurance",       title: "Insurance",             short: "Regulatory HR, compliance management, and talent development for insurance organizations and agents.",
    description: "Agency force recruitment, underwriter hiring and IRDAI-aligned compliance for life and general insurers.",
    bg: "sun",    icon: "🛡️",
    highlights: ["Agency channel hiring", "Underwriter & actuary search", "IRDAI compliance", "Field-force L&D"],
    services: ["Talent Acquisition", "Payroll & Compliance", "Learning & Development"] },
  { slug: "startups",        title: "Internet & Startups",  short: "Scalable HR frameworks for fast-growing internet companies, startups, and venture-backed organizations.",
    description: "From founder-led 10-person teams to pre-IPO 1000-person companies — we modularise HR for every stage.",
    bg: "coral",  icon: "🚀",
    highlights: ["Stage-specific playbooks", "Fractional CHRO model", "ESOP advisory", "Series A to IPO support"],
    services: ["HR Consulting", "Talent Acquisition", "HR Technology", "Managed HR"] },
  { slug: "manufacturing",   title: "Textiles & Manufacturing", short: "Factory workforce management, labour law compliance, and HR governance for manufacturing organizations.",
    description: "Blue-collar workforce, contractor compliance, and shop-floor leadership for textile, auto and discrete manufacturing.",
    bg: "purple", icon: "🧵",
    highlights: ["Blue-collar hiring engines", "Shop-floor leadership", "Contractor compliance", "Factories Act filings"],
    services: ["Talent Acquisition", "Payroll & Compliance", "Managed HR"] },
];
