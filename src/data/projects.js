
const projects = [
  {
    id: 1,
    title: 'REFLEX',
    category: 'Delivery Management Platform',
    status: 'Deployed',
    description:
      'A delivery coordination and management platform designed to connect retailers, dispatchers, and riders through role-based workflows.',
    highlights: [
      'Role-based user experiences',
      'Retailer, dispatcher, and rider workflows',
      'React frontend with Django REST backend',
    ],
    technologies: [
      'React',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'JWT',
    ],
    demo: 'https://reflex-sprint.onrender.com',
    github: '',
  },
  {
    id: 2,
    title: 'SmartQuiz',
    category: 'Cloud & Education Technology',
    status: 'Deployed',
    description:
      'An interactive AZ-900 exam preparation platform designed to help learners test their cloud computing knowledge and understand their performance.',
    highlights: [
      'Topic-based practice quizzes',
      'Scores and answer explanations',
      'User accounts and attempt history',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Supabase',
      'CSS',
    ],
    demo: 'https://cloudready-az900-henna.vercel.app/',
    github: '',
  },
  {
    id: 3,
    title: 'QuickNotes',
    category: 'Progressive Web Application',
    status: 'Deployed',
    description:
      'A lightweight notes application exploring Progressive Web App technologies, allowing users to work with notes and access stored content offline.',
    highlights: [
      'Offline note storage using IndexedDB',
      'Progressive Web App functionality',
      'Service worker and installability features',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'IndexedDB',
      'PWA',
    ],
    demo: 'https://quicknotes-system-design-fsshwmgmy.vercel.app/',
    github: '',
  },
  {
    id: 4,
    title: 'KBS EduCore',
    category: 'Education Technology / SaaS',
    status: 'In Progress',
    description:
      'A planned multi-tenant school management platform intended to simplify school administration, academic records, and institutional operations.',
    highlights: [
      'Multi-tenant school architecture',
      'School and academic records management',
      'Subscription-based access model',
    ],
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Docker',
    ],
    demo: '',
    github: '',
  },
  {
    id: 5,
    title: 'Intelligent Document Tracking System',
    formalTitle:
      'Design and Evaluation of an Intelligent Document Tracking and Knowledge Retrieval System for Administrative Registries Using NLP and ML',
    category: 'AI / Machine Learning / Document Management',
    status: 'In Progress',
    description:
      'A final-year research project focused on improving administrative registry operations through intelligent document tracking, natural language processing, and machine learning-based knowledge retrieval.',
    highlights: [
      'Digital document tracking and retrieval',
      'NLP-based document understanding',
      'Machine learning-assisted knowledge retrieval',
      'Administrative registry workflow improvement',
    ],
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Python',
      'NLP',
      'Machine Learning',
    ],
    demo: '',
    github: '',
  },
]

export default projects
