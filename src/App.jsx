import Experience from './sections/Experience'
import Contact from './sections/Contact'
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

        <Experience />

        <Contact />
      </main>

      <Footer />
    </>
  )
}
