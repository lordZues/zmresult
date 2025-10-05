import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const SEOFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How much does digital marketing cost in South Africa?",
      answer: "Digital marketing costs in South Africa vary based on your needs. At ZM Results, we offer packages starting from R2,500 for website design, R2,000/week for social media management, and R3,000/month for lead generation. We provide custom quotes after understanding your business goals. Unlike other agencies, we offer a money-back guarantee if we don't deliver results."
    },
    {
      question: "How do I get more customers for my business in Durban?",
      answer: "To get more customers in Durban, you need a comprehensive digital marketing strategy including: a professional website optimized for conversions, local SEO to rank on Google for 'business near me' searches, active social media presence on platforms where your customers are, and targeted advertising on Google and Facebook. ZM Results specializes in customer acquisition for Durban businesses with guaranteed results."
    },
    {
      question: "What is the best digital marketing company in South Africa?",
      answer: "The best digital marketing company delivers measurable results, has proven case studies, offers transparent pricing, and backs their work with guarantees. ZM Results has helped 500+ South African businesses grow through our proven 3-step system: professional website design, social media growth, and targeted lead generation. We're the only agency in South Africa offering a money-back guarantee on our services."
    },
    {
      question: "How long does SEO take to work in South Africa?",
      answer: "SEO typically takes 3-6 months to show significant results in South Africa. However, local SEO for Durban, Johannesburg, or Cape Town businesses can show results faster (4-8 weeks). We implement proven SEO strategies including Google Business Profile optimization, local citations, quality content creation, and technical SEO to help you rank higher on Google search results."
    },
    {
      question: "Do I need a website for my small business in South Africa?",
      answer: "Yes! 87% of South African consumers research businesses online before buying. Without a professional website, you're losing customers to competitors. A good website builds trust, showcases your services 24/7, captures leads, and improves your Google ranking. We design conversion-focused websites starting from R2,500 that turn visitors into paying customers."
    },
    {
      question: "Which is better: Google Ads or Facebook Ads in South Africa?",
      answer: "Both have their place. Google Ads work best for high-intent searches (someone actively looking for your service), emergency services, and local businesses. Facebook Ads excel at brand awareness, e-commerce products, and demographic targeting. For most South African businesses, we recommend starting with Google Ads for immediate leads, then adding Facebook Ads for brand building."
    },
    {
      question: "How can I rank higher on Google in Durban?",
      answer: "To rank higher on Google in Durban, focus on: local SEO optimization with Durban-specific keywords, claiming and optimizing your Google Business Profile, getting positive customer reviews, creating location-based content, building local backlinks from Durban websites, ensuring your website is mobile-friendly and fast-loading. Our local SEO services guarantee improved rankings or your money back."
    },
    {
      question: "What is the fastest way to get leads for my business?",
      answer: "The fastest way to get qualified leads is through targeted Google Ads campaigns combined with optimized landing pages. You can start getting leads within 24-48 hours. However, for sustainable long-term growth, we recommend our comprehensive approach: Google Ads for immediate results, SEO for long-term organic traffic, and social media for brand building and community engagement."
    },
    {
      question: "How much should I spend on marketing as a small business?",
      answer: "Small businesses should allocate 7-12% of gross revenue to marketing. For startups, this might be higher (12-20%). In South Africa, we recommend a minimum budget of R5,000-R10,000/month for meaningful results across website, SEO, and social media. However, we work with all budgets and prioritize strategies that deliver the best ROI for your specific situation."
    },
    {
      question: "Why is my website not getting traffic?",
      answer: "Common reasons include: poor SEO optimization (not using the right keywords), slow loading speed, not mobile-friendly, no local SEO setup, thin or duplicate content, technical SEO issues, no backlinks, and not being indexed properly on Google. We offer free website audits to identify exactly what's holding your site back and provide a clear roadmap to increase your traffic."
    },
    {
      question: "Can social media really help my business grow in South Africa?",
      answer: "Absolutely! With 25+ million South Africans on social media, it's a powerful tool for business growth. Social media helps build brand awareness, engage with customers, drive website traffic, generate leads, and establish authority. The key is consistent, quality content and strategic advertising. We've helped hundreds of SA businesses grow their revenue through social media marketing."
    },
    {
      question: "What should I look for when hiring a marketing agency in Durban?",
      answer: "Look for: proven results with case studies, transparent pricing with no hidden fees, local market knowledge, comprehensive services (website, SEO, social media, ads), good communication and reporting, positive reviews and testimonials, and guarantees on their work. Be wary of agencies promising overnight success or requiring long-term contracts without performance guarantees."
    },
    {
      question: "How do I get my business on the first page of Google?",
      answer: "Getting on Google's first page requires: optimizing your website for target keywords, creating high-quality content regularly, building authoritative backlinks, optimizing for local search, improving website speed and mobile experience, getting positive reviews, and technical SEO optimization. It's a combination of on-page SEO, off-page SEO, and consistent effort. We guarantee first-page rankings for local keywords or your money back."
    },
    {
      question: "Is email marketing still effective in 2025?",
      answer: "Yes! Email marketing has an average ROI of R40 for every R1 spent, making it one of the most effective digital marketing channels. It's perfect for nurturing leads, promoting offers, building customer loyalty, and driving repeat business. The key is building a quality email list, personalizing content, and providing value (not just selling). We help SA businesses build profitable email marketing systems."
    },
    {
      question: "What is local SEO and why does my Durban business need it?",
      answer: "Local SEO optimizes your business to appear in local search results when people search for services 'near me' or in specific areas like Durban. It includes Google Business Profile optimization, local citations, reviews management, and location-based content. 46% of Google searches have local intent, making local SEO crucial for any business serving customers in specific geographic areas."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm">Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Common Questions About Digital Marketing in South Africa
            </h2>
            <p className="text-xl text-slate-300">
              Everything you need to know about growing your business online
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden border border-slate-800">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-slate-800">
                      <p className="text-slate-300 leading-relaxed mt-3">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center glass-card rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-slate-300 mb-6">
              Get a free consultation with our digital marketing experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Book Free Consultation
              </a>
              <a
                href="https://wa.me/27736957783"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOFAQSection;
