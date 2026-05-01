import SectionHeader from './SectionHeader'

const schoolActivities = [
  {
    school: 'Ngee Ann Polytechnic',
    schoolEmoji: '🎓',
    schoolColor: 'from-violet-400 to-purple-500',
    activities: [
      {
        name: 'Rotaract Club',
        period: '2025–2027',
        role: 'Publicity Head (AY26/27)',
        icon: '🤝',
        gradient: 'from-red-400 to-pink-400',
        badgeColor: 'bg-red-100 text-red-700',
        points: [
          'Volunteered for various events and community service',
          'Led publicity initiatives for club activities',
          'Promoted club engagement and awareness',
        ],
      },
      {
        name: 'Song Composing Club',
        period: '2025–2027',
        role: 'Main Keyboardist / Bassist',
        icon: '🎹',
        gradient: 'from-blue-400 to-cyan-400',
        badgeColor: 'bg-blue-100 text-blue-700',
        points: [
          'Made a band where we practice music together',
          'Main keyboardist or bassist in band performances',
          'Performed multiple times for school events',
        ],
      },
      {
        name: 'Fencing Club',
        period: '2024–2027',
        role: 'Competitive Fencer',
        icon: '🤺',
        gradient: 'from-amber-400 to-orange-400',
        badgeColor: 'bg-amber-100 text-amber-700',
        points: [
          'Participated in many competitions representing Ngee Ann Polytechnic',
          '🥈 Won 2 Silver medals in 2025',
          '🥉 Won 1 Bronze medal in 2025',
        ],
      },
      {
        name: 'Photo & Video Special Interest Group',
        period: '2024–2027',
        role: 'Secretary (AY24/25, AY25/26)',
        icon: '📸',
        gradient: 'from-pink-400 to-rose-400',
        badgeColor: 'bg-pink-100 text-pink-700',
        description: 'School of Infocomm Technology',
        points: [
          'Helped take photos for various school events',
          'Captured memorable moments for the school community',
          'Taught members on how to use the camera',
          'Led group as Secretary in two academic years',
        ],
      },
    ],
  },
  {
    school: 'Regent Secondary School',
    schoolEmoji: '🏫',
    schoolColor: 'from-sky-400 to-blue-500',
    activities: [
      {
        name: 'Infocomm Technology Club',
        period: '2020–2023',
        role: 'Member',
        icon: '📷',
        gradient: 'from-emerald-400 to-teal-400',
        badgeColor: 'bg-emerald-100 text-emerald-700',
        points: [
          'Took part in photography competitions',
          'Captured and edited photos for various school events',
          'Developed photography skills through club activities',
        ],
      },
    ],
  },
]

export default function CoCurricular() {
  return (
    <section id="cocurricular" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Co-Curricular Activities"
          subtitle="My involvement in clubs and interest groups"
          gradient="pink"
        />

        <div className="space-y-12">
          {schoolActivities.map((schoolData, schoolIdx) => (
            <div key={schoolIdx}>
              {/* School header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${schoolData.schoolColor} flex items-center justify-center text-2xl shadow-md`}
                >
                  {schoolData.schoolEmoji}
                </div>
                <div>
                  <h2 className={`text-2xl font-bold bg-gradient-to-r ${schoolData.schoolColor} bg-clip-text text-transparent`}>
                    {schoolData.school}
                  </h2>
                </div>
              </div>

              {/* Activities grid */}
              <div className="grid sm:grid-cols-2 gap-5 ml-0 sm:ml-8">
                {schoolData.activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className={`bg-white border-2 ${activity.badgeColor.replace('text-', 'border-').replace('bg-', '')} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{activity.icon}</span>
                          <h3 className="text-lg font-bold text-slate-800">{activity.name}</h3>
                        </div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          📅 {activity.period}
                        </p>
                      </div>
                    </div>

                    {/* Role badge */}
                    <div className={`${activity.badgeColor} inline-block px-3 py-1 rounded-full text-xs font-bold mb-4`}>
                      {activity.role}
                    </div>

                    {/* Description */}
                    {activity.description && (
                      <p className="text-sm text-slate-500 italic mb-3">{activity.description}</p>
                    )}

                    {/* Points */}
                    <ul className="space-y-2">
                      {activity.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${activity.gradient} flex-shrink-0`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Divider between schools */}
              {schoolIdx < schoolActivities.length - 1 && (
                <div className="my-8 border-t border-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
