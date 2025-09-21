import React, { useState } from 'react';
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const BookCall: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    challenges: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend or a scheduling service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };
  
  return (
    <section id="book-call" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue-950 text-white p-10 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <Calendar size={24} className="text-orange-400 mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold">Book Your Free Strategy Call</h2>
                </div>
                
                <p className="text-gray-300 mb-8">
                  During this 30-minute call, we'll discuss:
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="text-orange-400 mr-3 mt-1">
                      <CheckCircle size={20} />
                    </div>
                    <p>Your current business challenges and goals</p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="text-orange-400 mr-3 mt-1">
                      <CheckCircle size={20} />
                    </div>
                    <p>A customized strategy to generate more qualified leads</p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="text-orange-400 mr-3 mt-1">
                      <CheckCircle size={20} />
                    </div>
                    <p>Actionable steps you can implement right away</p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="text-orange-400 mr-3 mt-1">
                      <CheckCircle size={20} />
                    </div>
                    <p>Whether we're a good fit to work together</p>
                  </li>
                </ul>
                
                <div className="bg-blue-900 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium mb-2">Our Guarantee</p>
                  <p className="text-gray-300 text-sm">
                    If you don't get value from this call, we'll send you a $50 gift card as a thank you for your time.
                  </p>
                </div>
                
                <div className="hidden md:block">
                  <p className="text-gray-300 text-sm">
                    * No obligation. No pushy sales tactics. Just real strategies that work.
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2 p-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold text-blue-950 mb-6">
                      Get Your Customized Lead Generation Strategy
                    </h3>
                    
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="business" className="block text-gray-700 font-medium mb-1">
                        Business Type
                      </label>
                      <select
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      >
                        <option value="">Select Business Type</option>
                        <option value="service">Service Business</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="agency">Agency</option>
                        <option value="coaching">Coaching/Consulting</option>
                        <option value="saas">SaaS</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="challenges" className="block text-gray-700 font-medium mb-1">
                        Biggest Business Challenge
                      </label>
                      <textarea
                        id="challenges"
                        name="challenges"
                        value={formData.challenges}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="What's your biggest challenge with lead generation?"
                        rows={4}
                        required
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors"
                    >
                      Book My Strategy Call <ArrowRight size={20} className="ml-2" />
                    </button>
                    
                    <p className="text-gray-500 text-sm text-center">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-950 mb-4">
                      Thank You for Scheduling!
                    </h3>
                    <p className="text-gray-700 mb-6">
                      We've received your information and will be in touch shortly to confirm your strategy call. Check your email for more details.
                    </p>
                    <p className="text-gray-700 font-medium">
                      Looking forward to helping you grow your business!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;