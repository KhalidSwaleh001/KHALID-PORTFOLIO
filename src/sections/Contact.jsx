import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  ExternalLink,
} from 'lucide-react'

import SectionHeading from '../components/SectionHeading'

function Contact() {
  const contactLinks = [
    {
      name: 'LinkedIn',
      value: 'Connect professionally',
      url: 'https://linkedin.com/in/khalid-swaleh-182140292',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      value: 'Explore my projects',
      url: 'https://github.com/KhalidSwaleh001',
      icon: Github,
    },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <SectionHeading
          label="GET IN TOUCH"
          title="Let's Connect"
          description="Have an opportunity, project idea, or just want to talk technology? I'd be happy to hear from you."
        />

        <div className="contact-content">
          <div className="contact-intro">
            <h3>Let's build something meaningful.</h3>

            <p>
              I'm always open to connecting with people in technology,
              learning about new opportunities, and collaborating on
              interesting projects.
            </p>

            <div className="contact-location">
              <MapPin size={19} />
              <span>Kenya</span>
            </div>

            <a
              href="mailto:khalidbreik@gmail.com"
              className="contact-email-button"
            >
              <Mail size={19} />
              Send Me an Email
              <Send size={16} />
            </a>
          </div>

          <div className="contact-links">
            {contactLinks.map((item) => {
              const Icon = item.icon

              return (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-card"
                  key={item.name}
                >
                  <div className="contact-link-icon">
                    <Icon size={22} />
                  </div>

                  <div className="contact-link-text">
                    <h4>{item.name}</h4>
                    <p>{item.value}</p>
                  </div>

                  <ExternalLink size={17} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact