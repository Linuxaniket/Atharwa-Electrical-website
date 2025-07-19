"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const socialVariants = {
    hover: {
      y: -3,
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.05 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div
          className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-400 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-2"
          >
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 backdrop-blur-sm rounded-xl border border-blue-400/30 shadow-lg shadow-blue-500/25"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <motion.svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </motion.svg>
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                Atharwa Electricals
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md"
            >
              Professional electrical services for residential and commercial
              properties. Powering your world with precision and reliability.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-3 sm:gap-4">
              {[
                {
                  icon: "📘",
                  label: "Facebook",
                  href: "#",
                  color: "from-white-600 to-white-700",
                },
                {
                  icon: "🐦",
                  label: "Twitter",
                  href: "#",
                  color: "from-white-600 to-white-700",
                },
                {
                  icon: "📷",
                  label: "Instagram",
                  href: "#",
                  color: "from-white-600 to-white-700",
                },
                {
                  icon: "💼",
                  label: "LinkedIn",
                  href: "#",
                  color: "from-white-700 to-white-800",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${social.color} rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                  aria-label={social.label}
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-base sm:text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="order-3 sm:order-none">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
              Services
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: "Residential Wiring", href: "#services/residential" },
                { name: "Commercial Projects", href: "#services/commercial" },
                { name: "Emergency Repairs", href: "#services/emergency" },
                { name: "Smart Home Setup", href: "#services/smart" },
              ].map((service, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a
                    href={service.href}
                    className="group flex items-center text-slate-400 hover:text-white transition-all duration-300"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <motion.svg
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 group-hover:text-blue-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                    <span className="text-sm sm:text-base">{service.name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="order-4 sm:order-none">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: "About Us", href: "#about", icon: "👥" },
                { name: "Our Work", href: "#work", icon: "🔧" },
                { name: "Contact", href: "#contact", icon: "📞" },
                { name: "Get Quote", href: "#quote", icon: "💰" },
              ].map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-white transition-all duration-300"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <motion.span
                      className="mr-2 sm:mr-3 text-sm sm:text-base group-hover:scale-110 transition-transform"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {link.icon}
                    </motion.span>
                    <span className="text-sm sm:text-base">{link.name}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 p-6 sm:p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30"
        >
          <h4 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center text-white">
            Get In Touch
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: "📍",
                label: "Address",
                value: "Manaji Nagar, Narhe, Pune Maharashtra",
                // color: "from-green-500 to-green-600"
              },
              {
                icon: "📞",
                label: "Phone",
                value: "9527165659",
                // color: "from-blue-500 to-blue-600"
              },
              {
                icon: "✉️",
                label: "Email",
                value: "anildahirea20@gmail.com",
                // color: "from-purple-500 to-white-600"
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                variants={itemVariants}
              >
                <motion.div
                  className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${contact.color} rounded-xl shadow-lg`}
                  whileHover={{ rotate: 5 }}
                >
                  <span className="text-base sm:text-lg">{contact.icon}</span>
                </motion.div>
                <div className="min-w-0 flex-1">
                  <p className="text-slate-300 text-xs sm:text-sm">
                    {contact.label}
                  </p>
                  <p className="text-white font-medium text-sm sm:text-base truncate">
                    {contact.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700/50"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-slate-400 text-sm text-center sm:text-left"
              whileHover={{ color: "#e2e8f0" }}
            >
              &copy; {new Date().getFullYear()} Atharwa Electricals. All rights
              reserved.
            </motion.p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link, index) => (
                  <motion.a
                    key={index}
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link}
                  </motion.a>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating animation elements */}
      <motion.div
        className="absolute top-20 left-4 sm:left-10 w-2 h-2 bg-blue-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-4 sm:right-10 w-1 h-1 bg-yellow-400 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </motion.footer>
  );
}
