import { useState, useEffect } from 'react'

// --- 1. DATA CONSTANTS ---

const expertiseData = [
  {
    id: 1,
    tabLabel: "Air Conditioning",
    heading: "Precision Cooling Systems",
    description: "We engineer cooling solutions that go beyond simple temperature control. Our systems are designed for optimal humidity regulation, energy efficiency, and silent operation suitable for luxury residences and corporate offices.",
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=2070&auto=format&fit=crop",
    features: ["Inverter Technology", "Multi-Zone Control", "Eco-friendly Refrigerants", "Smart WiFi Integration"]
  },
  {
    id: 2,
    tabLabel: "Commercial HVAC",
    heading: "Industrial Grade Ventilation",
    description: "Large-scale air handling for commercial infrastructure. We specialize in ductwork design that maximizes airflow while minimizing noise and energy loss, ensuring your workspace meets all air quality standards.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    features: ["Custom AHU Design", "VRF/VRV Systems", "Fresh Air Injection", "Negative Pressure Rooms"]
  },
  {
    id: 3,
    tabLabel: "BMS Automation",
    heading: "Intelligent Building Control",
    description: "Future-proof your facility with our Building Management Systems. Monitor energy usage, detect faults instantly, and automate climate schedules from a central dashboard.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    features: ["IoT Sensors", "Remote Monitoring", "Auto-Fault Detection", "Energy Analytics"]
  },
  {
    id: 4,
    tabLabel: "Retrofitting",
    heading: "System Modernization",
    description: "Upgrade your aging infrastructure without a complete tear-down. Our retrofitting services replace critical components to boost efficiency and extend the lifespan of your existing HVAC setup.",
    image: "https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?q=80&w=2070&auto=format&fit=crop",
    features: ["Compressor Upgrades", "Duct Sealing", "Digital Thermostat Install", "Filter Upgrades"]
  }
]

const servicesList = [
  {
    id: 1,
    title: "Air Conditioning",
    description: "Complete cooling solutions for residential and commercial spaces.",
    items: ["Split AC", "Window AC", "Cassette AC", "Ductable AC", "Tower AC"]
  },
  {
    id: 2,
    title: "HVAC Solutions",
    description: "Advanced ventilation and air handling engineering.",
    items: [
      "Standard & Custom AHUs",
      "Terminal Units & VRF Systems",
      "Evaporative Cooling",
      "Dampers, Louvers, Diffusers",
      "Exhaust & Fresh Air Fans",
      "Air Curtains"
    ]
  },
  {
    id: 3,
    title: "BMS (Building Management)",
    description: "Smart control systems for automated building efficiency.",
    items: [
      "Supervisory Controllers",
      "DDC Controllers",
      "Sensors & Thermostats",
      "Automated Valves",
      "Control Panels"
    ]
  },
  {
    id: 4,
    title: "Service & Maintenance",
    description: "Reliable support to keep your systems running smoothly.",
    items: ["24/7 Emergency Support", "Annual Maintenance Contracts (AMC)", "System Health Checks"]
  }
]

const banners = [
  {
    id: 3,
    image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769236709/ChatGPT_Image_Jan_24_2026_12_07_49_PM_u0niic.png',
    alt: 'Professional HVAC Engineering'
  }
]

// --- 2. INTERNAL COMPONENTS ---

