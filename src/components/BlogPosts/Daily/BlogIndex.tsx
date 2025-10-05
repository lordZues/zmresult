import Day1DigitalMarketingTrends from './Day1';
import Day2GoogleAdsGuide from './Day2';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  keywords: string[];
  component: React.FC;
}

export const dailyBlogPosts: BlogPost[] = [
  {
    id: 'day1',
    title: 'Top Digital Marketing Trends South Africa 2025',
    slug: 'digital-marketing-trends-south-africa-2025',
    excerpt: 'Discover the latest digital marketing trends in South Africa 2025. Expert insights on SEO, social media, and lead generation.',
    date: '2025-01-15',
    readTime: '8 min',
    keywords: ['digital marketing south africa', 'marketing agency durban', 'seo services'],
    component: Day1DigitalMarketingTrends
  },
  {
    id: 'day2',
    title: 'Google Ads South Africa 2025: Complete Guide',
    slug: 'google-ads-south-africa-guide-2025',
    excerpt: 'Master Google Ads in South Africa. Learn how to run profitable campaigns and generate quality leads.',
    date: '2025-01-16',
    readTime: '10 min',
    keywords: ['google ads south africa', 'ppc management durban', 'paid advertising'],
    component: Day2GoogleAdsGuide
  }
];
