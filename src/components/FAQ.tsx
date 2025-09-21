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
      question: "How is this different from other marketing agencies?",
      answer: "Unlike traditional agencies that focus on vanity metrics or charge high fees regardless of performance, we're focused solely on generating qualified leads that convert into sales. We also offer a results guarantee - if we don't deliver, you don't pay."
    },
    {
      question: "Do I need a big budget to work with you?",
      answer: "No. We've designed our approach to work without relying on expensive paid advertising. Our system focuses on organic strategies that attract your ideal clients without the high costs associated with traditional marketing."
    },
    {
      question: "How long until I see results?",
      answer: "Many clients start seeing initial results within the first 7-14 days of implementation. However, the system continues to improve over time as we optimize based on data. For most businesses, the 30-60 day mark is where we see significant momentum."
    },
    {
      question: "Will this work for my specific industry?",
      answer: "We've successfully implemented our strategies across multiple industries including professional services, SaaS, consulting, coaching, real estate, financial services, and more. During our strategy call, we'll discuss your specific business model and determine if we're a good fit."
    },
    {
      question: "Do I have to do cold outreach or cold calling?",
      answer: "Absolutely not. Our entire approach is built around attracting qualified leads to you, rather than you chasing after them. No cold calling, no DM spamming, no pushy sales tactics required."
    },
    {
      question: "What happens after I book a call?",
      answer: "You'll have a 30-minute strategy session where we'll discuss your business goals, current challenges, and determine if our approach is right for you. If we're a good fit, we'll outline the next steps for getting started."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get answers to the most common questions about our approach and results.
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
            Still have questions? We're here to help.
          </p>
          <a 
            href="#book-call" 
            className="inline-block bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;