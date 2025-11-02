import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface BlogPostPageProps {
  title: string;
  content: React.ReactNode;
  date: string;
  readTime: string;
  category: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ title, content, date, readTime, category }) => {
  useEffect(() => {
    document.title = `${title} | ZM Results Blog`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <article className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium text-sm">
              {category}
            </span>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 leading-tight">
            {title}
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          {content}
        </div>
        
        <div className="mt-16 p-8 bg-blue-950 text-white rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 mb-6">
            Get the same results our clients are seeing. Book your free strategy call today.
          </p>
          <Link 
            to="/#book-call"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            Book Your Free Strategy Call
          </Link>
        </div>
      </div>
    </article>
  );
};

export const SocialMediaConversionPost: React.FC = () => (
  <BlogPostPage
    title="Why Your Social Media Isn't Converting (And How to Fix It)"
    date="March 10, 2024"
    readTime="7 min read"
    category="Social Media"
    content={
      <>
        <p className="text-xl font-medium text-gray-700 mb-8">
          You're posting every day. Getting likes. Building followers.<br />
          But your bank account? Still the same.
        </p>

        <p className="mb-8">
          Sound familiar? You're not alone. 90% of businesses make the same fatal mistake with social media: 
          they treat it like a popularity contest instead of a sales machine.
        </p>

        <h2 className="text-3xl font-bold text-blue-950 mb-6">The Problem: You're Playing the Wrong Game</h2>

        <p className="mb-8">
          Most businesses think social media success looks like this:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Post inspirational quotes</li>
          <li>Share behind-the-scenes content</li>
          <li>Hope people "engage" with your brand</li>
          <li>Pray that somehow leads to sales</li>
        </ul>

        <p className="mb-8">
          <strong>Here's the truth:</strong> Engagement doesn't pay your bills. Customers do.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
          <p className="text-xl font-medium text-blue-950">
            "But I have 10,000 followers!"<br />
            Great. How many bought something this month?
          </p>
        </div>

        <h2 className="text-3xl font-bold text-blue-950 mb-6">The Solution: The 3-Step Conversion Framework</h2>

        <h3 className="text-2xl font-bold text-blue-950 mb-4">Step 1: Stop Being a Content Creator, Start Being a Problem Solver</h3>

        <p className="mb-6">
          Every post should answer one question: "How does this help my ideal customer make more money, save time, or solve a problem?"
        </p>

        <p className="mb-8">
          Instead of posting random motivational quotes, share:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Specific tips that solve real problems</li>
          <li>Case studies showing actual results</li>
          <li>Behind-the-scenes of you solving client problems</li>
          <li>Quick wins people can implement immediately</li>
        </ul>

        <h3 className="text-2xl font-bold text-blue-950 mb-4">Step 2: Every Post Needs a Next Step</h3>

        <p className="mb-6">
          Here's where most businesses fail: they create great content but forget to tell people what to do next.
        </p>

        <p className="mb-8">
          Every single post should end with a clear call-to-action:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>"DM me 'STRATEGY' for a free consultation"</li>
          <li>"Comment 'YES' if you want the full checklist"</li>
          <li>"Link in bio to book your free audit"</li>
          <li>"Share this if you found it helpful"</li>
        </ul>

        <h3 className="text-2xl font-bold text-blue-950 mb-4">Step 3: Track What Actually Matters</h3>

        <p className="mb-6">
          Forget vanity metrics. Here's what you should track:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>DMs received</strong> - People reaching out for help</li>
          <li><strong>Website clicks</strong> - Traffic from social to your site</li>
          <li><strong>Consultation bookings</strong> - Actual sales conversations</li>
          <li><strong>Revenue generated</strong> - Money in the bank</li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-lg my-12">
          <h2 className="text-2xl font-bold text-blue-950 mb-6">Real Example: How We Fixed This for a Client</h2>
          
          <p className="mb-4"><strong>Before:</strong></p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>5,000 followers</li>
            <li>200 likes per post</li>
            <li>2 leads per month</li>
            <li>R15,000 monthly revenue</li>
          </ul>
          
          <p className="mb-4"><strong>After implementing our framework:</strong></p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>4,800 followers (yes, fewer!)</li>
            <li>150 likes per post</li>
            <li>25 leads per month</li>
            <li>R85,000 monthly revenue</li>
          </ul>
          
          <p className="font-medium text-blue-950">
            Less vanity metrics, more money. That's the goal.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-blue-950 mb-6">Your Action Plan</h2>

        <p className="mb-4">Starting tomorrow:</p>

        <ol className="list-decimal pl-6 mb-8 space-y-3">
          <li><strong>Audit your last 10 posts</strong> - How many had a clear call-to-action?</li>
          <li><strong>Create a problem-solution content calendar</strong> - What problems can you solve this week?</li>
          <li><strong>Set up tracking</strong> - Use UTM codes to track website traffic from social</li>
          <li><strong>Test different CTAs</strong> - See which ones generate the most responses</li>
        </ol>

        <div className="bg-blue-950 text-white p-8 rounded-lg my-12">
          <h2 className="text-2xl font-bold mb-4">Want Us to Fix This for You?</h2>
          <p className="mb-6">
            We've helped 200+ businesses turn their social media into lead-generating machines. 
            Same framework, proven results.
          </p>
          <p className="text-lg">
            Book a free strategy call and we'll show you exactly how to implement this in your business.
          </p>
        </div>

        <p className="text-xl font-medium">
          Stop chasing likes. Start chasing customers.
        </p>
      </>
    }
  />
);

export const WebsiteConversionPost: React.FC = () => (
  <BlogPostPage
    title="The R50,000 Website Mistake Every Business Makes"
    date="March 5, 2024"
    readTime="6 min read"
    category="Web Design"
    content={
      <>
        <p className="text-xl font-medium text-gray-700 mb-8">
          You spent R50,000 on a "professional" website.<br />
          It looks amazing. Your mom loves it.<br />
          But it's not making you any money.
        </p>

        <p className="mb-8">
          Here's the brutal truth: 95% of business websites are expensive digital brochures. 
          They look pretty but don't convert visitors into customers.
        </p>

        <h2 className="text-3xl font-bold text-blue-950 mb-6">The R50,000 Mistake</h2>

        <p className="mb-8">
          Most web designers focus on making your site "look professional." They'll spend weeks on:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Perfect color schemes</li>
          <li>Beautiful animations</li>
          <li>Fancy layouts</li>
          <li>Award-winning design</li>
        </ul>

        <p className="mb-8">
          <strong>But they forget the most important thing:</strong> Getting visitors to take action.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <p className="text-xl font-medium text-blue-950">
            A beautiful website that doesn't convert is just an expensive decoration.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-blue-950 mb-6">The 3 Elements That Actually Convert</h2>

        <h3 className="text-2xl font-bold text-blue-950 mb-4">Element 1: Clear Value Proposition (Above the Fold)</h3>

        <p className="mb-6">
          Within 5 seconds of landing on your site, visitors should know:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>What you do</li>
          <li>Who you help</li>
          <li>What result you deliver</li>
          <li>Why they should choose you</li>
        </ul>

        <p className="mb-8">
          <strong>Bad example:</strong> "Welcome to ABC Company - Your Trusted Partner in Excellence"<br />
          <strong>Good example:</strong> "We Help Durban Restaurants Get 50+ New Customers Every Month"
        </p>

        <h3 className="text-2xl font-bold text-blue-950 mb-4">Element 2: Social Proof That Actually Matters</h3>

        <p className="mb-6">
          Forget generic testimonials like "Great service!" Show specific results:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>"Increased revenue by R150,000 in 3 months"</li>
          <li>"Generated 200 qualified leads in 30 days"</li>
          <li>"Reduced customer acquisition cost by 60%"</li>
        </ul>

        <p className="mb-8">
          Include photos, company names, and specific numbers. Make it real.
        </p>

        <h3 className="text-2xl font-bold text-blue-950 mb-4">Element 3: One Clear Call-to-Action</h3>

        <p className="mb-6">
          Most websites have 10 different buttons: "Learn More," "About Us," "Services," "Contact," "Blog"...
        </p>

        <p className="mb-8">
          <strong>Confused visitors don't convert.</strong> Pick ONE primary action and make it obvious.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg my-12">
          <h2 className="text-2xl font-bold text-blue-950 mb-6">Case Study: The R15,000 Website That Outperformed the R80,000 One</h2>
          
          <p className="mb-4"><strong>Client A - R80,000 "Award-Winning" Website:</strong></p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Beautiful design</li>
            <li>Complex animations</li>
            <li>Multiple pages</li>
            <li>2% conversion rate</li>
            <li>5 leads per month</li>
          </ul>
          
          <p className="mb-4"><strong>Client B - R15,000 "Simple" Website:</strong></p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Clear headline</li>
            <li>Specific testimonials</li>
            <li>One call-to-action</li>
            <li>12% conversion rate</li>
            <li>35 leads per month</li>
          </ul>
          
          <p className="font-medium text-blue-950">
            Simple beats pretty when it comes to making money.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-blue-950 mb-6">The 5-Minute Website Audit</h2>

        <p className="mb-4">Check your website right now:</p>

        <ol className="list-decimal pl-6 mb-8 space-y-3">
          <li><strong>5-Second Test:</strong> Can a stranger understand what you do in 5 seconds?</li>
          <li><strong>Value Proposition:</strong> Do you clearly state the result you deliver?</li>
          <li><strong>Social Proof:</strong> Do you show specific, measurable results?</li>
          <li><strong>Call-to-Action:</strong> Is there ONE obvious next step?</li>
          <li><strong>Mobile Test:</strong> Does it work perfectly on mobile?</li>
        </ol>

        <p className="mb-8">
          If you answered "no" to any of these, you're losing money every day.
        </p>

        <h2 className="text-3xl font-bold text-blue-950 mb-6">The Quick Fix</h2>

        <p className="mb-4">You don't need to rebuild your entire website. Start with these changes:</p>

        <ol className="list-decimal pl-6 mb-8 space-y-3">
          <li><strong>Rewrite your headline</strong> - Focus on the result you deliver</li>
          <li><strong>Add specific testimonials</strong> - Include numbers and results</li>
          <li><strong>Simplify your navigation</strong> - Remove unnecessary pages</li>
          <li><strong>Create one clear CTA</strong> - Make it impossible to miss</li>
          <li><strong>Test on mobile</strong> - 70% of traffic is mobile</li>
        </ol>

        <div className="bg-blue-950 text-white p-8 rounded-lg my-12">
          <h2 className="text-2xl font-bold mb-4">Want a Website That Actually Converts?</h2>
          <p className="mb-6">
            We build websites with one goal: turning visitors into customers. 
            No fancy animations, just results.
          </p>
          <p className="text-lg">
            Book a free audit and we'll show you exactly what's costing you conversions.
          </p>
        </div>

        <p className="text-xl font-medium">
          Your website should be your best salesperson, not your prettiest decoration.
        </p>
      </>
    }
  />
);

export const LocalSEOPost: React.FC = () => (
  <BlogPostPage
    title="Local SEO Secrets: How to Dominate Your City's Search Results"
    date="February 28, 2024"
    readTime="8 min read"
    category="SEO"
    content={
      <>
        <p className="text-xl font-medium text-gray-700 mb-8">
          While your competitors fight for scraps on page 2 of Google,<br />
          you could own the top 3 spots in your city.<br />
          Here's exactly how.
        </p>

        <p className="mb-8">
          Local SEO isn't just about showing up in Google Maps. It's about dominating every search 
          your potential customers make when they're ready to buy.
        </p>

        <h2 className="text-3xl font-bold text-blue-950 mb-6">Why Local SEO is Your Secret Weapon</h2>

        <p className="mb-8">
          Think about it: When someone searches "marketing agency Durban" or "web design Cape Town," 
          they're not just browsing. They're ready to hire someone.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <p className="text-xl font-medium text-blue-950">
            Local searches have 50% higher conversion rates than general searches.<br />
            These people are ready to buy.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-blue-950 mb-6">The 5-Step Local SEO Domination Plan</h2>

        <h3 className="text-2xl font-bold text-blue-950 mb-4">Step 1: Claim Your Digital Real Estate</h3>

        <p className="mb-6">
          Before you can dominate, you need to exist. Set up and optimize:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Google Business Profile</strong> - Your most important listing</li>
          <li><strong>Bing Places</strong> - Don't ignore Microsoft's search engine</li>
          <li><strong>Facebook Business Page</strong> - Social signals matter</li>
          <li><strong>Industry directories</strong> - Relevant to your business type</li>
        </ul>

        <h3 className="text-2xl font-bold text-blue-950 mb-4">Step 2: Master the NAP Game</h3>

        <p className="mb-6">
          NAP = Name, Address, Phone number. Google checks these across the internet. 
          If they don't match exactly, you lose rankings.
        </p>

        <p className="mb-8">
          <strong>Pro tip:</strong> Use the exact same format everywhere. If you use "Street" on Google, 
          don't use "St" on Facebook.
        </p>

        <h3 className="text-2xl font-bold text-blue-950 mb-4">Step 3: Create Location-Specific Content</h3>

        <p className="mb-6">
          Don't just target "marketing services." Target:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>"Marketing services Durban"</li>
          <li>"Digital marketing KwaZulu-Natal"</li>
          <li>"Social media marketing Montclair"</li>
          <li>"Web design Durban North"</li>
        </ul>

        <p className="mb-8">
          Create dedicated pages for each location you serve. Include local landmarks, 
          neighborhoods, and area-specific information.
        </p>

        <h3 className="text-2xl font-bold text-blue-950 mb-4">Step 4: Get Reviews That Convert</h3>

        <p className="mb-6">
          Reviews aren't just for rankings - they're for conversions. A business with 
          50+ positive reviews gets 3x more clicks than one with 10 reviews.
        </p>

        <p className="mb-8">
          <strong>The review strategy:</strong>
        </p>

        <ol className="list-decimal pl-6 mb-8 space-y-2">
          <li>Ask happy clients immediately after delivering results</li>
          <li>Make it easy - send direct links to your Google Business Profile</li>
          <li>Respond to every review (positive and negative)</li>
          <li>Include keywords in your responses naturally</li>
        </ol>

        <h3 className="text-2xl font-bold text-blue-950 mb-4">Step 5: Build Local Authority</h3>

        <p className="mb-6">
          Google wants to see that you're actually part of the local community:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Local partnerships</strong> - Partner with other local businesses</li>
          <li><strong>Community involvement</strong> - Sponsor local events</li>
          <li><strong>Local media</strong> - Get featured in local publications</li>
          <li><strong>Local backlinks</strong> - Links from other local businesses</li>
        </ul>

        <div className="bg-gray-50 p-8 rounded-lg my-12">
          <h2 className="text-2xl font-bold text-blue-950 mb-6">Case Study: From Invisible to #1 in 90 Days</h2>
          
          <p className="mb-4"><strong>The Challenge:</strong></p>
          <p className="mb-6">
            A Durban accounting firm wasn't showing up for "accountant Durban" - 
            a search with 1,200 monthly searches and high commercial intent.
          </p>
          
          <p className="mb-4"><strong>What We Did:</strong></p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Optimized Google Business Profile with local keywords</li>
            <li>Created location-specific service pages</li>
            <li>Implemented review generation system</li>
            <li>Built partnerships with local businesses</li>
          </ul>
          
          <p className="mb-4"><strong>Results After 90 Days:</strong></p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>#1 ranking for "accountant Durban"</li>
            <li>300% increase in website traffic</li>
            <li>45 new client inquiries per month</li>
            <li>R180,000 additional monthly revenue</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-blue-950 mb-6">The Local SEO Checklist</h2>

        <p className="mb-4">Use this checklist to audit your local SEO:</p>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h4 className="font-bold text-blue-950 mb-4">Google Business Profile:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>☐ Complete business information</li>
            <li>☐ High-quality photos (10+ images)</li>
            <li>☐ Regular posts and updates</li>
            <li>☐ Consistent NAP information</li>
            <li>☐ Relevant business categories</li>
          </ul>
          
          <h4 className="font-bold text-blue-950 mb-4 mt-6">Website Optimization:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>☐ Location in title tags</li>
            <li>☐ Local keywords in content</li>
            <li>☐ Contact information on every page</li>
            <li>☐ Location-specific service pages</li>
            <li>☐ Local schema markup</li>
          </ul>
          
          <h4 className="font-bold text-blue-950 mb-4 mt-6">Reviews & Citations:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>☐ 20+ Google reviews</li>
            <li>☐ Consistent NAP across directories</li>
            <li>☐ Industry-specific citations</li>
            <li>☐ Regular review generation</li>
            <li>☐ Response to all reviews</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-blue-950 mb-6">Common Local SEO Mistakes</h2>

        <p className="mb-4">Avoid these ranking killers:</p>

        <ul className="list-disc pl-6 mb-8 space-y-3">
          <li><strong>Inconsistent NAP</strong> - Different formats across platforms</li>
          <li><strong>Fake reviews</strong> - Google will penalize you</li>
          <li><strong>Keyword stuffing</strong> - "Durban marketing Durban services Durban"</li>
          <li><strong>Ignoring mobile</strong> - 70% of local searches are mobile</li>
          <li><strong>No local content</strong> - Generic pages that could be anywhere</li>
        </ul>

        <div className="bg-blue-950 text-white p-8 rounded-lg my-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Dominate Your Local Market?</h2>
          <p className="mb-6">
            We've helped 100+ businesses achieve #1 local rankings. Same strategies, 
            proven results, guaranteed outcomes.
          </p>
          <p className="text-lg">
            Book a free local SEO audit and we'll show you exactly where you're losing customers.
          </p>
        </div>

        <p className="text-xl font-medium">
          Stop competing globally. Start dominating locally.
        </p>
      </>
    }
  />
);

export default { SocialMediaConversionPost, WebsiteConversionPost, LocalSEOPost };