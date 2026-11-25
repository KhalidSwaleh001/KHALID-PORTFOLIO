
import { ArrowDown, Download, Github } from 'lucide-react'
import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="availability">
            <span className="status-dot"></span>
            Open to learning and opportunities
          </div>

          <p className="hero-intro">HELLO, I'M</p>

          <h1>
            Khalid Swaleh
            <span>Breik.</span>
          </h1>

          <h2>
            Cybersecurity Enthusiast
            <br />
            <span>& Software Developer</span>
          </h2>

          <p className="hero-description">
            Passionate about cybersecurity, software development
            and building technology that solves real-world problems.
            Constantly learning through hands-on labs and practical projects.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore My Work <ArrowDown size={18} />
            </a>

            <a
              href="/resume.pdf"
              download="Khalid-Swaleh-CV.pdf"
              className="btn btn-outline"
            >
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={21} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-image-frame">
            <img
              src="/images/profile.jpg"
              alt="Khalid Swaleh Breik"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="image-placeholder">
              <span>KS</span>
              <small>YOUR PROFILE PHOTO</small>
            </div>
          </div>

          <div className="floating-tag">
            <span className="accent">01.</span> Always Learning
          </div>
        </motion.div>

      </div>
    </section>
  )
}
