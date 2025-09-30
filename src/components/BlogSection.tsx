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
      title: "Top 12 Digital Marketing Trends That Will Dominate South Africa in 2025",
      excerpt: "The game-changing trends that will separate winners from losers in 2025.",
      slug: "digital-marketing-trends-2025",
      date: "January 15, 2025",
      readTime: "15 min",
      category: "Marketing Trends"
    },
    {
      title: "The Complete AI Marketing Guide for South African Businesses 2025",
      excerpt: "How to leverage AI to dominate your market and scale 10x faster.",
      slug: "ai-marketing-guide-2025",
      date: "January 20, 2025",
      readTime: "18 min",
      category: "AI Marketing"
    },
    {
      title: "Social Media Marketing Strategy That Actually Works in South Africa 2025",
      excerpt: "Turn followers into paying customers with this proven framework.",
      slug: "social-media-strategy-2025",
      date: "January 25, 2025",
      readTime: "12 min",
      category: "Social Media Strategy"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">Blog</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-6">
            Digital Marketing Insights 2025 | Best Marketing Company SA Blog
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Proven digital marketing strategies and real results from South Africa's #1 marketing agency 2025. Expert insights from the best marketing company SA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;