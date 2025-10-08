import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageSquare } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

const testimonials: TestimonialProps[] = [
  {
    quote: "ZM Results completely transformed our online presence. Within 3 months, our website traffic increased by 350% and we're now getting consistent quality leads. The team's expertise in digital marketing is unmatched!",
    name: "RBBR Tradesman Group SA",
    position: "Renovations, Roofing",
    company: "Waterproofing Services",
    image: "/5990149136810364309.jpg",
    stats: [
      { label: "Website Traffic", value: "+350%" },
      { label: "Lead Quality", value: "Excellent" },
      { label: "Project Duration", value: "3 Months" }
    ]
  },
  {
    quote: "I was skeptical at first, but after implementing their system, we generated 42 qualified leads in just two weeks. Our sales team is now fully booked with calls.",
    name: "Michael Johnson",
    position: "CEO",
    company: "Vertex Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    stats: [
      { label: "Leads Generated", value: "42" },
      { label: "Conversion Rate", value: "38%" },
      { label: "ROI", value: "287%" }
    ]
  },
  {
    quote: "Their approach completely transformed our lead generation. We went from struggling to get 5 leads a month to consistently booking 15+ discovery calls every week.",
    name: "Sarah Williams",
    position: "Founder",
    company: "Elevate Marketing",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    stats: [
      { label: "Monthly Calls", value: "60+" },
      { label: "Revenue Increase", value: "143%" },
      { label: "Client Retention", value: "94%" }
    ]
  },
  {
    quote: "After years of wasting money on ads that didn't convert, their system has been a game-changer. We're now attracting our ideal clients consistently without the constant hustle.",
    name: "David Chen",
    position: "Director",
    company: "Nexus Consulting",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    stats: [
      { label: "Ad Spend Reduction", value: "68%" },
      { label: "Lead Quality Score", value: "9.2/10" },
      { label: "Client Value", value: "+45%" }
    ]
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 relative z-10">
          <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm text-orange-300 px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase mb-6 border border-orange-400/30">
            <MessageSquare className="w-5 h-5 mr-2" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-black mt-2 mb-6 leading-tight">
            Businesses That Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Winning</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their <span className="text-orange-400 font-bold">life-changing results</span>.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 relative border border-white/20 shadow-2xl">
            <div className="absolute -top-6 left-12 bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl shadow-2xl">
              <MessageSquare size={28} className="text-white" />
            </div>
            
            <div className="flex flex-wrap md:flex-nowrap gap-8">
              <div className="w-full md:w-2/3">
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={24} className="text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-3xl mb-8 italic font-medium leading-relaxed">
                  "{testimonials[current].quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name} 
                    className="h-20 w-20 rounded-full object-cover mr-6 border-4 border-orange-500 shadow-2xl"
                  />
                  <div>
                    <div className="font-black text-xl text-white">{testimonials[current].name}</div>
                    <div className="text-gray-200 text-lg">
                      {testimonials[current].position}, {testimonials[current].company}
                    </div>
                  </div>
                </div>
              </div>
              
              {testimonials[current].stats && (
                <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-800/50 to-blue-700/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h4 className="text-xl font-black mb-6 text-orange-400">Results Achieved</h4>
                  <div className="space-y-6">
                    {testimonials[current].stats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-sm text-gray-200 font-medium">{stat.label}</div>
                        <div className="text-3xl font-black text-white">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <button 
              onClick={prev}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-2xl transition-all border border-white/30 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={28} />
            </button>
            
            <div className="flex gap-3 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-4 w-4 rounded-full transition-all ${
                    current === index ? 'bg-orange-500 w-8 shadow-lg' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-2xl transition-all border border-white/30 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;