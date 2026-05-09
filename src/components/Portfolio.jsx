import { useState } from 'react'
import SectionHeader from './SectionHeader'

const portfolioProjects = [
  {
    id: 1,
    title: 'A Cursed Wish',
    category: 'Game Development',
    icon: '🎮',
    gradient: 'from-red-400 to-orange-400',
    bg: 'from-red-50 to-orange-50',
    border: 'border-red-200',
    details: [
      'Horror game for SPF raising awareness on theft & crime',
      'Built 3D assets in Unity: overhead bridges, street lamps, shopping malls',
      'Developed a complementary kiosk app with quiz features',
      'Managed project workflow using Jira',
    ],
    technologies: ['Unity', 'C#', '3D Modeling', 'Jira'],
    videoUrl: 'https://res.cloudinary.com/druqtalox/video/upload/v1777625114/portfolio/a-cursed-wish.mp4',
    collaboration: 'Singapore Police Force (SPF)',
  },
  {
    id: 2,
    title: 'Pattern of Thought',
    category: 'VR Game',
    icon: '🥽',
    gradient: 'from-purple-400 to-pink-400',
    bg: 'from-purple-50 to-pink-50',
    border: 'border-purple-200',
    details: [
      'VR game for IMH raising awareness on OCD through 5 interactive mini-games',
      'Modelled and textured all 3D assets using Autodesk Maya & Substance Painter',
      'Designed accessible UI prototype in Figma, localised into 4 languages',
      'Built a performance tracking website with leaderboard',
    ],
    technologies: ['Unity', 'VR', 'Autodesk Maya', 'Adobe Substance Painter', 'Figma', 'Web Dev'],
    videoUrl: 'https://res.cloudinary.com/druqtalox/video/upload/v1777625138/portfolio/pattern-of-thought.mp4',
    collaboration: 'Institute of Mental Health (IMH)',
  },
  {
    id: 3,
    title: 'April Sonata',
    category: 'E-Commerce',
    icon: '🎼',
    gradient: 'from-blue-400 to-cyan-400',
    bg: 'from-blue-50 to-cyan-50',
    border: 'border-blue-200',
    details: [
      'E-commerce site for a music brand with full browse, cart & checkout flow',
      'Created 3D product models (piano & violin) in Autodesk Maya',
      'Designed mobile-responsive UI prototype in Figma',
      'Enhanced product visualisation to improve customer appeal',
    ],
    technologies: ['Web Development', 'Autodesk Maya', 'Figma', 'E-Commerce'],
    videoUrl: 'https://res.cloudinary.com/druqtalox/video/upload/v1777625091/portfolio/april-sonata.mp4',
  },
  {
    id: 4,
    title: 'Heritage Bites',
    category: 'Mobile Game',
    icon: '🍪',
    gradient: 'from-amber-400 to-yellow-400',
    bg: 'from-amber-50 to-yellow-50',
    border: 'border-amber-200',
    details: [
      'Mobile game teaching Singapore cultural heritage through traditional snack crafting',
      'Built crafting & ingredient-gathering systems in Unity with C#',
      'Designed levels around local treats like Kueh Bangkit & Iced Gems',
      'Focused on cultural education through engaging gameplay loops',
    ],
    technologies: ['Unity', 'C#', 'Game Design', 'Mobile Development'],
    videoUrl: 'https://res.cloudinary.com/druqtalox/video/upload/v1777624116/portfolio/heritage-bites.mp4',
  },
  {
    id: 5,
    title: 'Fireboy & Watergirl',
    category: 'Physical Computing',
    icon: '🕹️',
    gradient: 'from-indigo-400 to-blue-400',
    bg: 'from-indigo-50 to-blue-50',
    border: 'border-indigo-200',
    details: [
      'Custom two-player controller built with Makey Makey for a classic browser game',
      'Handcrafted using foam, cardboard, coloured paper & chopsticks',
      'Explored alternative & tangible input methods for game interaction',
      'Emphasised hands-on prototyping and physical UX design',
    ],
    technologies: ['Makey Makey', 'Physical Computing', 'UX Design', 'Game Mechanics'],
    videoUrl: 'https://res.cloudinary.com/druqtalox/video/upload/v1777625069/portfolio/fireboy-watergirl.mp4',
  },
  {
    id: 6,
    title: 'Fitness Tracker App',
    category: 'UI/UX Design',
    icon: '⌚',
    gradient: 'from-green-400 to-emerald-400',
    bg: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
    details: [
      'Cross-platform Figma prototype spanning mobile app & smartwatch',
      'Mobile: tracks calories, steps, sleep & daily activity',
      'Smartwatch: optimised for quick glances & real-time updates',
      'Prioritised accessibility & responsive layouts across screen sizes',
    ],
    technologies: ['Figma', 'UI/UX Design', 'Mobile Design', 'Wearable Design'],
    videoUrl: 'https://res.cloudinary.com/druqtalox/video/upload/v1777624105/portfolio/fitness-tracker.mp4',
  },
  {
    id: 7,
    title: 'Recycling Gamification App',
    category: 'UI/UX Design',
    icon: '♻️',
    gradient: 'from-teal-400 to-green-400',
    bg: 'from-teal-50 to-green-50',
    border: 'border-teal-200',
    details: [
      'Gamified recycling app designed in Figma to drive sustainable behaviour',
      'Point-based reward system with progress tracking & challenges',
      'Applied behaviour-change design principles to boost user engagement',
      'Sustainability-focused UX with positive environmental impact',
    ],
    technologies: ['Figma', 'Gamification', 'UI/UX Design', 'Mobile App'],
    videoUrl: 'https://res.cloudinary.com/druqtalox/video/upload/v1777625048/portfolio/recycling-app.mp4',
  },
]

