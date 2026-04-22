export const PORTFOLIO_DATA = {
  hero: { name: 'Harpreet Singh', title: 'Full Stack Developer', intro: 'Building scalable, high-performance web applications with modern technologies.' },
  about: {
    intro: `Frontend-focused Software Engineer with 2+ years of experience building scalable, high-performance web applications using Angular, TypeScript, and modern UI architectures.`,

    highlights: [
      { icon: 'fa-users', text: 'Scaled applications serving 2000+ daily users' },
      { icon: 'fa-gauge-high', text: 'Reduced latency by 45% through optimizations' },
      { icon: 'fa-code-branch', text: 'Led Angular migration from v7 → v17' },
      { icon: 'fa-server', text: 'Built secure REST APIs with Node.js' }
    ],

    outro: `I enjoy turning complex problems into clean, efficient, and user-friendly experiences while exploring system design and performance engineering.`
  },
  experience: [
     {
        role: 'Senior Frontend Engineer',
        company: 'Acme Corp',
        duration: '2023 – Present',
        current: true,
        desc: 'Led development of the core product dashboard...',
        tags: ['Angular', 'TypeScript', 'RxJS', 'NgRx']
    },
    {
        role: 'Software Engineer',
        company: 'Startup XYZ',
        duration: '2022 – 2023',
        current: false,
        desc: 'Built microservices reducing latency by 45%...',
        tags: ['Node.js', 'PostgreSQL', 'Docker', 'Redis']
    }
  ],
  education: [
    { degree: 'M.S. Computer Science', institution: 'Tech University', duration: '2016 - 2018' },
    { degree: 'B.S. Software Engineering', institution: 'State College', duration: '2012 - 2016' }
  ],
  skills: {
    frontend: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Tailwind', 'React'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'Firebase'],
    tools: ['Git', 'Docker', 'Figma', 'Jest']
  },
  projects: [
    {
      title: 'E-Commerce Dashboard', desc: 'A high-performance analytics dashboard for vendors.', tech: ['Angular', 'RxJS', 'NgRx'], github: '#', live: '#', image: 'assets/images/one.jpeg',
      logo: '',
    },
    {
      title: 'Task Manager AI', desc: 'Smart task management tool with AI categorization.', tech: ['Angular', 'Firebase', 'OpenAI'], github: '#', live: '#', image: '',
      logo: ''
    },
    { title: 'Crypto Tracker', desc: 'Real-time cryptocurrency tracking app.', tech: ['Angular', 'WebSockets', 'Chart.js'], github: '#', live: '#', image: '',
      logo: '' },
       {
      title: 'E-Commerce Dashboard', desc: 'A high-performance analytics dashboard for vendors.', tech: ['Angular', 'RxJS', 'NgRx'], github: '#', live: '#', image: '',
      logo: '',
    },
    {
      title: 'Task Manager AI', desc: 'Smart task management tool with AI categorization.', tech: ['Angular', 'Firebase', 'OpenAI'], github: '#', live: '#', image: '',
      logo: ''
    },
    { title: 'Crypto Tracker', desc: 'Real-time cryptocurrency tracking app.', tech: ['Angular', 'WebSockets', 'Chart.js'], github: '#', live: '#', image: '',
      logo: '' }
  ],
  achievements: [
  { title: 'Dean\'s List',        sub: '2 consecutive years',  icon: 'fa-solid fa-award'       },
  { title: 'Hackathon Winner',    sub: 'National finalist',    icon: 'fa-solid fa-trophy'      },
  { title: 'Open Source',         sub: '500+ GitHub stars',    icon: 'fa-brands fa-github'     },
  { title: 'Published Research',  sub: 'IEEE conference',      icon: 'fa-solid fa-file-lines'  },
],
  socials: [
    { name: 'GitHub', url: 'https://github.com', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'fab fa-linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'fab fa-twitter' }
  ]
};