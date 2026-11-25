
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

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

        <PlaceholderSection
          id="about"
          label="01 / About"
          title="A little about me"
          description="My background, interests and journey in technology."
        />

        <PlaceholderSection
          id="skills"
          label="02 / Skills"
          title="Technical Skills"
          description="Technologies, tools and technical competencies."
        />

        <PlaceholderSection
          id="labs"
          label="03 / Hands-on Experience"
          title="Cybersecurity Labs"
          description="Practical learning through LabEx, TryHackMe, Hack The Box and Pwned Labs."
        />

        <PlaceholderSection
          id="projects"
          label="04 / Portfolio"
          title="Selected Projects"
          description="Software applications and technical projects I've worked on."
        />

        <PlaceholderSection
          id="certifications"
          label="05 / Achievements"
          title="Certifications & Training"
          description="Professional courses and technical certifications."
        />

        <PlaceholderSection
          id="education"
          label="06 / Education"
          title="Education"
          description="Academic background and continuous learning."
        />

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
