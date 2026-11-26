
import {
  ShieldCheck,
  ExternalLink,
  Award,
  BookOpen,
  GraduationCap,
} from 'lucide-react'

import certifications, {
  ongoingLearning,
} from '../data/certifications'

import SectionHeading from '../components/SectionHeading'

function Certifications() {
  return (
    <section
      id="certifications"
      className="section certifications-section"
    >
      <div className="container">
        <SectionHeading
          label="LEARNING & DEVELOPMENT"
          title="Certifications & Training"
          description="Professional learning and structured training experiences that continue to strengthen my knowledge in cybersecurity, artificial intelligence, and technology."
        />

        {/* Completed Certificates */}
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <article
              className="certification-card"
              key={certification.id}
            >
              <div className="certification-top">
                <div className="certification-icon">
                  <ShieldCheck size={25} />
                </div>

                <span className="certification-status">
                  <span className="status-dot" />
                  Completed
                </span>
              </div>

              <div className="certification-content">
                <p className="certification-category">
                  {certification.category}
                </p>

                <h3 className="certification-title">
                  {certification.name}
                </h3>

                <p className="certification-issuer">
                  {certification.issuer}
                </p>

                <p className="certification-description">
                  {certification.description}
                </p>

                <div className="certification-skills">
                  {certification.skills.map((skill) => (
                    <span
                      className="certification-skill"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="certification-footer">
                <div className="certification-actions">
                  {certification.certificateUrl && (
                    <a
                      href={certification.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-link"
                    >
                      <Award size={16} />
                      View Certificate
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {certification.credentialUrl && (
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-link"
                    >
                      Verify Credential
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="ongoing-learning">
          <div className="ongoing-heading">
            <div className="ongoing-heading-icon">
              <BookOpen size={22} />
            </div>

            <div>
              <h3>Currently Learning</h3>
              <p>
                Ongoing courses and professional development.
              </p>
            </div>
          </div>

          <div className="ongoing-grid">
            {ongoingLearning.map((course) => (
              <article
                className="ongoing-card"
                key={course.id}
              >
                <div className="ongoing-card-icon">
                  <GraduationCap size={21} />
                </div>

                <div className="ongoing-card-content">
                  <h4>{course.name}</h4>
                  <p>{course.provider}</p>
                </div>

                <span className="ongoing-status">
                  In Progress
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
