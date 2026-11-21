// Single source of truth for site content. Wording matches the LinkedIn profile.

export const profile = {
  name: 'Gaurav Solanki',
  firstName: 'Gaurav',
  role: 'Full Stack Software Engineer',
  company: 'BrokerLift',
  location: 'Greater Toronto Area, Canada',
  workMode: 'Work from home, available across Canada',
  siteUrl: 'https://gauravsolanki.vercel.app',
  headline:
    'Full Stack Software Engineer at BrokerLift | Shipping insurance SaaS through an AI product pipeline | React, TypeScript, Node.js, REST APIs, AWS',
  heroTitle: ['Shipping insurance SaaS', 'through an AI product pipeline.'],
  stack: 'React, TypeScript, Node.js, REST APIs, AWS',
  available: 'Open for opportunities',
  resumePath: '/Gaurav_Solanki_Resume.pdf',
  email: 'solankigbs11@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gauravsinh-solanki/',
  linkedinHandle: 'gauravsinh-solanki',
  github: 'https://github.com/GauravsinhSolanki',
  githubHandle: 'GauravsinhSolanki',
};

export const about = {
  lead: "In two years I've built 8+ insurance products from scratch. All are live, and insurance consultants in the U.S. and Canada use them every working day.",
  paragraphs: [
    "I'm a full stack software engineer in Toronto. I joined BrokerLift as a co-op student, was hired full-time four months later, and today I lead delivery on client programs in the U.S. and Canada.",
    'What I do: take a feature from the first requirements call to production, then stay with it after launch. React and TypeScript on the frontend, Node.js and REST APIs on the backend, MongoDB for data, AWS to run and monitor it.',
    "Lately most of my work runs through our AI product pipeline. I was the first engineer to take a live, client-facing product through it end to end, I've contributed tested code to the pipeline itself, and I now train other developers to ship with it.",
  ],
  tagline:
    "I like simple, readable code with tests behind it, because I'm usually the one who gets the call when it breaks.",
};

export type Stat = { value: string; label: string };

export const heroSpec: Stat[] = [
  { label: 'Role', value: 'Full Stack Software Engineer, BrokerLift' },
  { label: 'Based in', value: 'Greater Toronto Area, Canada. Work from home, available across Canada.' },
  { label: 'Stack', value: 'React, TypeScript, Node.js, REST APIs, AWS' },
  { label: 'Products', value: '8+ built, all live' },
  { label: 'Portals', value: '2 client portals, U.S. and Canada' },
  { label: 'Delivery', value: 'Scratch to client testing in under 3 weeks' },
];

export const impactStats: Stat[] = [
  { value: '8+', label: 'Products built, all live' },
  { value: '2', label: 'Client portals, U.S. and Canada' },
  { value: '<3 wk', label: 'Scratch to client testing' },
  { value: '30%', label: 'Faster policy setup' },
  { value: '40%', label: 'Faster incident resolution' },
  { value: '5', label: 'Developers trained' },
  { value: '108', label: 'Tests added to the AI pipeline' },
  { value: '7', label: 'Written reports' },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: { lead?: string; text: string }[];
};

