import { portfolioService } from '../services/portfolioService';

export const seedPortfolios = async () => {
  const mockPortfolios = [
    {
      title: 'Tech Startup Lead Generation Success',
      client_name: 'InnovateTech Solutions',
      industry: 'Technology',
      slug: 'tech-startup-lead-generation-success',
      short_description: 'Generated 127 qualified B2B leads in 60 days through targeted Google Ads and LinkedIn campaigns, achieving a 43% conversion rate.',
      full_description: 'InnovateTech Solutions, a SaaS startup, needed to quickly scale their customer acquisition to secure Series A funding. We implemented a multi-channel approach combining Google Search Ads, Display Network, and LinkedIn targeting decision-makers in enterprise companies. The campaign focused on their unique value proposition and included retargeting strategies to nurture leads through the sales funnel. Within 60 days, we delivered exceptional results that exceeded their funding requirements.',
      challenge: 'InnovateTech had an innovative product but struggled to reach their target audience of enterprise IT decision-makers. Their previous marketing efforts resulted in low-quality leads and poor ROI. With Series A funding on the line, they needed to demonstrate strong market traction quickly.',
      solution: 'We developed a precision-targeted campaign focusing on high-intent keywords and job titles. Created compelling ad copy highlighting their ROI calculator tool. Implemented a lead scoring system to prioritize sales follow-ups. Set up automated email sequences for lead nurturing. The result was a 127-lead pipeline with 43% converting to paid customers.',
      services: ['Google Ads', 'Lead Generation', 'Content Marketing'],
      thumbnail_url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      testimonial: 'ZM Results delivered exactly what we needed when we needed it. Their lead generation campaign was instrumental in securing our Series A funding. The quality of leads was outstanding.',
      testimonial_author: 'Sarah Chen, CEO at InnovateTech Solutions',
      project_date: '2024-08-15',
      is_featured: true,
      is_published: true,
    },
    {
      title: 'E-Commerce Revenue Explosion',
      client_name: 'StyleHub Fashion',
      industry: 'E-commerce',
      slug: 'ecommerce-revenue-explosion',
      short_description: 'Increased online sales by 287% in 4 months through strategic Facebook & Instagram ads, generating R1.8M in additional revenue.',
      full_description: 'StyleHub Fashion, an online clothing retailer, was struggling with stagnant sales despite having great products. We transformed their social media advertising strategy with data-driven targeting, dynamic product ads, and seasonal campaigns. The results exceeded all expectations, with a 287% increase in revenue and significantly improved customer lifetime value.',
      challenge: 'StyleHub had a beautiful website and quality products but was getting lost in the competitive fashion market. Their previous agency delivered inconsistent results with high ad costs and low ROAS. They needed a complete strategy overhaul to compete with larger brands.',
      solution: 'We rebuilt their entire social media advertising strategy from the ground up. Implemented dynamic product catalogs for automated retargeting. Created lookalike audiences based on their best customers. Developed seasonal campaign calendars with trending styles. Added Instagram Shopping integration. The result was a 287% revenue increase and 4.8x ROAS.',
      services: ['Social Media Marketing', 'Content Marketing'],
      thumbnail_url: 'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg',
      testimonial: 'Working with ZM Results changed everything for our business. We went from barely breaking even to our best quarter ever. Their team truly understands e-commerce.',
      testimonial_author: 'Michael Peterson, Founder of StyleHub Fashion',
      project_date: '2024-09-20',
      is_featured: true,
      is_published: true,
    },
    {
      title: 'Professional Services Website Redesign',
      client_name: 'Elite Legal Consultants',
      industry: 'Professional Services',
      slug: 'professional-services-website-redesign',
      short_description: 'Modern website redesign increased consultation bookings by 156% and improved mobile conversion rates by 220%.',
      full_description: 'Elite Legal Consultants needed a modern web presence that reflected their premium positioning. We designed and developed a sleek, professional website with integrated booking systems, case study showcases, and optimized conversion paths. The new site not only looks impressive but delivers measurable business results.',
      challenge: 'Their outdated website was hurting their credibility with high-value clients. Mobile users had a poor experience with difficult navigation. The consultation booking process was cumbersome, leading to abandoned inquiries. They were losing business to competitors with more modern websites.',
      solution: 'Designed a sophisticated website with clean layouts and professional imagery. Implemented one-click consultation booking with calendar integration. Created detailed service pages with case studies and attorney profiles. Optimized for mobile-first experience. Added live chat for immediate inquiries. Result: 156% increase in bookings and significantly improved client perception.',
      services: ['Web Design', 'SEO', 'Content Marketing'],
      thumbnail_url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      testimonial: 'The new website has transformed how clients perceive our firm. We are getting more high-value consultations than ever before, and the booking process is seamless.',
      testimonial_author: 'James Richardson, Managing Partner',
      project_date: '2024-07-10',
      is_featured: true,
      is_published: true,
    },
    {
      title: 'Healthcare Clinic Local SEO Domination',
      client_name: 'WellCare Medical Center',
      industry: 'Healthcare',
      slug: 'healthcare-clinic-local-seo-domination',
      short_description: 'Achieved #1 local rankings for 23 medical keywords, increasing appointment bookings by 89% and establishing market leadership.',
      full_description: 'WellCare Medical Center was struggling to compete with established clinics in their area. Through comprehensive local SEO, Google Business optimization, and content marketing, we positioned them as the go-to healthcare provider in their region. Patient acquisition costs decreased while appointment quality improved significantly.',
      challenge: 'New clinic in a competitive market with limited brand recognition. Poor visibility in local search results. Competitors dominated Google Maps listings. Difficulty attracting patients without expensive paid advertising.',
      solution: 'Optimized Google Business Profile with regular posts and photos. Built citations across 50+ medical directories. Created location-specific service pages. Published health blog content targeting local searches. Collected and showcased patient reviews. Implemented schema markup for medical services. Result: #1 rankings for key terms and 89% increase in appointments.',
      services: ['SEO', 'Content Marketing', 'Google Ads'],
      thumbnail_url: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
      testimonial: 'ZM Results helped us establish our clinic as a trusted name in the community. Our appointment schedule is consistently full now.',
      testimonial_author: 'Dr. Amanda Foster, Medical Director',
      project_date: '2024-06-25',
      is_featured: false,
      is_published: true,
    },
    {
      title: 'Restaurant Chain Social Media Success',
      client_name: 'Taste of Africa',
      industry: 'Hospitality',
      slug: 'restaurant-chain-social-media-success',
      short_description: 'Built engaged community of 45K followers, increased foot traffic by 67%, and generated R850K in tracked social media orders.',
      full_description: 'Taste of Africa wanted to expand beyond their loyal local customer base. We developed a comprehensive social media strategy showcasing their authentic cuisine, behind-the-scenes content, and community engagement. The campaigns drove significant foot traffic and established them as a cultural destination.',
      challenge: 'Limited online presence despite having three successful locations. Unable to reach younger demographics. Competitors dominating social media. Difficulty communicating their unique cultural value proposition.',
      solution: 'Created stunning food photography and video content. Launched influencer partnerships with food bloggers. Ran geo-targeted ads for each location. Built engagement through cooking tips and cultural stories. Implemented online ordering promotion codes to track ROI. Result: 45K followers, 67% foot traffic increase, and R850K in tracked revenue.',
      services: ['Social Media Marketing', 'Content Marketing'],
      thumbnail_url: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
      testimonial: 'Our restaurants are busier than ever, and we are attracting a whole new generation of customers thanks to the social media strategy.',
      testimonial_author: 'Kofi Mensah, Owner',
      project_date: '2024-10-05',
      is_featured: false,
      is_published: true,
    },
    {
      title: 'Real Estate Agency Digital Transformation',
      client_name: 'Prime Properties SA',
      industry: 'Real Estate',
      slug: 'real-estate-agency-digital-transformation',
      short_description: 'Complete digital overhaul resulted in 134 qualified buyer leads, 12 property sales, and R24M in closed transactions in 5 months.',
      full_description: 'Prime Properties needed to modernize their marketing approach to compete in the digital age. We implemented a complete digital marketing ecosystem including a new website, Google Ads campaigns, Facebook lead generation, virtual tours, and automated CRM integration. The transformation positioned them as a tech-forward agency.',
      challenge: 'Traditional marketing methods were becoming less effective. High marketing costs with declining returns. Difficulty generating qualified buyer leads. Agents spending too much time on unqualified prospects.',
      solution: 'Built modern website with property search and virtual tours. Launched Google Ads targeting property buyers and sellers. Created Facebook lead campaigns with detailed targeting. Integrated CRM for automated follow-ups. Produced professional property videos and drone footage. Result: 134 qualified leads leading to 12 sales worth R24M.',
      services: ['Web Design', 'Google Ads', 'Social Media Marketing', 'Content Marketing'],
      thumbnail_url: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg',
      testimonial: 'The digital transformation has revolutionized how we do business. We are closing more deals with less wasted effort.',
      testimonial_author: 'Linda van der Merwe, Agency Director',
      project_date: '2024-05-18',
      is_featured: false,
      is_published: true,
    },
    {
      title: 'Manufacturing Company B2B Lead Generation',
      client_name: 'Precision Engineering Ltd',
      industry: 'Manufacturing',
      slug: 'manufacturing-company-b2b-lead-generation',
      short_description: 'Generated 89 high-value B2B leads through LinkedIn and Google Ads, resulting in R5.2M in new contracts and 3 enterprise clients.',
      full_description: 'Precision Engineering needed to diversify their client base and reach decision-makers in new industries. We developed a sophisticated B2B lead generation campaign targeting engineering managers, procurement directors, and operations executives. The campaign successfully opened doors to enterprise accounts.',
      challenge: 'Heavily reliant on referrals and trade shows for new business. Difficulty reaching decision-makers in target industries. Long sales cycles making ROI tracking challenging. Competition from overseas manufacturers.',
      solution: 'Created thought leadership content showcasing technical expertise. Launched LinkedIn campaigns targeting specific job titles and industries. Implemented Google Ads for high-intent manufacturing searches. Developed case studies and technical whitepapers. Set up lead nurturing workflows. Result: 89 leads, 3 enterprise clients, R5.2M in contracts.',
      services: ['Google Ads', 'Lead Generation', 'Content Marketing', 'SEO'],
      thumbnail_url: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
      testimonial: 'ZM Results helped us break into markets we thought were unreachable. The quality of leads has been exceptional.',
      testimonial_author: 'David Nkosi, Business Development Manager',
      project_date: '2024-04-12',
      is_featured: false,
      is_published: true,
    },
    {
      title: 'Fitness Studio Membership Growth Campaign',
      client_name: 'FitZone Studio',
      industry: 'Healthcare',
      slug: 'fitness-studio-membership-growth-campaign',
      short_description: 'Increased gym memberships by 203% through targeted Facebook ads and Google Ads, growing from 87 to 264 active members in 3 months.',
      full_description: 'FitZone Studio was operating below capacity and struggling to attract new members. We developed an integrated campaign combining social proof, limited-time offers, and targeted advertising to fill their classes and build a thriving fitness community. The results transformed their business model.',
      challenge: 'Low membership numbers threatening business viability. High competition from budget gyms and home fitness. Difficulty communicating their unique community atmosphere. Seasonal fluctuations in sign-ups.',
      solution: 'Created video testimonials from successful members. Launched Facebook ads with transformation stories. Ran Google Ads for local fitness searches. Implemented referral program incentives. Offered strategic promotions during slow periods. Built Instagram presence with daily workout content. Result: 203% membership increase and full classes.',
      services: ['Social Media Marketing', 'Google Ads', 'Content Marketing'],
      thumbnail_url: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg',
      testimonial: 'We went from struggling to pay rent to having a waiting list for popular classes. ZM Results completely turned our business around.',
      testimonial_author: 'Marcus Johnson, Studio Owner',
      project_date: '2024-08-30',
      is_featured: false,
      is_published: true,
    },
  ];

  const mockMetrics = [
    { portfolio_index: 0, metrics: [
      { metric_name: 'Qualified Leads', metric_value: '127+', metric_type: 'leads', display_order: 0 },
      { metric_name: 'Conversion Rate', metric_value: '43%', metric_type: 'conversion', display_order: 1 },
      { metric_name: 'Campaign Duration', metric_value: '60 Days', metric_type: 'engagement', display_order: 2 },
      { metric_name: 'Cost Per Lead', metric_value: 'R182', metric_type: 'revenue', display_order: 3 },
    ]},
    { portfolio_index: 1, metrics: [
      { metric_name: 'Revenue Increase', metric_value: '287%', metric_type: 'revenue', display_order: 0 },
      { metric_name: 'Additional Revenue', metric_value: 'R1.8M', metric_type: 'revenue', display_order: 1 },
      { metric_name: 'Return on Ad Spend', metric_value: '4.8x', metric_type: 'revenue', display_order: 2 },
      { metric_name: 'Campaign Period', metric_value: '4 Months', metric_type: 'engagement', display_order: 3 },
    ]},
    { portfolio_index: 2, metrics: [
      { metric_name: 'Booking Increase', metric_value: '156%', metric_type: 'conversion', display_order: 0 },
      { metric_name: 'Mobile Conversion', metric_value: '220%', metric_type: 'conversion', display_order: 1 },
      { metric_name: 'Page Load Time', metric_value: '1.2s', metric_type: 'engagement', display_order: 2 },
      { metric_name: 'Bounce Rate Drop', metric_value: '48%', metric_type: 'engagement', display_order: 3 },
    ]},
    { portfolio_index: 3, metrics: [
      { metric_name: 'Top Rankings', metric_value: '23 Keywords', metric_type: 'engagement', display_order: 0 },
      { metric_name: 'Appointments Up', metric_value: '89%', metric_type: 'leads', display_order: 1 },
      { metric_name: 'Google Reviews', metric_value: '4.9★ Rating', metric_type: 'engagement', display_order: 2 },
      { metric_name: 'Organic Traffic', metric_value: '+312%', metric_type: 'engagement', display_order: 3 },
    ]},
    { portfolio_index: 4, metrics: [
      { metric_name: 'Social Followers', metric_value: '45K+', metric_type: 'engagement', display_order: 0 },
      { metric_name: 'Foot Traffic Up', metric_value: '67%', metric_type: 'leads', display_order: 1 },
      { metric_name: 'Tracked Revenue', metric_value: 'R850K', metric_type: 'revenue', display_order: 2 },
      { metric_name: 'Engagement Rate', metric_value: '8.4%', metric_type: 'engagement', display_order: 3 },
    ]},
    { portfolio_index: 5, metrics: [
      { metric_name: 'Qualified Leads', metric_value: '134', metric_type: 'leads', display_order: 0 },
      { metric_name: 'Properties Sold', metric_value: '12', metric_type: 'conversion', display_order: 1 },
      { metric_name: 'Closed Value', metric_value: 'R24M', metric_type: 'revenue', display_order: 2 },
      { metric_name: 'Campaign Period', metric_value: '5 Months', metric_type: 'engagement', display_order: 3 },
    ]},
    { portfolio_index: 6, metrics: [
      { metric_name: 'B2B Leads', metric_value: '89', metric_type: 'leads', display_order: 0 },
      { metric_name: 'New Contracts', metric_value: 'R5.2M', metric_type: 'revenue', display_order: 1 },
      { metric_name: 'Enterprise Clients', metric_value: '3', metric_type: 'conversion', display_order: 2 },
      { metric_name: 'Avg Deal Size', metric_value: 'R1.7M', metric_type: 'revenue', display_order: 3 },
    ]},
    { portfolio_index: 7, metrics: [
      { metric_name: 'Membership Growth', metric_value: '203%', metric_type: 'leads', display_order: 0 },
      { metric_name: 'New Members', metric_value: '177', metric_type: 'leads', display_order: 1 },
      { metric_name: 'Revenue Increase', metric_value: 'R425K/month', metric_type: 'revenue', display_order: 2 },
      { metric_name: 'Campaign Duration', metric_value: '3 Months', metric_type: 'engagement', display_order: 3 },
    ]},
  ];

  console.log('Starting to seed portfolios...');

  try {
    for (let i = 0; i < mockPortfolios.length; i++) {
      const portfolioData = mockPortfolios[i];
      console.log(`Creating portfolio: ${portfolioData.title}`);

      const portfolio = await portfolioService.createPortfolio(portfolioData);
      console.log(`Created portfolio with ID: ${portfolio.id}`);

      const metricsData = mockMetrics.find(m => m.portfolio_index === i);
      if (metricsData) {
        for (const metric of metricsData.metrics) {
          await portfolioService.addPortfolioMetric({
            portfolio_id: portfolio.id,
            ...metric,
          });
        }
        console.log(`Added ${metricsData.metrics.length} metrics`);
      }
    }

    console.log('Successfully seeded all portfolios!');
    return { success: true, count: mockPortfolios.length };
  } catch (error) {
    console.error('Error seeding portfolios:', error);
    throw error;
  }
};
