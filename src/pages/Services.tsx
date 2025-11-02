export default function Services() {
  const services = ['SEO Optimization', 'Social Media Marketing', 'Content Creation', 'Web Development', 'Email Marketing', 'Analytics'];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-2xl text-blue-200 mb-16">Comprehensive digital marketing solutions</p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">{service}</h3>
              <p className="text-blue-200">Professional {service.toLowerCase()} services tailored to your needs.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
