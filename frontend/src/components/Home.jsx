import { useState, useEffect } from 'react'
import Footer from './Footer'

function Home() {
  const [activeService, setActiveService] = useState('AC')
  const [currentBanner, setCurrentBanner] = useState(0)
  const [openServices, setOpenServices] = useState({})

  // Banner images - replace these with your actual banner URLs
  const banners = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769165851/White_and_Blue_Modern_Air_Conditioning_Installation_Services_Facebook_Post_Landscape_1920_x_600_mm_1920_x_600_mm_2_s79yu4.svg',
      alt: 'Banner 1'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769165130/White_and_Blue_Modern_Air_Conditioning_Installation_Services_Facebook_Post_Landscape_1920_x_600_mm_1920_x_600_mm_io7uxq.svg',
      alt: 'Banner 2'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/1920x600/25D366/FFFFFF?text=Banner+3',
      alt: 'Banner 3'
    }
  ]

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [banners.length])

  const goToSlide = (index) => {
    setCurrentBanner(index)
  }

  const goToPrevious = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const goToNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const toggleService = (serviceId) => {
    setOpenServices((prev) => {
      // Convert serviceId to number to ensure consistent type
      const id = Number(serviceId)
      const isCurrentlyOpen = Boolean(prev[id])
      
      // Create new state object - explicitly close all services first
      const newState = {
        1: false,
        2: false,
        3: false,
        4: false
      }
      
      // Only open the clicked service if it wasn't already open
      if (!isCurrentlyOpen) {
        newState[id] = true
      }
      
      return newState
    })
  }

  const servicesList = [
    {
      id: 1,
      title: "AIR CONDITIONING",
      items: ["Split AC", "Window AC", "Cassette AC", "Ductable AC", "Tower AC"]
    },
    {
      id: 2,
      title: "HVAC",
      items: [
        "Standard & Custom Air Handling Units",
        "Terminal Units",
        "VRF System",
        "Evaporative Cooling System",
        "Dampers, Louvers, Diffusers & Grills",
        "Exhaust and Fresh Air Fans",
        "Air Curtains"
      ]
    },
    {
      id: 3,
      title: "BMS",
      items: [
        "Supervisory Controllers",
        "DDC Controllers",
        "Sensors",
        "Thermostats",
        "Valves",
        "Panels"
      ]
    },
    {
      id: 4,
      title: "SYSTEM SERVICE & ANNUAL MAINTENANCE",
      items: ["24 X 7 Available"]
    }
  ]

  const servicesData = {
    AC: {
      title: "Air Conditioning",
      icon: "❄️",
      description: "Precision cooling for every space type.",
      items: ['Split & Window AC', 'Cassette Units', 'Ductable Systems', 'Tower ACs', 'VRF Technology']
    },
    HVAC: {
      title: "HVAC Systems",
      icon: "⚡",
      description: "Industrial grade air handling and ventilation.",
      items: ['Air Handling Units (AHU)', 'Terminal Units', 'Evaporative Cooling', 'Exhaust & Fresh Air Fans', 'Dampers & Louvers']
    },
    BMS: {
      title: "BMS & Automation",
      icon: "🧠",
      description: "Smart control for intelligent buildings.",
      items: ['DDC Controllers', 'Smart Sensors', 'Thermostats', 'Valve Automation', 'Control Panels']
    }
  }

  return (
    <div className="w-full bg-[#FAFAFA] text-gray-900 font-sans selection:bg-[#FFEB3B] selection:text-black">
      
      {/* --- BANNER CAROUSEL SECTION --- */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: '1920/600' }}>
          {/* Banner Images */}
          <div className="relative w-full h-full">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentBanner
                    ? 'w-8 bg-[#4CAF50]'
                    : 'w-2 bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- HERO SECTION: Asymmetric Editorial --- */}
      <section className="relative pt-16 md:pt-20 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFEB3B]/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4CAF50]/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4"></div>

        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">OUR IDENTITY</h2>
              <div className="h-1 w-24 bg-[#FFEB3B] mx-auto lg:mx-0 rounded-full"></div>
            </div>

            {/* Name Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Name:</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#4CAF50]">Windsmit air</span> is an expression of our attitude, motto, and efforts to create healthier and pleasant spaces. The name signifies <span className="font-semibold">"smiling air (SMIT)"</span> and emphasizes our belief in providing clean, pure, and happy air through design and engineering.
              </p>
            </div>

            {/* Logo Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Logo:</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our logo is a <span className="font-semibold">"little gratitude"</span> to the sun, which energizes the earth and provides business opportunities. The logo features a <span className="font-semibold text-[#FFEB3B]">yellow background</span> to represent the sun's energy and <span className="font-semibold text-[#4CAF50]">green color</span> to characterize trees as a source of healthy air. Additionally, <span className="font-semibold">flags over the alphabet 'I'</span> symbolizes the direction of blowing wind towards the winning approach. <span className="font-semibold">(WIN)</span>.
              </p>
            </div>
          </div>

          {/* Hero Visual - Image */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769151584/Untitled_design_uaxe8z.png"
                alt="Clean Air Day"
                className="w-full h-auto object-cover rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Section with Contact Details */}
      <section className="w-full relative overflow-hidden bg-black py-4 md:py-6">
        <div className="relative w-full">
          {/* Background Image */}
          <img 
            src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769166501/White_and_Blue_Modern_Air_Conditioning_Installation_Services_Facebook_Post_Landscape_1920_x_600_mm_1_zydfot.svg" 
            alt="Cooler" 
            className="w-full h-auto object-cover"
          />
          
          {/* Contact Details Overlay - Right Side */}
          <div className="absolute top-0 right-0 h-full w-full md:w-1/2 lg:w-2/5 flex items-center justify-center pr-4 md:pr-6 lg:pr-8">
            <div className="max-w-md text-white text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 drop-shadow-lg">Contact Us</h2>
               
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 drop-shadow-md">Get in Touch</h3>
                  <p className="text-base md:text-lg text-white leading-relaxed drop-shadow-md">
                    Ready to improve your indoor air quality? Contact us today for expert HVAC solutions, installation, and maintenance services.
                  </p>
                </div>
                
                <button className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold uppercase hover:bg-gray-700 transition-colors text-base md:text-lg">
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 px-6 md:px-12 bg-white text-gray-900">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="space-y-8">
              {/* Subtitle */}
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-12 bg-[#4CAF50]"></div>
                <span className="text-sm font-medium uppercase tracking-wider text-gray-600">OUR SERVICES</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                WE WILL PROVIDE YOU THE BEST SERVICE
              </h2>

              {/* CTA Button */}
              <button className="px-8 py-4 bg-[#fff121] text-black rounded-lg font-semibold uppercase flex items-center gap-2 hover:bg-[#45a049] transition-colors">
                OUR SERVICES
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Section - Service Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Service Card 1: AIR CONDITIONING */}
              <div className="bg-gray-50 rounded-lg p-4 shadow-lg border border-gray-100 flex flex-col items-center text-center relative min-h-[200px]">
                {/* Icon */}
                <div className="mb-3">
                  <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Separator Line */}
                <div className="h-0.5 w-12 bg-[#4CAF50] mb-3"></div>
                {/* Text */}
                <h3 className="text-xs font-bold uppercase text-gray-900 mb-4 leading-tight">AIR CONDITIONING</h3>
                {/* Plus Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleService(1)
                  }}
                  className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center hover:scale-110 transition-transform"
                  type="button"
                >
                  {Boolean(openServices[1]) ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </button>
                {/* Dropdown Content */}
                {Boolean(openServices[1]) && (
                  <div className="w-full mt-3 animate-fade-in">
                    <ul className="space-y-2 text-left text-gray-700 text-xs">
                      {servicesList[0].items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#4CAF50] mr-2 font-bold text-2xl leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Service Card 2: HVAC */}
              <div className="bg-gray-50 rounded-lg p-4 shadow-lg border border-gray-100 flex flex-col items-center text-center relative min-h-[200px]">
                {/* Icon */}
                <div className="mb-3">
                  <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                {/* Separator Line */}
                <div className="h-0.5 w-12 bg-[#4CAF50] mb-3"></div>
                {/* Text */}
                <h3 className="text-xs font-bold uppercase text-gray-900 mb-4 leading-tight">HVAC</h3>
                {/* Plus Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleService(2)
                  }}
                  className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center hover:scale-110 transition-transform"
                  type="button"
                >
                  {Boolean(openServices[2]) ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </button>
                {/* Dropdown Content */}
                {Boolean(openServices[2]) && (
                  <div className="w-full mt-3 animate-fade-in">
                    <ul className="space-y-2 text-left text-gray-700 text-xs">
                      {servicesList[1].items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#4CAF50] mr-2 font-bold text-2xl leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Service Card 3: BMS */}
              <div className="bg-gray-50 rounded-lg p-4 shadow-lg border border-gray-100 flex flex-col items-center text-center relative min-h-[200px]">
                {/* Icon */}
                <div className="mb-3">
                  <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                {/* Separator Line */}
                <div className="h-0.5 w-12 bg-[#4CAF50] mb-3"></div>
                {/* Text */}
                <h3 className="text-xs font-bold uppercase text-gray-900 mb-4 leading-tight">BMS</h3>
                {/* Plus Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleService(3)
                  }}
                  className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center hover:scale-110 transition-transform"
                  type="button"
                >
                  {Boolean(openServices[3]) ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </button>
                {/* Dropdown Content */}
                {Boolean(openServices[3]) && (
                  <div className="w-full mt-3 animate-fade-in">
                    <ul className="space-y-2 text-left text-gray-700 text-xs">
                      {servicesList[2].items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#4CAF50] mr-2 font-bold text-2xl leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Service Card 4: SYSTEM SERVICE & ANNUAL MAINTENANCE */}
              <div className="bg-gray-50 rounded-lg p-4 shadow-lg border border-gray-100 flex flex-col items-center text-center relative min-h-[200px]">
                {/* Icon */}
                <div className="mb-3">
                  <svg className="w-12 h-12 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                {/* Separator Line */}
                <div className="h-0.5 w-12 bg-[#4CAF50] mb-3"></div>
                {/* Text */}
                <h3 className="text-xs font-bold uppercase text-gray-900 mb-4 leading-tight">SYSTEM SERVICE & ANNUAL MAINTENANCE</h3>
                {/* Plus Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleService(4)
                  }}
                  className="w-8 h-8 rounded-full bg-[#4CAF50] flex items-center justify-center hover:scale-110 transition-transform"
                  type="button"
                >
                  {Boolean(openServices[4]) ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </button>
                {/* Dropdown Content */}
                {Boolean(openServices[4]) && (
                  <div className="w-full mt-3 animate-fade-in">
                    <ul className="space-y-2 text-left text-gray-700 text-xs">
                      {servicesList[3].items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#4CAF50] mr-2 font-bold text-2xl leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS & INTRO: The "Ticker" --- */}
      <section className="border-y border-black/5 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12">
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="text-center md:text-left md:pr-8">
              <h3 className="text-4xl font-bold text-[#4CAF50] mb-2">2022</h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Established</p>
            </div>
            <div className="text-center md:px-8">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Projects Completed</p>
            </div>
            <div className="text-center md:text-right md:pl-8">
              <h3 className="text-4xl font-bold text-[#25D366] mb-2">24/7</h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Active Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES: Interactive Tabs (Modern UX) --- */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <div className="h-1 w-20 bg-[#FFEB3B] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar Controls */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {Object.keys(servicesData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveService(key)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border-2 ${
                    activeService === key 
                      ? 'bg-white border-[#4CAF50] shadow-lg scale-[1.02]' 
                      : 'bg-transparent border-transparent hover:bg-white hover:border-gray-200 text-gray-500'
                  }`}
                >
                  <span className="text-2xl mb-2 block filter grayscale-[0.5]">{servicesData[key].icon}</span>
                  <span className={`text-lg font-bold block ${activeService === key ? 'text-[#4CAF50]' : 'text-gray-900'}`}>
                    {servicesData[key].title}
                  </span>
                </button>
              ))}
            </div>

            {/* Content Display Area */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFEB3B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                
                <div className="relative z-10 animate-fade-in">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{servicesData[activeService].title}</h3>
                  <p className="text-xl text-gray-500 mb-8">{servicesData[activeService].description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {servicesData[activeService].items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-[#4CAF50]/5 transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#4CAF50] group-hover:border-[#4CAF50] transition-colors">
                          ✓
                        </div>
                        <span className="font-medium text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION: The "Yin Yang" Cards --- */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Mission Card - Dark Green */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#1a441b] text-white p-10 md:p-16 transition-transform duration-500 hover:scale-[1.01]">
             <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="relative z-10">
               <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">Our Purpose</span>
               <h3 className="text-4xl font-bold mb-6">The Mission</h3>
               <p className="text-lg text-white/80 leading-relaxed">
                 To create comfortable yet sustainable futures through high-quality HVAC solutions that preserve natural resources and minimize environmental impact.
               </p>
               <div className="mt-10 w-16 h-16 rounded-full bg-[#4CAF50] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                 🎯
               </div>
             </div>
          </div>

          {/* Vision Card - Bright Yellow Accent */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#FFEB3B] text-black p-10 md:p-16 transition-transform duration-500 hover:scale-[1.01]">
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/30 rounded-full blur-2xl"></div>
             <div className="relative z-10">
               <span className="inline-block px-3 py-1 bg-black/5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">Our Future</span>
               <h3 className="text-4xl font-bold mb-6">The Vision</h3>
               <p className="text-lg text-black/80 leading-relaxed font-medium">
                 To be the premier provider of innovative, cost-effective, sustainable HVAC solutions across the nation while educating about indoor air quality.
               </p>
               <div className="mt-10 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                 👁️
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* --- VALUES: Bento Grid Layout --- */}
      <section className="py-24 px-6 md:px-12 bg-[#FAFAFA]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Large Card */}
            <div className="md:col-span-2 row-span-1 bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow flex flex-col justify-between group">
              <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-[#4CAF50] group-hover:text-white transition-colors">🤝</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-500">We promise honesty and transparency. We maintain our word with absolute commitment to our clients.</p>
              </div>
            </div>

            {/* Standard Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow flex flex-col justify-between group">
              <div className="w-12 h-12 rounded-full bg-[#FFEB3B]/20 flex items-center justify-center text-2xl mb-4 group-hover:bg-[#FFEB3B] transition-colors">👥</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Customer Pivotal</h3>
                <p className="text-gray-500 text-sm">We win when you are satisfied.</p>
              </div>
            </div>

             {/* Standard Card */}
             <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow flex flex-col justify-between group">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">🌈</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Inclusion</h3>
                <p className="text-gray-500 text-sm">Fostering a culture of mutual respect.</p>
              </div>
            </div>

            {/* Large Card */}
            <div className="md:col-span-2 row-span-1 bg-gradient-to-br from-[#4CAF50]/5 to-[#4CAF50]/10 rounded-3xl p-8 border border-[#4CAF50]/10 hover:shadow-xl transition-shadow flex flex-col justify-between group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl mb-4 shadow-sm">🎯</div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-[#2E7D32]">Purpose Driven</h3>
                <p className="text-[#4CAF50] font-medium">Aligning our mission, vision, and values to serve a greater purpose beyond profits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAINTENANCE CTA: Full Width --- */}
      <section className="py-24 bg-[#111] text-white relative overflow-hidden">
        {/* Abstract Lines */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="inline-block p-3 rounded-full bg-[#FFEB3B] text-black mb-8 animate-bounce">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Annual Maintenance?</h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Ensure your equipment runs efficiently for years. Our AMCs prevent excess expenses and improve equipment lifespan.
          </p>
          
          <button className="px-10 py-4 bg-[#4CAF50] text-white font-bold rounded-full text-lg hover:bg-[#25D366] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]">
            Get a Quote Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home