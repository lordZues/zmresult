import React, { useState } from 'react';
import { Calendar, ArrowRight, CheckCircle, Shield, Award, Zap } from 'lucide-react';
import { submitToGoogleSheets, submitViaAppsScript, submitViaFormSubmit } from '../utils/googleSheets';

const BookCall: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    challenges: ''
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
    // Clear error when user starts typing
    if (error) setError('');
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const leadData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business: formData.business,
        challenges: formData.challenges,
        service: 'Strategy Call',
        source: 'Book Call Form'
      };
      
      // Try multiple methods for maximum reliability
      let success = false;
      
      // Method 1: Direct Google Sheets API
      success = await submitToGoogleSheets(leadData);
      
      // Method 2: Fallback to Apps Script (if first method fails)
      if (!success) {
        success = await submitViaAppsScript(leadData);
      }
      
      // Method 3: Email fallback (if both above fail)
      if (!success) {
        success = await submitViaFormSubmit(leadData);
      }
      
      if (!success) {
        throw new Error('Failed to submit lead data');
      }
      
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        challenges: ''
      });
      
    } catch (err) {
      console.error('Form submission error:', err);
      setError('There was an issue submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="book-call" className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm text-orange-300 px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase mb-6 border border-orange-400/30">
              <Calendar className="w-5 h-5 mr-2" />
              Free Strategy Session
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Grow Your Business?</span><br />
              <span className="text-2xl md:text-3xl">Let's See if We're a Perfect Fit.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Book your free 30-minute consultation where we'll listen to your business needs and outline a potential strategy tailored just for you.
            </p>
            <div className="bg-red-500/20 border border-red-300 rounded-xl p-4 mt-6 max-w-2xl mx-auto">
              <p className="text-white font-bold">
                ⚡ LIMITED SPOTS: Our consultation spots are limited each week to ensure quality. Secure yours now!
              </p>
            </div>
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm text-white p-12 flex flex-col justify-center border-r border-white/20">
                <div className="flex items-center mb-8">
                  <div className="bg-orange-500 p-3 rounded-2xl mr-4 shadow-lg">
                    <Calendar size={28} className="text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black">Your Free Strategy Call</h3>
                </div>
                
                <p className="text-gray-200 mb-10 text-lg">
                  During this <span className="text-orange-400 font-bold">30-minute consultation</span>, we'll:
                </p>
                
                <ul className="space-y-6 mb-10">
                  <li className="flex items-start">
                    <div className="bg-green-500 p-2 rounded-full mr-4 mt-1 shadow-lg">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Listen to your business story and challenges</p>
                      <p className="text-gray-300 text-sm">Understanding where you are and where you want to go</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-500 p-2 rounded-full mr-4 mt-1 shadow-lg">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Outline a potential custom strategy</p>
                      <p className="text-gray-300 text-sm">Website creation, social media growth, customer acquisition</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-purple-500 p-2 rounded-full mr-4 mt-1 shadow-lg">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Discuss estimated investment and timeline</p>
                      <p className="text-gray-300 text-sm">Transparent pricing based on your specific needs</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-orange-500 p-2 rounded-full mr-4 mt-1 shadow-lg">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Determine if we're the right fit for each other</p>
                      <p className="text-gray-300 text-sm">Mutual assessment with no pressure or obligation</p>
                    </div>
                  </li>
                </ul>
                
                {/* Guarantee Box */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 p-6 rounded-2xl mb-8">
                  <div className="flex items-center mb-3">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <p className="text-lg font-bold text-green-400">Our Iron-Clad Guarantee</p>
                  </div>
                  <p className="text-gray-200">
                    If you don't get <span className="text-white font-semibold">massive value</span> from this call, we'll send you a <span className="text-green-400 font-bold">$50 gift card</span> as a thank you for your time.
                  </p>
                </div>
                
                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-300">Results Guaranteed</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-300">No Risk Promise</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-300">Instant Value</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-12 bg-white/5 backdrop-blur-sm">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <h3 className="text-3xl font-black text-white mb-8 text-center">
                      Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Customized Strategy</span>
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
                        placeholder="(555) 123-4567"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="business" className="block text-white font-bold mb-3 text-lg">
                        Business Type
                      </label>
                      <select
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white text-lg"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="" className="text-gray-900">Select Business Type</option>
                        <option value="service" className="text-gray-900">Service Business</option>
                        <option value="ecommerce" className="text-gray-900">E-commerce</option>
                        <option value="agency" className="text-gray-900">Agency</option>
                        <option value="coaching" className="text-gray-900">Coaching/Consulting</option>
                        <option value="saas" className="text-gray-900">SaaS</option>
                        <option value="other" className="text-gray-900">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="challenges" className="block text-white font-bold mb-3 text-lg">
                        Biggest Business Challenge
                      </label>
                      <textarea
                        id="challenges"
                        name="challenges"
                        value={formData.challenges}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-gray-300 text-lg resize-none"
                        placeholder="What's your biggest challenge with lead generation?"
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
                          Book My Strategy Call 
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
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-6">
                      Thank You for Scheduling!
                    </h3>
                    <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                      We've received your information and will be in touch shortly to confirm your strategy call. Check your email for more details.
                    </p>
                    <p className="text-orange-400 font-bold text-xl">
                      🎯 Looking forward to helping you 10X your business!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Bottom Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">Join 500+ business owners who've transformed their lead generation</p>
            <div className="flex justify-center items-center gap-2">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="ml-3 text-gray-300 font-bold">4.9/5 from 200+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;