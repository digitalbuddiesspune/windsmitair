import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  // Handle Scroll Effect with performance optimization
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-gray-200/50 shadow-sm py-2 sm:py-3'
            : 'bg-transparent border-transparent py-4 sm:py-5 md:py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between">
            
            {/* --- Logo Area --- */}
            <Link to="/" className="relative z-[101] flex items-center gap-2 group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://res.cloudinary.com/dvkxgrcbv/image/upload/v1769169572/43d9b706-5a0a-442d-a1da-394f1bfdce56.png"
                  alt="Windsmit Air"
                  className={`transition-all duration-500 ${
                    isScrolled ? 'h-8 sm:h-9 md:h-10' : 'h-10 sm:h-11 md:h-12'
                  } w-auto object-contain`}
                />
              </div>
            </Link>

            {/* --- Desktop Navigation --- */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <NavItem to="/" label="Home" isActive={location.pathname === '/'} isScrolled={isScrolled} />
              <NavItem to="/about" label="About" isActive={location.pathname === '/about'} isScrolled={isScrolled} />
              
              {/* Dropdown Trigger */}
              <div 
                className="relative px-3 xl:px-4 py-2 group cursor-pointer"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center gap-1.5 text-sm xl:text-[15px] font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-800 group-hover:text-black' 
                    : 'text-white group-hover:text-white/80'
                }`}>
                  Services
                  <svg 
                    className={`w-3 h-3 xl:w-3.5 xl:h-3.5 transition-transform duration-300 ${activeDropdown === 'services' ? '-rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* The Modern Floating Dropdown */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 xl:pt-6 transition-all duration-300 transform origin-top ${
                    activeDropdown === 'services' 
                      ? 'opacity-100 translate-y-0 visible' 
                      : 'opacity-0 translate-y-2 invisible'
                  }`}
                >
                  <div className="w-[280px] xl:w-[300px] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden p-2">
                    <DropdownLink title="Air Conditioning" desc="Installation & Repairs" />
                    <DropdownLink title="HVAC Systems" desc="Commercial Solutions" />
                    <DropdownLink title="BMS Integration" desc="Building Management" />
                    <DropdownLink title="Annual Maintenance" desc="Service Contracts" />
                  </div>
                </div>
              </div>

              <NavItem to="/blog" label="Blogs" isActive={location.pathname === '/blog'} isScrolled={isScrolled} />
            </div>

            {/* --- Right Actions --- */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
               {/* WhatsApp (Subtle) */}
               <a href="#" className={`group flex items-center justify-center w-9 h-9 xl:w-10 xl:h-10 rounded-full transition-all duration-300 ${
                 isScrolled
                   ? 'border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-600'
                   : 'border border-white/30 text-white hover:border-green-500 hover:text-green-500'
               }`}>
                  <svg className="w-4 h-4 xl:w-5 xl:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
               </a>

               {/* Premium CTA Button */}
               <Link 
                to="/contact" 
                className="relative overflow-hidden group bg-black text-white px-5 xl:px-7 py-2 xl:py-2.5 rounded-full text-xs xl:text-[14px] font-medium transition-all hover:shadow-lg hover:shadow-yellow-400/20"
               >
                 <span className="relative z-10 group-hover:text-[#fff212] transition-colors duration-300 flex items-center gap-1.5 xl:gap-2">
                   <span className="hidden xl:inline">Let's Talk</span>
                   <span className="xl:hidden">Talk</span>
                   <svg className="w-3.5 h-3.5 xl:w-4 xl:h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                 </span>
                 <div className="absolute inset-0 bg-gray-900 group-hover:bg-black transition-colors duration-300"></div>
               </Link>
            </div>

            {/* --- Mobile Menu Toggle --- */}
            <button 
              className="lg:hidden relative z-[101] w-9 h-9 sm:w-10 sm:h-10 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${isMobileMenuOpen ? 'w-5 sm:w-6 rotate-45 translate-y-2' : 'w-5 sm:w-6'}`}></span>
              <span className={`h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : 'w-3 sm:w-4 ml-1.5 sm:ml-2'}`}></span>
              <span className={`h-0.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${isMobileMenuOpen ? 'w-5 sm:w-6 -rotate-45 -translate-y-2' : 'w-5 sm:w-6'}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- Full Screen Mobile Menu Overlay --- */}
      <div 
        className={`fixed inset-0 z-[90] bg-white/95 backdrop-blur-xl lg:hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex flex-col justify-center px-6 sm:px-8 pt-16 sm:pt-20 pb-8">
          <div className="flex flex-col space-y-5 sm:space-y-6">
            <MobileNavLink to="/" label="Home" delay="100ms" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink to="/about" label="About Us" delay="150ms" onClick={() => setIsMobileMenuOpen(false)} />
            
            {/* Mobile Services Section */}
            <div className="border-l-2 border-gray-100 pl-3 sm:pl-4 py-2 space-y-2 sm:space-y-3" style={{ animationDelay: '200ms' }}>
              <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Services</p>
              <MobileSubLink label="Air Conditioning" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileSubLink label="HVAC Systems" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileSubLink label="BMS Integration" onClick={() => setIsMobileMenuOpen(false)} />
            </div>

            <MobileNavLink to="/blog" label="Blogs" delay="250ms" onClick={() => setIsMobileMenuOpen(false)} />
            
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 sm:mt-8 bg-[#fff212] text-black text-center py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold shadow-lg shadow-yellow-200 transform active:scale-95 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

// --- Sub Components for cleaner code ---

const NavItem = ({ to, label, isActive, isScrolled }) => (
  <Link 
    to={to} 
    className="relative px-3 xl:px-4 py-2 group overflow-hidden"
  >
    <span className={`relative z-10 text-sm xl:text-[15px] font-medium transition-colors duration-300 ${
      isScrolled
        ? isActive 
          ? 'text-black' 
          : 'text-gray-800 group-hover:text-black'
        : isActive
          ? 'text-white'
          : 'text-white group-hover:text-white/80'
    }`}>
      {label}
    </span>
    {/* Animated Underline */}
    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-[#fff212] transition-all duration-300 ${isActive ? 'w-4' : 'w-0 group-hover:w-full'}`}></span>
  </Link>
)

const DropdownLink = ({ title, desc }) => (
  <a href="#" className="flex flex-col px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group">
    <span className="text-sm font-semibold text-gray-900 group-hover:text-black">{title}</span>
    <span className="text-xs text-gray-500 group-hover:text-gray-600">{desc}</span>
  </a>
)

const MobileNavLink = ({ to, label, delay, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="text-3xl sm:text-4xl font-bold text-gray-900 hover:text-[#4CAF50] transition-colors tracking-tight"
  >
    {label}
  </Link>
)

const MobileSubLink = ({ label, onClick }) => (
  <a 
    href="#" 
    onClick={onClick}
    className="block text-base sm:text-lg font-medium text-gray-600 hover:text-black"
  >
    {label}
  </a>
)

export default Navbar