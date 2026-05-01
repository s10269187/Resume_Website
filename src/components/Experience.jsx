import SectionHeader from './SectionHeader'

const experiences = [
  {
    company: 'Yong Sheng Gift Shop',
    role: 'Warehouse Assistant / Photo Editing Assistant',
    period: 'Aug 2021 – Present',
    color: 'from-pink-400 to-rose-400',
    dot: 'bg-pink-400',
    ring: 'ring-pink-200',
    icon: '📦',
    points: [
      'Edited and enhanced product images using Adobe Photoshop, Canva, and online tools to improve visual quality for Shopee listings.',
      'Created clean, consistent product visuals — background removal, colour correction, and layout adjustments.',
      'Maintained accuracy and attention to detail across both digital content and physical stock handling.',
    ],
    skills: ['Photo Editing', 'Adobe Photoshop', 'Canva', 'Attention to Detail', 'Stock Management'],
  },
  {
    company: 'Hai Di Lao Hot Pot',
    role: 'Waitress / Service Staff',
    period: 'Dec 2023 – Dec 2025',
    color: 'from-amber-400 to-orange-400',
    dot: 'bg-amber-400',
    ring: 'ring-amber-200',
    icon: '🍜',
    points: [
      'Delivered attentive customer service by managing orders, serving food, and handling customer requests in a fast-paced environment.',
      'Communicated effectively with customers, colleagues, and kitchen staff to ensure accurate and timely order fulfilment.',
      'Maintained cleanliness and organisation of dining areas while upholding hygiene and service standards.',
    ],
    skills: ['Customer Service', 'Communication', 'Teamwork', 'Time Management', 'Multitasking'],
  },
  {
    company: 'Shopee',
    role: 'Shopee Live Affiliate',
    period: 'Sept 2025 – Present',
    color: 'from-violet-400 to-purple-500',
    dot: 'bg-violet-400',
    ring: 'ring-violet-200',
    icon: '📱',
    points: [
      'Promoted products through live streaming, engaging audiences and driving sales conversions.',
      'Communicated product features clearly and responded to viewer enquiries in real time.',
      'Built confidence in public speaking and strengthened persuasive communication skills.',
      'Analysed audience engagement and adapted presentation styles to improve performance.',
    ],
    skills: ['Public Speaking', 'Persuasion', 'Live Streaming', 'Sales', 'Analytics'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey so far"
          gradient="amber"
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 via-amber-200 to-violet-200 hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-8">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full ${exp.dot} ring-4 ${exp.ring} flex items-center justify-center text-white text-xl shadow-md flex-shrink-0 z-10`}
                  >
                    {exp.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{exp.role}</h3>
                      <p
                        className={`font-semibold text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span className="bg-slate-100 text-slate-500 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${exp.dot} flex-shrink-0`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className={`bg-gradient-to-r ${exp.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
