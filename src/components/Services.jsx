import { BarChart3, Target, Megaphone, Search, Brain, Mail, Video } from 'lucide-react'

const services = [
  { icon: BarChart3, title: 'Digital Marketing', desc: 'Performance-first campaigns across channels.' },
  { icon: Target, title: 'Lead Generation', desc: 'Predictable pipeline with high-intent leads.' },
  { icon: Megaphone, title: 'Social Media Management', desc: 'Content, community, and growth at scale.' },
  { icon: Search, title: 'SEO & SEM', desc: 'Rank higher and convert better with search.' },
  { icon: Brain, title: 'Branding & Strategy', desc: 'Positioning, identity, and GTM clarity.' },
  { icon: Mail, title: 'Email & SMS Marketing', desc: 'Lifecycle flows that convert and retain.' },
  { icon: Video, title: 'Video & Content Creation', desc: 'Stories that move audiences to action.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Services</h2>
          <a href="#services-detail" className="text-blue-600 hover:text-blue-700 font-medium">See Detailed Services →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition-all">
              <div className="h-11 w-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
