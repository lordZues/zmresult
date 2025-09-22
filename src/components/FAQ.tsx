import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg md:text-xl font-semibold text-blue-950">{question}</h3>
        <span className="text-orange-500">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      <div className={`mt-2 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="text-gray-700 pt-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How much does digital marketing cost in South Africa?",
      answer: "Our digital marketing services start from R2,500 for basic websites, R2,000/month for social media management, and R3,000/month for lead generation. We provide custom pricing based on your specific business needs and goals. All packages come with our money-back guarantee."
    },
    {
      question: "What makes ZM Results different from other marketing agencies?",
      answer: "We're the only agency in South Africa that offers a 100% money-back guarantee. We focus on actual results - leads, sales, and revenue - not vanity metrics. Plus, we're based locally and understand the South African market better than international agencies."
    },
    {
      question: "How quickly will I see results from digital marketing?",
      answer: "Most clients see initial results within 2-4 weeks. Website traffic typically increases within the first month, social media engagement grows within 2-3 weeks, and lead generation campaigns usually start producing qualified leads within 7-14 days."
    },
    {
      question: "Do you work with businesses outside of Durban?",
      answer: "Absolutely! While we're based in Durban, we serve businesses across all of South Africa including Cape Town, Johannesburg, Pretoria, and other major cities. All our services can be delivered remotely with regular video calls and updates."
    },
    {
      question: "What's included in your social media marketing service?",
      answer: "Our social media packages include content creation, posting schedule management, community engagement, hashtag research, performance analytics, and monthly strategy reviews. We handle Facebook, Instagram, LinkedIn, and other platforms based on your target audience."
    },
    {
      question: "Can you guarantee my website will rank #1 on Google?",
      answer: "No ethical SEO company can guarantee #1 rankings, and you should be wary of anyone who promises this. However, we can guarantee improved search visibility, increased organic traffic, and better local search presence. Our SEO strategies are proven to deliver long-term results."
    },
    {
      question: "Do you offer website maintenance and support?",
      answer: "Yes! All our website packages include ongoing maintenance, security updates, and technical support. We also offer dedicated maintenance packages for existing websites that need regular updates, backups, and performance optimization."
    },
    {
      question: "What if I'm not happy with the results?",
      answer: "We offer a 100% money-back guarantee. If our services don't deliver the results we promised within the agreed timeframe, you get your money back. No questions asked. This is our commitment to your success."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">Questions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-4">
            Let's Address the Elephant in the Room
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            You're probably thinking "Yeah right, another agency making big promises." We get it. Here are the questions everyone asks.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Still have questions? Let's talk about it.
          </p>
          <a 
            href="#book-call" 
            className="inline-block bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            Book a Quick Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;