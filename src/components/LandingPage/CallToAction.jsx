"use client";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden" id="cta">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 mb-8 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-600/50">
          <Zap className="w-8 h-8 text-yellow-300" />
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6 leading-tight">
          Power Up Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-slate-500">
            Property
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Expert electrical solutions with a free consultation.
          <span className="text-white font-medium">
            {" "}
            Available 24/7 for emergencies.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-2xl hover:shadow-2xl hover:shadow-slate-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
            Free Estimate
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <motion.a
            href="tel:9527165659"
            className="block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            📞 Call Now: 9527165659
          </motion.a>
        </div>

        {/* Trust Indicator */}
        <div className="mt-16 flex items-center justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Licensed & Insured
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            24/7 Emergency Service
          </div>
        </div>
      </div>
    </section>
  );
}
