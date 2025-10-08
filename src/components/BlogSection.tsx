import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Star } from 'lucide-react';

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
      title: "How to Get 50+ Qualified Leads in 30 Days (South Africa 2025)",
      excerpt: "The exact lead generation system that SA businesses are using to generate 50+ qualified leads every month. No cold calling required.",
      slug: "get-50-qualified-leads-30-days-south-africa-2025",
      date: "February 3, 2025",
      readTime: "12 min",
      category: "Lead Generation"
    },
    {
      title: "Why 90% of South African Websites Don't Convert (And How to Fix Yours)",
      excerpt: "The shocking truth about website conversion rates in SA and the simple fixes that can double your sales overnight.",
      slug: "why-sa-websites-dont-convert-how-to-fix-2025",
      date: "February 10, 2025",
      readTime: "10 min",
      category: "Web Design"
    },
    {
      title: "The R100k Social Media Strategy Every SA Business Needs in 2025",
      excerpt: "The exact social media strategy that's generating R100k+ in revenue for South African businesses.",
      slug: "100k-social-media-strategy-sa-business-2025",
      date: "February 17, 2025",
      readTime: "14 min",
      category: "Social Media"
    },
    {
      title: "Google Ads vs Facebook Ads: Which Works Better for SA Businesses?",
      excerpt: "The definitive comparison based on real data from 200+ SA campaigns. Which platform delivers better ROI?",
      slug: "google-ads-vs-facebook-ads-sa-businesses-2025",
      date: "February 24, 2025",
      readTime: "11 min",
      category: "Paid Advertising"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            New blog posts published every Monday for better Google rankings
          </p>
          <div className="flex justify-center items-center gap-2">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-3 text-gray-600 font-medium">Rated #1 Marketing Blog SA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;