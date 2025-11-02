import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy | ZM Results";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-950 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-700 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">1. Introduction</h2>
            <p>
              At ZM Results ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Business information</li>
              <li>Communication preferences</li>
              <li>Information shared during consultations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Analyze and improve our website performance</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">4. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our practices, please contact us at privacy@zmresultss.org.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;