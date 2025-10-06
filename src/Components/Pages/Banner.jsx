import React from 'react';
import mern from '../../assets/mern.png';
import marketing from '../../assets/marketing.png';
import wordpress from '../../assets/wordpress.png';
import system from '../../assets/system.png';
import fluter from '../../assets/fluter.png';
import figma from '../../assets/figma.png';
import { IoCall } from 'react-icons/io5';
import arabic1 from '../../assets/image 9.png';
import arabic2 from '../../assets/Layer_1.png';
import frame from '../../assets/Frame 1618873276.png';
import { motion } from "framer-motion";


const Banner = () => {
    return (
        <section>
            <div className='relative lg:h-[950px] py-8 lg:py-30' style={{
                background: "linear-gradient(90deg, #D3EAFF 0%, #FFFFFF 50%, #D3EAFF 100%)"
            }}>
                {/* 1st text - Responsive */}
                <div className='flex  lg:flex-row justify-center items-center gap-5 lg:gap-20 py-5 px-4'>
                    {/* icons - hidden on mobile, visible on tablet and desktop */}
                    <div className=''>
                        <motion.img
                            animate={{ scale: [1, 1.2, 1] }}   // ছোট-বড়-ছোট হবে
                            transition={{
                                duration: 3,   // এক cycle করতে সময়
                                repeat: Infinity,  // বারবার চলবে
                                ease: "easeInOut"  // মসৃণ effect
                            }}
                            src={mern} alt="" className="w-12 lg:w-auto left-0 absolute md:relative" />
                    </div>
                    {/* text */}
                    <div className='text-center'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl yatraOne text-[#0062FF]'>Looking for Your One Stop Solution?</h1>
                    </div>
                    {/* icon2 - hidden on mobile, visible on tablet and desktop */}
                    <div className=''>
                        <motion.img
                            animate={{ scale: [1, 1.2, 1] }}   // ছোট-বড়-ছোট হবে
                            transition={{
                                duration: 3,   // এক cycle করতে সময়
                                repeat: Infinity,  // বারবার চলবে
                                ease: "easeInOut"  // মসৃণ effect
                            }}
                            src={marketing} alt="" className="w-12 lg:w-auto right-0 absolute md:relative" />
                    </div>
                </div>

                {/* 2nd text - Responsive */}
                <div className='flex  lg:flex-row justify-center items-center  lg:gap-30 py-3 px-4'>
                    {/* icons - hidden on mobile */}
                    <div className=''>
                        <motion.img
                            animate={{
                                y: [0, -20, 0], // vertical movement
                            }}
                            transition={{
                                duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut"
                            }}
                            src={wordpress} alt="" className="w-14 lg:w-auto left-0 absolute md:relative" />
                    </div>
                    {/* text */}
                    <div className='text-center'>
                        <h1 className='text-3xl md:text-4xl lg:text-6xl bitcount font-bold leading-tight lg:leading-20'>
                            Complete Digital Solutions <br className='hidden md:block' />
                            for Your Business
                        </h1>
                    </div>

                    <div className=''>
                        <motion.img
                            animate={{
                                y: [0, -20, 0], // vertical movement
                            }}
                            transition={{
                                duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut"
                            }}
                            src={system} alt="" className="w-9 lg:w-auto absolute right-0 md:relative" />
                    </div>
                </div>

                {/* button grid - Responsive */}
                <div className='flex flex-wrap justify-center gap-2 py-6 lg:py-8 px-4 text-sm'>
                    <button className='bg-blue-900 text-white py-1 px-3 lg:px-4 rounded-[8px] jetBrains text-xs lg:text-sm'>Web Application</button>
                    <button className='py-1 px-3 lg:px-4 bg-blue-50 rounded-[8px] jetBrains text-xs lg:text-sm'>Mobile Application</button>
                    <button className='py-1 px-3 lg:px-4 bg-blue-50 rounded-[8px] jetBrains text-xs lg:text-sm'>API Integration</button>
                    <button className='py-1 px-3 lg:px-4 bg-blue-50 rounded-[8px] jetBrains text-xs lg:text-sm'>Digital Marketing</button>
                    <button className='py-1 px-3 lg:px-4 bg-blue-50 rounded-[8px] jetBrains text-xs lg:text-sm'>UI/UX</button>
                    <button className='py-1 px-3 lg:px-4 bg-blue-50 rounded-[8px] jetBrains text-xs lg:text-sm'>Domain Hosting</button>
                    <button className='py-1 px-3 lg:px-4 bg-blue-50 rounded-[8px] jetBrains text-xs lg:text-sm'>Tech Consultency</button>
                </div>

                {/* button2 - Responsive */}
                <div className='flex  lg:flex-row justify-center items-center py-6 gap-5 lg:gap-40 px-4'>
                    {/* icons - hidden on mobile */}
                    <div className=''>
                        <motion.img
                            animate={{ scale: [1, 1.2, 1] }}   // ছোট-বড়-ছোট হবে
                            transition={{
                                duration: 3,   // এক cycle করতে সময়
                                repeat: Infinity,  // বারবার চলবে
                                ease: "easeInOut"  // মসৃণ effect
                            }}
                            src={fluter} alt="" className="w-10 lg:w-auto md:left-0 left-3 md:top-0  top-88 absolute md:relative" />
                    </div>
                    <div className='flex flex-col sm:flex-row gap-3 bg-blue-50 p-2 rounded-md w-full max-w-md'>
                        <button className='bg-black text-white py-2 overpass px-3 rounded-lg flex justify-center items-center gap-2 text-sm lg:text-base'>
                            <IoCall className='bg-blue-500 text-xl p-1 h-6 w-6 rounded-md' />
                            Book an intro Call
                        </button>
                        <button className='bg-white rounded-lg border py-2 px-4 font-semibold overpass text-sm lg:text-base'>
                            Explore Our Works
                        </button>
                    </div>
                    <div className=''>
                        <motion.img
                            animate={{ scale: [1, 1.2, 1] }}   // ছোট-বড়-ছোট হবে
                            transition={{
                                duration: 3,   // এক cycle করতে সময়
                                repeat: Infinity,  // বারবার চলবে
                                ease: "easeInOut"  // মসৃণ effect
                            }}
                            src={figma} alt="" className="w-10 lg:w-auto top-88 md:top-0 right-2 md:right-0 absolute md:relative" />
                    </div>
                </div>

                {/* arabic images - Responsive */}
                <div className='flex justify-center items-center gap-5 lg:gap-10 py-4 px-4'>
                    <img src={arabic1} alt="" className="w-20 lg:w-auto" />
                    <img src={arabic2} alt="" className="w-20 lg:w-auto" />
                </div>

                {/* frame - Responsive */}
                <div className='flex justify-center lg:justify-start mt-4  lg:pl-20'>
                    <img src={frame} alt="" className="w-24 h-22  md:w-45 md:h-40 " />
                </div>
            </div>
        </section>
    );
};

export default Banner;