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
      excerpt: "Every founder hits that breaking point. Here's the real solution.",
      slug: "client-acquisition-system",
      date: "March 14, 2024",
      readTime: "5 min",
      category: "Lead Generation"
    },
    {
      title: "Top 10 Digital Marketing Trends Dominating South Africa in 2024",
      excerpt: "The trends that successful businesses are using to dominate their markets.",
      slug: "digital-marketing-trends-south-africa-2024",
      date: "December 15, 2024",
      readTime: "12 min",
      category: "Digital Marketing"
    },
    {
      title: "Why Your Social Media Isn't Converting (And How to Fix It)",
      excerpt: "The missing piece that turns social media followers into paying customers.",
      slug: "social-media-conversion-strategy",
      date: "March 10, 2024",
      readTime: "7 min",
      category: "Social Media"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold tracking-wider uppercase">Blog</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-6">
            Marketing Insights
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Proven strategies and real results from digital marketing.
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