import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function About() {
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [scrollRotation, setScrollRotation] = useState(0)

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
    backgroundImage: `url("https://img.freepik.com/premium-photo/group-happy-playful-indian-children-running-outdoors-park-asian-kids-playing-garden_979520-4965.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '65vh'
  }

  return (
    <div className="bg-gradient-to-br from-[#e8f5e9] via-[#f1f8e9] to-[#fff9c4]">

      {/* Hero Section */}
      <div className="relative flex flex-col" style={backgroundStyle}>
     
      </div>

      {/* Rotating Image */}
      <div className="relative -mt-40 flex justify-center z-20">
        <div className="w-70 h-70 md:w-80 md:h-80 rounded-2xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769078801/Blue_and_Yellow_Modern_Air_Conditioner_Sale_Promotion_Instagram_Post_1080_x_1080_px_x4ejtl.svg"
            alt="Windsmit Air Conditioner"
            className="w-full h-full object-cover transition-transform duration-75 ease-out"
            style={{ transform: `rotate(${scrollRotation}deg)` }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-[#e8f5e9] via-[#f1f8e9] to-[#fff9c4]">

        <div className="relative z-30 text-center my-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-black/50 bg-clip-text text-transparent drop-shadow-xl">
            About Us
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-8">

          <div className="text-center mb-16">
            <p className="text-lg md:text-2xl leading-relaxed text-gray-800 max-w-5xl mx-auto font-['Georgia',serif] font-light mb-6">
Windsmit Air is an emerging group in the city starting in 2022. We help in maintaining good indoor air quality through adequate ventilation with filtration and provide thermal comfort.
We offer perfect HVAC equipment design, installation, commissioning and maintenance services to control the inside climate conditions for part of residential structures such as single-family homes, apartment buildings, hotels, marriage halls, medium to large industrial and office buildings such as skyscrapers, hospitals, and malls. We are committed to modernizing India's infrastructure with greener, intelligent and smart buildings by providing entire building automation controls for energy savings and enhanced life of equipment.
            </p>
            <p className="text-lg md:text-2xl leading-relaxed text-gray-800 max-w-5xl mx-auto font-['Georgia',serif] font-light">
              We are committed to modernizing India's infrastructure with greener, intelligent and smart buildings.
            </p>
          </div>

          {/* ✅ ONLY CHANGE IS HERE */}
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">

            {/* Mission */}
            <div className="relative group mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50] to-[#66bb6a] rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-4xl font-bold text-[#2e7d32]">MISSION</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg font-['Lato',sans-serif]">
At Windsmit Air, our sole purpose is to create comfortable yet sustainable future, without compromising over-all occupant experience by providing High quality HVAC solutions that prioritize the preservation of natural resources to minimize our environmental impact and promote energy efficiency. Through our dedication to sustainable practices, we aim to build a better future for generations to come.                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8BC34A] to-[#CDDC39] rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-4xl font-bold text-[#2e7d32]">VISION</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg font-['Lato',sans-serif]">
Our two-fold vision aims to be the premier provider of innovative, cost effective, sustainable HVAC solutions and services, to every remote corner of the nation, while educating people about the critical importance of the indoor air quality for health and wellness. Simultaneously to provide a stable and supportive platform to empower talented individuals who are passionate and have potential about creating positive change in their communities and society.

                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
