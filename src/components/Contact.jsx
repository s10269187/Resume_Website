import SectionHeader from './SectionHeader'
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa'

const contactItems = [
  {
    icon: <FaEnvelope className="text-xl" />,
    label: 'Email',
    value: 'leejialuuuu@gmail.com',
    href: 'mailto:leejialuuuu@gmail.com',
    gradient: 'from-pink-400 to-rose-400',
    bg: 'from-pink-50 to-rose-50',
    border: 'border-pink-200',
  },
  {
    icon: <FaPhone className="text-xl" />,
    label: 'Phone',
    value: '+65 9728 6321',
    href: 'tel:+6597286321',
    gradient: 'from-violet-400 to-purple-500',
    bg: 'from-violet-50 to-purple-50',
    border: 'border-violet-200',
  },
  {
    icon: <FaLinkedin className="text-xl" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/lee-jia-lu-',
    href: 'https://www.linkedin.com/in/lee-jia-lu-/',
    gradient: 'from-blue-400 to-sky-500',
    bg: 'from-blue-50 to-sky-50',
    border: 'border-blue-200',
  },
  {
    icon: <FaGithub className="text-xl" />,
    label: 'GitHub',
    value: 'github.com/s10269187',
    href: 'https://github.com/s10269187',
    gradient: 'from-slate-600 to-slate-800',
    bg: 'from-slate-50 to-slate-100',
    border: 'border-slate-200',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's connect and create something amazing together"
          gradient="pink"
        />

        <div className="max-w-3xl mx-auto">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {contactItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`bg-gradient-to-br ${item.bg} border ${item.border} rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-slate-700 break-all">{item.value}</p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-pink-50 via-violet-50 to-blue-50 border border-pink-200 rounded-3xl p-8 text-center mb-10">
            <div className="text-4xl mb-4">💌</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Open to Opportunities</h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              I'm currently looking for internships, part-time roles, and collaborative projects
              in digital design, game development, or creative media.
            </p>
            <a
              href="mailto:leejialuuuu@gmail.com"
              className="inline-block bg-gradient-to-r from-pink-400 to-violet-400 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-pink-200 hover:shadow-pink-300 hover:scale-105 transition-all duration-300"
            >
              Say Hello 👋
            </a>
          </div>

          {/* Reference */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-600 font-bold text-sm">
                RQ
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Mr Ryan Qin</h4>
                <p className="text-xs text-slate-400">Lecturer · Ngee Ann Polytechnic</p>
              </div>
              <span className="ml-auto bg-slate-100 text-slate-500 text-xs font-semibold px-3 py-1 rounded-full">
                Referral
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+6564606251"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-pink-500 transition-colors"
              >
                <FaPhone className="text-xs" /> 6460 6251
              </a>
              <a
                href="mailto:QIN_Jiming@np.edu.sg"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-pink-500 transition-colors"
              >
                <FaEnvelope className="text-xs" /> QIN_Jiming@np.edu.sg
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
