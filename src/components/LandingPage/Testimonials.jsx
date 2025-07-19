"use client";
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Sanket Jadhav",
    role: "Homeowner",
    content: "Atharwa Electricals did an amazing job rewiring our older home. They were professional, clean, and completed the work ahead of schedule. Highly recommend!",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Kartik Patil",
    role: "Business Owner", 
    content: "We've used Atharwa Electricals for all our commercial properties. Their team is reliable, knowledgeable, and always available when we need them.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Prem Deshmukh",
    role: "Property Manager",
    content: "When we had an electrical emergency at 2 AM, Atharwa had a technician on site within 45 minutes. Their response time and quality of work is unmatched.",
    rating: 5,
    avatar: "DW"
  },
];

export default function Testimonials() {
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

    const element = document.querySelector('#testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="testimonials">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-20 transition-all duration-800 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Real feedback from satisfied customers who trust us with their electrical needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Quote mark */}
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-lg font-bold">"</span>
              </div>

              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div 
          className={`mt-16 flex justify-center items-center space-x-12 transition-all duration-800 delay-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">500+</div>
            <div className="text-sm text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">4.9/5</div>
            <div className="text-sm text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">100%</div>
            <div className="text-sm text-gray-400">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}