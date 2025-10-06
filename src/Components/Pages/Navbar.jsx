import React, { useEffect, useState } from 'react';
import logo from '../../assets/web logo1 1 1.svg'
import { Link } from 'react-router';
import { PiSignIn } from 'react-icons/pi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoApps } from 'react-icons/io5';
import {
    FaGoogle, FaYoutube, FaEnvelope, FaCloud, FaCalendarAlt,
    FaMapMarkedAlt, FaFileAlt, FaImages, FaPlay, FaNewspaper, FaPhone
} from 'react-icons/fa';
import icon from '../../assets/Vector (5).png'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAppsOpen, setIsAppsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [hoveredService, setHoveredService] = useState(null);

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".apps-menu")) {
                setIsAppsOpen(false);
            }
            if (!e.target.closest(".services-menu")) {
                setIsServicesOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <nav
            className={`flex justify-between items-center py-5 px-18 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"
                }`}
        >
            {/* logo */}
            <div>
                <img src={logo} alt="" />
            </div>

            {/* navigation */}
            <div>
                <ul className='gap-3 flex font-semibold overpass relative'>
                    <Link>Home </Link>/
                    {/* Services dropdown */}
                    <div
                        className="relative services-menu group "
                    >
                        <button
                            className='flex justify-center items-center gap-1 cursor-pointer '
                            onMouseEnter={() => setIsServicesOpen(true)}
                        >
                            Services <MdKeyboardArrowDown />
                        </button>

                        {/* Dropdown Box */}
                        <div
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                            className={`absolute  transform -translate-x-1/6 top-full mt-8 bg-[#FFF8E7] rounded-md shadow-xl  w-[850px] z-50 flex transition-all duration-300 ease-in-out ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                                }`}
                        >
                            {/* Left side: service names */}
                            <div className="w-1/3 bg-[#FFF3C4] rounded-l-md p-5 border-r">
                                {services.map((service, i) => (
                                    <div
                                        key={i}
                                        onMouseEnter={() => setHoveredService(service)}
                                        className={`p-3 rounded-lg cursor-pointer mb-2 transition-all ${hoveredService?.name === service.name
                                            ? "bg-[#FFEA99] text-[#0062FF]"
                                            : "hover:bg-[#FFF7D1]"
                                            }`}
                                    >
                                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                                            <span><img src={icon} alt="icon" /></span> {service.name}
                                        </h3>
                                        {hoveredService?.name === service.name && (
                                            <p className="text-sm text-gray-600 ml-5 mt-1">
                                                {service.desc}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Right side: details */}
                            <div className="w-2/3 grid grid-cols-2 gap-5 p-6">
                                {hoveredService ? (
                                    hoveredService.details.map((item, idx) => (
                                        <div key={idx}>
                                            <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-2 flex items-center justify-center text-gray-400 italic">
                                        Hover a service name to see details →
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>/

                    <Link className='flex justify-center items-center gap-1'>Products <MdKeyboardArrowDown /></Link>/
                    <Link className='flex justify-center items-center gap-1'>Digital Marketing <MdKeyboardArrowDown /></Link>/
                    <Link className='flex justify-center items-center gap-1'>Web Hosting <MdKeyboardArrowDown /></Link>/
                    <Link className='flex justify-center items-center gap-1'>About <MdKeyboardArrowDown /></Link>/
                </ul>
            </div>

            {/* signup + apps */}
            <div className='flex gap-5 justify-center items-center relative'>
                <div>
                    <button className="btn overpass relative inline-flex items-center justify-center rounded-xl overflow-hidden font-medium transition-all bg-black gap-2 group py-2.5 px-5">
                        <span className="w-56 h-48 rounded bg-[#0062FF] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <PiSignIn className='text-white text-2xl relative transition-colors duration-300 ease-in-out ' />
                        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out font-semibold">My Account</span>
                    </button>
                </div>

                {/* apps icon */}
                <div className='relative apps-menu'>
                    <IoApps
                        onClick={() => setIsAppsOpen(!isAppsOpen)}
                        className='text-3xl text-gray-400 cursor-pointer hover:text-gray-600 transition'
                    />

                    {/* dropdown menu */}
                    {isAppsOpen && (
                        <div
                            className='absolute right-0 mt-7 w-64 bg-white rounded-2xl shadow-lg border p-3 grid grid-cols-3 gap-4 overflow-y-auto max-h-60'
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
    );
};

export default Navbar;
