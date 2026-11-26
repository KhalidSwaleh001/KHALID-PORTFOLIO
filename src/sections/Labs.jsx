
import {
  ExternalLink,
  Terminal,
  ShieldCheck,
  Cloud,
  Code2,
  Globe,
  CheckCircle2,
} from 'lucide-react'

import SectionHeading from '../components/SectionHeading'
import labs from '../data/labs'

const platformIcons = {
  'Hack The Box': Terminal,
  'TryHackMe': Globe,
  'LabEx': Code2,
  'Pwned Labs': Cloud,
}

const platformLinks = {
  'Hack The Box': 'https://academy.hackthebox.com/',
  'TryHackMe': 'https://tryhackme.com/',
  'LabEx': 'https://labex.io/u/khalid-swaleh-91274248',
  'Pwned Labs': 'https://app.pwnedlabs.io/@khalidbreik',
}

export default function Labs() {
  const completedCount = labs.filter(
    (lab) => lab.status === 'Completed'
  ).length

  const platforms = [
    'Hack The Box',
    'TryHackMe',
    'LabEx',
    'Pwned Labs',
  ]

  return (
    <section id="labs" className="section labs-section">
      <div className="container">

        <SectionHeading
          label="03 / Hands-on Experience"
          title="Cybersecurity Labs"
          description="Learning by doing. Explore my practical cybersecurity training, technical exercises and hands-on experience across different learning platforms."
        />

        {/* SUMMARY */}
        <div className="labs-summary">

          <div className="labs-summary-card">
            <CheckCircle2 size={25} />
            <div>
              <h3>{completedCount}</h3>
              <p>Completed Exercises</p>
            </div>
          </div>

          <div className="labs-summary-card">
            <ShieldCheck size={25} />
            <div>
              <h3>{platforms.length}</h3>
              <p>Learning Platforms</p>
            </div>
          </div>

        </div>

        {/* PLATFORM FILTER / LABELS */}
        <div className="labs-platforms">
          {platforms.map((platform) => {
            const Icon = platformIcons[platform]

            return (
              <a
                key={platform}
                href={platformLinks[platform]}
                target="_blank"
                rel="noreferrer"
                className="platform-tag"
              >
                <Icon size={17} />
                {platform}
                <ExternalLink size={13} />
              </a>
            )
          })}
        </div>

        {/* LAB CARDS */}
        <div className="labs-grid">

          {labs.map((lab) => {
            const Icon = platformIcons[lab.platform]

            return (
              <article className="lab-card" key={lab.id}>

                <div className="lab-card-top">

                  <div className="lab-platform-icon">
                    <Icon size={23} />
                  </div>

                  <span className="lab-status completed">
                    <CheckCircle2 size={13} />
                    {lab.status}
                  </span>

                </div>

                <p className="lab-platform">
                  {lab.platform}
                </p>

                <h3>{lab.title}</h3>

                <p className="lab-category">
                  {lab.category}
                </p>

                <p className="lab-description">
                  {lab.description}
                </p>

                <div className="lab-skills">
                  {lab.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <a
                  href={lab.link}
                  target="_blank"
                  rel="noreferrer"
                  className="lab-link"
                >
                  View Platform
                  <ExternalLink size={15} />
                </a>

              </article>
            )
          })}

        </div>

      </div>
    </section>
  )
}
