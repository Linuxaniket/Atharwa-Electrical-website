"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative bg-slate-900 text-white min-h-screen flex items-center overflow-hidden"
      id="home"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>

        {/* Animated background orbs - responsive sizes */}
        <motion.div
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-yellow-400/8 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Responsive Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center min-h-screen lg:min-h-0 py-20 lg:py-0">
          {/* Text Content - Responsive */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge - Responsive */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6 hover:bg-blue-500/20 transition-all duration-300"
            >
              <motion.span
                className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="hidden sm:inline">
                Available 24/7 Emergency Service
              </span>
              <span className="sm:hidden">24/7 Emergency Service</span>
            </motion.div>

            {/* Main Heading - Fully Responsive */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <motion.span
                className="block text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Modern
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Electrician
              </motion.span>
              <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl text-gray-300 font-normal mt-1 sm:mt-2">
                Solutions
              </span>
            </motion.h1>

            {/* Description - Responsive */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 px-4 sm:px-0"
            >
              Premium electrical services with cutting-edge technology.
              <span className="text-yellow-400 font-semibold">
                {" "}
                Atharwa Electricals
              </span>{" "}
              - Where innovation meets reliability.
            </motion.p>

            {/* Stats - Responsive Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-10 md:mb-12 max-w-md mx-auto lg:mx-0"
            >
              {[
                {
                  number: "1000+",
                  label: "Projects Done",
                  color: "text-blue-400",
                },
                { number: "24/7", label: "Support", color: "text-yellow-400" },
                {
                  number: "100%",
                  label: "Satisfaction",
                  color: "text-green-400",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    className={`text-xl sm:text-2xl md:text-3xl font-bold ${stat.color}`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Responsive Stack */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0"
            >
              <motion.button
                onClick={() => handleSmoothScroll("contact")}
                className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="hidden xs:inline">⚡</span>
                  Get Free Estimate
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={() => handleSmoothScroll("services")}
                className="group bg-transparent hover:bg-white/5 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 border border-white/20 hover:border-blue-400/50 rounded-lg sm:rounded-xl transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="hidden sm:inline">Explore Services</span>
                  <span className="sm:hidden">Services</span>
                  <motion.svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section - Responsive */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={imageVariants}
            className="relative order-1 lg:order-2 mt-8 sm:mt-12 lg:mt-0"
          >
            <div className="relative max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto">
              {/* Main Image - Responsive */}
              <motion.div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3]"
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/hero.png"
                  alt="Professional electrician at work - Atharwa Electricals"
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                />
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>
              </motion.div>

              {/* Responsive Floating Cards */}
              {/* Smart Home Card */}
              <motion.div
                className="absolute -bottom-4 sm:-bottom-10 md:-bottom-9 -left-3 sm:-left-4 md:-left-6"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
                onHoverStart={() => setHoveredCard("smart")}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-xl p-1  shadow-2xl max-w-[200px] sm:max-w-xs border border-white/20">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <motion.div
                      className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25"
                      whileHover={{ rotate: 10 }}
                    >
                      <span className="text-white text-sm sm:text-lg md:text-xl">
                        ⚡
                      </span>
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base  truncate">
                        Smart Home Solutions
                      </h3>
                      <p className="text-gray-600 text-[5px] sm:text-xs md:text-sm leading-tight">
                        Modern automation systems
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="mt-1.5 sm:mt-2 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredCard === "smart" ? "100%" : "30%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Emergency Card */}
              <motion.div
                className="absolute -top-4 sm:-top-12 md:-top-9 -right-3 sm:-right-4 md:-right-4"
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5, ease: "backOut" }}
                onHoverStart={() => setHoveredCard("emergency")}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-xl p-1 shadow-2xl max-w-[200px] sm:max-w-xs border border-white/20">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <motion.div
                      className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/25"
                      whileHover={{ rotate: -10 }}
                    >
                      <span className="text-white text-sm sm:text-lg md:text-xl">
                        🔧
                      </span>
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base  truncate">
                        Emergency Repairs
                      </h3>
                      <p className="text-gray-600 text-[5px] sm:text-xs md:text-sm leading-tight">
                        24/7 rapid response
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="mt-1.5 sm:mt-2 h-0.5 sm:h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredCard === "emergency" ? "100%" : "30%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Responsive Floating Particles */}
              <motion.div
                className="absolute top-6 sm:top-12 left-6 sm:left-10 w-1 sm:w-2 h-1 sm:h-2 bg-blue-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-12 sm:bottom-20 right-6 sm:right-10 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-yellow-400 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Responsive Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => handleSmoothScroll("services")}
      >
        <div className="w-4 sm:w-5 h-6 sm:h-8 border-2 border-white/30 rounded-full flex justify-center hover:border-blue-400/50 transition-colors">
          <motion.div
            className="w-0.5 h-1.5 sm:h-2 bg-white/50 rounded-full mt-1 sm:mt-1.5"
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Custom CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(59, 130, 246, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        @media (min-width: 640px) {
          .bg-grid-pattern {
            background-size: 50px 50px;
          }
        }
      `}</style>
    </section>
  );
}
