export default function Testimonials() {
  const items = [
    { name: 'Priya Sharma', role: 'CMO, Nova SaaS', quote: 'A true growth partner. We scaled efficiently and hit targets faster than expected.' },
    { name: 'Aman Gupta', role: 'Founder, GreenMart', quote: 'The creative + data combo worked wonders. ROAS and LTV both up.' },
    { name: 'Sarah Lee', role: 'Head of Growth, FinPeak', quote: 'Actionable strategy and flawless execution. Highly recommended.' },
  ]

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">What Our Clients Say</h2>
          <p className="mt-3 text-slate-600">Feedback that fuels us forward.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <figure key={idx} className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200" />
                <figcaption>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-slate-700">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
