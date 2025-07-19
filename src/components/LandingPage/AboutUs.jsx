"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutUs() {
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

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: "🛡️", text: "Licensed & Insured", color: "emerald" },
    { icon: "⚡", text: "24/7 Emergency Service", color: "blue" },
    { icon: "💰", text: "Free Estimates", color: "yellow" },
    { icon: "🏆", text: "5+ Years Experience", color: "purple" },
  ];

  const stats = [
    { number: "1000+", label: "Happy Customers", delay: "200ms" },
    { number: "5+", label: "Years Experience", delay: "400ms" },
    { number: "24/7", label: "Support", delay: "600ms" },
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-600/3 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Atharwa Electricals
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main image with glassmorphism effect */}
              <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/30 aspect-[4/3] group">
                <Image
                  src="/images/logo.jpg"
                  alt="Professional electrician at work"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-101"
                  quality={100}
                  priority
                />
                {/* Multi-layer overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-blue-900/20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
              </div>

              {/* Floating stats cards */}
              <div className="absolute -bottom-8 -right-8 space-y-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-2 shadow-xl transition-all duration-1000 hover:scale-105 hover:shadow-2xl ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: stat.delay }}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-slate-300">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute top-16 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full blur-sm animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div
            className={`transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Story section */}
            <div className="space-y-6 mb-10">
              <p className="text-xl text-slate-300 leading-relaxed">
                Founded in{" "}
                <span className="text-blue-400 font-semibold">2020</span>,
                Atharwa Electricals has been providing top-quality electrical
                services to homes and businesses across the region. Our team of{" "}
                <span className="text-yellow-400 font-semibold">
                  certified electricians
                </span>{" "}
                brings years of experience and a commitment to excellence.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                We pride ourselves on our attention to detail, safety-first
                approach, and customer satisfaction. Every project receives the
                same level of professionalism and care, from small repairs to
                complete electrical installations.
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative p-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative flex items-center">
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${
                        feature.color === "emerald"
                          ? "from-emerald-500/20 to-emerald-600/20"
                          : feature.color === "blue"
                          ? "from-blue-500/20 to-blue-600/20"
                          : feature.color === "yellow"
                          ? "from-yellow-400/20 to-yellow-500/20"
                          : "from-purple-500/20 to-purple-600/20"
                      } rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <span className="text-slate-200 font-medium text-lg group-hover:text-white transition-colors duration-300">
                      {feature.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className={`group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 overflow-hidden ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <span className="relative z-10">Learn More About Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              <button
                className={`group relative bg-transparent border-2 border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 overflow-hidden ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1100ms" }}
              >
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 bg-blue-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div
          className={`mt-20 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        ></div>
      </div>
    </section>
  );
}
