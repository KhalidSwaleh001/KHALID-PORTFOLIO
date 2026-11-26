
import { GraduationCap, BookOpen, CalendarDays } from 'lucide-react'
import education from '../data/education'
import SectionHeading from '../components/SectionHeading'

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <SectionHeading
          label="ACADEMIC BACKGROUND"
          title="Education"
          description="My academic journey and the foundation behind my interest in computing and technology."
        />

        <div className="education-list">
          {education.map((item) => (
            <article className="education-card" key={item.id}>
              <div className="education-icon">
                <GraduationCap size={28} />
              </div>

              <div className="education-content">
                <div className="education-header">
                  <div>
                    <p className="education-status">
                      {item.status}
                    </p>

                    <h3>{item.institution}</h3>

                    <h4>{item.qualification}</h4>

                    <p className="education-department">
                      {item.department}
                    </p>
                  </div>

                  <div className="education-period">
                    <CalendarDays size={16} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="education-description">
                  {item.description}
                </p>

                <div className="education-focus">
                  <div className="education-focus-heading">
                    <BookOpen size={17} />
                    <span>Areas of Interest</span>
                  </div>

                  <div className="education-tags">
                    {item.focusAreas.map((area) => (
                      <span key={area}>{area}</span>
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

export default Education
