import { useState, useEffect } from 'react'

const roles = [
  'Immersive Media Student',
  'Digital Designer',
  'Game Developer',
  'Creative Storyteller',
  'Photographer',
]

function Doodle({ className, children }) {
  return (
    <div className={`absolute pointer-events-none select-none ${className}`}>
      {children}
    </div>
  )
}

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]

    if (!isDeleting && charIndex === current.length) {
      const t = setTimeout(() => setIsDeleting(true), 1800)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      } else if (charIndex > 0) {
        setDisplayText(current.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      } else {
        setIsDeleting(false)
        setRoleIndex(r => (r + 1) % roles.length)
      }
    }, isDeleting ? 45 : 95)

    return () => clearTimeout(t)
  }, [charIndex, isDeleting, roleIndex])

  const scrollTo = href => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-pink-50/60 to-violet-50/60 pt-20">
      {/* Gradient blobs */}
      <div className="absolute top-24 right-12 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-24 left-12 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Floating doodles */}
      <Doodle className="top-28 left-14 text-pink-300 text-4xl animate-float">✦</Doodle>
      <Doodle className="top-40 right-28 text-violet-300 text-2xl animate-float-delayed">✦</Doodle>
      <Doodle className="bottom-44 left-28 text-amber-300 text-3xl animate-float-slow">★</Doodle>
      <Doodle className="bottom-36 right-16 text-emerald-300 text-2xl animate-float">◆</Doodle>
      <Doodle className="top-1/3 right-10 text-sky-300 text-xl animate-float-delayed">✦</Doodle>
      <Doodle className="top-1/2 left-8 text-rose-300 text-lg animate-float-slow">●</Doodle>
      <Doodle className="top-20 right-1/3 text-fuchsia-300 text-sm animate-float">◆</Doodle>
      <Doodle className="bottom-20 left-1/3 text-teal-300 text-3xl animate-float-delayed">✦</Doodle>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="mb-6 inline-block bg-white/80 backdrop-blur-sm border border-pink-200 text-pink-600 text-sm font-semibold px-5 py-2 rounded-full shadow-sm">
          👋 Welcome to my portfolio!
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 leading-none tracking-tight">
          Hi! I'm{' '}
          <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            Jia Lu
          </span>
        </h1>

        {/* Typewriter */}
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-500 mb-6 h-12 flex items-center justify-center gap-1">
          <span className="text-violet-500">{displayText}</span>
          <span className="w-0.5 h-8 bg-pink-400 animate-pulse inline-block rounded-full" />
        </div>

        {/* Tagline */}
        <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Ngee Ann Polytechnic · Diploma in Immersive Media<br />
          Passionate about creating engaging, user-focused digital experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-14">
          <button
            onClick={() => scrollTo('#experience')}
            className="bg-gradient-to-r from-pink-400 to-violet-400 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-pink-200 hover:shadow-pink-300 hover:scale-105 transition-all duration-300"
          >
            View My Work →
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="bg-white border-2 border-pink-300 text-pink-500 font-semibold px-8 py-3.5 rounded-full hover:bg-pink-50 hover:border-pink-400 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 justify-center">
          {[
            { num: '3+', label: 'Years Experience' },
            { num: '10+', label: 'Tools & Skills' },
            { num: '3', label: 'Fencing Medals' },
            { num: "AY24/25", label: "Director's List" },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
                {stat.num}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-300">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-pink-300 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