function OurExpertise() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-slate-900 py-20 px-6 md:px-16 lg:px-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-2 block">
            Technical Mastery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Expertise
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We combine engineering precision with high-quality components to deliver systems that stand the test of time.
          </p>
        </div>

        {/* Tabbed Interface Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Navigation Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {expertiseData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`text-left px-6 py-5 rounded-lg transition-all duration-300 border-l-4 group ${
                  activeTab === index
                    ? "bg-slate-800 border-emerald-500 shadow-lg shadow-black/20"
                    : "bg-transparent border-slate-700 hover:bg-slate-800/50 hover:border-slate-500"
                }`}
              >
                <h3 className={`text-lg font-bold mb-1 transition-colors ${
                  activeTab === index ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                }`}>
                  {item.tabLabel}
                </h3>
                {activeTab === index && (
                  <p className="text-emerald-400 text-xs font-medium uppercase tracking-wider animate-fadeIn">
                    Currently Viewing
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Right Column: Active Content Display */}
          <div className="lg:w-2/3 relative min-h-[450px]">
            {expertiseData.map((item, index) => (
              activeTab === index && (
                <div 
                  key={item.id}
                  className="w-full h-full bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col md:flex-row animate-fadeIn"
                >
                   {/* Image Side */}
                   <div className="md:w-1/2 relative h-64 md:h-auto">
                     <img 
                       src={item.image} 
                       alt={item.heading}
                       className="absolute inset-0 w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply"></div>
                   </div>

                   {/* Content Side */}
                   <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                     <h3 className="text-2xl font-bold text-white mb-4">
                       {item.heading}
                     </h3>
                     <p className="text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
                       {item.description}
                     </p>
                     
                     <div className="space-y-3 mt-auto">
                       <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Features</h4>
                       {item.features.map((feature, i) => (
                         <div key={i} className="flex items-center text-slate-200 text-sm">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></div>
                           {feature}
                         </div>
                       ))}
                     </div>
                   </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Windsmit <span className="text-[#4CAF50]">Air</span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Delivering premium HVAC engineering solutions. We blend nature's principles with modern technology to create healthier, happier spaces.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#4CAF50] flex items-center justify-center transition-colors duration-300" aria-label="Facebook">
                <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#4CAF50] flex items-center justify-center transition-colors duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#4CAF50] flex items-center justify-center transition-colors duration-300" aria-label="Twitter">
                <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#4CAF50] flex items-center justify-center transition-colors duration-300" aria-label="Instagram">
                <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors duration-300 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors duration-300 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors duration-300 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors duration-300 inline-block">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors duration-300 inline-block">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors duration-300 inline-block">
                  Air Conditioning
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors duration-300 inline-block">
                  Commercial HVAC
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors duration-300 inline-block">
                  BMS Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors duration-300 inline-block">
                  Maintenance & AMC
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors duration-300 inline-block">
                  Retrofitting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#4CAF50] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-400 leading-relaxed">
                  123 Industrial Estate,<br />
                  City, State - 123456
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4CAF50] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919876543210" className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors duration-300">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#4CAF50] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@windsmitair.com" className="text-sm text-gray-400 hover:text-[#4CAF50] transition-colors duration-300">
                  info@windsmitair.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Windsmit Air. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs md:text-sm text-gray-500">
              <a href="#" className="hover:text-[#4CAF50] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-[#4CAF50] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-[#4CAF50] transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// --- 3. MAIN COMPONENT ---

function Home() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [openServices, setOpenServices] = useState({})

  // Auto-slide logic
  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [])

  // Accordion toggle logic
  const toggleService = (serviceId) => {
    setOpenServices((prev) => {
      const id = Number(serviceId)
      const isCurrentlyOpen = prev[id] === true
      return isCurrentlyOpen 
        ? { ...prev, [id]: false } 
        : { ...prev, [id]: true }
    })
  }

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden bg-slate-900">
        <div className="relative w-full h-full">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* IMAGE: Positioned to show left side, leaving right side for text */}
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover object-left opacity-90"
              />
              
              {/* GRADIENT: Dark gradient on right for text readability */}
              <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-900/90 to-transparent sm:via-slate-900/60"></div>
            </div>
          ))}

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-end px-6 md:px-12 lg:px-16 xl:px-24">
            <div className="max-w-xl text-white relative text-left pl-8 md:pl-12 lg:pl-16">
              {/* Green horizontal line */}
              <div className="w-16 h-1 bg-emerald-500 mb-6"></div>
              
              {/* Main Heading */}
              <h1 className="text-2xl md:text-xl lg:text-6xl xl:text-4xl font-bold leading-tight mb-6 tracking-tight">
                Engineered for <br />
                <span className="text-emerald-400">Pure Comfort.</span>
              </h1>
              
              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl text-slate-200 mb-8 md:mb-10 leading-relaxed max-w-xl">
                Windsmit Air delivers premium HVAC, Air Conditioning, and Building Management solutions designed for health and efficiency.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-3.5 bg-emerald-500 text-white font-semibold overflow-hidden transition-all duration-500 ease-out hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/50 hover:text-white">
                  <span className="relative z-10">Explore Solutions</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out bg-white/10"></div>
                </button>
                <button className="group relative px-8 py-3.5 bg-slate-800/90 backdrop-blur-sm border border-white/20 text-white font-semibold overflow-hidden transition-all duration-500 ease-out hover:bg-slate-900 hover:border-white/40 hover:shadow-2xl hover:shadow-slate-900/50">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out bg-white/5"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- IDENTITY SECTION --- */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-emerald-500"></span>
                <span className="text-emerald-600 font-semibold uppercase tracking-widest text-sm">Our Identity</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Breathing Life into <br />Every Space
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <span className="font-bold text-lg">W</span>
                   </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">The Name</h3>
                  <p className="text-slate-600 leading-relaxed">
                    <span className="font-semibold text-emerald-700">Windsmit Air</span> signifies "smiling air" (SMIT). It reflects our core attitude: providing clean, pure, and happy air through superior design and engineering.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                 <div className="flex-shrink-0 mt-1">
                   <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                   </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">The Philosophy</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our logo pays gratitude to the sun (energy) and trees (healthy air). The flags symbolize the "Winning" direction of the wind. We combine nature's principles with modern engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769173734/output-onlinegiftools_1_ftxcaj.gif"
                alt="Clean Air Environment"
                className="w-full h-full object-cover transition-transform ease-out"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-50 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-50 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-semibold uppercase tracking-widest text-sm block mb-3">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive HVAC Solutions</h2>
            <p className="text-slate-600 text-lg">Tailored engineering from installation to maintenance, ensuring optimal indoor air quality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       {service.id === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                       {service.id === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />}
                       {service.id === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />}
                       {service.id === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 mb-4 h-10">{service.description}</p>
                </div>

                {/* List Content */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openServices[service.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <ul className="space-y-2 pb-4">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <span className="text-emerald-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer / Toggle */}
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <button
                    onClick={() => toggleService(service.id)}
                    className="flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors w-full group"
                  >
                    {openServices[service.id] ? 'Show Less' : 'View Details'}
                    <svg className={`w-4 h-4 ml-auto transform transition-transform duration-300 ${openServices[service.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-slate-900 py-16 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
           <div className="p-4">
             <span className="block text-4xl md:text-5xl font-bold text-white mb-2">2022</span>
             <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Year Established</span>
           </div>
           <div className="p-4">
             <span className="block text-4xl md:text-5xl font-bold text-white mb-2">100+</span>
             <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Successful Projects</span>
           </div>
           <div className="p-4">
             <span className="block text-4xl md:text-5xl font-bold text-white mb-2">24/7</span>
             <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Client Support</span>
           </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative bg-white py-0">
        <div className="grid lg:grid-cols-2">
            <div className="h-64 md:h-80 lg:h-[500px] w-full relative bg-slate-900 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769251333/Black_and_White_Modern_Electrical_Service_Instagram_Post_qrne40.svg" 
                  alt="Technician at work" 
                  className="w-full h-full object-cover object-left"
                />
            </div>
            <div className="flex items-center bg-slate-100 px-6 py-16 md:px-16 lg:py-24">
                <div className="max-w-lg">
                    <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-2 block">Get in touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to upgrade your air quality?</h2>
                    <p className="text-slate-600 text-lg mb-8">
                        Contact us today for a consultation. Whether it's a new installation or maintaining an existing system, our experts are ready to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-3 bg-slate-900 text-white font-semibold rounded hover:bg-slate-800 transition-colors">
                            Request Quote
                        </button>
                        <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded hover:border-slate-400 hover:text-slate-900 transition-colors">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- INCLUDED COMPONENTS --- */}
      <OurExpertise />
      <Footer />
    </div>
  )
}

export default Home