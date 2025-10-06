import React, { useEffect, useState } from 'react';
import logo from '../../assets/web logo1 1 1.svg';
import { Link } from 'react-router';
import { PiSignIn } from 'react-icons/pi';
import { MdKeyboardArrowDown, MdClose, MdMenu } from 'react-icons/md';
import { IoApps } from 'react-icons/io5';
import { FaGoogle, FaYoutube, FaEnvelope, FaCloud, FaCalendarAlt, FaMapMarkedAlt, FaFileAlt, FaImages, FaPlay, FaNewspaper, FaPhone } from 'react-icons/fa';
import icon from '../../assets/Vector (5).png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const services = [
    {
      name: 'Web Development',
      desc: "> Build responsive and fast websites tailored to your business goals.",
      details: [
        { title: 'Frontend Development', desc: 'Building responsive and modern user interfaces.' },
        { title: 'Backend Development', desc: 'Creating secure and scalable backend systems.' },
        { title: 'Full Stack Solutions', desc: 'End-to-end web solutions for all industries.' }
      ]
    },
    {
      name: 'Mobile Application',
      desc: "> Develop cross-platform mobile apps with smooth performance.",
      details: [
        { title: 'Android Apps', desc: 'Native Android app development with Java/Kotlin.' },
        { title: 'iOS Apps', desc: 'Seamless iOS apps built with Swift.' },
        { title: 'Cross Platform', desc: 'React Native apps for both Android & iOS.' }
      ]
    },
    {
      name: 'UI/UX Design',
      desc: "> Design user-friendly and visually appealing interfaces.",
      details: [
        { title: 'Prototyping', desc: 'Low and high fidelity UI mockups for projects.' },
        { title: 'Wireframing', desc: 'Creative design layouts before development.' },
        { title: 'Brand Identity', desc: 'Design consistency for digital experiences.' }
      ]
    },
  ];

  // Effects
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".apps-menu")) setIsAppsOpen(false);
      if (!e.target.closest(".services-menu")) setIsServicesOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMobileDropdown = (itemName) => 
    setActiveMobileDropdown(activeMobileDropdown === itemName ? null : itemName);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 py-4 px-4 md:px-8 lg:px-18 flex justify-between items-center transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
        
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-3 font-semibold overpass">
          <Link to="/" className="hover:text-[#0062FF] transition-colors">Home</Link>/
          
          {/* Services Dropdown */}
          <div className="relative services-menu group">
            <button onMouseEnter={() => setIsServicesOpen(true)} className='flex items-center gap-1 hover:text-[#0062FF] transition-colors'>
              Services <MdKeyboardArrowDown />
            </button>
            <div onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} className={`absolute top-full mt-6.5 w-[850px] bg-[#FFF8E7] rounded-md shadow-xl flex transition-all -translate-x-1/6 duration-300 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
              {/* Services List */}
              <div className="w-1/3 bg-[#FFF3C4] rounded-l-md p-5 border-r">
                {services.map((service, i) => (
                  <div key={i} onMouseEnter={() => setHoveredService(service)} className={`p-3 rounded-lg cursor-pointer mb-2 transition-all ${hoveredService?.name === service.name ? "bg-[#FFEA99] text-[#0062FF]" : "hover:bg-[#FFF7D1]"}`}>
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                      <img src={icon} alt="icon" className="w-4 h-4" /> {service.name}
                    </h3>
                    {hoveredService?.name === service.name && <p className="text-sm text-gray-600 ml-5 mt-1">{service.desc}</p>}
                  </div>
                ))}
              </div>
              {/* Service Details */}
              <div className="w-2/3 grid grid-cols-2 gap-5 p-6">
                {hoveredService ? hoveredService.details.map((d, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-gray-800 mb-1">{d.title}</h4>
                    <p className="text-sm text-gray-600">{d.desc}</p>
                  </div>
                )) : <div className="col-span-2 flex items-center justify-center text-gray-400 italic">Hover a service name to see details →</div>}
              </div>
            </div>
          </div>/

          {/* Other Links */}
          <Link className='flex items-center gap-1 hover:text-[#0062FF] transition-colors'>Products <MdKeyboardArrowDown /></Link>/
          <Link className='flex items-center gap-1 hover:text-[#0062FF] transition-colors'>Digital Marketing <MdKeyboardArrowDown /></Link>/
          <Link className='flex items-center gap-1 hover:text-[#0062FF] transition-colors'>Web Hosting <MdKeyboardArrowDown /></Link>/
          <Link className='flex items-center gap-1 hover:text-[#0062FF] transition-colors'>About <MdKeyboardArrowDown /></Link>/
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl text-gray-700 p-2">
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Desktop Right Section */}
        <div className='hidden lg:flex gap-5 items-center'>
          <button className="btn overpass relative inline-flex items-center justify-center rounded-xl overflow-hidden font-medium transition-all bg-black gap-2 group py-2.5 px-5">
            <span className="w-56 h-48 rounded bg-[#0062FF] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <PiSignIn className='text-white text-2xl relative' />
            <span className="relative text-white font-semibold">My Account</span>
          </button>
          
          {/* Apps Dropdown - Original Design */}
          <div className='relative apps-menu'>
            <IoApps
              onClick={() => setIsAppsOpen(!isAppsOpen)}
              className='text-3xl text-gray-400 cursor-pointer hover:text-gray-600 transition'
            />
            {isAppsOpen && (
              <div
                className='absolute right-0 mt-6 w-64 bg-white rounded-2xl shadow-lg border p-3 grid grid-cols-3 gap-4 overflow-y-auto max-h-60'
              >
                {[
                  { icon: <FaGoogle />, name: "Google" },
                  { icon: <FaEnvelope />, name: "Gmail" },
                  { icon: <FaCloud />, name: "Drive" },
                  { icon: <FaCalendarAlt />, name: "Calendar" },
                  { icon: <FaMapMarkedAlt />, name: "Maps" },
                  { icon: <FaFileAlt />, name: "Docs" },
                  { icon: <FaImages />, name: "Photos" },
                  { icon: <FaYoutube />, name: "YouTube" },
                  { icon: <FaPlay />, name: "Play" },
                  { icon: <FaNewspaper />, name: "News" },
                  { icon: <FaPhone />, name: "Phone" },
                ].map((app, i) => (
                  <div
                    key={i}
                    className='flex flex-col items-center justify-center gap-1 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition'
                  >
                    <span className='text-2xl text-[#0062FF]'>{app.icon}</span>
                    <span className='text-xs font-medium text-gray-700'>{app.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 mt-16" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-white h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            
            {/* Account Button */}
            <div className="p-4 border-b">
              <button className="btn overpass relative inline-flex items-center justify-center rounded-xl overflow-hidden font-medium transition-all bg-black gap-2 group py-2.5 px-5 w-full">
                <PiSignIn className='text-white text-2xl relative' />
                <span className="relative text-white font-semibold">My Account</span>
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="p-4">
              <ul className="space-y-2">
                <li className="border-b border-gray-100">
                  <Link to="/" className="block py-3 font-semibold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                </li>
                
                {/* Services Dropdown - Mobile */}
                <li className="border-b border-gray-100">
                  <button onClick={() => toggleMobileDropdown('Services')} className="w-full flex justify-between items-center py-3 font-semibold text-gray-800">
                    Services <MdKeyboardArrowDown className={`transform transition-transform ${activeMobileDropdown === 'Services' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMobileDropdown === 'Services' && (
                    <div className="pb-3 space-y-4">
                      {services.map((service, i) => (
                        <div key={i} className="bg-[#FFF8E7] rounded-lg p-4 border border-[#FFF3C4]">
                          <div className="flex items-center gap-2 mb-2">
                            <img src={icon} alt="icon" className="w-4 h-4" />
                            <h4 className="font-semibold text-gray-800">{service.name}</h4>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
                          <div className="space-y-2">
                            {service.details.map((detail, idx) => (
                              <div key={idx} className="bg-white rounded-lg p-3">
                                <h5 className="font-medium text-gray-800 mb-1">{detail.title}</h5>
                                <p className="text-sm text-gray-600">{detail.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </li>

                {/* Other Dropdowns */}
                {['Products', 'Digital Marketing', 'Web Hosting', 'About'].map((item) => (
                  <li key={item} className="border-b border-gray-100">
                    <button onClick={() => toggleMobileDropdown(item)} className="w-full flex justify-between items-center py-3 font-semibold text-gray-800">
                      {item} <MdKeyboardArrowDown className={`transform transition-transform ${activeMobileDropdown === item ? 'rotate-180' : ''}`} />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Mobile Apps */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-4">Apps</h3>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { icon: <FaGoogle />, name: "Google" },
                    { icon: <FaEnvelope />, name: "Gmail" },
                    { icon: <FaCloud />, name: "Drive" },
                    { icon: <FaCalendarAlt />, name: "Calendar" },
                    { icon: <FaMapMarkedAlt />, name: "Maps" },
                    { icon: <FaFileAlt />, name: "Docs" },
                    { icon: <FaImages />, name: "Photos" },
                    { icon: <FaYoutube />, name: "YouTube" },
                  ].map((app, i) => (
                    <div
                      key={i}
                      className='flex flex-col items-center justify-center gap-1 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition'
                    >
                      <span className='text-xl text-[#0062FF]'>{app.icon}</span>
                      <span className='text-xs font-medium text-gray-700 text-center'>{app.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;