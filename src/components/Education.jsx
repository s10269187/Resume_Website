import SectionHeader from './SectionHeader'

const education = [
  {
    school: 'Ngee Ann Polytechnic',
    degree: 'Diploma in Immersive Media',
    period: 'Apr 2024 – Present',
    icon: '🎓',
    gradient: 'from-violet-400 to-purple-500',
    bg: 'from-violet-50 to-purple-50',
    border: 'border-violet-200',
    highlights: [
      "Director's List (AY24/25)",
      'Secretary – Photography & Video SIG (AY24/25, AY25/26)',
      'Publicity Head – Rotaract Club (AY26/27)',
    ],
  },
  {
    school: 'Regent Secondary School',
    degree: 'GCE Ordinary Level',
    period: 'Jan 2020 – Nov 2023',
    icon: '🏫',
    gradient: 'from-blue-400 to-sky-500',
    bg: 'from-blue-50 to-sky-50',
    border: 'border-blue-200',
    highlights: ['Good Progress Award (2023)', 'EAGLES Award (2023)'],
  },
]

const awards = [
  { icon: '🥈', text: 'SMU Fencing Challenge — Silver', year: '2025' },
  { icon: '🥈', text: 'NTU Fencing Challenge — Silver', year: '2025' },
  { icon: '🥉', text: 'NUS Fencing Challenge — Bronze', year: '2025' },
  { icon: '🏆', text: "Director's List", year: 'AY24/25' },
  { icon: '🦅', text: 'EAGLES Award', year: '2023' },
  { icon: '📈', text: 'Good Progress Award', year: '2023' },
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Education"
          subtitle="My academic background and achievements"
          gradient="blue"
        />

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {education.map(edu => (
            <div
              key={edu.school}
              className={`bg-gradient-to-br ${edu.bg} border ${edu.border} rounded-2xl p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-2xl shadow-md`}
                >
                  {edu.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">{edu.school}</h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                    {edu.degree}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white/80 text-slate-500 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
                  📅 {edu.period}
                </span>
              </div>

              <ul className="space-y-2">
                {edu.highlights.map(h => (
                  <li key={h} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-amber-400">★</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Awards & Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Awards &{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map(award => (
              <div
                key={award.text}
                className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl">{award.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-700">{award.text}</p>
                  <p className="text-xs text-slate-400">{award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
