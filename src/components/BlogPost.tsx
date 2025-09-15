import React from 'react';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost: React.FC = () => {
  useEffect(() => {
    document.title = "Still struggling to get clients? Here's what no one's telling you | ZM Results";
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
            Still struggling to get clients? Here's what no one's telling you.
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>Published March 14, 2024</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl font-medium text-gray-700 mb-8">
            Still hoping referrals show up this month?<br />
            Still praying that random cold DMs "hit"?<br />
            Still watching leads ghost you after saying "I'm interested"?
          </p>

          <p className="text-xl mb-8">
            Let's cut the shit. You don't have a sales problem.<br />
            You have a <strong className="text-blue-950">SYSTEM</strong> problem.
          </p>

          <p className="mb-8">
            And <em>if you don't fix it</em>, your business will stall.<br />
            Or worse slowly bleed out while you tell yourself "next month will be better."
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <p className="text-xl font-medium text-blue-950">
              Every founder hits that breaking point.<br />
              One day you look at your revenue and think:<br />
              <strong>"We should be further by now."</strong>
            </p>
          </div>

          <p className="mb-8">
            You know you're good at what you do.<br />
            You know people need it.<br />
            But the leads aren't steady.<br />
            And no matter how much content or effort you throw out, it's not converting.
          </p>

          <p className="text-xl font-medium mb-8">
            Look I'm not here to sell you a course or tell you to "just post more value."<br />
            That's weak sauce.
          </p>

          <p className="mb-8">
            I work with business owners to <strong>build simple, cold-blooded systems</strong> that turn strangers into booked sales calls fast.<br />
            No fluff. No webinars. No 97-step funnels.
          </p>

          <p className="mb-8">
            Just clean, tested client-acquisition playbooks that WORK.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg my-12">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Real Results, Real Businesses</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="text-green-600 mt-1">
                  <Rocket size={20} />
                </div>
                <span>Helped a local service business add R104 000 in 21 days with our proven system.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-green-600 mt-1">
                  <Rocket size={20} />
                </div>
                <span>Turned an agency's dusty email list into 3 booked calls in 72 hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-green-600 mt-1">
                  <Rocket size={20} />
                </div>
                <span>Built a mini funnel for a consultant that got him 18 leads in 8 days.</span>
              </li>
            </ul>
          </div>

          <p className="text-xl mb-4">Don't take my word for it. I'll show you.</p>

          <div className="bg-blue-950 text-white p-8 rounded-lg my-12">
            <h2 className="text-2xl font-bold mb-4">🔒 Book a Free Strategy Call</h2>
            <p className="mb-6">
              On the call, I'll <strong>show you exactly how I'd get your business more qualified leads</strong> step by step.<br />
              No BS. No guesswork.
            </p>
            <p className="mb-8">
              And if you don't like the plan?<br />
              Don't hire me. Simple.
            </p>
            <p className="text-lg">
              This isn't a pitch. It's a <strong>preview of what I do</strong>.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-lg mb-6">
              📅 I only do a handful of these calls each week.<br />
              Ready to break your bottleneck and build your lead system?
            </p>

            <Link 
              to="/#book-call"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
            >
              Book Your Free Strategy Call
            </Link>

            <p className="text-gray-600 mt-6">
              No pitch.<br />
              No pressure.<br />
              Just proof.
            </p>

            <p className="text-xl font-medium mt-8">
              Let's fix this.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;