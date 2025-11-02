import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">Share your vision with us, and let's create something exceptional together</p>
        </div>

        <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-8 md:p-10">
          {success && (
            <div className="mb-8 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-green-800 font-medium">Thank you for reaching out. We'll be in touch shortly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="John Smith"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Company (Optional)</label>
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
              <textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
              {!loading && <Send className="w-5 h-5" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
