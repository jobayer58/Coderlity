import React from 'react';
import mern from '../../assets/mern.png'
import marketing from '../../assets/marketing.png'
import wordpress from '../../assets/wordpress.png'
import system from '../../assets/system.png'
// import imgIcon from '../../assets/Polygon 2.png'
import fluter from '../../assets/fluter.png'
import figma from '../../assets/figma.png'
import { IoCall } from 'react-icons/io5';
import arabic1 from '../../assets/image 9.png'
import arabic2 from '../../assets/Layer_1.png'
import frame from '../../assets/Frame 1618873276.png'



const Banner = () => {
    return (
        <section>
            <div className='relative h-[950px] py-30' style={{
                background: "linear-gradient(90deg, #D3EAFF 0%, #FFFFFF 50%, #D3EAFF 100%)"
            }}>
                {/* 1st text */}
                <div className='flex justify-center items-center gap-20 py-5'>
                    {/* icon1 */}
                    <div>
                        <img src={mern} alt="" />
                    </div>
                    {/* text */}
                    <div className=''>
                        <h1 className='text-3xl yatraOne text-[#0062FF] '>Looking for Your One Stop Solution? </h1>
                    </div>
                    {/* icon2 */}
                    <div>
                        <img src={marketing} alt="" />
                    </div>
                </div>
                {/* 2nd text */}
                <div className='flex justify-center  gap-30 py-3'>
                    {/* icon 1 */}
                    <div>
                        <img src={wordpress} alt="" />
                    </div>
                    {/* text */}
                    <div>

                        <h1 className='text-6xl text-center font-bold leading-20'>Complete Digital Solutions  <br />for Your Business</h1>

                    </div>
                    {/* icon2 */}
                    <div>
                        <img src={system} alt="" />
                    </div>
                </div>
                {/* button */}
                <div className='flex justify-center items-center gap-2 py-8'>
                    <button className='bg-blue-900 text-white py-1 px-4 rounded-xl'>Web Application</button>
                    <button className='bannerBtn'>Mobile Application</button>
                    <button className='bannerBtn'>API Integration </button>
                    <button className='bannerBtn'>Digital Marketing</button>
                    <button className='bannerBtn'>UI/UX</button>
                    <button className='bannerBtn'>Domain Hosting</button>
                    <button className='bannerBtn'>Tech Consultency</button>
                </div>
                {/* button2 */}
                <div className='flex justify-center items-center py-6 gap-40'>
                    <div>
                        <img src={fluter} alt="" />
                    </div>
                    <div className='flex gap-3 bg-blue-50 p-2 rounded-md'>
                        <button className='bg-black text-white py-2 px-4 rounded-lg flex justify-center items-center gap-2'><IoCall className='bg-blue-500 text-xl p-1 h-6 w-6 rounded-md' /> Book an intro Call</button>
                        <button className='bg-white rounded-lg border py-1 px-4 font-semibold'>Explore Our Works</button>
                    </div>
                    <div>
                        <img src={figma} alt="" />
                    </div>
                </div>
                {/* img */}
                <div className='flex justify-center items-center gap-6'>
                    <img src={arabic1} alt="" />
                    <img src={arabic2} alt="" />
                </div>
                {/* frame */}
                <div>
                    <img src={frame} className='ml-20' alt="" />
                </div>

            </div>
        </section>
    );
};

export default Banner;