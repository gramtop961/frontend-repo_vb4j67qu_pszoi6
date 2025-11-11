import { Menu, PhoneCall } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { to: '#home', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#services', label: 'Services' },
    { to: '#portfolio', label: 'Portfolio' },
    { to: '#blog', label: 'Blog' },
    { to: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="#home" className="font-extrabold tracking-tight text-xl text-slate-900">
          SKYENZURE
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <a key={item.to} href={item.to} className="hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm transition-colors">
            <PhoneCall className="h-4 w-4" />
            Get a Free Consultation
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.to} href={item.to} onClick={() => setOpen(false)} className="block py-2 text-slate-700">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex w-full items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm transition-colors">
              <PhoneCall className="h-4 w-4" />
              Get a Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
