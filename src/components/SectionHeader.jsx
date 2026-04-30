const gradients = {
  pink: 'from-pink-400 to-rose-500',
  violet: 'from-violet-400 to-purple-500',
  blue: 'from-blue-400 to-sky-500',
  amber: 'from-amber-400 to-orange-500',
  emerald: 'from-emerald-400 to-teal-500',
  indigo: 'from-indigo-400 to-violet-500',
}

export default function SectionHeader({ title, subtitle, gradient = 'pink' }) {
  const g = gradients[gradient] || gradients.pink
  return (
    <div className="text-center mb-14">
      <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${g} bg-clip-text text-transparent inline-block`}>
        {title}
      </h2>
      {subtitle && <p className="text-slate-500 mt-3 text-lg">{subtitle}</p>}
      <div className={`mt-4 mx-auto w-16 h-1.5 rounded-full bg-gradient-to-r ${g}`} />
    </div>
  )
}
