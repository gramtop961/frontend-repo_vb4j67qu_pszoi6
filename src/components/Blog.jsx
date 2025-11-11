export default function Blog() {
  const posts = [
    { title: 'Top 5 Marketing Trends in 2025', image: '', excerpt: 'What will shape growth this year and how to prepare.' },
    { title: 'How to Increase Social Media ROI', image: '', excerpt: 'Proven tactics to turn followers into revenue.' },
    { title: 'Design Systems for Faster Marketing', image: '', excerpt: 'Scale creative production without sacrificing quality.' },
    { title: 'From CAC to LTV: Growth Metrics That Matter', image: '', excerpt: 'Measure what truly drives sustainable growth.' },
    { title: 'SEO in 2025: Beyond Keywords', image: '', excerpt: 'Search is smarter. Your strategy should be too.' },
    { title: 'Lifecycle Marketing Playbook', image: '', excerpt: 'Flows, segments, and automation for compounding growth.' },
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Insights & Articles</h2>
          <a href="#blog-all" className="text-blue-600 hover:text-blue-700 font-medium">Read All Articles →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <article key={idx} className="group rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200" />
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">{p.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