export const experience: Job[] = [
  {
    role: 'Software Developer',
    company: 'BrokerLift Inc',
    period: 'Sept 2024 to present',
    location: 'Canada',
    bullets: [
      {
        lead: '8+ products built, all live:',
        text: 'shipped full-stack insurance products from scratch with React, TypeScript, Node.js, REST APIs, MongoDB and AWS, used daily by insurance consultants in the U.S. and Canada.',
      },
      {
        lead: 'Two client portals, one U.S. and one Canadian:',
        text: 'built both from scratch. The Canadian portal went from scratch to client testing in under 3 weeks, including Stripe payments, with a second product 2 days later.',
      },
      {
        lead: 'First to ship through the AI pipeline:',
        text: "took the first live, client-facing product through the company's AI product pipeline, now the standard release route for the whole program.",
      },
      {
        lead: '30% faster policy setup:',
        text: "built the company's first Bundle Policies feature.",
      },
      {
        lead: '40% faster incident resolution:',
        text: 'cut resolution time on priority production issues using AWS CloudWatch and MongoDB.',
      },
      {
        lead: '5 developers trained:',
        text: 'onboarded 3 developers to shipping independently and now coach 2 more on the AI pipeline.',
      },
      {
        lead: 'Support beside delivery:',
        text: 'ran weekly support, code review and release tickets for a second client program alongside the build work.',
      },
    ],
  },
  {
    role: 'Software Developer (Co-op)',
    company: 'BrokerLift Inc',
    period: 'June to Sept 2024',
    location: 'Canada',
    bullets: [
      {
        text: 'Hired full-time in 4 months after shipping React and Node.js modules that became the foundation for production features.',
      },
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Desai Software',
    period: 'Aug 2021 to Apr 2022',
    location: 'Surat, Gujarat, India',
    bullets: [
      {
        text: 'Built frontend interfaces and backend APIs with JavaScript, React, Node.js and MongoDB, learning how all the pieces fit together.',
      },
      {
        text: 'Built real-time task updates so teams saw changes immediately without refreshing the page.',
      },
      {
        text: 'Optimized slow APIs and frontend performance, improving system performance by 10%.',
      },
      {
        text: 'Worked on database design, built APIs, fixed bugs, reviewed code and helped deploy to AWS.',
      },
    ],
  },
];

export const aiSection = {
  title: 'AI-assisted engineering',
  intro:
    "Most of my work now runs through BrokerLift's AI product pipeline. I use it to ship, I improve it when it gets in the way, and a change ships only when its build matches the live product on forms, documents, wording and pricing.",
  principle: 'Every change proven against the live product before it reaches QA.',
  note: 'This is about using and improving an AI product pipeline. I do not build or train models.',
  items: [
    {
      stat: '1st',
      title: 'First to ship through it',
      text: "First engineer to ship a live, client-facing product through the company's AI product pipeline, now the standard release route for the program.",
    },
    {
      stat: '108',
      title: 'Tested code in the pipeline itself',
      text: 'Contributed tested code to the pipeline in 4 areas, removing 6 blockers to multi-product support with 108 automated tests.',
    },
    {
      stat: '47',
      title: 'Documented findings',
      text: 'Raised 47 documented findings on pipeline behaviour, 32 resolved.',
    },
    {
      stat: '60',
      title: 'Renewals as a reusable component',
      text: 'Built renewals as a reusable pipeline component, covered by 60 new tests.',
    },
    {
      stat: '7',
      title: 'Written reports',
      text: '7 written reports plus a running log of traps, so a problem found once is never paid for twice.',
    },
    {
      stat: '1 file',
      title: 'A written publishing route',
      text: 'Built the publishing route and hand-over script every developer on the program ships through, from the pipeline to QA and client testing, without me in the loop. One file to follow, two checkpoints.',
    },
    {
      stat: '2',
      title: 'Developers trained on the pipeline',
      text: 'Train 2 developers on the AI pipeline.',
    },
  ],
};

export type WorkItem = {
  title: string;
  text: string;
  tags: string[];
};

export const work: WorkItem[] = [
  {
    title: 'Two client portals, U.S. and Canada',
    text: 'Built both from scratch. The Canadian portal went from scratch to client testing in under 3 weeks, including Stripe payments, with a second product 2 days later.',
    tags: ['React', 'TypeScript', 'Node.js', 'Stripe', 'AWS'],
  },
  {
    title: 'First product through the AI pipeline',
    text: "Took the first live, client-facing product through the company's AI product pipeline. It is now the standard release route for the whole program.",
    tags: ['AI product pipeline', 'Production release'],
  },
  {
    title: 'Bundle Policies',
    text: "The company's first Bundle Policies feature. Policy setup is 30% faster.",
    tags: ['React', 'REST APIs', 'MongoDB'],
  },
  {
    title: 'Renewals pipeline component',
    text: 'Renewals built as a reusable pipeline component, covered by 60 new tests.',
    tags: ['AI product pipeline', 'Automated tests'],
  },
  {
    title: 'Production incident response',
    text: 'Cut resolution time on priority production issues by 40% using AWS CloudWatch and MongoDB.',
    tags: ['AWS CloudWatch', 'MongoDB'],
  },
  {
    title: 'Developer publishing route',
    text: 'The route and hand-over script every developer on the program ships through, from the pipeline to QA and client testing. One file to follow, two checkpoints.',
    tags: ['AI product pipeline', 'Developer onboarding'],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  { title: 'Frontend', items: ['React', 'Vue.js'] },
  { title: 'Backend', items: ['Node.js', 'REST APIs', 'FastAPI', 'Stripe payments'] },
  { title: 'Data', items: ['MongoDB', 'MySQL', 'DynamoDB'] },
  { title: 'Cloud and DevOps', items: ['AWS (EC2, Lambda, CloudWatch)', 'Docker', 'CI/CD', 'Terraform'] },
  { title: 'Testing and tools', items: ['Cypress', 'JUnit', 'Jenkins', 'Jira'] },
  {
    title: 'AI-assisted development',
    items: [
      'Shipping through an AI product pipeline',
      'Extending the pipeline with tested code',
      'Reusable pipeline components',
      'Documenting pipeline findings',
      'Coaching developers on the pipeline',
    ],
  },
];

export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlights: string[];
  focus: string[];
  activities?: string[];
};

export const education: EducationEntry[] = [
  {
    degree: 'Master of Applied Computer Science',
    institution: 'Dalhousie University',
    location: 'Halifax, NS',
    period: '2023 to 2024',
    grade: 'GPA 3.9 / 4.3',
    highlights: ['Graduated with honors', 'Cloud specialization'],
    focus: ['Spring Boot', 'Test-Driven Development', 'SOLID Principles', 'MERN Stack', 'Database Design', 'Big Data', 'AWS Lambda', 'Serverless', 'Cloud Architecture'],
  },
  {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Gujarat Technological University',
    location: 'India',
    period: '2017 to 2021',
    grade: 'CGPA 9.2 / 10',
    highlights: ['Top 5% of class', 'Hackathon finalist'],
    focus: ['Algorithms', 'Data Structures', 'Networks', 'C++', 'Java', 'System Programming'],
    activities: ['Gujarat Hackathon 2019 Finalist', 'Ethical Hacking Workshop'],
  },
];

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'AI pipeline', href: '#ai' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
