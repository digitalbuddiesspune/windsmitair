import { useState, useEffect } from 'react'
import Footer from './Footer'
import WhyChooseUs from './WhyChooseUs'

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
    image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769341061/Untitled_1920_x_826_px_1920_x_950_px_wcaef7.svg',
    alt: 'Professional HVAC Engineering'
  }
]

// Helper to normalize API URL (same pattern as Blog/Admin)
const getApiUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
  let cleanUrl = envUrl.replace(/\/+$/, '')
  if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    cleanUrl = `https://${cleanUrl}`
  }
  if (!cleanUrl.includes('/api') && !cleanUrl.includes('localhost')) {
    cleanUrl = `${cleanUrl}/api`
  }
  return cleanUrl
}

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
  const [stories, setStories] = useState([])
  const [activeStory, setActiveStory] = useState(null)
  const [showStories, setShowStories] = useState(true)

  // Auto-slide logic
  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [])

  // Fetch stories setting
  useEffect(() => {
    const fetchStoriesSetting = async () => {
      try {
        const response = await fetch(`${getApiUrl()}/settings/showStories`)
        if (response.ok) {
          const data = await response.json()
          setShowStories(data.value)
        }
      } catch (error) {
        console.error('Error fetching stories setting:', error)
        // Default to true if error
        setShowStories(true)
      }
    }
    fetchStoriesSetting()
  }, [])

  // Fetch stories for \"Instagram-like\" story section
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const API_URL = getApiUrl()
        const response = await fetch(`${API_URL}/stories?active=true`)
        if (!response.ok) return
        const data = await response.json()
        setStories(data)
      } catch {
        // fail silently on homepage
      }
    }
    fetchStories()
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
      <section className="relative w-full overflow-hidden bg-slate-900">
        {/* Mobile-only background image */}
        <div className="relative sm:hidden">
          <img
            src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769261511/497afe2e9cac98cc156cb917956f6939_ogbgpx.jpg"
            alt="HVAC System"
            className="w-full h-auto opacity-90"
          />
          {/* GRADIENT: Strong overlay for mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
          
          {/* Hero Content Overlay - Mobile */}
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4 py-12">
            <div className="max-w-xl w-full text-white text-center">
              {/* Green horizontal line */}
              <div className="w-16 h-1 mb-5 mx-auto" style={{ backgroundColor: '#00b050' }}></div>
              
              {/* Main Heading */}
              <h1 className="text-xl font-bold leading-[1.1] mb-5 tracking-tight">
                Engineered for <br />
                <span style={{ color: '#00b050' }}>Pure Comfort.</span>
              </h1>
              
              {/* Description */}
              <p className="text-base text-slate-100 mb-7 leading-relaxed">
                Windsmit Air delivers premium HVAC, Air Conditioning, and Building Management solutions designed for health and efficiency.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-row gap-2 justify-center flex-wrap">
                <button className="group relative px-4 py-3 text-white text-sm font-semibold overflow-hidden transition-all duration-300 ease-out hover:shadow-xl rounded-lg whitespace-nowrap" style={{ backgroundColor: '#00b050' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#009040'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00b050'}>
                  <span className="relative z-10">Explore Solutions</span>
                </button>
                <button className="group relative px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-sm font-semibold overflow-hidden transition-all duration-300 ease-out hover:bg-white/20 hover:border-white/50 rounded-lg whitespace-nowrap">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop banner images */}
        <div className="hidden sm:block relative">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`relative transition-opacity duration-1000 ease-in-out ${
                index === currentBanner ? 'opacity-100 z-10' : 'absolute inset-0 opacity-0 z-0'
              }`}
            >
              {/* IMAGE: Desktop display in original dimensions */}
              <img
                src={banner.image}
                alt={banner.alt}
                className="hidden sm:block opacity-90"
                width="1920"
                height="950"
                style={{ width: '1920px', maxWidth: '100%', height: 'auto', aspectRatio: '1920/950' }}
              />
              
              {/* GRADIENT: Subtle overlay for desktop */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-transparent"></div>
              
              {/* Hero Content Overlay - Desktop */}
              <div className="absolute inset-0 z-20 flex items-center justify-start px-12 lg:px-16 xl:px-24">
                <div className="max-w-xl text-white text-left">
                  {/* Green horizontal line */}
                  <div className="w-20 h-1 mb-6 mt-20" style={{ backgroundColor: '#00b050' }}></div>
                  
                  {/* Main Heading */}
                  <h1 className="text-5xl md:text-3xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                    Engineered for <br />
                    <span style={{ color: '#00b050' }}>Pure Comfort.</span>
                  </h1>
                  
                  {/* Description */}
                  <p className="text-lg md:text-xl lg:text-xl text-slate-100 mb-8 md:mb-10 leading-relaxed max-w-xl">
                    Windsmit Air delivers premium HVAC, Air Conditioning, and Building Management solutions designed for health and efficiency.
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex flex-row gap-3 justify-start">
                    <button className="px-5 py-2.5 text-white text-sm font-medium rounded-full transition-all duration-200 ease-out hover:shadow-md" style={{ backgroundColor: '#00b050' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#009040'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00b050'}>
                      Explore Solutions
                    </button>
                    <button className="px-5 py-2.5 bg-slate-800/90 text-white text-sm font-medium border border-slate-500/50 rounded-full transition-all duration-200 ease-out hover:bg-slate-700/90 hover:border-slate-400/70">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STORIES SECTION --- */}
      {showStories && stories.length > 0 && (
        <section className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-8 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <span className="inline-block px-2.5 py-0.5 bg-emerald-50 text-emerald-600 font-semibold uppercase tracking-widest text-[10px] rounded-full mb-2">
                Project Highlights
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5">
                Our Work in Action
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
                Explore our recent installations and project showcases
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-5 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
              {stories.map((story) => (
                <button
                  key={story._id}
                  onClick={() => setActiveStory(story)}
                  className="group flex-shrink-0 flex flex-col items-center gap-2.5 focus:outline-none"
                >
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 p-0.5 group-hover:p-1 transition-all duration-300 shadow-lg shadow-emerald-500/20 group-hover:shadow-xl group-hover:shadow-emerald-500/30">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                          <span className="text-xs sm:text-sm font-bold text-white text-center px-3 leading-tight z-10 relative">
                            {story.title}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg group-hover:bg-emerald-400 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-800 max-w-[90px] truncate group-hover:text-emerald-600 transition-colors">
                    {story.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Story Modal */}
          {activeStory && (
            <div 
              className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-8"
              onClick={() => setActiveStory(null)}
            >
              <div 
                className="relative bg-slate-900 rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl border border-slate-700"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveStory(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/80 transition-all hover:scale-110"
                  aria-label="Close story"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                    WA
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">
                      {activeStory.title}
                    </p>
                    <p className="text-xs text-slate-400">Windsmit Air</p>
                  </div>
                </div>
                <div className="bg-black flex items-center justify-center aspect-video">
                  <video
                    src={activeStory.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
      )}

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
      <section className="py-12 sm:py-16 md:py-4 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Compact Header */}
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 font-semibold uppercase tracking-widest text-xs rounded-full mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Comprehensive <span className="text-emerald-600">HVAC Solutions</span>
            </h2>
            <p className="text-sm sm:text-lg text-slate-600">
              Tailored engineering from installation to maintenance, ensuring optimal indoor air quality.
            </p>
          </div>

          {/* Compact Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {servicesList.map((service, index) => {
              const isOpen = openServices[service.id];
              
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-xl p-6 sm:p-8 border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300 overflow-hidden self-start"
                >
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-transparent"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Header with Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            {service.id === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                            {service.id === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />}
                            {service.id === 3 && <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />}
                            {service.id === 4 && <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-slate-200">
                        <ul className="space-y-2.5">
                          {service.items.map((item, idx) => (
                            <li 
                              key={idx}
                              className="flex items-center text-sm sm:text-base text-slate-700 group/item"
                            >
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mr-3 group-hover/item:bg-emerald-500 transition-colors duration-300">
                                <svg className="w-3 h-3 text-emerald-600 group-hover/item:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="group-hover/item:text-emerald-700 transition-colors duration-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleService(service.id)}
                      className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-300 group/btn"
                    >
                      <span>{isOpen ? 'Show Less' : 'View Details'}</span>
                      <svg 
                        className={`w-4 h-4 transform transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'} group-hover/btn:translate-y-0.5`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
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
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default Home