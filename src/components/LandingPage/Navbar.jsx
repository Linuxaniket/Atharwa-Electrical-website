"use client";
import { useState, useEffect } from "react";

// Enhanced animated icons
const MenuIcon = () => (
  <svg
    className="h-5 w-5 transition-all duration-300 ease-out"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="h-5 w-5 transition-all duration-300 ease-out rotate-0 hover:rotate-90"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Cool reload animation effect
    const timer = setTimeout(() => setLoaded(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "services", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleSmoothScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Constant Dark Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ease-out transform bg-slate-800/90 backdrop-blur-xl shadow-lg ${
          loaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${
          scrolled
            ? "border-b border-slate-700/50 shadow-2xl shadow-black/20"
            : "border-b border-slate-700/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo with Consistent Styling */}
            <div
              className={`cursor-pointer group transition-all duration-700 ease-out transform ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
              onClick={() => handleSmoothScroll("home")}
              style={{ transitionDelay: "200ms" }}
            >
              <h1 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Atharwa
                </span>
                <span className="text-white ml-1 transition-all duration-300">
                  Electricals
                </span>
              </h1>
              <div className="text-xs text-yellow-400 font-medium -mt-1 group-hover:text-yellow-300 transition-colors duration-300">
                ⚡ Powering Your World
              </div>
            </div>

            {/* Desktop Navigation with Consistent Colors */}
            <div className="hidden md:flex items-center space-x-2">
              {["home", "services", "about", "contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => handleSmoothScroll(item)}
                  className={`relative px-6 py-3 capitalize text-sm font-medium tracking-wide transition-all duration-700 ease-out rounded-xl group overflow-hidden transform ${
                    loaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  } ${
                    activeSection === item
                      ? "text-blue-400 bg-slate-700/60"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/40"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <span className="relative z-10">{item}</span>

                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl" />

                  {/* Active indicator */}
                  {activeSection === item && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50" />
                  )}
                </button>
              ))}

              {/* CTA Button - UPDATED TEXT */}
              <button
                className={`ml-6 relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-700 ease-out hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95 group overflow-hidden transform ${
                  loaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
                onClick={() => handleSmoothScroll("cta")}
                style={{ transitionDelay: "700ms" }}
              >
                <span className="relative z-10">Get Free Estimate</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden relative p-3 rounded-xl bg-slate-700/50 backdrop-blur-sm hover:bg-slate-600/60 border border-slate-600/30 transition-all duration-700 ease-out hover:scale-110 group transform ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-200">
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-slate-800/98 backdrop-blur-xl border-t border-slate-700/30 transition-all duration-500 ease-out transform ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-8 invisible"
          }`}
        >
          <div className="px-4 py-8 space-y-3 max-w-7xl mx-auto">
            {["home", "services", "about", "contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => handleSmoothScroll(item)}
                className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 transform relative group overflow-hidden ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                } ${
                  activeSection === item
                    ? "bg-gradient-to-r from-blue-600/20 to-blue-500/20 text-blue-400 border border-blue-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                <span className="relative z-10 capitalize text-lg">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl" />
              </button>
            ))}

            <button
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold mt-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 active:scale-98 group overflow-hidden"
              onClick={() => handleSmoothScroll("cta")}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                ⚡ Get Free Estimate
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}
