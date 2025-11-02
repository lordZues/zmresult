import { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-primary text-sm font-semibold rounded-full mb-8">
                Get in Touch
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
                Contact <span className="gradient-text">Our Team</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Mail, title: 'Email Us', detail: 'hello@agency.com', link: 'mailto:hello@agency.com' },
                { icon: Phone, title: 'Call Us', detail: '+1 (555) 123-4567', link: 'tel:+15551234567' },
                { icon: MapPin, title: 'Visit Us', detail: 'San Francisco, CA', link: '#' }
              ].map((contact, i) => (
                <a
                  key={i}
                  href={contact.link}
                  className="group flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <contact.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{contact.title}</h3>
                  <p className="text-sm text-slate-600">{contact.detail}</p>
                </a>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-lg">
              {success && (
                <div className="mb-8 p-5 rounded-xl bg-green-50 border border-green-200 flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-green-900 font-bold mb-1">Message Sent Successfully!</p>
                    <p className="text-green-700 text-sm">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    placeholder="Tell us about your project and how we can help..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">Typical response time: Within 24 hours</p>
              <p className="text-sm text-slate-500">All inquiries are handled with strict confidentiality</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
