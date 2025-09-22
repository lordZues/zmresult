import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    document.title = "Thank You | ZM Results";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-8 shadow-2xl">
            <CheckCircle size={48} className="text-white" />
          </div>
          
          {/* Main Message */}
          <h1 className="text-4xl md:text-6xl font-bold text-blue-950 mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            We've received your information and will be in touch within 24 hours to discuss your business growth strategy.
          </p>
          
          {/* What Happens Next */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12 text-left">
            <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">What Happens Next?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">We Review Your Info</h3>
                <p className="text-gray-600 text-sm">Our team analyzes your business needs and challenges</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">We Call You</h3>
                <p className="text-gray-600 text-sm">Expect a call within 24 hours to schedule your consultation</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">Strategy Session</h3>
                <p className="text-gray-600 text-sm">30-minute consultation to create your custom growth plan</p>
              </div>
            </div>
          </div>
          
          {/* Contact Options */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Need to Reach Us Immediately?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="https://wa.me/27736957783" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl transition-all flex flex-col items-center"
              >
                <MessageCircle size={32} className="mb-3" />
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-sm">+27 73 695 7783</p>
              </a>
              
              <a 
                href="tel:+27736957783"
                className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl transition-all flex flex-col items-center"
              >
                <Phone size={32} className="mb-3" />
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-sm">+27 73 695 7783</p>
              </a>
              
              <a 
                href="mailto:zusakhe@zmresultss.org"
                className="bg-orange-500 hover:bg-orange-600 text-white p-6 rounded-xl transition-all flex flex-col items-center"
              >
                <Mail size={32} className="mb-3" />
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-sm">zusakhe@zmresultss.org</p>
              </a>
            </div>
          </div>
          
          {/* Additional Resources */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">While You Wait...</h2>
            <p className="text-gray-600 mb-6">Check out our latest insights on growing your business</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/blog/digital-marketing-trends-south-africa-2024"
                className="bg-blue-950 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center"
              >
                Read Our Latest Blog <ArrowRight size={16} className="ml-2" />
              </Link>
              
              <Link 
                to="/"
                className="border border-blue-950 hover:bg-blue-950 hover:text-white text-blue-950 px-6 py-3 rounded-lg transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
  )
}