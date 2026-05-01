import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#cocurricular', label: 'Activities' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="text-2xl font-black tracking-tight"
        >
          <span className="text-pink-400">J</span>
          <span className="text-violet-400">L</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => scrollTo(e, link.href)}
              className="text-slate-600 font-medium text-sm hover:text-pink-500 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-violet-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
          <a
            href="mailto:leejialuuuu@gmail.com"
            className="bg-gradient-to-r from-pink-400 to-violet-400 text-white text-sm font-semibold px-5 py-2 rounded-full hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            Hire Me ✨
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => scrollTo(e, link.href)}
              className="text-slate-600 font-medium hover:text-pink-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:leejialuuuu@gmail.com"
            className="bg-gradient-to-r from-pink-400 to-violet-400 text-white text-sm font-semibold px-5 py-2 rounded-full text-center mt-2"
          >
            Hire Me ✨
          </a>
        </div>
      </div>
    </nav>
  )
}
