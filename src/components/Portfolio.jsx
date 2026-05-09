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
    portrait: true,
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
    portrait: true,
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
    portrait: true,
  },
]

// Fixed pages: 3 – 3 – 1
const pages = [
  portfolioProjects.slice(0, 3),
  portfolioProjects.slice(3, 6),
  portfolioProjects.slice(6, 7),
]

function VideoEmbed({ videoUrl, gradient, icon, portrait }) {
  if (videoUrl) {
    return (
      <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
        <video
          controls
          preload="metadata"
          className={`w-full h-full ${portrait ? 'object-contain' : 'object-cover'}`}
          controlsList="nodownload"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    )
  }
  return (
    <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-2`}>
      <span className="text-5xl">{icon}</span>
      <p className="text-white/80 text-xs font-semibold">Video coming soon</p>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div
      className={`bg-gradient-to-br ${project.bg} border ${project.border} rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-300`}
    >
      <VideoEmbed videoUrl={project.videoUrl} gradient={project.gradient} icon={project.icon} portrait={project.portrait} />

      <div className="p-6 flex flex-col flex-grow">
        {/* Title row */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-lg flex-shrink-0 shadow`}
          >
            {project.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 leading-snug">{project.title}</h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{project.category}</p>
          </div>
        </div>

        {/* Bullet points */}
        <ul className="space-y-1.5 mb-4 flex-grow">
          {project.details.map((detail, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
              <span className="text-pink-400 font-bold mt-0.5 flex-shrink-0">•</span>
              {detail}
            </li>
          ))}
        </ul>

        {/* Collaboration */}
        {project.collaboration && (
          <div className="mb-3 p-2.5 bg-white/70 rounded-xl border border-slate-200">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Collaboration</p>
            <p className="text-xs font-semibold text-slate-700">{project.collaboration}</p>
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className={`bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold px-2.5 py-0.5 rounded-full`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [pageIndex, setPageIndex] = useState(0)
  const [direction, setDirection] = useState('right')
  const [animKey, setAnimKey] = useState(0)

  const totalPages = pages.length

  const goTo = (newIndex, dir) => {
    setDirection(dir)
    setPageIndex(newIndex)
    setAnimKey(k => k + 1)
  }

  const prev = () => goTo((pageIndex - 1 + totalPages) % totalPages, 'left')
  const next = () => goTo((pageIndex + 1) % totalPages, 'right')

  const currentProjects = pages[pageIndex]
  const isSingle = currentProjects.length === 1

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <SectionHeader
          title="Portfolio"
          subtitle="A look at my past works and projects"
          gradient="indigo"
        />


        <div className="flex items-stretch gap-4">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex-shrink-0 w-14 bg-slate-800 hover:bg-slate-600 active:scale-95 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-all duration-200 select-none"
          >
            ‹
          </button>

          {/* Animated cards area */}
          <div className="flex-1 overflow-hidden min-w-0">
            <div
              key={animKey}
              className={direction === 'right' ? 'slide-in-right' : 'slide-in-left'}
            >
              {isSingle ? (
                /* Single card — centred, capped width */
                <div className="flex justify-center">
                  <div className="w-full max-w-md">
                    <ProjectCard project={currentProjects[0]} />
                  </div>
                </div>
              ) : (
                /* Three-card grid */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {currentProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="flex-shrink-0 w-14 bg-slate-800 hover:bg-slate-600 active:scale-95 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-all duration-200 select-none"
          >
            ›
          </button>
        </div>


        {/* Page indicator */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > pageIndex ? 'right' : 'left')}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === pageIndex
                  ? 'w-8 bg-indigo-500'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
          <span className="text-xs text-slate-400 font-semibold ml-2">
            {pageIndex + 1} / {totalPages}
          </span>
        </div>
      </div>
    </section>
  )
}
