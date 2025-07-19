"use client";
import { useState, useEffect } from 'react';

export default function ServicesOffered() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      name: "Residential Wiring",
      description: "Complete home wiring solutions including new construction, renovations, and upgrades.",
      icon: "🏠",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Commercial Electrical",
      description: "Professional electrical services for businesses, offices, and commercial properties.",
      icon: "🏢",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Emergency Repairs",
      description: "24/7 emergency electrical services when you need immediate assistance.",
      icon: "⚡",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to protect your property and family.",
      icon: "🛡️",
      color: "from-purple-500 to-purple-600"
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white" id='services'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-20 transition-all duration-800 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Professional electrical solutions tailored for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <div 
          className={`text-center mt-16 transition-all duration-800 delay-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}