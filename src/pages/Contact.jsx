import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email',
      description: 'Reach us anytime',
      value: 'madheshsurya28@gmail.com',
      href: 'mailto:madheshsurya28@gmail.com',
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone',
      description: 'Mon–Fri · 9am–6pm',
      value: '+91 97906 09284',
      href: 'tel:+919790609284',
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Location',
      description: 'Based in India · Working Worldwide',
      value: 'Remote Friendly 🌍',
      href: null,
    }
  ];

  return (
    <section className="pt-32 pb-24 bg-gray-50 dark:bg-[#050505] min-h-screen text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/[0.03] backdrop-blur-xl text-xs tracking-[0.25em] uppercase text-gray-600 dark:text-white/50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Get In Touch
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-600 dark:text-white/90">
            Let's work <span className="animated-gradient-text">together</span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 dark:text-white/45 leading-relaxed font-light">
            Have a project in mind or need help with software, mobile, or AI solutions?
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const isHovered = hoveredCard === method.id;
            
            return (
              <div
                key={method.id}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="glass p-8 group cursor-default"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/[0.08] flex items-center justify-center mb-6 text-gray-600 dark:text-white/50 transition-all duration-500 ${
                  isHovered ? 'text-violet-400 border-violet-500/30 bg-violet-500/[0.08]' : ''
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-600 dark:text-white/90 mb-2 tracking-tight">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/35 mb-5 font-light">
                  {method.description}
                </p>
                
                {method.href ? (
                  <a
                    href={method.href}
                    className="inline-flex items-center gap-2 text-base font-medium text-gray-600 dark:text-white/60 hover:text-violet-400 transition-all duration-300 group/link"
                  >
                    {method.value}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                ) : (
                  <span className="inline-block text-base font-medium text-gray-600 dark:text-white/60">
                    {method.value}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <div className="glass p-14 sm:p-20 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/[0.04] blur-[100px] rounded-full" />
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-600 dark:text-white/90 mb-4">
                Ready to start your project?
              </h2>
              <p className="text-gray-600 dark:text-white/40 mb-10 text-lg font-light max-w-lg mx-auto">
                Let's discuss how we can help you achieve your goals.
              </p>

              <a
                href="mailto:madheshsurya28@gmail.com"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white dark:bg-white dark:text-black rounded-full font-semibold text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.03] transition-all duration-500"
              >
                <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                Send us an Email
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Response time */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 dark:text-white/25">
            Average response time: <span className="font-semibold text-gray-600 dark:text-white/50">24 hours</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;