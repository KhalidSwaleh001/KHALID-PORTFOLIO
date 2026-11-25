
import { useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Labs', href: '#labs' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-content">

        <a href="#home" className="logo">
          <Terminal size={23} />
          <span>KSB<span className="accent">.</span></span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Connect
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  )
}
