export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">About SKYENZURE</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              We are a growth-focused agency helping brands scale with full-funnel marketing, design, and technology. Our mission is simple: create measurable impact with creativity and data.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                'Result-driven campaigns',
                'Creative design experts',
                '24/7 support',
                'Transparent reporting',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="aspect-[4/5] rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
