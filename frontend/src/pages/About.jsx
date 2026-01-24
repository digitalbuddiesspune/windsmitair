import { useState, useEffect } from 'react'
import Footer from '../components/Footer'

function About() {
  const [scrollRotation, setScrollRotation] = useState(0)
  const [expandedIndex, setExpandedIndex] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const rotation = scrollPosition * 1
      setScrollRotation(rotation)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const backgroundStyle = {
    backgroundImage: `url("https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769166218/White_and_Blue_Modern_Air_Conditioning_Installation_Services_Facebook_Post_Landscape_1920_x_600_mm_1920_x_600_mm_3_otucuu.svg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '65vh'
  }

  const values = [
    { 
      title: "Integrity", 
      text: "We promise honesty and transparency with everyone, we maintain our word with commitment.",
      extra: "We believe that trust is the foundation of every successful partnership and the bedrock of our reputation."
    },
    { 
      title: "Customer Pivotal", 
      text: "We win when our customers are satisfied. Even the customer's little requirement is more valuable to us.",
      extra: "Your comfort is our priority; we listen, adapt, and deliver beyond expectations for every home and office."
    },
    { 
      title: "Purpose Driven", 
      text: "We are committed to making a positive impact on society and environment, by aligning our mission and actions.",
      extra: "Our innovations are designed with the planet's health in mind, ensuring a greener tomorrow for all."
    },
    { 
      title: "Diversity & Inclusion", 
      text: "We value and embrace diversity, fostering a culture that is inclusive and promotes mutual respect.",
      extra: "Great ideas come from everywhere; we celebrate every unique perspective within our growing Windsmit family."
    },
    { 
      title: "Continuous Improvement", 
      text: "We act on the small improvements; over time these changes have a bigger impact on solving challenges.",
      extra: "Excellence is a journey, not a destination. We evolve our technology and services every single day."
    },
    { 
      title: "Sustainability", 
      text: "We prioritize eco-friendly HVAC solutions to reduce carbon footprints across India.",
      extra: "By integrating solar and energy-efficient cooling, we lead the way in responsible climate control."
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative flex flex-col" style={backgroundStyle}>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Rotating Image Overlay - Centered at border */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 flex justify-center">
          <div className="w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden p-2">
            <img
              src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769257673/Black_and_White_Modern_Electrical_Service_Instagram_Post_1_gfje7r.svg"
              alt="Windsmit Air Conditioner"
              className="w-full h-full object-contain transition-transform duration-75 ease-out"
              style={{ transform: `rotate(${scrollRotation}deg)` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-20 md:pt-24">
        
        {/* About Us Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <div className="h-1 w-24 bg-[#FFEB3B] mx-auto rounded-full mb-8"></div>
        </div>

        {/* Main Intro Text */}
        <div className="max-w-4xl mx-auto mb-20 md:mb-24">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center">
            Windsmit Air is an emerging group in the city starting in 2022. We help in maintaining good indoor air quality through adequate ventilation with filtration and provide thermal comfort.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center">
            We offer perfect HVAC equipment design, installation, commissioning and maintenance services to control the inside climate conditions for part of residential structures such as single-family homes, apartment buildings, hotels, marriage halls, medium to large industrial and office buildings such as skyscrapers, hospitals, and malls. We are committed to modernizing India's infrastructure with greener, intelligent and smart buildings by providing entire building automation controls for energy savings and enhanced life of equipment.
          </p>
          <div className="bg-gray-50 border-l-4 border-[#4CAF50] p-6 md:p-8 rounded-r-lg">
            <p className="text-lg md:text-xl text-gray-800 font-semibold italic text-center">
              "We are committed to modernizing India's infrastructure with greener, intelligent and smart buildings."
            </p>
          </div>
        </div>

        {/* Vision & Mission Sections */}
        <div className="space-y-20 md:space-y-24 mb-20 md:mb-24">
          {/* Vision */}
          <div>
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                    Our Future
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vision</h2>
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our two-fold vision aims to be the premier provider of innovative, cost effective, sustainable HVAC solutions and services, to every remote corner of the nation, while educating people about the critical importance of the indoor air quality for health and wellness. Simultaneously to provide a stable and supportive platform to empower talented individuals who are passionate and have potential about creating positive change in their communities and society.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769238611/Untitled_design_2_w1lmdm.png" 
                    alt="Vision" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div>
            <div className="flex flex-col md:flex-row-reverse items-start gap-8 md:gap-12">
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#FFEB3B]/20 text-yellow-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                    Our Purpose
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mission</h2>
                </div>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  At Windsmit Air, our sole purpose is to create comfortable yet sustainable future, without compromising over-all occupant experience by providing High quality HVAC solutions that prioritize the preservation of natural resources to minimize our environmental impact and promote energy efficiency. Through our dedication to sustainable practices, we aim to build a better future for generations to come.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769237073/ChatGPT_Image_Jan_24_2026_12_12_37_PM_pxjwos.jpg" 
                    alt="Mission" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20 md:mb-24">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#4CAF50]/10 text-[#4CAF50] text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="h-1 w-20 bg-[#FFEB3B] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, index) => {
              const isOpen = expandedIndex === index;

              return (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-md cursor-pointer"
                  onClick={() => setExpandedIndex(isOpen ? null : index)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900 pr-4">
                      {val.title}
                    </h3>
                    <button
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-[#4CAF50] text-white' : 'bg-gray-100 text-gray-600'
                      }`}
                      aria-label={isOpen ? 'Close' : 'Expand'}
                    >
                      <span className="text-lg font-bold leading-none">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                  </div>

                  {/* Content Section */}
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-4 space-y-3">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {val.text}
                      </p>
                      <div className="bg-gray-50 border-l-3 border-[#4CAF50] pl-4 py-2 rounded-r">
                        <p className="text-xs text-gray-600 italic leading-relaxed">
                          {val.extra}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default About
