import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Boost Your Brand with Data-Driven Sales & Marketing
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-700 max-w-xl">
              We help businesses grow through digital strategy, creative design, and performance marketing.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition-colors">
                Let’s Get Started
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  )
}
