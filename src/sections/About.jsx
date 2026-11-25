
import { Code2, ShieldCheck, GraduationCap, Lightbulb } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Computer Science',
    description: 'University of Embu',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'Hands-on security learning',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Building practical applications',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Exploring emerging technologies',
  },
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">

        <SectionHeading
          label="01 / About Me"
          title="Getting to know me"
          description="A little about my background, interests and journey in technology."
        />

        <div className="about-grid">

          <div className="about-content">
            <h3>
              I'm Khalid, a technology enthusiast
              passionate about building and securing
              digital solutions.
            </h3>

            <p>
              I'm a Computer Science student at the University
              of Embu with a strong interest in cybersecurity,
              software development and emerging technologies.
            </p>

            <p>
              My learning journey combines academic knowledge
              with practical experience. Through cybersecurity
              platforms, networking labs and software projects,
              I continuously work on strengthening my technical
              and problem-solving skills.
            </p>

            <p>
              I enjoy exploring how systems work, understanding
              their security weaknesses and developing solutions
              that address real-world challenges.
            </p>

            <div className="about-interests">
              <span>Cybersecurity</span>
              <span>Software Development</span>
              <span>Networking</span>
              <span>AI & Machine Learning</span>
            </div>

            <a href="#contact" className="btn btn-primary about-button">
              Let's Connect
            </a>
          </div>

          <div className="about-highlights">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <div className="highlight-card" key={item.title}>
                  <div className="highlight-icon">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
