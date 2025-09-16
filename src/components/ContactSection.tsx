import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-lead`;
      
      const headers = {
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      };
      
      const leadData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business: formData.service,
        challenges: formData.message
      };
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(leadData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
    } catch (err) {
      console.error('Form submission error:', err);
      setError('There was an issue submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const emailSubject = encodeURIComponent("URGENT: Need Complete Digital Solution");
  const emailBody = encodeURIComponent(`Hi Zusakhe,

I need help with my business's digital presence. I'm interested in:
- Professional Website
- Social Media Management  
- Lead Generation

Please contact me as soon as possible to discuss how ZM Results can help.

Best regards`);

  const whatsappMessage = encodeURIComponent("Hi Zusakhe! I need help with my business's digital presence - website, social media, and lead generation. Please contact me immediately!");

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm text-orange-300 px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase mb-6 border border-orange-400/30">
              <Phone className="w-5 h-5 mr-2" />
              Get Started Today
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Get More Customers?</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Stop struggling to find customers. Let South Africa's premier advertising agency help you get more customers, grow your social media, and expand your business. Contact us now for a free consultation.
            </p>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a 
              href="mailto:zusakhe@zmresultss.org?subject=URGENT%3A%20Need%20Complete%20Digital%20Solution&body=Hi%20Zusakhe%2C%0A%0AI%20need%20help%20with%20my%20business%27s%20digital%20presence.%20I%27m%20interested%20in%3A%0A-%20Professional%20Website%0A-%20Social%20Media%20Management%0A-%20Lead%20Generation%0A%0APlease%20contact%20me%20as%20soon%20as%20possible%20to%20discuss%20how%20ZM%20Results%20can%20help.%0A%0ABest%20regards"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center"
            >
              <Mail className="mr-3 h-6 w-6" />
              Email Us Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={`https://wa.me/27736957783?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              WhatsApp: +27 73 695 7783
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm text-white p-12 flex flex-col justify-center border-r border-white/20">
                <h3 className="text-3xl md:text-4xl font-black mb-8">Get Your Free Consultation</h3>
                
                <p className="text-gray-200 mb-10 text-lg">
                  During this <span className="text-orange-400 font-bold">free 30-minute consultation</span>, we'll discuss:
                </p>
                
                <ul className="space-y-6 mb-10">
                  <li className="flex items-start">
                    <div className="bg-green-500 p-2 rounded-full mr-4 mt-1 shadow-lg">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Your current digital presence</p>
                      <p className="text-gray-300 text-sm">What's working and what's not</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-500 p-2 rounded-full mr-4 mt-1 shadow-lg">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Custom strategy for your business</p>
                      <p className="text-gray-300 text-sm">Tailored to your industry and goals</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-purple-500 p-2 rounded-full mr-4 mt-1 shadow-lg">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Pricing and timeline</p>
                      <p className="text-gray-300 text-sm">Transparent, no hidden costs</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-orange-500 p-2 rounded-full mr-4 mt-1 shadow-lg">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Next steps to get started</p>
                      <p className="text-gray-300 text-sm">If we're a good fit to work together</p>
                    </div>
                  </li>
                </ul>
                
                {/* Guarantee Box */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 p-6 rounded-2xl mb-8">
                  <div className="flex items-center mb-3">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <p className="text-lg font-bold text-green-400">Our Promise</p>
                  </div>
                  <p className="text-gray-200">
                    If we can't help your business, we'll refer you to someone who can. <span className="text-white font-semibold">No charge, no obligation.</span>
                  </p>
                </div>
                
                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-300">Fast Response</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-300">No Obligation</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-300">Free Advice</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-12 bg-white/5 backdrop-blur-sm">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-3xl font-black text-white mb-8 text-center">
                      Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Free Consultation</span>
                    </h3>
                    
                    {error && (
                      <div className="bg-red-500/20 border border-red-400/30 text-red-300 px-6 py-4 rounded-xl backdrop-blur-sm">
                        {error}
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="name" className="block text-white font-bold mb-3 text-lg">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-300 text-lg"
                        placeholder="John Smith"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white font-bold mb-3 text-lg">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-300 text-lg"
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-white font-bold mb-3 text-lg">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-300 text-lg"
                        placeholder="+27 12 345 6789"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-white font-bold mb-3 text-lg">
                        What Do You Need?
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white text-lg"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="" className="text-gray-900">Select Service</option>
                        <option value="website" className="text-gray-900">Professional Website</option>
                        <option value="social-media" className="text-gray-900">Social Media Management</option>
                        <option value="lead-generation" className="text-gray-900">Lead Generation</option>
                        <option value="complete-package" className="text-gray-900">Complete Package (All Three)</option>
                        <option value="consultation" className="text-gray-900">Just a Consultation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white font-bold mb-3 text-lg">
                        Tell Us About Your Business
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-300 text-lg resize-none"
                        placeholder="What type of business do you have? What are your main challenges?"
                        rows={4}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-orange-300 disabled:to-orange-400 text-white py-5 px-8 rounded-2xl font-bold text-xl flex items-center justify-center transition-all transform hover:scale-105 shadow-2xl border-2 border-orange-400"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <span className="mr-3">🚀</span>
                          Get My Free Consultation
                          <ArrowRight size={24} className="ml-3" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-gray-300 text-center font-medium">
                      🔒 We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-8 shadow-2xl">
                      <CheckCircle size={32} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-6">
                      Thank You!
                    </h3>
                    <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                      We've received your information and will contact you within 24 hours to schedule your free consultation.
                    </p>
                    <div className="bg-orange-100/10 border border-orange-400/30 rounded-xl p-6">
                      <p className="text-orange-400 font-bold text-xl mb-2">
                        🎯 What Happens Next?
                      </p>
                      <div className="text-gray-200 space-y-2">
                        <p>✅ We'll call you within 24 hours</p>
                        <p>✅ Schedule your free 30-minute consultation</p>
                        <p>✅ Create a custom strategy for your business</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Bottom Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">Prefer to contact us directly?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="mailto:zusakhe@zmresultss.org"
                className="text-orange-400 hover:text-orange-300 font-bold flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                zusakhe@zmresultss.org
              </a>
              <a 
                href={`https://wa.me/27736957783`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 font-bold flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                +27 73 695 7783
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;