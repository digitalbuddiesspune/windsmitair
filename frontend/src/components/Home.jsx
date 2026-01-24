import { useState, useEffect } from 'react'
import Footer from './Footer'

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
    <section className="bg-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 text-center sm:text-left md:text-center max-w-3xl mx-auto">
          <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
            Technical Mastery
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our Expertise
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
            We combine engineering precision with high-quality components to deliver systems that stand the test of time.
          </p>
        </div>

        {/* Tabbed Interface Layout */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          
          {/* Left Column: Navigation Tabs */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
            {expertiseData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`text-left px-4 sm:px-6 py-4 sm:py-5 rounded-lg transition-all duration-300 border-l-4 lg:border-l-4 border-b-4 lg:border-b-0 group whitespace-nowrap lg:whitespace-normal ${
                  activeTab === index
                    ? "bg-slate-800 border-emerald-500 shadow-lg shadow-black/20"
                    : "bg-transparent border-slate-700 hover:bg-slate-800/50 hover:border-slate-500"
                }`}
              >
                <h3 className={`text-base sm:text-lg font-bold mb-1 transition-colors ${
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
          <div className="lg:w-2/3 relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
            {expertiseData.map((item, index) => (
              activeTab === index && (
                <div 
                  key={item.id}
                  className="w-full h-full bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col md:flex-row animate-fadeIn"
                >
                   {/* Image Side */}
                   <div className="md:w-1/2 relative h-64 sm:h-80 md:h-auto">
                     <img 
                       src={item.image} 
                       alt={item.heading}
                       className="absolute inset-0 w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-emerald-900/20 mix-blend-multiply"></div>
                   </div>

                   {/* Content Side */}
                   <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                     <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                       {item.heading}
                     </h3>
                     <p className="text-slate-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                       {item.description}
                     </p>
                     
                     <div className="space-y-2 sm:space-y-3 mt-auto">
                       <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Key Features</h4>
                       {item.features.map((feature, i) => (
                         <div key={i} className="flex items-center text-slate-200 text-xs sm:text-sm">
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 flex-shrink-0"></div>
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
      <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden bg-slate-900">
        <div className="relative w-full h-full">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* IMAGE: Displayed in original dimensions */}
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-auto h-full object-contain object-left opacity-90"
              />
              
              {/* GRADIENT: Dark gradient on right for text readability */}
              <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-900/90 to-transparent sm:via-slate-900/60"></div>
            </div>
          ))}

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-end px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
            <div className="max-w-xl text-white relative text-left pl-4 sm:pl-6 md:pl-12 lg:pl-16">
              {/* Green horizontal line */}
              <div className="w-12 sm:w-16 h-1 bg-emerald-500 mb-4 sm:mb-6"></div>
              
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 tracking-tight">
                Engineered for <br />
                <span className="text-emerald-400">Pure Comfort.</span>
              </h1>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl">
                Windsmit Air delivers premium HVAC, Air Conditioning, and Building Management solutions designed for health and efficiency.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="group relative px-6 sm:px-8 py-2.5 sm:py-3.5 bg-emerald-500 text-white text-sm sm:text-base font-semibold overflow-hidden transition-all duration-500 ease-out hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/50 hover:text-white">
                  <span className="relative z-10">Explore Solutions</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out bg-white/10"></div>
                </button>
                <button className="group relative px-6 sm:px-8 py-2.5 sm:py-3.5 bg-slate-800/90 backdrop-blur-sm border border-white/20 text-white text-sm sm:text-base font-semibold overflow-hidden transition-all duration-500 ease-out hover:bg-slate-900 hover:border-white/40 hover:shadow-2xl hover:shadow-slate-900/50">
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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="h-px w-8 sm:w-12 bg-emerald-500"></span>
                <span className="text-emerald-600 font-semibold uppercase tracking-widest text-xs sm:text-sm">Our Identity</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Breathing Life into <br className="hidden sm:block" />Every Space
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4 sm:gap-5">
                <div className="flex-shrink-0 mt-1">
                   <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <span className="font-bold text-base sm:text-lg">W</span>
                   </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">The Name</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    <span className="font-semibold text-emerald-700">Windsmit Air</span> signifies "smiling air" (SMIT). It reflects our core attitude: providing clean, pure, and happy air through superior design and engineering.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5">
                 <div className="flex-shrink-0 mt-1">
                   <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                   </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">The Philosophy</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Our logo pays gratitude to the sun (energy) and trees (healthy air). The flags symbolize the "Winning" direction of the wind. We combine nature's principles with modern engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769173734/output-onlinegiftools_1_ftxcaj.gif"
                alt="Clean Air Environment"
                className="w-full h-full object-cover transition-transform ease-out"
              />
            </div>
            {/* Decorative Elements */}
            <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-emerald-50 rounded-full -z-10"></div>
            <div className="hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-50 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <span className="text-emerald-600 font-semibold uppercase tracking-widest text-xs sm:text-sm block mb-2 sm:mb-3">Our Expertise</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">Comprehensive HVAC Solutions</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 px-4">Tailored engineering from installation to maintenance, ensuring optimal indoor air quality.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {servicesList.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Header */}
                <div className="mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       {service.id === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                       {service.id === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />}
                       {service.id === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />}
                       {service.id === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4 min-h-[2.5rem] sm:min-h-[2.75rem]">{service.description}</p>
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
      <section className="bg-slate-900 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
           <div className="p-4 sm:p-6">
             <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">2022</span>
             <span className="text-emerald-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Year Established</span>
           </div>
           <div className="p-4 sm:p-6">
             <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">100+</span>
             <span className="text-emerald-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Successful Projects</span>
           </div>
           <div className="p-4 sm:p-6">
             <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">24/7</span>
             <span className="text-emerald-400 text-xs sm:text-sm font-medium uppercase tracking-wider">Client Support</span>
           </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative bg-white py-0">
        <div className="grid lg:grid-cols-2">
            <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full relative bg-slate-900 overflow-hidden order-2 lg:order-1">
                <img 
                  src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769251333/Black_and_White_Modern_Electrical_Service_Instagram_Post_qrne40.svg" 
                  alt="Technician at work" 
                  className="w-full h-full object-cover object-left"
                />
            </div>
            <div className="flex items-center bg-slate-100 px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 order-1 lg:order-2">
                <div className="max-w-lg mx-auto lg:mx-0">
                    <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 block">Get in touch</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Ready to upgrade your air quality?</h2>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8">
                        Contact us today for a consultation. Whether it's a new installation or maintaining an existing system, our experts are ready to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-slate-900 text-white text-sm sm:text-base font-semibold rounded hover:bg-slate-800 transition-colors">
                            Request Quote
                        </button>
                        <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-slate-300 text-slate-700 text-sm sm:text-base font-semibold rounded hover:border-slate-400 hover:text-slate-900 transition-colors">
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