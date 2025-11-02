import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border-2 border-gray-100 rounded-2xl mb-4 overflow-hidden hover:border-blue-200 transition-all shadow-sm hover:shadow-md">
      <button
        className="flex justify-between items-center w-full text-left p-6 focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors">{question}</h3>
        <span className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="px-6 pb-6">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How much does a professional website cost in South Africa?",
      answer: "Professional website design costs vary based on complexity and features. Small business websites start from affordable rates, while e-commerce sites and custom web applications are priced higher. We offer transparent pricing with no hidden fees. Contact us for a detailed quote tailored to your specific requirements and budget. All our websites are mobile-responsive, SEO-optimized, and built for conversions."
    },
    {
      question: "What is the best digital marketing agency in South Africa?",
      answer: "The best digital marketing agency delivers measurable results, transparent reporting, and excellent ROI. Look for agencies with proven case studies, Google certifications, client testimonials, and industry experience. We're proud to be recognized as a top-rated digital marketing agency in South Africa, offering web design, Google Ads management, and social media advertising with a 100% money-back guarantee on results."
    },
    {
      question: "How do Google Ads work and are they worth it?",
      answer: "Google Ads is a pay-per-click (PPC) advertising platform where you bid on keywords to appear in Google search results and display networks. When done correctly, Google Ads delivers exceptional ROI by targeting high-intent buyers actively searching for your products or services. Our certified Google Ads specialists optimize campaigns for maximum conversions while minimizing cost per acquisition. Most businesses see positive ROI within 30-60 days."
    },
    {
      question: "What's the difference between Facebook Ads and Google Ads?",
      answer: "Google Ads targets users actively searching for solutions (high intent), while Facebook Ads targets users based on interests, demographics, and behaviors (demand generation). Google Ads is ideal for immediate lead generation, while Facebook/Instagram Ads excel at brand awareness and nurturing prospects. We recommend a combination of both for maximum reach and conversions. Our social media advertising strategies leverage precise audience targeting for optimal results."
    },
    {
      question: "How long does it take to build a professional website?",
      answer: "A professional business website typically takes 2-4 weeks from start to launch, depending on complexity. E-commerce websites and custom web applications may take 4-8 weeks. Our web development process includes strategy, design, development, content creation, testing, and launch. We prioritize speed without compromising quality, delivering mobile-responsive, fast-loading websites optimized for search engines and conversions."
    },
    {
      question: "What is SEO and how long does it take to rank on Google?",
      answer: "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in Google search results organically. Results typically appear within 3-6 months for local searches and 6-12 months for competitive national keywords. Our SEO services include keyword research, on-page optimization, technical SEO, content creation, link building, and local SEO. We focus on sustainable, white-hat techniques that deliver long-term rankings and organic traffic growth."
    },
    {
      question: "Do I need social media marketing for my business?",
      answer: "Yes! Social media marketing is essential for brand awareness, customer engagement, and lead generation. Over 25 million South Africans use social media daily. Our social media advertising services help you reach your target audience on Facebook, Instagram, LinkedIn, and TikTok with compelling ad campaigns that drive traffic, generate leads, and increase sales. We create engaging content, manage your social presence, and optimize campaigns for maximum ROI."
    },
    {
      question: "How much should I spend on Google Ads per month?",
      answer: "Google Ads budgets vary by industry, competition, and goals. Small businesses typically start with R3,000-R10,000 per month for local campaigns, while competitive industries may require R20,000+ monthly. We recommend starting with a test budget to gather data, then scaling based on performance. Our Google Ads management includes campaign setup, keyword optimization, ad copywriting, landing page recommendations, conversion tracking, and monthly reporting to maximize your advertising ROI."
    },
    {
      question: "What makes a website convert visitors into customers?",
      answer: "High-converting websites combine strategic design, compelling copy, clear calls-to-action, fast loading speeds, mobile optimization, trust signals, and seamless user experience. Our web design process focuses on conversion rate optimization (CRO), ensuring your website guides visitors toward taking action. We implement proven psychological triggers, A/B testing, heatmap analysis, and user behavior tracking to continuously improve your website's conversion performance."
    },
    {
      question: "Can you help my business rank #1 on Google?",
      answer: "While no ethical agency can guarantee #1 rankings (beware of those who do), we can significantly improve your search visibility through proven SEO strategies. Our approach combines technical SEO, high-quality content creation, authoritative link building, and local SEO optimization. We've helped hundreds of businesses achieve first-page rankings for competitive keywords. Results depend on competition, industry, and current website status. We provide transparent reporting showing your progress and rankings."
    },
    {
      question: "What's included in your social media advertising service?",
      answer: "Our social media advertising packages include: audience research and targeting, compelling ad creative design, ad copywriting, campaign setup and management, A/B testing, conversion tracking, retargeting campaigns, monthly performance reports, and ongoing optimization. We manage Facebook Ads, Instagram Ads, LinkedIn Ads, and TikTok Ads. Our social media specialists stay updated with platform changes to ensure your campaigns deliver consistent results and positive ROI."
    },
    {
      question: "How do I measure ROI from digital marketing?",
      answer: "We track key performance indicators (KPIs) including website traffic, conversion rates, cost per lead, cost per acquisition, return on ad spend (ROAS), customer lifetime value, and overall revenue generated. Our transparent reporting dashboard shows exactly how your marketing budget translates into business results. We implement conversion tracking, call tracking, and CRM integration to attribute every lead and sale back to specific campaigns, ensuring accountability and data-driven optimization."
    },
    {
      question: "Should I hire a digital marketing agency or do it myself?",
      answer: "While basic social media posting can be DIY, effective digital marketing requires specialized expertise in SEO, PPC advertising, conversion optimization, analytics, and strategy. Agencies provide experienced teams, proven processes, industry tools, and time savings. Poor execution wastes money on ineffective ads and missed opportunities. Our full-service agency eliminates the learning curve, delivering professional results while you focus on running your business. Plus, our money-back guarantee removes the risk."
    },
    {
      question: "What is conversion rate optimization (CRO)?",
      answer: "Conversion Rate Optimization (CRO) is the systematic process of increasing the percentage of website visitors who take desired actions (purchases, form submissions, calls). Our CRO services include user behavior analysis, A/B testing, landing page optimization, checkout flow improvements, form optimization, and persuasive copywriting. Even small improvements in conversion rate dramatically increase revenue without spending more on advertising. We've helped clients double their conversion rates through data-driven CRO."
    },
    {
      question: "Do you provide website hosting and domain registration?",
      answer: "Yes! We offer reliable web hosting with 99.9% uptime, fast servers, SSL certificates, daily backups, malware protection, and expert support. We also handle domain registration and management. Our hosting packages are optimized for speed and security, ensuring your website loads quickly and remains protected. We manage all technical aspects so you can focus on your business while we keep your website running smoothly and securely."
    },
    {
      question: "How often should I update my website content?",
      answer: "Regular content updates improve SEO, engage visitors, and demonstrate business activity. We recommend updating key pages quarterly, publishing blog posts monthly, and refreshing product/service information whenever changes occur. Fresh, relevant content signals to Google that your site is active and valuable. Our content marketing services include blog writing, page updates, and SEO-optimized content creation that attracts organic traffic and establishes your authority in your industry."
    },
    {
      question: "What's the difference between organic and paid search results?",
      answer: "Organic search results appear naturally based on SEO, while paid results (Google Ads) appear at the top marked as 'Sponsored' or 'Ad'. Organic rankings take time but provide long-term, cost-effective traffic. Paid ads deliver immediate visibility and traffic but require ongoing investment. The most effective digital marketing strategy combines both: Google Ads for immediate leads while building organic presence through SEO. We excel at both, creating comprehensive search marketing strategies."
    },
    {
      question: "How do you target the right audience with Facebook Ads?",
      answer: "Our Facebook advertising targeting combines demographic data (age, location, gender), interests (pages they follow, content they engage with), behaviors (purchase history, device usage), custom audiences (website visitors, email lists), and lookalike audiences (similar to your best customers). We create detailed buyer personas and use Facebook's powerful targeting options to reach your ideal customers with relevant messages. Precise targeting reduces wasted ad spend and increases conversion rates significantly."
    },
    {
      question: "What is retargeting and why is it important?",
      answer: "Retargeting (remarketing) shows ads to people who previously visited your website or engaged with your content. Since only 2-3% of visitors convert on first visit, retargeting re-engages the 97% who left. It's highly effective because you're advertising to people already familiar with your brand. Our retargeting campaigns use dynamic ads, frequency capping, and strategic messaging to bring prospects back and convert them into customers. Retargeting typically delivers 2-3x higher conversion rates than cold traffic."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely! Our website redesign service includes current site audit, competitor analysis, strategic planning, modern design implementation, content migration, SEO preservation, mobile optimization, speed improvements, and conversion optimization. We preserve what works while modernizing design, improving user experience, and implementing best practices. Whether your site is outdated, not mobile-friendly, or underperforming, we transform it into a high-converting digital asset that drives business growth."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve diverse industries including healthcare, legal services, real estate, e-commerce, professional services, construction, hospitality, automotive, education, finance, and technology. Our digital marketing strategies are customized to each industry's unique challenges, target audiences, and regulatory requirements. With experience across multiple sectors, we bring cross-industry insights and proven tactics to every client engagement, regardless of your business type or size."
    },
    {
      question: "How do you handle negative reviews and online reputation?",
      answer: "Our online reputation management services include review monitoring, response strategies, review generation campaigns, negative review mitigation, and online presence optimization. We help you build a strong positive online reputation through authentic customer testimonials, strategic review requests, and professional responses to feedback. Positive reviews improve SEO, build trust, and influence purchasing decisions. We implement systems that generate consistent 5-star reviews across Google, Facebook, and industry-specific platforms."
    },
    {
      question: "What is local SEO and why does it matter?",
      answer: "Local SEO optimizes your online presence to attract customers in your geographic area. It includes Google Business Profile optimization, local keyword targeting, location-specific content, local citations, customer reviews, and localized link building. For businesses serving specific areas (restaurants, dentists, plumbers, etc.), local SEO is critical. 46% of all Google searches have local intent. Our local SEO services help you dominate local search results and Google Maps, driving foot traffic and phone calls."
    },
    {
      question: "How long do I need to commit to digital marketing?",
      answer: "Digital marketing is an ongoing investment, not a one-time project. While we offer flexible month-to-month contracts, we recommend minimum 6-month commitments to see substantial results. SEO takes 3-6 months to gain traction, social media builds momentum over time, and paid ads require testing and optimization. Our clients who commit to consistent, long-term strategies achieve the best ROI. However, you can pause or adjust services based on your business needs and budget."
    },
    {
      question: "Do you offer white label services for other agencies?",
      answer: "Yes, we provide white label digital marketing services for agencies, consultants, and resellers. Our white label solutions include web design, SEO, Google Ads management, social media advertising, content creation, and reporting. You maintain client relationships while we deliver expert execution. We work seamlessly behind the scenes, allowing you to expand service offerings without hiring additional staff. Contact us to discuss white label partnership opportunities and pricing."
    },
    {
      question: "What makes your agency different from competitors?",
      answer: "We're the only digital marketing agency offering a 100% money-back guarantee on results. We focus on revenue and ROI, not vanity metrics. Our team holds Google and Facebook certifications, we provide transparent reporting, maintain clear communication, and treat your budget like our own. As a South African agency, we understand local market dynamics better than international agencies. We combine technical expertise with creative excellence and business acumen to deliver campaigns that truly move the needle for your business."
    },
    {
      question: "What are your payment terms and do you require contracts?",
      answer: "We offer flexible payment options including monthly billing, quarterly payments, and project-based pricing. Most services operate on month-to-month agreements (no long-term lock-in), though we recommend consistent engagement for best results. Web design projects require upfront deposits. All pricing is transparent with no hidden fees. We accept bank transfers, credit cards, and payment plans for larger projects. Our money-back guarantee means you only pay when we deliver results. Contact us for custom payment arrangements."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase mb-6 border-2 border-blue-200">
            <HelpCircle className="w-5 h-5 mr-2" />
            Common Questions
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Everything You Need to Know About
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Digital Marketing in South Africa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get answers to the most common questions about web design, Google Ads, social media advertising, SEO, and digital marketing services. If you don't find your answer here, we're just a call away.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 max-w-3xl mx-auto border-2 border-blue-100">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Book a free consultation and let's discuss your specific digital marketing needs and goals.
          </p>
          <a
            href="#book-call"
            className="group inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <span className="relative">Schedule Free Strategy Call</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
