export const profile = {
  name: 'Gokulakrishnan',
  initials: 'GK',
  role: 'Senior Programmer Analyst | Full-Stack .NET & React Developer',
  taglineWords: [
    'Full-Stack .NET & React Developer',
    'Legacy-to-React Migration Specialist',
    'AI-Assisted Development with Claude',
    'Offline-First Desktop App Engineer',
  ],
  location: 'Chidambaram, Tamil Nadu, India',
  email: 'gokulk804@gmail.com',
  phone: '+91 8248044475',
  summary:
    'Full-Stack Developer with 8 years of experience modernizing enterprise web applications using .NET Core, C#, SQL Server, and React. Led the migration of a large-scale legacy .NET application to React in a live hybrid architecture, and built offline-capable desktop apps, e-commerce microsites, and AI-assisted mobile solutions. Proficient with Claude AI and Claude Code for accelerated, high-quality development.',
  resumeFile: '/resume.pdf',
  yearsExperience: 8,
}

export const stats = [
  { label: 'Years of Experience', value: 8, suffix: '+' },
  { label: 'Live Business Modules Owned', value: 5, suffix: '+' },
  { label: 'E-commerce Microsites Shipped', value: 10, suffix: '+' },
  { label: 'Zero-Downtime Migration', value: 100, suffix: '%' },
]

export const skillGroups = [
  {
    title: 'Front-End',
    skills: ['React.js', 'React Native', 'Redux', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Electron.js'],
  },
  {
    title: 'Back-End',
    skills: ['.NET Core', 'ASP.NET', 'ASP.NET MVC', 'Web API', 'C#', 'RESTful Services'],
  },
  {
    title: 'Database',
    skills: ['MS SQL Server', 'SQL Express', 'T-SQL', 'Stored Procedures', 'Query Optimization'],
  },
  {
    title: 'Architecture',
    skills: ['.NET-to-React Migration', '3-Tier Architecture', 'Offline-First / Local Sync Design'],
  },
  {
    title: 'AI Tools',
    skills: ['Claude AI', 'Claude Code', 'AI-Assisted Development', 'Code Generation & Review'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Visual Studio', 'Git', 'Azure DevOps', 'Agile/Scrum', 'Debugging & Performance Tuning'],
  },
]

export const experience = [
  {
    company: 'APA Engineering Pvt Ltd',
    title: 'Senior Programmer Analyst',
    period: 'Jul 2018 — Present',
    project: 'GoCadence — MONDIAL Automotive (B2B/B2C E-commerce Platform)',
    points: [
      'Leading a 2+ year initiative migrating a legacy ASP.NET application to a modern React front end, running in hybrid mode alongside the existing system with zero downtime, backed by new .NET Core Web APIs.',
      'Developed and own critical business modules: Shopping Cart, Quote Management, Payment Gateway integration, Bulk Upload logic, and Part Search.',
      'Built and maintain multiple B2C e-commerce microsites, all centrally managed through the core GoCadence platform.',
      'Engineered a hybrid Desktop App (Electron + React) as a lightweight version of GoCadence — uses the Web API when online, falls back to a local SQL Server Express instance offline, with automatic sync on reconnect.',
      'Wrote complex T-SQL queries, stored procedures, and views; optimized database performance for high-volume transactional data.',
    ],
  },
]

export const projects = [
  {
    title: 'GoCadence Hybrid Desktop App',
    tag: 'Electron + React + SQL Express',
    description:
      'A lightweight offline-first desktop version of the GoCadence e-commerce platform. Uses the live Web API when online and automatically falls back to a local SQL Server Express instance offline, syncing seamlessly on reconnect.',
    highlights: ['Offline-first architecture', 'Automatic bi-directional sync', 'Electron + React'],
  },
  {
    title: '.NET-to-React Hybrid Migration',
    tag: '.NET Core Web API + React',
    description:
      'A 2+ year initiative migrating a large, legacy ASP.NET B2B/B2C platform to a modern React front end — running in hybrid mode alongside the existing system in production with zero downtime.',
    highlights: ['Zero-downtime cutover', 'New .NET Core Web APIs', 'Live hybrid architecture'],
  },
  {
    title: 'Wholesale Egg Distribution App',
    tag: 'React Native + Claude AI',
    description:
      'A cross-platform mobile app covering Customer, Vendor, Sales, Purchase, and Inventory Management — built end-to-end using Claude AI and Claude Code for rapid, AI-assisted development.',
    highlights: ['Built end-to-end with Claude AI', 'Cross-platform (iOS/Android)', 'Full inventory & sales workflow'],
  },
  {
    title: 'Accounting & Portfolio Management System',
    tag: 'ASP.NET MVC',
    description:
      'A complete accounting package covering financial transactions, ledgers, portfolio tracking, and related client reporting for independent/freelance clients.',
    highlights: ['Financial ledgers & reports', 'Portfolio tracking', 'ASP.NET MVC architecture'],
  },
]

export const education = [
  {
    qualification: 'Master of Computer Application (MCA)',
    institution: 'Annamalai University',
    year: '2018',
    score: '72.35%',
  },
  {
    qualification: 'Bachelor of Computer Science (B.Sc)',
    institution: 'Shree Raghavendra Arts and Science College',
    year: '2015',
    score: '69.78%',
  },
]

export const languages = ['English', 'Tamil']
