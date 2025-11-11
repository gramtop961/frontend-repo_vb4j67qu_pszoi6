import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Let’s grow your business together.</h2>
          <p className="mt-3 text-slate-600">Tell us a bit about your goals and we’ll get back to you shortly.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
            </div>

            <button type="submit" className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-sm">
              <Send className="h-4 w-4" /> Send Message
            </button>
            {status === 'success' && <p className="mt-3 text-green-700">Thanks! We’ll be in touch.</p>}
            {status === 'error' && <p className="mt-3 text-red-700">Something went wrong. Please try again.</p>}
          </form>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-blue-600" /> 6-811/4, Dange nagar, Jaggayyapeta, NTR district, AP, India. 521175.</li>
                <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-blue-600" /> 6300779532, 81066555863</li>
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-600" /> skyenzure@gmail.com</li>
              </ul>
              <div className="mt-6">
                <iframe title="Google Map" src="https://maps.google.com/maps?q=Jaggayyapeta%20AP%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-64 rounded-xl border"></iframe>
              </div>
              <div className="mt-6 flex items-center gap-4 text-slate-600">
                <a href="#" aria-label="Facebook" className="hover:text-blue-700">Facebook</a>
                <a href="#" aria-label="Instagram" className="hover:text-blue-700">Instagram</a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
