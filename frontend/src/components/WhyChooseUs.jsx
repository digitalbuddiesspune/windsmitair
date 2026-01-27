function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Expert Technicians",
      description: "Our skilled technicians are experienced and certified, ensuring quick and reliable repairs for all your home appliances and their issues.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Affordable Pricing",
      description: "We offer competitive pricing without compromising on quality, making us the best choice for cost-effective appliance repairs in your area.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Customer Satisfaction",
      description: "Our commitment to quality service has earned us a loyal customer base that trusts us for timely and effective appliance repairs.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Prompt Service",
      description: "We prioritize your time with fast response rates, ensuring that we arrive when you need us most to get your appliances working again.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Doorsteps Service in 30 Minutes",
      description: "Our prompt doorstep service guarantees arrival within 30 minutes, ensuring swift assistance whenever you need it. We prioritize your convenience and satisfaction every time.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 6,
      title: "90 days repair services warranty",
      description: "Our 90-day repair service warranty ensures your peace of mind, covering any issues that arise after our expert repairs, guaranteeing quality and customer satisfaction.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  return (
    <section className="w-full bg-white">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left Panel - Background Image with Overlay */}
        <div className="relative bg-slate-900 flex items-center justify-center lg:justify-start px-6 md:px-12 lg:px-16 py-16 lg:py-24 order-2 lg:order-1 min-h-[500px] lg:min-h-[600px]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769498907/ac-repairman-repairs-cooling-system-service-illustration-svg-download-png-10616201_xacavx.png)'
            }}
          ></div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Title Content */}
          <div className="relative z-10 text-white px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Why choose <br />
              <span className="text-emerald-400">Windsmit Air?</span>
            </h2>
          </div>
        </div>

        {/* Right Panel - Features Grid */}
        <div className="bg-white px-6 md:px-12 lg:px-16 py-12 lg:py-16 order-1 lg:order-2 flex items-center min-h-[500px] lg:min-h-[600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="flex flex-col"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-emerald-500 flex items-center justify-center text-white shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
