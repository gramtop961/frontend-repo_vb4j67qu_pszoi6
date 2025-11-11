export default function Portfolio() {
  const items = [
    { client: 'Acme Foods', result: '+80% conversions', problem: 'Low checkout rate', strategy: 'Landing page + CRO' },
    { client: 'Nova SaaS', result: '2x trials', problem: 'Poor activation', strategy: 'Onboarding revamp' },
    { client: 'GreenMart', result: '+65% ROAS', problem: 'Rising CPA', strategy: 'Creative testing' },
    { client: 'ZenHealth', result: '+120% signups', problem: 'Low trust', strategy: 'Brand refresh' },
    { client: 'FinPeak', result: '+47% MQLs', problem: 'Weak pipeline', strategy: 'Multi-channel' },
    { client: 'AutoFlux', result: '+38% leads', problem: 'High drop-off', strategy: 'Retargeting' },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Portfolio & Case Studies</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="group rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200" />
              <div className="p-5">
                <div className="text-sm text-slate-500">{item.client}</div>
                <div className="mt-1 font-semibold text-slate-900">{item.result}</div>
                <dl className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                  <div>
                    <dt className="text-slate-500">Problem</dt>
                    <dd>{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Strategy</dt>
                    <dd>{item.strategy}</dd>
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
