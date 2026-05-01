import SectionHeader from './SectionHeader'

const certificates = [
  {
    category: 'Academic',
    icon: '🎓',
    gradient: 'from-violet-400 to-purple-500',
    bg: 'from-violet-50 to-purple-50',
    border: 'border-violet-200',
    badgeColor: 'bg-violet-100 text-violet-700',
    items: [
      {
        title: "Director's List",
        issuer: 'Diploma in Immersive Media',
        description: 'October Semester, Year 2024/2025',
        year: '2025',
        icon: '⭐',
      },
      {
        title: 'Introduction to Web Design and Development',
        issuer: 'LinkedIn Learning',
        year: '2026',
        icon: '🌐',
      },
      {
        title: 'Learning the JavaScript Language',
        issuer: 'LinkedIn Learning',
        year: '2026',
        icon: '💻',
      },
      {
        title: 'Design User Experiences with Figma',
        issuer: 'LinkedIn Learning',
        year: '2026',
        icon: '🎨',
      },
      {
        title: 'Figma: Animating Design Prototypes',
        issuer: 'LinkedIn Learning',
        year: '2026',
        icon: '✨',
      },
    ],
  },
  {
    category: 'Volunteering & Others',
    icon: '🤝',
    gradient: 'from-emerald-400 to-teal-500',
    bg: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    items: [
      {
        title: 'Completion of MissionX',
        issuer: 'Youth Corps Singapore',
        year: '2026',
        icon: '🎯',
      },
      {
        title: '24Asia Beach Clean-up',
        issuer: 'Community Service',
        year: '2026',
        icon: '🌊',
      },
      {
        title: 'Agape Standard First Aid Course',
        issuer: 'Agape',
        description: 'First Aid Certification',
        year: '2026',
        icon: '🏥',
      },
    ],
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Certificates"
          subtitle="Qualifications and training I've completed"
          gradient="emerald"
        />

        <div className="space-y-12">
          {certificates.map((certGroup, groupIdx) => (
            <div key={groupIdx}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${certGroup.gradient} flex items-center justify-center text-2xl shadow-md`}
                >
                  {certGroup.icon}
                </div>
                <div>
                  <h2 className={`text-2xl font-bold bg-gradient-to-r ${certGroup.gradient} bg-clip-text text-transparent`}>
                    {certGroup.category}
                  </h2>
                </div>
              </div>

              {/* Certificates grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {certGroup.items.map((cert, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${certGroup.bg} border ${certGroup.border} rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    {/* Header with icon and year */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="text-3xl">{cert.icon}</div>
                      <span className={`${certGroup.badgeColor} text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap`}>
                        {cert.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{cert.title}</h3>

                    {/* Issuer */}
                    <p className={`text-sm font-semibold bg-gradient-to-r ${certGroup.gradient} bg-clip-text text-transparent mb-2`}>
                      {cert.issuer}
                    </p>

                    {/* Description if exists */}
                    {cert.description && (
                      <p className="text-xs text-slate-500 italic">{cert.description}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider between categories */}
              {groupIdx < certificates.length - 1 && (
                <div className="my-8 border-t border-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
