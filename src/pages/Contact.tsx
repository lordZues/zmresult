import { useState } from 'react';
import { Send, CheckCircle, Sparkles, Mail, User, Building2, MessageSquare } from 'lucide-react';

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
    <div className="min-h-screen bg-deep-space">
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-electric-blue/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-teal/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="relative container mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-in">
                <Sparkles className="w-4 h-4 text-electric-blue" />
                <span className="text-sm font-medium text-slate-200">Get in Touch</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black mb-8 animate-slide-up">
                <span className="text-white">Let's</span> <span className="gradient-text">Connect</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Share your vision with us, and let's create something exceptional together
              </p>
            </div>

            <div className="relative glass-dark rounded-[2rem] p-10 md:p-12 overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-electric-blue/20 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-teal/20 rounded-full blur-[80px]"></div>

              {success && (
                <div className="relative mb-8 p-5 rounded-2xl glass border border-green-500/30 flex items-center gap-4 animate-slide-up">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">Message Sent Successfully!</p>
                    <p className="text-slate-300 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
                      <User className="w-4 h-4 text-electric-blue" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full px-5 py-4 glass rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all border border-slate-700/50 hover:border-slate-600/50"
                    />
                  </div>

                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
                      <Mail className="w-4 h-4 text-electric-blue" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full px-5 py-4 glass rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all border border-slate-700/50 hover:border-slate-600/50"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
                    <Building2 className="w-4 h-4 text-electric-blue" />
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    className="w-full px-5 py-4 glass rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 transition-all border border-slate-700/50 hover:border-slate-600/50"
                  />
                </div>

                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
                    <MessageSquare className="w-4 h-4 text-electric-blue" />
                    Your Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project, goals, and how we can help..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    required
                    rows={6}
                    className="w-full px-5 py-4 glass rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 resize-none transition-all border border-slate-700/50 hover:border-slate-600/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-electric-blue via-cyber-cyan to-neon-teal font-bold rounded-xl hover:shadow-2xl hover:shadow-electric-blue/50 transition-all duration-300 text-white text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {[
                { label: 'Response Time', value: '< 24 Hours' },
                { label: 'Availability', value: '24/7 Support' },
                { label: 'Consultation', value: 'Free Initial' }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 glass rounded-2xl hover:bg-white/5 transition-all">
                  <p className="text-slate-400 text-sm mb-2">{item.label}</p>
                  <p className="text-white font-bold text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
