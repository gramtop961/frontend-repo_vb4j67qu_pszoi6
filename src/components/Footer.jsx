export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div>
            <div className="text-white font-extrabold text-xl">SKYENZURE</div>
            <p className="mt-3 text-slate-400">Modern growth agency blending creativity with data.</p>
          </div>
          <div>
            <div className="text-white font-semibold">Quick Links</div>
            <ul className="mt-3 space-y-2">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Newsletter</div>
            <p className="mt-3 text-slate-400">Get growth insights in your inbox.</p>
            <div className="mt-3 flex gap-2">
              <input placeholder="Enter your email" className="flex-1 rounded-md border border-slate-700 bg-slate-800 text-slate-200 placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500" />
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700">Subscribe</button>
            </div>
          </div>
          <div className="lg:text-right">
            <div className="text-slate-400">© 2025 SKYENZURE | All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
