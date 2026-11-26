
import {
  ExternalLink,
  Globe,
  Database,
  BrainCircuit,
  Code2,
  GitBranch,
} from 'lucide-react'
import projects from '../data/projects'
import SectionHeading from '../components/SectionHeading'

const categoryIcons = {
  'Delivery Management Platform': Globe,
  'Cloud & Education Technology': Database,
  'Progressive Web Application': Code2,
  'Education Technology / SaaS': Database,
  'AI / Machine Learning / Document Management': BrainCircuit,
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          label="MY WORK"
          title="Projects & Applications"
          description="A selection of applications, experiments, and ongoing projects exploring software development, cloud technology, and intelligent systems."
        />

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon =
              categoryIcons[project.category] || Code2

            const statusClass = project.status
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/^-|-$/g, '')

            return (
              <article className="project-card" key={project.id}>
                <div className="project-top">
                  <div className="project-icon">
                    <Icon size={24} />
                  </div>

                  <span className={`project-status ${statusClass}`}>
                    {project.status}
                  </span>
                </div>

                <div className="project-content">
                  <p className="project-category">
                    {project.category}
                  </p>

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  {project.formalTitle && (
                    <p className="project-formal-title">
                      {project.formalTitle}
                    </p>
                  )}

                  <p className="project-description">
                    {project.description}
                  </p>

                  {project.highlights?.length > 0 && (
                    <ul className="project-highlights">
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="project-technologies">
                    {project.technologies.map((technology, index) => (
                      <span key={index} className="tech-tag">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <GitBranch size={16} />
                      Source Code
                    </a>
                  )}

                  {!project.demo && !project.github && (
                    <span className="project-unavailable">
                      Currently under development
                    </span>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
