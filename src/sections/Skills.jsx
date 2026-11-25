
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Network,
  Wrench,
} from 'lucide-react'

import SectionHeading from '../components/SectionHeading'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    description: 'Building responsive and interactive user interfaces.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    description: 'Developing server-side applications and APIs.',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    description: 'Working with relational databases and SQL.',
    skills: [
      'PostgreSQL',
      'SQL',
      'Database Design',
    ],
  },
  {
    title: 'Cybersecurity',
    icon: ShieldCheck,
    description: 'Learning security concepts through practical labs.',
    skills: [
      'Kali Linux',
      'Wireshark',
      'Nmap',
      'Linux',
      'Web Security',
    ],
  },
  {
    title: 'Networking',
    icon: Network,
    description: 'Understanding network infrastructure and communication.',
    skills: [
      'TCP/IP',
      'VLANs',
      'Cisco Packet Tracer',
      'Network Troubleshooting',
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    description: 'Tools used in development and technical workflows.',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Docker',
      'Python',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        <SectionHeading
          label="02 / Technical Skills"
          title="My Technical Toolkit"
          description="Technologies, tools and concepts I work with while building software and exploring cybersecurity."
        />

        <div className="skills-grid">

          {skillCategories.map((category) => {
            const Icon = category.icon

            return (
              <div className="skill-card" key={category.title}>

                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{category.title}</h3>
                </div>

                <p className="skill-description">
                  {category.description}
                </p>

                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
