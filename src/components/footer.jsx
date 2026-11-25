
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <a href="#home" className="logo">
          KSB<span className="accent">.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Khalid Swaleh Breik.
          Built with React.
        </p>

        <div className="footer-socials">
          <a href="https://github.com/" aria-label="GitHub">
            <Github size={19} />
          </a>

          <a href="https://linkedin.com/" aria-label="LinkedIn">
            <Linkedin size={19} />
          </a>

          <a href="mailto:your-email@example.com" aria-label="Email">
            <Mail size={19} />
          </a>
        </div>

      </div>
    </footer>
  )
}
