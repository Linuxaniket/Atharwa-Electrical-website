"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function WorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("work");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);
  

  // Organized work data by categories
  const workData = {
    residential: {
      title: "Residential Work",
      icon: "🏠",
      color: "blue",
      images: [
        {
          id: 1,
          src: "/images/residential-1.jpg",
          title: "Modern Home Wiring",
          description: "Complete electrical installation for new construction"
        },
        {
          id: 2,
          src: "/images/residential-2.jpg", 
          title: "Kitchen Electrical Upgrade",
          description: "Updated kitchen outlets and lighting circuits"
        },
        {
          id: 3,
          src: "/images/residential-3.jpg",
          title: "Outdoor Lighting Setup",
          description: "Garden and security lighting installation"
        },
        {
          id: 4,
          src: "/images/residential-4.jpg",
          title: "Basement Electrical Work",
          description: "Basement renovation electrical setup"
        }
      ]
    },
    commercial: {
      title: "Commercial Projects",
      icon: "🏢",
      color: "green", 
      images: [
        {
          id: 5,
          src: "/images/commercial-1.jpg",
          title: "Office Building Wiring",
          description: "Complete office electrical infrastructure"
        },
        {
          id: 6,
          src: "/images/commercial-2.jpg",
          title: "Restaurant Kitchen Setup",
          description: "High-power kitchen equipment installation"
        },
        {
          id: 7,
          src: "/images/commercial-3.jpg",
          title: "Retail Store Lighting",
          description: "Energy-efficient LED lighting system"
        }
      ]
    },
    industrial: {
      title: "Industrial Solutions",
      icon: "⚙️",
      color: "orange",
      images: [
        {
          id: 8,
          src: "/images/industrial-1.jpg",
          title: "Factory Power Distribution",
          description: "Heavy-duty industrial electrical panels"
        },
        {
          id: 9,
          src: "/images/industrial-2.jpg",
          title: "Motor Control Systems",
          description: "Industrial motor and control installation"
        }
      ]
    },
    emergency: {
      title: "Emergency Services",
      icon: "🚨",
      color: "red",
      images: [
        {
          id: 10,
          src: "/images/emergency-1.jpg",
          title: "Power Restoration",
          description: "24/7 emergency electrical repair service"
        },
        {
          id: 11,
          src: "/images/emergency-2.jpg",
          title: "Panel Emergency Repair",
          description: "Critical electrical panel replacement"
        }
      ]
    },
    smart: {
      title: "Smart Home",
      icon: "📱",
      color: "purple",
      images: [
        {
          id: 12,
          src: "/images/smart-1.jpg",
          title: "Home Automation Setup",
          description: "Complete smart home electrical integration"
        },
        {
          id: 13,
          src: "/images/smart-2.jpg",
          title: "Smart Switch Installation",
          description: "Voice-controlled lighting system"
        }
      ]
    }
  };

  const categories = [
    { key: "all", label: "All Work", icon: "⚡" },
    ...Object.entries(workData).map(([key, data]) => ({
      key,
      label: data.title,
      icon: data.icon,
      count: data.images.length
    }))
  ];

  const getFilteredImages = () => {
    if (selectedCategory === "all") {
      return Object.values(workData).flatMap(category => 
        category.images.map(img => ({ ...img, categoryColor: category.color }))
      );
    }
    return workData[selectedCategory]?.images.map(img => ({ 
      ...img, 
      categoryColor: workData[selectedCategory].color 
    })) || [];
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 border-blue-500/30 text-blue-300",
      green: "from-green-500 to-green-600 border-green-500/30 text-green-300",
      orange: "from-orange-500 to-orange-600 border-orange-500/30 text-orange-300",
      red: "from-red-500 to-red-600 border-red-500/30 text-red-300",
      purple: "from-purple-500 to-purple-600 border-purple-500/30 text-purple-300"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden" id="work">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
              Work Gallery
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore our electrical projects organized by service categories
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`group relative px-6 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 border ${
                selectedCategory === category.key
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 border-blue-500/50"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border-slate-700/50 hover:border-slate-600/50"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">{category.icon}</span>
                <span>{category.label}</span>
                {category.count && (
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    selectedCategory === category.key 
                      ? "bg-white/20" 
                      : "bg-slate-700 group-hover:bg-slate-600"
                  }`}>
                    {category.count}
                  </span>
                )}
              </div>
              
              {/* Active indicator */}
              {selectedCategory === category.key && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Category Title */}
        {selectedCategory !== "all" && workData[selectedCategory] && (
          <div
            className={`text-center mb-8 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
              <span className="text-4xl">{workData[selectedCategory].icon}</span>
              {workData[selectedCategory].title}
            </h3>
            <p className="text-slate-400">
              {workData[selectedCategory].images.length} project{workData[selectedCategory].images.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
        )}

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getFilteredImages().map((image, index) => (
            <div
              key={`${selectedCategory}-${image.id}`}
              className={`group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={90}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Category Badge */}
                {selectedCategory === "all" && (
                  <div className="absolute top-3 right-3">
                    <span className={`inline-block px-2 py-1 bg-gradient-to-r ${getColorClasses(image.categoryColor)} text-xs font-medium rounded-full border backdrop-blur-sm`}>
                      {Object.entries(workData).find(([key, data]) => 
                        data.images.some(img => img.id === image.id)
                      )?.[1]?.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                  {image.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {getFilteredImages().length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-300 mb-2">No projects found</h3>
            <p className="text-slate-400">Try selecting a different category</p>
          </div>
        )}

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-slate-300 text-lg mb-6">
            Impressed by our work? Get your free estimate today!
          </p>
          <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              ⚡ Get Your Free Estimate
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-800/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-700/80 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative h-96 md:h-[500px]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-cover"
                quality={100}
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedImage.title}
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                {selectedImage.description}
              </p>
              
              {/* Category Badge in Modal */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">Category:</span>
                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${getColorClasses(selectedImage.categoryColor)} text-xs font-medium rounded-full border backdrop-blur-sm`}>
                  {Object.entries(workData).find(([key, data]) => 
                    data.images.some(img => img.id === selectedImage.id)
                  )?.[1]?.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
