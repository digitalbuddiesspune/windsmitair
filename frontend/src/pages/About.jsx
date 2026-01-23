import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function About() {
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

  const values = [
    { title: "Integrity", text: "We promise honesty and transparency with everyone, we maintain our word with commitment." },
    { title: "Customer Pivotal", text: "We win when our customers are satisfied. Even the customer's little requirement is more valuable to us." },
    { title: "Purpose Driven", text: "We are committed to making a positive impact on society and environment, by aligning our mission, vision, values and actions." },
    { title: "Diversity & Inclusion", text: "We value and embrace diversity, fostering a culture that is inclusive and promotes mutual respect." },
    { title: "Continuous Improvement", text: "We act on the small improvements; over time these changes have a bigger impact on solving challenges." }
  ]

  return (
    <div className="bg-gradient-to-br from-[#e8f5e9] via-[#f1f8e9] to-[#fff9c4] min-h-screen pb-24">

      {/* Hero Section */}
      <div className="relative flex flex-col" style={backgroundStyle}>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Rotating Image Overlay */}
      <div className="relative -mt-40 flex justify-center z-20">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ">
          <img
            src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769078801/Blue_and_Yellow_Modern_Air_Conditioner_Sale_Promotion_Instagram_Post_1080_x_1080_px_x4ejtl.svg"
            alt="Windsmit Air Conditioner"
            className="w-full h-full object-cover transition-transform duration-75 ease-out"
            style={{ transform: `rotate(${scrollRotation}deg)` }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* About Us Heading */}
        <div className="flex justify-center my-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-yellow-400 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-white border-2 border-green-600/20 px-16 py-5 rounded-2xl ">
              <h1 className="text-4xl md:text-5xl font-black text-[#1b5e20] tracking-tight">
                About Us
              </h1>
            </div>
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

        {/* Vision Section (Text Left, Image Right) */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl mb-12 border border-green-50 transition-all hover:shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-4 uppercase tracking-widest">Our Future</div>
              <h2 className="text-4xl font-black text-[#2e7d32] mb-6">VISION</h2>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                Our two-fold vision aims to be the premier provider of innovative, cost-effective, sustainable HVAC solutions to every remote corner of the nation, while educating people about the importance of indoor air quality for health and wellness.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769159573/visio._jjozfx.png" 
                alt="Vision" 
                className="w-full h-auto rounded-3xl object-cover shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>

        {/* Mission Section (Image Left, Text Right) */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl mb-24 border border-green-50 transition-all hover:shadow-2xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm mb-4 uppercase tracking-widest">Our Purpose</div>
              <h2 className="text-4xl font-black text-[#2e7d32] mb-6">MISSION</h2>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                At Windsmit Air, our sole purpose is to create a comfortable yet sustainable future, providing high-quality HVAC solutions that prioritize the preservation of natural resources to minimize environmental impact and promote energy efficiency.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769159581/vision222_oqft8h.png" 
                alt="Mission" 
                className="w-full h-auto rounded-3xl object-cover shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>

        {/* OUR VALUES SECTION */}
        <div className="mt-20">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-black text-green-900 mb-2">OUR VALUES</h2>
             <div className="h-1.5 w-24 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-md border-b-4 border-transparent hover:border-green-500 transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl font-black text-green-50/50 absolute top-4 right-4 group-hover:text-green-100 transition-colors">0{index + 1}</div>
                <h3 className="text-xl font-bold text-green-800 mb-4 relative z-10">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{val.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About