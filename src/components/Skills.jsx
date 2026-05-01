import SectionHeader from './SectionHeader'

const skillCategories = [
  {
    title: 'Design & Prototyping',
    icon: '🎨',
    color: 'from-pink-400 to-rose-400',
    bg: 'from-pink-50 to-rose-50',
    border: 'border-pink-200',
    badge: 'bg-pink-100 text-pink-700',
    skills: ['Figma', 'Canva'],
  },
  {
    title: '3D & Game Development',
    icon: '🎮',
    color: 'from-violet-400 to-purple-500',
    bg: 'from-violet-50 to-purple-50',
    border: 'border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
    skills: ['Unity Engine', 'Autodesk Maya', 'C# (Unity)'],
  },
  {
    title: 'Programming',
    icon: '💻',
    color: 'from-blue-400 to-sky-500',
    bg: 'from-blue-50 to-sky-50',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    skills: ['Python', 'HTML', 'C#'],
  },
  {
    title: 'Adobe Creative Suite',
    icon: '✏️',
    color: 'from-amber-400 to-orange-500',
    bg: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    skills: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe Audition',
      'Adobe Substance Painter',
      'Adobe Lightroom',
    ],
  },
  {
    title: 'Languages',
    icon: '🌏',
    color: 'from-emerald-400 to-teal-500',
    bg: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    skills: ['English (Native)', 'Chinese (Native)', 'ASL (Beginner)'],
  },
  {
    title: 'Soft Skills',
    icon: '⭐',
    color: 'from-rose-400 to-red-500',
    bg: 'from-rose-50 to-red-50',
    border: 'border-rose-200',
    badge: 'bg-rose-100 text-rose-700',
    skills: ['Creativity', 'Communicative', 'Adaptability', 'Problem-solving', 'Time Management'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Skills & Tools"
          subtitle="Technologies and tools I work with"
          gradient="violet"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(cat => (
            <div
              key={cat.title}
              className={`bg-gradient-to-br ${cat.bg} border ${cat.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg shadow-md`}
                >
                  {cat.icon}
                </div>
                <h3 className={`font-bold text-slate-800 text-sm leading-tight`}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className={`${cat.badge} text-xs font-semibold px-3 py-1.5 rounded-full`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
