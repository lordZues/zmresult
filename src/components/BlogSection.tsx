import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogCard: React.FC<BlogPostProps> = ({ title, excerpt, slug, date, readTime, category }) => (
  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="p-8">
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
          {category}
        </span>
        <div className="flex items-center">
          <Calendar size={16} className="mr-1" />
          {date}
        </div>
        <span>{readTime} read</span>
      </div>
      
      <h3 className="text-2xl font-bold text-blue-950 mb-4 leading-tight hover:text-orange-600 transition-colors">
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h3>
      
      <p className="text-gray-700 mb-6 leading-relaxed">{excerpt}</p>
      
      <Link 
        to={`/blog/${slug}`}
        className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
      >
        Read More <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  </article>
);

const BlogSection: React.FC = () => {
  const blogPosts: BlogPostProps[] = [
    {
      title: "Still struggling to get clients? Here's what no one's telling you.",
      excerpt: "Every founder hits that breaking point. One day you look at your revenue and think: 'We should be further by now.' Here's the real solution.",
      slug: "client-acquisition-system",
      date: "March 14, 2024",
      readTime: "5 min",
      category: "Lead Generation"
    },
    {
      title: "Top 10 Digital Marketing Trends Dominating South Africa in 2024",
      excerpt: "The South African digital marketing landscape is evolving rapidly. Here are the trends that successful businesses are using to dominate their markets.",
      slug: "digital-marketing-trends-south-africa-2024",
      date: "December 15, 2024",
      readTime: "12 min",
      category: "Digital Marketing"
    },
    {
      title: "The Complete Lead Generation Guide for South African Businesses 2024",
      excerpt: "Everything you need to know about generating qualified leads in South Africa. The exact strategies that are working for successful businesses right now.",
      slug: "complete-lead-generation-guide-south-africa",
      date: "December 15, 2024",
      readTime: "15 min",
      category: "Lead Generation"
    },
    {
      title: "Why Your Social Media Isn't Converting (And How to Fix It)",
      excerpt: "You're posting content, getting likes, but no sales. Here's the missing piece that turns social media followers into paying customers.",
      slug: "social-media-conversion-strategy",
      date: "March 10, 2024",
      readTime: "7 min",
      category: "Social Media"
    },
    {
      title: "The R50,000 Website Mistake Every Business Makes",
      excerpt: "Beautiful websites that don't convert are expensive decorations. Learn the 3 elements that turn your website into a customer-generating machine.",
      slug: "website-conversion-mistakes",
      date: "March 5, 2024",
      readTime: "6 min",
      category: "Web Design"
    },
    {
      title: "Local SEO Secrets: How to Dominate Your City's Search Results",
      excerpt: "While your competitors fight for scraps, use these local SEO strategies to own your city's search results and attract customers 24/7.",
      slug: "local-seo-domination-guide",
      date: "February 28, 2024",
      readTime: "8 min",
      category: "SEO"
    },
    {
      title: "From 0 to 100 Leads: The 30-Day Challenge That Works",
      excerpt: "Follow this exact 30-day blueprint that helped 200+ businesses generate consistent leads without expensive ads or cold calling.",
      slug: "30-day-lead-generation-challenge",
      date: "February 20, 2024",
      readTime: "10 min",
      category: "Lead Generation"
    },
    {
      title: "Why Most Marketing Agencies Fail (And How We're Different)",
      excerpt: "95% of marketing agencies overpromise and underdeliver. Here's why we only get paid when you get results, and how that changes everything.",
      slug: "why-marketing-agencies-fail",
      date: "February 15, 2024",
      readTime: "5 min",
      category: "Business"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">Blog</span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-2 mb-6">
            Marketing Insights That Actually Work
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            No fluff, no theory. Just proven strategies and real results from the trenches of digital marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/blog"
            className="inline-block bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;