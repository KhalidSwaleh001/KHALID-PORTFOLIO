import {
  Mail,
  Network,
  GitBranch,
  MapPin,
  Send,
  ExternalLink,
  MessageCircle,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

function Contact() {
  const contactLinks = [
    {
      name: 'LinkedIn',
      value: 'Connect professionally',
      url: 'https://linkedin.com/in/khalid-swaleh-182140292',
      icon: Network,
    },
    {
      name: 'GitHub',
      value: 'Explore my projects',
      url: 'https://github.com/KhalidSwaleh001',
      icon: GitBranch,
    },
    {
  name: 'WhatsApp',
  value: 'Chat with me directly',
  url: 'https://wa.me/254111468840',
  icon: MessageCircle,
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
  href="https://mail.google.com/mail/?view=cm&fs=1&to=khalidbreik@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-email-button"
>
  <Mail size={19} />
  Email Me Through Gmail
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