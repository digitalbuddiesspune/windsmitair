import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
    <div className="bg-white min-h-screen pb-24">

      {/* Hero Section */}
      <div className="relative flex flex-col" style={backgroundStyle}>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Rotating Image Overlay - Pulled higher with -mt-48 */}
      <div className="relative -mt-40 flex justify-center z-20">
        <div className="w-64 h-64 md:w-70 md:h-70 rounded-full overflow-hidden shadow-2xl border-8 border-white">
          <img
            src="https://indiaclimatecollaborative.org/public/uploads/our_work/1/1722229640_1.webp"
            alt="Windsmit Air Conditioner"
            className="w-full h-full object-cover transition-transform duration-75 ease-out"
            style={{ transform: `rotate(${scrollRotation}deg)` }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* About Us Heading - Tightened margins to move up */}
        <div className="flex justify-center mt-6 mb-10">
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight relative z-10">
              About Us
            </h1>
            <div className="absolute -bottom-5 left-0 w-full h-2 bg-yellow-400/50 rounded-full"></div>
          </div>
        </div>

        {/* Main Intro Text */}
        <div className="text-center mb-24">
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 max-w-4xl mx-auto font-['Georgia',serif] mb-8">
          Windsmit Air is an emerging group in the city starting in 2022. We help in maintaining good indoor air quality through adequate ventilation with filtration and provide thermal comfort.
We offer perfect HVAC equipment design, installation, commissioning and maintenance services to control the inside climate conditions for part of residential structures such as single-family homes, apartment buildings, hotels, marriage halls, medium to large industrial and office buildings such as skyscrapers, hospitals, and malls. We are committed to modernizing India's infrastructure with greener, intelligent and smart buildings by providing entire building automation controls for energy savings and enhanced life of equipment.


          </p>
          <div className="inline-block p-[2px] bg-gradient-to-r from-green-500 to-yellow-500 rounded-lg">
             <div className="bg-white/90 backdrop-blur px-8 py-4 rounded-lg">
                <p className="text-lg md:text-xl text-green-800 font-bold italic">
                  "We are committed to modernizing India's infrastructure with greener, intelligent and smart buildings."
                </p>
             </div>
          </div>
        </div>

        {/* Vision & Mission Sections */}
        <div className="space-y-12 mb-24">
          {/* Vision */}
          <div className="p-8 md:p-12 transition-all">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 text-left">
                <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-4 uppercase tracking-widest">Our Future</div>
                <h2 className="text-4xl font-black text-[#2e7d32] mb-6">VISION</h2>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
Our two-fold vision aims to be the premier provider of innovative, cost effective, sustainable HVAC solutions and services, to every remote corner of the nation, while educating people about the critical importance of the indoor air quality for health and wellness. Simultaneously to provide a stable and supportive platform to empower talented individuals who are passionate and have potential about creating positive change in their communities and society.

                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769238611/Untitled_design_2_w1lmdm.png" 
                  alt="Vision" 
                  className="w-full h-auto rounded-3xl object-cover shadow-lg border-4 border-white"
                />
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="p-8 md:p-12 transition-all">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2 text-left">
                <div className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm mb-4 uppercase tracking-widest">Our Purpose</div>
                <h2 className="text-4xl font-black text-[#2e7d32] mb-6">MISSION</h2>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                 At Windsmit Air, our sole purpose is to create comfortable yet sustainable future, without compromising over-all occupant experience by providing High quality HVAC solutions that prioritize the preservation of natural resources to minimize our environmental impact and promote energy efficiency. Through our dedication to sustainable practices, we aim to build a better future for generations to come.
              </p>
</div>
              <div className="w-full md:w-1/2">
                <img 
                  src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769237073/ChatGPT_Image_Jan_24_2026_12_12_37_PM_pxjwos.jpg" 
                  alt="Mission" 
                  className="w-full h-auto rounded-3xl object-cover shadow-lg border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>

<div className="mt-20">
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-2">OUR VALUES</h2>
    <div className="h-1.5 w-24 bg-yellow-400 mx-auto rounded-full"></div>
  </div>
  
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {values.map((val, index) => {
    const isOpen = expandedIndex === index;

    return (
      <div 
        key={index} 
        className="bg-white flex flex-col items-start justify-center text-left p-4 rounded-xl shadow-sm border-t-4 border-green-600 transition-all duration-300 cursor-pointer hover:shadow-md h-fit"
        onClick={() => setExpandedIndex(isOpen ? null : index)}
      >
        <div className="flex justify-between items-center w-full">
          <h3 className="text-base font-bold text-green-800 uppercase tracking-tight">
            {val.title}
          </h3>
          <div className={`flex items-center justify-center w-6 h-6 rounded-full transition-colors ${isOpen ? 'bg-yellow-400' : 'bg-gray-100'}`}>
             <span className="text-lg font-bold text-green-900 leading-none">
               {isOpen ? '−' : '+'}
             </span>
          </div>
        </div>

        {/* Content Section */}
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <div className="h-0.5 w-12 bg-yellow-400 mb-3 rounded-full"></div>
          <p className="text-gray-700 text-xs leading-relaxed font-medium mb-3">
            {val.text}
          </p>
          <p className="text-[10px] text-green-700 font-bold italic bg-green-50 p-2 rounded border-l-2 border-green-600 w-full">
            {val.extra}
          </p>
        </div>
      </div>
    );
  })}
</div>
</div>

      </div>
    </div>
  )
}

export default About