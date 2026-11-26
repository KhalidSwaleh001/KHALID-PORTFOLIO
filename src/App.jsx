import Education from './sections/Education'
import Labs from './sections/Labs'
import Certifications from './sections/Certifications'
import Projects from './sections/Projects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/footer'
import About from './sections/About'
import Skills from './sections/Skills'
import SectionHeading from './components/SectionHeading'

function PlaceholderSection({
  id,
  label,
  title,
  description
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <SectionHeading
          label={label}
          title={title}
          description={description}
        />
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />

        <Labs />

        <Projects />

        <Certifications />

         <Education />

        <PlaceholderSection
          id="experience"
          label="07 / Experience"
          title="Professional Experience"
          description="Practical experience, placements and responsibilities."
        />

        <PlaceholderSection
          id="contact"
          label="08 / Contact"
          title="Let's Connect"
          description="Have an opportunity or project in mind? Let's talk."
        />
      </main>

      <Footer />
    </>
  )
}
