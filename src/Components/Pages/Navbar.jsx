import React, { useEffect, useState } from 'react';
import logo from '../../assets/web logo1 1 1.svg'
// import icon from '../../assets/imgi_88_al-icon 1.png'
import { Link } from 'react-router';
import { PiSignIn } from 'react-icons/pi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoApps } from 'react-icons/io5';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (

        <nav className={`flex justify-between items-center py-5 px-18 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? " bg-white" : "bg-transparent"
            }`}>
            {/* logo */}
            <div>
                <img src={logo} alt="" />
            </div>
            {/* navigation */}
            <div>
                <ul className='gap-3 flex font-semibold overpass'>
                    <Link>Home </Link>/
                    <Link className='navbarClass'>Services <MdKeyboardArrowDown /></Link>/
                    <Link className='navbarClass'>Products <MdKeyboardArrowDown /></Link>/
                    <Link className='navbarClass'>Digital Marketing <MdKeyboardArrowDown /></Link>/
                    <Link className='navbarClass'>Web Hosting <MdKeyboardArrowDown /></Link>/
                    <Link className='navbarClass'>About <MdKeyboardArrowDown /></Link>/
                </ul>
            </div>
            {/* signup */}
            <div className='flex gap-5 justify-center items-center'>
                <div>
                    <button class="btn overpass relative inline-flex  items-center justify-center rounded-xl overflow-hidden font-medium transition-all bg-black gap-2 group py-2.5 px-5">
                        <span class="w-56 h-48 rounded bg-[#0062FF] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span><PiSignIn className='text-white text-2xl relative transition-colors duration-300 ease-in-out ' />
                        <span class="relative  w-full text-left text-white transition-colors duration-300 ease-in-out  font-semibold">My Account</span>
                    </button>
                </div>
                <div>
                    {/* <img src={icon} alt="" /> */}
                    <IoApps className='text-3xl text-gray-400' />
                </div>
            </div>
        </nav>

    );
};

export default Navbar;