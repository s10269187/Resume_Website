import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* Logo */}
        <button onClick={scrollTop} className="text-3xl font-black">
          <span className="text-pink-400">J</span>
          <span className="text-violet-400">L</span>
        </button>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          {['portfolio', 'about', 'skills', 'experience', 'education', 'cocurricular', 'certificates', 'contact'].map(s => (
            <button
              key={s}
              onClick={() => document.querySelector(`#${s}`)?.scrollIntoView({ behavior: 'smooth' })}
              className="capitalize hover:text-pink-400 transition-colors"
            >
              {s === 'cocurricular' ? 'activities' : s}
            </button>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-4">
          <a
            href="mailto:leejialuuuu@gmail.com"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-400 hover:text-white transition-all duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/lee-jia-lu-/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/s10269187"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-600 hover:text-white transition-all duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-800" />

        <p className="text-slate-500 text-sm text-center">
          © {new Date().getFullYear()} Lee Jia Lu <span className="text-pink-400">♥</span>
        </p>
      </div>
    </footer>
  )
}
