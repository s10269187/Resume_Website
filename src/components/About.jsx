import SectionHeader from './SectionHeader'

const tags = [
  '🇸🇬 Singapore',
  '📍 Ngee Ann Poly',
  '🎮 Game Dev',
  '📷 Photography',
  '🤺 Fencing',
  '🎨 Digital Design',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="About Me"
          subtitle="Get to know the person behind the portfolio"
          gradient="pink"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: avatar card */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Offset shadow card */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-violet-300 rounded-3xl translate-x-3 translate-y-3 opacity-40" />
              {/* Main card */}
              <div className="relative w-full h-full bg-gradient-to-br from-pink-100 to-violet-100 rounded-3xl overflow-hidden shadow-xl">
                {/* Profile image */}
                <img
                  src="/profile.jpg"
                  alt="Lee Jia Lu"
                  className="w-full h-full object-cover rounded-3xl"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none rounded-3xl" />
              </div>
              {/* Floating chips */}
              <div className="absolute -top-5 -right-5 bg-white rounded-xl px-3 py-2 shadow-lg text-sm font-semibold text-violet-500 border border-violet-100">
                🎓 Immersive Media
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-3 py-2 shadow-lg text-sm font-semibold text-pink-500 border border-pink-100">
                📸 Photographer
              </div>
            </div>
          </div>

          {/* Right: bio */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-5">
              Hey, I'm Lee Jia Lu! 👋
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              I'm a third-year Immersive Media student at Ngee Ann Polytechnic — a communicative
              individual with a strong interest in user-focused digital experiences.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              I have hands-on experience in game development, prototyping, and digital design using
              tools like <span className="font-semibold text-violet-500">Unity</span> and{' '}
              <span className="font-semibold text-pink-500">Figma</span>. I aim to create engaging,
              intuitive experiences while continuing to grow in the industry.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Beyond the screen, I'm a competitive fencer 🤺, a school photographer 📸, and a
              community volunteer — having curated exercise videos for a nursing home and led
              publicity for my school's Rotaract Club.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="bg-gradient-to-r from-pink-50 to-violet-50 border border-pink-200 text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: '🎮', label: 'Game Dev', sub: 'Unity & C#' },
                { icon: '🎨', label: 'Design', sub: 'Figma & Adobe' },
                { icon: '📷', label: 'Photography', sub: 'SIG Secretary' },
              ].map(item => (
                <div
                  key={item.label}
                  className="bg-gradient-to-br from-pink-50 to-violet-50 rounded-2xl p-4 text-center border border-pink-100"
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-xs font-bold text-slate-700">{item.label}</div>
                  <div className="text-xs text-slate-400">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
