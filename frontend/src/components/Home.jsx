import { useState } from 'react'

function Home() {
  const [activeService, setActiveService] = useState('AC')

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
      
      {/* --- HERO SECTION: Asymmetric Editorial --- */}
      <section className="relative pt-16 md:pt-5 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFEB3B]/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4CAF50]/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4"></div>

        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">Smiling Air • Clean & Pure</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Breathing Life <br />
              <span className="relative inline-block text-[#4CAF50]">
                Into Spaces
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFEB3B]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
              We engineer the invisible. Premium HVAC solutions that prioritize air quality, energy efficiency, and sustainable comfort for modern living.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="px-8 py-4 bg-[#111] text-white rounded-full font-medium transition-transform hover:-translate-y-1 hover:shadow-lg">
                Book Consultation
              </button>
              <button className="px-8 py-4 bg-white text-black border border-gray-200 rounded-full font-medium transition-colors hover:bg-gray-50 hover:border-[#4CAF50]">
                Explore Services
              </button>
            </div>
          </div>

          {/* Hero Visual - Abstract Composition */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 bg-white p-1.5 rounded-xl shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500 max-w-xs mx-auto">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[3/4] relative flex items-center justify-center">
                 {/* Abstract representation of air flow */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/20 to-[#FFEB3B]/20"></div>
                 <div className="text-5xl opacity-10"></div>
                 
                 {/* Floating Stats Card */}
                 <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-md border border-white/50">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Energy Saved</div>
                        <div className="text-xl font-bold text-[#4CAF50]">40%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Air Quality</div>
                        <div className="text-xl font-bold text-[#FFEB3B] drop-shadow-sm">99.9%</div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full relative overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769081376/White_and_Blue_Modern_Air_Conditioning_Installation_Services_Facebook_Post_Landscape_1920_x_600_mm_uzev7q.svg" 
          alt="Air Conditioning Installation Services" 
          className="w-full h-auto object-contain"
        />
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

      {/* --- FOOTER: Clean & Minimal --- */}
      <footer className="bg-white border-t border-gray-100 py-16 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
             <div className="text-2xl font-bold text-[#4CAF50] mb-2">winds<span className="text-black">m</span>ill</div>
             <p className="text-gray-400 text-sm">Making every space healthier and pleasant.</p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-[#4CAF50] transition-colors">Home</a>
            <a href="#" className="hover:text-[#4CAF50] transition-colors">Services</a>
            <a href="#" className="hover:text-[#4CAF50] transition-colors">Projects</a>
            <a href="#" className="hover:text-[#4CAF50] transition-colors">Contact</a>
          </div>

          <div className="text-gray-400 text-sm">
            © 2024 Windsmit Air.
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Home