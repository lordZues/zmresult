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
      question: "Okay, but how is this different from every other agency?",
      answer: "Simple - we don't get paid unless you get results. Most agencies charge you upfront and then hope for the best. We only make money when you make money. Plus, we focus on getting you actual leads, not just 'brand awareness' or other fluff metrics."
    },
    {
      question: "Do I need a huge budget for this to work?",
      answer: "Nope. Our system doesn't rely on expensive ads. We focus on organic strategies that attract your ideal clients without burning through your marketing budget. You'll spend less and get better results."
    },
    {
      question: "How fast will I actually see results?",
      answer: "Most of our clients start seeing leads within the first 7-14 days. But here's the thing - we're not promising overnight miracles. We build sustainable systems that keep working long-term, not quick fixes that fall apart."
    },
    {
      question: "Will this work for my specific business?",
      answer: "We've done this for service businesses, consultants, coaches, agencies, and more. The principles work across industries, but we customize everything for your specific situation. That's why we start with a strategy call - to make sure we're a good fit."
    },
    {
      question: "Do I have to do cold calling or spam people?",
      answer: "Absolutely not. We hate that stuff as much as you do. Our entire approach is about attracting people who already want what you're selling. No cold calls, no spammy DMs, no pushy tactics."
    },
    {
      question: "What happens after I book a call?",
      answer: "We'll have a 30-minute conversation about your business. No pressure, no hard sell. We'll share some ideas that could help you right away, and if we think we can help you long-term, we'll talk about next steps."
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