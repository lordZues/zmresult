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
    <section id="testimonials" className="py-20 bg-blue-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-orange-400 font-semibold tracking-wider uppercase">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Businesses That Are Growing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their results.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="mb-12 bg-blue-900 rounded-lg p-6 md:p-10 relative">
            <div className="absolute -top-5 left-10 bg-orange-500 p-2 rounded-full">
              <MessageSquare size={24} />
            </div>
            
            <div className="flex flex-wrap md:flex-nowrap gap-8">
              <div className="w-full md:w-2/3">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl mb-6 italic">
                  "{testimonials[current].quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name} 
                    className="h-16 w-16 rounded-full object-cover mr-4 border-2 border-orange-500"
                  />
                  <div>
                    <div className="font-bold text-lg">{testimonials[current].name}</div>
                    <div className="text-gray-300">
                      {testimonials[current].position}, {testimonials[current].company}
                    </div>
                  </div>
                </div>
              </div>
              
              {testimonials[current].stats && (
                <div className="w-full md:w-1/3 bg-blue-800 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-4 text-orange-400">Results Achieved</h4>
                  <div className="space-y-4">
                    {testimonials[current].stats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={prev}
              className="bg-blue-800 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    current === index ? 'bg-orange-500 w-6' : 'bg-blue-800 hover:bg-blue-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="bg-blue-800 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;