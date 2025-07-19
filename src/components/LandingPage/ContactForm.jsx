"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          service_type: formData.service || "General Inquiry",
          message: formData.message,
          submission_date: new Date().toLocaleString("en-IN"),
        }
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-20 bg-slate-900 relative overflow-hidden"
      id="contact"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Free Quote
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional electrical services with free estimates
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Clean Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl"
            >
              <div className="space-y-6">
                {/* Input Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-slate-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-slate-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 group-hover:border-slate-500"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: "right 0.5rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.5em 1.5em",
                      }}
                    >
                      <option value="">Select service</option>
                      <option value="Residential">🏠 Residential</option>
                      <option value="Commercial">🏢 Commercial</option>
                      <option value="Emergency">⚡ Emergency</option>
                      <option value="Smart Home">📱 Smart Home</option>
                      <option value="Panel Upgrade">🔧 Panel Upgrade</option>
                      <option value="Other">💬 Other</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none group-hover:border-slate-500"
                    placeholder="Tell us about your electrical project..."
                  />
                </div>

                {/* Modern Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/25"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>⚡ Send Free Quote Request</>
                    )}
                  </span>
                </motion.button>
              </div>

              {/* Status Message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 p-4 rounded-xl text-center ${
                    submitStatus === "success"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-red-500/20 text-red-300 border border-red-500/30"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <p>
                      ✅ <strong>Message sent!</strong> We'll contact you within
                      24 hours.
                    </p>
                  ) : (
                    <p>
                      ❌ <strong>Failed to send.</strong> Please call 9527165659
                    </p>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="text-blue-400">📞</span>
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "📞",
                    title: "Call Us",
                    info: "9527165659",
                    sub: "24/7 Emergency",
                    action: "tel:9527165659",
                  },
                  {
                    icon: "✉️",
                    title: "Email",
                    info: "anildahirea20@gmail.com",
                    sub: "Quick Response",
                    action: "mailto:anildahirea20@gmail.com",
                  },
                  {
                    icon: "📍",
                    title: "Location",
                    info: "Narhe, Pune",
                    sub: "Maharashtra",
                    action: null,
                  },
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/30 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() =>
                      contact.action && window.open(contact.action)
                    }
                  >
                    <span className="text-xl">{contact.icon}</span>
                    <div>
                      <p className="text-white font-medium">{contact.info}</p>
                      <p className="text-gray-400 text-sm">{contact.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-500/10 to-yellow-400/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                ⭐ Why Choose Atharwa?
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  5+ Years Experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  Licensed & Insured
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  Free Estimates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✅</span>
                  24/7 Emergency Service
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
