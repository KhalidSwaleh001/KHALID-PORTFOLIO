
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from 'lucide-react'

import experience from '../data/experience'
import SectionHeading from '../components/SectionHeading'

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionHeading
          label="PROFESSIONAL JOURNEY"
          title="Professional Experience"
          description="Practical experience gained through ICT support, infrastructure maintenance, and digital transformation activities."
        />

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-card" key={item.id}>
              <div className="experience-top">
                <div className="experience-icon">
                  <BriefcaseBusiness size={26} />
                </div>

                <span className="experience-type">
                  {item.type}
                </span>
              </div>

              <div className="experience-content">
                <h3>{item.role}</h3>

                <h4>{item.organization}</h4>

                <div className="experience-meta">
                  <span>
                    <CalendarDays size={15} />
                    {item.period}
                  </span>

                  <span>
                    <MapPin size={15} />
                    {item.location}
                  </span>
                </div>

                <p className="experience-description">
                  {item.description}
                </p>

                <div className="experience-responsibilities">
                  <h5>Key Responsibilities & Contributions</h5>

                  <ul>
                    {item.responsibilities.map((responsibility, index) => (
                      <li key={index}>
                        <CheckCircle2 size={16} />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-technologies">
                  <h5>Tools & Technologies</h5>

                  <div className="experience-tags">
                    {item.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