function VideoEmbed({ videoUrl, gradient, icon }) {
  if (videoUrl) {
    return (
      <div className="relative w-full aspect-video bg-black overflow-hidden">
        <video
          controls
          preload="metadata"
          className="w-full h-full object-cover"
          controlsList="nodownload"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    )
  }
  return (
    <div className={`relative w-full aspect-video bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-2`}>
      <span className="text-4xl">{icon}</span>
      <p className="text-white/80 text-xs font-semibold">Video coming soon</p>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className={`bg-gradient-to-br ${project.bg} border ${project.border} rounded-2xl overflow-hidden flex flex-col h-full`}>
      <VideoEmbed videoUrl={project.videoUrl} gradient={project.gradient} icon={project.icon} />
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-start gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-base flex-shrink-0`}>
            {project.icon}
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800 leading-tight">{project.title}</h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{project.category}</p>
          </div>
        </div>

        <ul className="space-y-1.5 mb-3 flex-grow">
          {project.details.map((detail, i) => (
            <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600 leading-relaxed">
              <span className="text-pink-400 font-bold mt-0.5 flex-shrink-0">•</span>
              {detail}
            </li>
          ))}
        </ul>

        {project.collaboration && (
          <div className="mb-3 p-2 bg-white/60 rounded-lg border border-slate-200">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Collab</p>
            <p className="text-xs font-medium text-slate-700">{project.collaboration}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map(tech => (
            <span key={tech} className={`bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold px-2 py-0.5 rounded-full`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [current, setCurrent] = useState(0)
  const n = portfolioProjects.length

  const prev = () => setCurrent(i => (i - 1 + n) % n)
  const next = () => setCurrent(i => (i + 1) % n)

  const getProject = offset => portfolioProjects[(current + offset) % n]

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Portfolio"
          subtitle="A look at my past works and projects"
          gradient="indigo"
        />

        <div>
          {/* Top border */}
          <div className="h-2 bg-slate-900 rounded-full mb-6" />

          <div className="flex items-stretch gap-3">
            {/* Left arrow */}
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex-shrink-0 w-12 bg-slate-700 hover:bg-slate-900 text-white rounded-lg flex items-center justify-center text-xl transition-colors duration-200 select-none"
            >
              ◀
            </button>

            {/* Cards — 1 on mobile, 2 on sm, 3 on lg */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-w-0">
              <ProjectCard project={getProject(0)} />
              <div className="hidden sm:flex lg:flex">
                <ProjectCard project={getProject(1)} />
              </div>
              <div className="hidden lg:flex">
                <ProjectCard project={getProject(2)} />
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={next}
              aria-label="Next"
              className="flex-shrink-0 w-12 bg-slate-700 hover:bg-slate-900 text-white rounded-lg flex items-center justify-center text-xl transition-colors duration-200 select-none"
            >
              ▶
            </button>
          </div>

          {/* Bottom border */}
          <div className="h-2 bg-slate-900 rounded-full mt-6" />

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {portfolioProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-indigo-400' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
