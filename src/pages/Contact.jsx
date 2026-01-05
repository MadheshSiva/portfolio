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
      value: 'support@example.com',
      href: 'mailto:support@example.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone',
      description: 'Mon–Fri · 10am–6pm',
      value: '+91 99999 99999',
      href: 'tel:+919999999999',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Location',
      description: 'Based in India · Working Worldwide',
      value: 'Remote Friendly 🌍',
      href: null,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="pt-32 pb-24  bg-gradient-to-b from-gray-500 via-blue-50/30 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-sm font-medium">
              Get In Touch
            </span>
          </div>
          
          <h1 className="text-5xl  md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Let's Work Together
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Have a project in mind or need help with software, mobile, or AI solutions?
            We'd love to hear from you and discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            const isHovered = hoveredCard === method.id;
            
            return (
              <div
                key={method.id}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-neutral-800 transition-all duration-300 ${
                  isHovered ? 'scale-105 shadow-2xl' : ''
                }`}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${method.color} opacity-0 transition-opacity duration-300 ${
                  isHovered ? 'opacity-5' : ''
                }`} />

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-6 transition-transform duration-300 ${
                  isHovered ? 'rotate-6 scale-110' : ''
                }`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {method.description}
                  </p>
                  
                  {method.href ? (
                    <a
                      href={method.href}
                      className={`inline-flex items-center gap-2 text-base font-medium bg-clip-text text-transparent bg-gradient-to-r ${method.color} hover:gap-3 transition-all duration-300`}
                    >
                      {method.value}
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                        isHovered ? 'translate-x-1' : ''
                      }`} style={{ color: 'currentColor', opacity: 0.7 }} />
                    </a>
                  ) : (
                    <span className="inline-block text-base font-medium text-gray-700 dark:text-gray-300">
                      {method.value}
                    </span>
                  )}
                </div>

                {/* Decorative Element */}
                <div className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br ${method.color} opacity-10 blur-2xl transition-opacity duration-300 ${
                  isHovered ? 'opacity-20' : ''
                }`} />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to start your project?
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Let's discuss how we can help you achieve your goals
              </p>

              <a
                href="mailto:support@example.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-blue-600 font-semibold text-base hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Send us an Email
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Average response time: <span className="font-semibold text-gray-700 dark:text-gray-300">24 hours</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;