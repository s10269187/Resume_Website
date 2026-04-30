import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'Nursing Home Exercise Videos',
    emoji: '🏥',
    tag: 'Community Project',
    tagColor: 'bg-emerald-100 text-emerald-700',
    gradient: 'from-emerald-400 to-teal-400',
    cardBg: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200',
    description:
      'Partnered with Yew Tee NWS Nursing Home to curate and produce exercise videos tailored for elderly residents, combining creative media production with community care.',
    skills: ['Video Production', 'Community Outreach', 'Creative Direction'],
  },
  {
    title: 'School Photography Portfolio',
    emoji: '📷',
    tag: 'Extracurricular',
    tagColor: 'bg-pink-100 text-pink-700',
    gradient: 'from-pink-400 to-rose-400',
    cardBg: 'from-pink-50 to-rose-50',
    border: 'border-pink-200',
    description:
      'Served as one of the school\'s main photographers, capturing events and milestones. Also acted as Secretary for the Photography and Video Special Interest Group for AY24/25 and AY25/26.',
    skills: ['Photography', 'Photo Editing', 'Event Coverage', 'Leadership'],
  },
  {
    title: 'Immersive Media Coursework',
    emoji: '🎮',
    tag: 'Academic',
    tagColor: 'bg-violet-100 text-violet-700',
    gradient: 'from-violet-400 to-purple-500',
    cardBg: 'from-violet-50 to-purple-50',
    border: 'border-violet-200',
    description:
      'Developed interactive experiences and 3D assets as part of the Diploma in Immersive Media curriculum — spanning game design, 3D modelling with Autodesk Maya, and prototyping digital UX flows in Figma.',
    skills: ['Unity Engine', 'Autodesk Maya', 'Figma', 'Prototyping', 'C#'],
  },
  {
    title: 'Shopee Live Streaming',
    emoji: '📱',
    tag: 'Freelance',
    tagColor: 'bg-amber-100 text-amber-700',
    gradient: 'from-amber-400 to-orange-400',
    cardBg: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
    description:
      'Hosted live product streams as a Shopee Live Affiliate — engaging audiences, answering real-time enquiries, and adapting presentation styles based on engagement analytics.',
    skills: ['Live Streaming', 'Public Speaking', 'Sales', 'Audience Analytics'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Projects"
          subtitle="Things I've built, created, and contributed to"
          gradient="emerald"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(project => (
            <div
              key={project.title}
              className={`bg-gradient-to-br ${project.cardBg} border ${project.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-4 gap-3">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-md flex-shrink-0`}
                >
                  {project.emoji}
                </div>
                <span className={`${project.tagColor} text-xs font-semibold px-3 py-1 rounded-full`}>
                  {project.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map(skill => (
                  <span
                    key={skill}
                    className="bg-white/80 text-slate-500 text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200"
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
