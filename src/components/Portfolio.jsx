import SectionHeader from './SectionHeader'

// Videos hosted on Cloudinary
const portfolioProjects = [
  {
    id: 1,
    title: 'A Cursed Wish',
    category: 'Game Development',
    icon: '🎮',
    gradient: 'from-red-400 to-orange-400',
    bg: 'from-red-50 to-orange-50',
    border: 'border-red-200',
    description:
      'A computer horror game developed in collaboration with the Singapore Police Force (SPF) to raise awareness about crime, specifically theft.',
    details: [
      'Built with Unity Engine',
      'Created 3D assets: overhead bridges, street lamps, shopping malls',
      'Developed complementary kiosk application with quiz features',
      'Used Jira for project management and team coordination',
      'Focus: Educational awareness & local immersion',
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
    description:
      'A VR awareness game raising consciousness about Obsessive-Compulsive Disorder (OCD) through interactive mini-games.',
    details: [
      'Built with Unity Engine for VR',
      '5 interactive mini-games simulating OCD behaviors',
      'All 3D assets modeled in Autodesk Maya',
      'Textured using Adobe Substance 3D Painter',
      'UI prototype designed in Figma with accessibility focus',
      'Localised into 4 languages: English, Chinese, Malay, Tamil',
      'Performance tracking website with leaderboard',
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
    description:
      'An e-commerce website for a music instrument brand providing a seamless online shopping experience.',
    details: [
      'Full shopping functionality: browse, select, checkout',
      '3D models of piano and violin created in Autodesk Maya',
      'Mobile-responsive UI prototype designed in Figma',
      'Enhanced product visualization',
      'User-friendly checkout process',
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
    description:
      "A mobile game engaging users with Singapore's cultural heritage through collecting and crafting traditional snacks.",
    details: [
      'Built with Unity Engine',
      'Crafting system for traditional treats (Kueh Bangkit, Iced Gems)',
      'Ingredient gathering across levels',
      'Programmed in C#',
      'Focus: Cultural education & engagement',
      'Interactive learning about local flavours',
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
    description:
      'A physical game controller using Makey Makey, adapting the classic two-player game into a multiplayer experience with a custom-built tangible interface.',
    details: [
      'Makey Makey-based custom controller',
      'Alternative input methods exploration',
      'Constructed with foam, cardboard, coloured paper, chopsticks',
      'Emphasis on hands-on prototyping',
      'Tangible interaction design',
      'Multiplayer gameplay mechanics',
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
    description:
      'A cross-platform fitness tracking application designed for both mobile and smartwatch platforms with cohesive UX.',
    details: [
      'Prototyped in Figma',
      'Mobile app: track calories, steps, sleep, daily activity',
      'Smartwatch version: quick interactions & real-time updates',
      'Focus on responsive design & accessibility',
      'Intuitive layouts for different screen sizes',
      'User-centered design principles',
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
    description:
      'A mobile app applying gamification concepts to encourage sustainable recycling behavior through rewards and challenges.',
    details: [
      'Prototyped in Figma',
      'Point-based reward system',
      'Progress tracking & interactive challenges',
      'Gamification mechanics for behavior change',
      'Emphasis on user engagement',
      'Sustainability-focused design',
      'Positive environmental impact design',
    ],
    technologies: ['Figma', 'Gamification', 'UI/UX Design', 'Mobile App'],
    videoUrl: 'https://res.cloudinary.com/druqtalox/video/upload/v1777625048/portfolio/recycling-app.mp4',
  },
]

function VideoEmbed({ videoUrl, gradient, icon, title }) {
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
      <span className="text-5xl">{icon}</span>
      <p className="text-white/80 text-xs font-semibold">Video coming soon</p>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Portfolio"
          subtitle="Explore my projects and creative works"
          gradient="indigo"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {portfolioProjects.map(project => (
            <div
              key={project.id}
              className={`bg-gradient-to-br ${project.bg} border ${project.border} rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col`}
            >
              <VideoEmbed
                videoUrl={project.videoUrl}
                gradient={project.gradient}
                icon={project.icon}
                title={project.title}
              />

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-lg flex-shrink-0`}>
                    {project.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{project.category}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>

                <ul className="space-y-1.5 mb-4 flex-grow">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-pink-400 font-bold mt-0.5">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                {project.collaboration && (
                  <div className="mb-4 p-3 bg-white/60 rounded-lg border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Collaboration</p>
                    <p className="text-sm font-medium text-slate-700">{project.collaboration}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className={`bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
