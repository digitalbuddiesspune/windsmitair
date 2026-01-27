import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Services() {
  const acImages = [
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769512953/Untitled_1080_x_1080_px_2_p2grtr.svg", title: "High Wall Split AC", desc: "Sleek cooling for modern homes.", content: "High Wall Split ACs are the most popular choice for residential spaces. They offer whisper-quiet operation and advanced air purification filters. Designed to blend seamlessly with your interior decor, these units provide precise temperature control. They are highly energy-efficient, helping reduce electricity bills significantly." },
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769513344/cassette-ac-dealer-removebg-preview22_ecx7yj.png", title: "Cassette AC", desc: "Uniform 360° airflow.", content: "Cassette ACs are ideal for commercial spaces with false ceilings. They provide 360-degree uniform airflow, ensuring no hot spots in the room. The unit is discreetly tucked away, with only the decorative panel visible." },
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769512077/ductable55-removebg-preview_w3kwse.png", title: "Ductable AC", desc: "Centralized solutions for large spaces.", content: "Ductable ACs provide a centralized cooling solution for entire floors or large zones. They offer a clean aesthetic as only the supply and return grilles are visible. Highly recommended for premium residences and banquet halls." },
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769512293/Toweac2-removebg-preview__1_-removebg-preview_sao5e1.png", title: "Tower AC", desc: "High-capacity floor standing units.", content: "Tower ACs are high-capacity, floor-standing units designed for rapid cooling. They are the go-to solution for areas where wall or ceiling mounting is not feasible. Ideal for gyms and conference rooms." },
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769508123/window-ac-500x500-removebg-preview_musv8k.png", title: "Window AC", desc: "Economical cooling for compact spaces.", content: "Window ACs remain a classic, reliable, and cost-effective cooling option. These all-in-one units are easy to install in a standard window or wall opening. They are incredibly durable and require minimal maintenance." }
  ];




   const acMainImages = [
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769512747/Untitled_1080_x_1080_px_1_msyvy1.svg", title: "High Wall Split AC", desc: "Sleek cooling for modern homes.", content: "High Wall Split ACs are the most popular choice for residential spaces. They offer whisper-quiet operation and advanced air purification filters. Designed to blend seamlessly with your interior decor, these units provide precise temperature control. They are highly energy-efficient, helping reduce electricity bills significantly." },
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769515524/Gemini_Generated_Image_e3nicqe3nicqe3ni-removebg-preview_1_agc0pc.png", title: "Cassette AC", desc: "Uniform 360° airflow.", content: "Cassette ACs are ideal for commercial spaces with false ceilings. They provide 360-degree uniform airflow, ensuring no hot spots in the room. The unit is discreetly tucked away, with only the decorative panel visible." },
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769515422/Gemini_Generated_Image_28yeej28yeej28ye-removebg-preview_1_iirkfz.png", title: "Ductable AC", desc: "Centralized solutions for large spaces.", content: "Ductable ACs provide a centralized cooling solution for entire floors or large zones. They offer a clean aesthetic as only the supply and return grilles are visible. Highly recommended for premium residences and banquet halls." },
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769515403/Gemini_Generated_Image_qrdcjeqrdcjeqrdc-removebg-preview_1_p6wuig.png", title: "Tower AC", desc: "High-capacity floor standing units.", content: "Tower ACs are high-capacity, floor-standing units designed for rapid cooling. They are the go-to solution for areas where wall or ceiling mounting is not feasible. Ideal for gyms and conference rooms." },
    { url: "https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769515499/windowmain.-removebg-preview_pdabkd.png", title:"Window Ac",desc: "Economical cooling for compact spaces.", content: "Window ACs remain a classic, reliable, and cost-effective cooling option. These all-in-one units are easy to install in a standard window or wall opening. They are incredibly durable and require minimal maintenance." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. UPDATED BLACK SECTION: Removed h-screen on mobile, kept on desktop */}
      <section className="bg-black/90 pt-24 pb-10 md:pt-28 md:pb-16 md:min-h-screen flex flex-col items-center w-full overflow-hidden relative">


      
        <div className="max-w-4xl mx-auto px-6 w-full">
          
          <div className="text-center mb-4 mt-10" >
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Air Conditioning
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-green-500 mx-auto"></div>
          </div>

          <div className="relative max-w-4xl mx-auto mt-5">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
              pagination={{ clickable: true, el: '.custom-pagination' }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="w-full !overflow-visible"
            >
              {acImages.map((item, index) => (
<SwiperSlide className="max-w-[240px] sm:max-w-[300px] py-8">
                  <div className="relative bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Responsive image height */}
                    <div className="h-40 md:h-52 flex items-center justify-center mb-4 z-10 relative">
                      <img src={item.url} alt={item.title} className="max-h-full object-contain" />
                    </div>
                    <div className="text-center border-t border-gray-800 pt-4 z-10 relative">
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest">{item.desc}</p>
                    </div>
                    <div className="side-overlay absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 pointer-events-none z-20"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation controls */}
<div className="flex items-center justify-center space-x-6 mt-3 md:mt-6 relative z-30">
               <button className="custom-prev flex items-center group cursor-pointer">
                  <span className="text-white/30 group-hover:text-yellow-500 transition-colors text-sm uppercase tracking-tighter">Prev</span>
               </button>
               <div className="custom-pagination !static !w-auto"></div>
               <button className="custom-next flex items-center group cursor-pointer">
                  <span className="text-white/30 group-hover:text-yellow-500 transition-colors text-sm uppercase tracking-tighter">Next</span>
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GREEN PARAGRAPH */}
      <section className="bg-white py-16 md:py-24 w-full">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-green-700 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
We provide wide ranges of High Wall, Cassette, Window, Tower, Ductable, air conditioners to our customers depending on the their choices and requirements by calculating the section-space, north orientation, solar heat gain and other points considerations.          </p>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-8"></div>
        </div>
      </section>

      {/* 3. ALTERNATING PRODUCT DETAILS */}
{/* 3. ROOM AIR CONDITIONING – UNIFORM IMAGE + CENTERED CONTENT */}
<section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-16">
      Room <span className="text-yellow-500">Air Conditioning</span>
    </h2>

    <div className="space-y-20">
      {acMainImages.map((item, index) => (
        <div
          key={index}
          className={`
            group
            bg-white
            rounded-3xl
            border-2 border-yellow-400/40
            hover:border-yellow-500
            shadow-xl
            hover:shadow-2xl
            transition-all duration-500
            overflow-hidden
            flex flex-col md:flex-row
            ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}
          `}
        >
          {/* IMAGE SIDE – SAME SIZE FOR ALL */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-8">
            <div className="w-full h-[280px] md:h-[340px] flex items-center justify-center">
              <img
                src={item.url}
                alt={item.title}
                className="
                  max-h-full
                  max-w-full
                  object-contain
                  transform
                  group-hover:scale-110
                  transition-transform duration-500
                "
              />
            </div>
          </div>

          {/* CONTENT – PERFECTLY CENTERED VERTICALLY */}
          <div className="w-full md:w-1/2 flex items-center p-10 md:p-14">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 relative inline-block">
                {item.title}
                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-yellow-500"></span>
              </h3>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg mt-6">
                {item.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-slide { opacity: 0; transition: all 0.6s ease; }
        .swiper-slide-active { opacity: 1 !important; transform: scale(1.05); }
        .swiper-slide-prev, .swiper-slide-next { opacity: 0.8 !important; transform: scale(0.85); }
        .swiper-slide-prev .side-overlay, .swiper-slide-next .side-overlay { opacity: 1; }
        .custom-pagination .swiper-pagination-bullet { width: 6px; height: 6px; background: #fff; opacity: 0.2; margin: 0 4px !important; }
        .custom-pagination .swiper-pagination-bullet-active { opacity: 1; background: #eab308 !important; }
      `}} />
    </div>
  );
}

export default Services;