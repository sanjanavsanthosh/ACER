import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import acer1 from './images/acer1.png'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import img1 from "./images/img1.jpeg"
import img2 from "./images/img2.jpg"
import vid1 from "./images/vid1.mp4"
import vid2 from "./images/vid2.mp4"
import com from "./images/com.png"
import com-2 from "./images/com-2.png"
import com-3 from "./images/com-3.png"
import com-4 from "./images/com-4.png"
import com-5 from "./images/com-5.png"
import com-6 from "./images/com-6.png"
import div1 from "./images/div1.png"
import div2 from "./images/div2.png"
import div3 from "./images/div3.png"
import div4 from "./images/div4.png"
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6"
import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { Squares2X2Icon, MapPinIcon, UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";


function App() {
 const slides = [
  { type: "video", src: vid2, title: "Smarter.Faster.Acer" },
  { type: "video", src: vid1, title: "Dive into the Depths of Immersive 3D" },
  { type: "image", src: img2, title: "Light as a Feather, Swift as an Arrow" },
  { type: "image", src: img1, title:"Explore. Evolve. Aspire. " }
 
]

const [current,setCurrent] = useState(0)

const nextSlide = ()=>{
  setCurrent((current+1)%slides.length)
}

const prevSlide = ()=>{
  setCurrent((current-1+slides.length)%slides.length)
}
  return (
    <>
      <div className='w-full h-full  overflow-x-hidden'>
        <div className="w-full h-[50px] bg-black flex items-center justify-between px-4 sm:px-6">

  
  <div className="flex items-center gap-2 text-white">
    <Squares2X2Icon className="w-4 h-4 sm:w-5 sm:h-5 ml-8"/>
    <p className="text-[12px] sm:text-[14px] md:text-[15px]">Acer Brands</p>
  </div>

  
  <div className="text-white text-[10px] sm:text-[12px] md:text-[14px] text-center">
    Discover the Best Deals at Acer Store - Shop Now!
  </div>

  
  <div className="flex items-center gap-3 sm:gap-4 text-white">
    <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5"/>
    <UserIcon className="w-4 h-4 sm:w-5 sm:h-5"/>
    <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-7"/>
  </div>

</div>
        </div>
          <div className='w-full h-[75px] flex justify-center bg-white'>
             <div className='w-[20%] h-[75px] flex justify-center bg-white'>
<img src={acer1} className='w-[100px] sm:w-[120px] h-[65px]' />
</div>
<div className='w-[60%] h-[75px] flex justify-center'>
 <div className="hidden lg:flex gap-8 text-[20px] mt-[20px]">
    <p className="cursor-pointer">Store</p>
    <p className="cursor-pointer">AI</p>
    <p className="cursor-pointer">Products</p>
    <p className="cursor-pointer">Business</p>
    <p className="cursor-pointer">Education</p>
    <p className="cursor-pointer">Support</p>
    <p className="cursor-pointer">Events</p>
  </div>

</div>
<MagnifyingGlassIcon className="w-6 h-6 text-black ml-auto mr-10 mt-[30px]" />
</div>
<div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">

  {/* Slides */}
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-700 ${
        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >

      {/* Image */}
      {slide.type === "image" && (
        <img
          src={slide.src}
          alt=""
          className="w-full h-full object-cover"
        />
      )}

      {/* Video */}
      {slide.type === "video" && (
        <video
          src={slide.src}
          autoPlay
          loop
          muted
           playsInline
          className="w-full h-full object-cover"
        />
      )}

      {/* Text Content */}
      <div className="absolute top-1/3 left-5 sm:left-10 md:left-16 text-white max-w-[90%] md:max-w-lg">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
          {slide.title}
        </h1>

        <button className="mt-4 sm:mt-6 bg-green-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-black font-semibold text-sm sm:text-base">
          Explore
        </button>
      </div>
    </div>
  ))}

  {/* Left Arrow */}
  <button
    onClick={prevSlide}
    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-white/40 p-2 sm:p-3 rounded-full z-20"
  >
    ❮
  </button>

  {/* Right Arrow */}
  <button
    onClick={nextSlide}
    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-white/40 p-2 sm:p-3 rounded-full z-20"
  >
    ❯
  </button>

  {/* Bottom Line Indicators */}
  <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
    {slides.map((_, index) => (
      <div
        key={index}
        onClick={() => setCurrent(index)}
        className={`h-[4px] w-6 sm:w-10 md:w-12 cursor-pointer transition-all duration-300 ${
          current === index ? "bg-green-500" : "bg-white"
        }`}
      ></div>
    ))}
  </div>

</div>

<div className="w-full flex flex-col justify-center items-center">


  <div className="w-full flex justify-center py-10">
    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
      Browse Popular Categories
    </p>
  </div>


  <div className="w-full overflow-x-auto">
    <div className="flex gap-6 px-6 min-w-max">

      <div className="flex flex-col items-center">
        <img src={com-3} className="w-[180px] sm:w-[200px] md:w-[220px] h-[150px] sm:h-[170px] md:h-[180px]" />
        <p className="text-[14px] sm:text-[16px] mt-2">Laptops</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={com-2} className="w-[180px] sm:w-[200px] md:w-[220px] h-[150px] sm:h-[170px] md:h-[180px]" />
        <p className="text-[14px] sm:text-[16px] mt-2">Desktops</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={com} className="w-[180px] sm:w-[200px] md:w-[220px] h-[150px] sm:h-[170px] md:h-[180px]" />
        <p className="text-[14px] sm:text-[16px] mt-2">Monitors</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={com-4} className="w-[180px] sm:w-[200px] md:w-[220px] h-[150px] sm:h-[170px] md:h-[180px]" />
        <p className="text-[14px] sm:text-[16px] mt-2">Projectors</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={com-6} className="w-[180px] sm:w-[200px] md:w-[220px] h-[150px] sm:h-[170px] md:h-[180px]" />
        <p className="text-[14px] sm:text-[16px] mt-2">Acer Chromebooks</p>
      </div>

      <div className="flex flex-col items-center">
        <img src={com-5} className="w-[180px] sm:w-[200px] md:w-[220px] h-[150px] sm:h-[170px] md:h-[180px]" />
        <p className="text-[14px] sm:text-[16px] mt-2">Graphic Cards</p>
      </div>

    </div>
  </div>


<div className="w-full py-20 flex flex-col items-center">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-16">
    Discover More with Acer
  </h1>
  <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
    <div className="flex flex-col">
      <img src={div1} className="w-full h-[200px] object-cover"/>
      <h2 className="text-2xl font-semibold mt-6">Windows 11</h2>
      <p className="text-black mt-2 text-[20px]">Introducing Windows 11</p>
      <p className="text-green-700 mt-5 cursor-pointer  font-semibold text-[20px]">Learn More</p>
    </div>
    <div className="flex flex-col">
      <img src={div2} className="w-full h-[200px] object-cover"/>
      <h2 className="text-2xl font-semibold mt-6">PC GAME PASS</h2>
      <p className="text-black mt-2 text-[20px]">
        Three-month trial included with your new Acer laptop.
      </p>
      <p className="text-green-700 mt-5 text-[20px]  font-semibold cursor-pointer">Learn More</p>
    </div>
    <div className="flex flex-col">
      <img src={div3} className="w-full h-[200px] object-cover"/>
      <h2 className="text-2xl font-semibold mt-6">Acer Vero</h2>
      <p className="text-black text-[20px] mt-2">Green PC Products</p>
      <p className="text-green-700 mt-5 text-[20px]  font-semibold cursor-pointer">Learn More</p>
    </div>
    <div className="flex flex-col">
      <img src={div4} className="w-full h-[200px] object-cover"/>
      <h2 className="text-2xl font-semibold mt-6">Windows 11 pro</h2>
      <p className="text-black mt-2 text-[20px]">Windows 11 Pro for Acer business laptops</p>
      <p className="text-green-700 mt-5 cursor-pointer text-[20px] font-semibold">Learn More</p>
    </div>
 </div>
</div>
<div 
  className='w-full h-[40px] sm:h-[45px] md:h-[50px] flex items-center justify-center bg-gray-50 cursor-pointer'
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <p className='text-[13px] sm:text-[14px] md:text-[15px] font-medium'>
    Back To Top
  </p>
</div>
<div className='bg-gray-100 w-full py-5'>

  <div className='w-full hidden lg:grid grid-cols-4 gap-10 '>

    <div className='px-16'>
       <h3 className="text-2xl font-semibold mb-4">Products</h3>
      <ul className='space-y-4 text-lg'>
        <li>Laptops</li>
        <li>Desktops</li>
        <li>Acer Chromebooks</li>
        <li>Tablet and Phones</li>
        <li>Monitors</li>
        <li>Projectors</li>
        <li>Digital Signage</li>
        <li>Electronics & Accessories</li>
        <li>Networking</li>
        <li>eMobility</li>
        <li>Handheld Gaming</li>
        <li>Appliances</li>
        <li>Sustainable Products</li>
      </ul>
    </div>

     <div>
      <h3 className="text-2xl font-semibold mb-4">Support</h3>
      <ul className="space-y-3 text-lg">
        <li>Acer ID</li>
        <li>Register a Product</li>
        <li>Acer Community</li>
        <li>Drivers and Manuals</li>
        <li>Acer Answers</li>
        <li>Contact Support</li>
      </ul>
    </div>

     <div>
      <h3 className="text-2xl font-semibold mb-4">Resources</h3>
      <ul className="space-y-3 text-lg">
        <li>Acer Corner</li>
        <li>Acer Global Account Portal</li>
        <li>Find a Store</li>
        <li>Acer Technologies</li>
        <li>McAfee</li>
      </ul>
    </div>


     <div>
      <h3 className="text-2xl font-semibold mb-4">About Acer</h3>
      <ul className="space-y-3 text-lg">
        <li>Contact Us</li>
        <li>Investor Relations</li>
        <li>Press</li>
        <li>Awards</li>
        <li>Events</li>
      </ul>

      <div className='py-12'>
        <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
        <ul className="space-y-3 text-lg">
        <li>Corporate Social Responsibility</li>
        <li>Product Carbon Footprint</li>
        <li>Project Humanity</li>
        <li>Earthion</li>
        
      </ul>
        
      </div>


    </div>

</div>

  <div className="w-full lg:hidden">

  <details className="">
    <summary className="flex justify-between items-center pl-4 py-4 font-medium cursor-pointer">
      Products
      <span>⌄</span>
    </summary>

    <ul className="bg-white pl-4 pb-4 pt-3 space-y-3 text-sm">
      <li>Laptops</li>
        <li>Desktops</li>
        <li>Acer Chromebooks</li>
        <li>Tablet and Phones</li>
        <li>Monitors</li>
        <li>Projectors</li>
        <li>Digital Signage</li>
        <li>Electronics & Accessories</li>
        <li>Networking</li>
        <li>eMobility</li>
        <li>Handheld Gaming</li>
        <li>Appliances</li>
        <li>Sustainable Products</li>
    </ul>
  </details>

  <details className="">
    <summary className="flex justify-between items-center pl-4 py-4 font-medium cursor-pointer">
      Support
      <span>⌄</span>
    </summary>

    <ul className=" bg-white pt-3 pl-4 pb-4 space-y-3 text-sm">
     <li>Acer ID</li>
        <li>Register a Product</li>
        <li>Acer Community</li>
        <li>Drivers and Manuals</li>
        <li>Acer Answers</li>
        <li>Contact Support</li>
    </ul>
  </details>


  <details className="">
    <summary className="flex justify-between items-center pl-4 py-4 font-medium cursor-pointer">
      Resources
      <span>⌄</span>
    </summary>

    <ul className=" bg-white pt-3 pl-4 pb-4 space-y-3 text-sm">
       <li>Acer Corner</li>
        <li>Acer Global Account Portal</li>
        <li>Find a Store</li>
        <li>Acer Technologies</li>
        <li>McAfee</li>
    </ul>
  </details>


  <details className="">
    <summary className="flex justify-between items-center pl-4 py-4 font-medium cursor-pointer">
    About Acer
      <span>⌄</span>
    </summary>

    <ul className=" bg-white pt-3 pl-4 pb-4 space-y-3 text-sm">
      <li>Acer ID</li>
      <li>Register a Product</li>
      <li>Acer Community</li>
    </ul>
  </details>

  <details className="">
    <summary className="flex justify-between items-center pl-4 py-4 font-medium cursor-pointer">
   Sustainability
      <span>⌄</span>
    </summary>

    <ul className=" bg-white pt-3 pl-4 pb-4 space-y-3 text-sm">
      <li>Corporate Social Responsibility</li>
        <li>Product Carbon Footprint</li>
        <li>Project Humanity</li>
        <li>Earthion</li>
    </ul>
  </details>

</div>



 <div className="w-[95%] mx-auto border-t border-gray-300 mt-5 lg:mt-15 "></div>
</div>
  <div className="w-full bg-gray-100 py-10 flex flex-col items-center">


<div className="flex gap-6 text-4xl mb-6">
<FaFacebook className="cursor-pointer"/>
<FaInstagram className="cursor-pointer"/>
<FaXTwitter className="cursor-pointer"/>
<FaYoutube className="cursor-pointer"/>
</div>


<div className="flex flex-wrap justify-center gap-5 text-[15px] text-gray-800  pb-4">
<p className="cursor-pointer">Privacy Policy</p>
<p>|</p>
<p className="cursor-pointer">Cookie Policy</p>
<p>|</p>
<p className="cursor-pointer">Legal Notice</p>
<p>|</p>
<p className="cursor-pointer">Additional Legal Information</p>
<p>|</p>
<p className="cursor-pointer">Accessibility Policy</p>
<p>|</p>
<p className="cursor-pointer">Cookies Settings</p>
</div>


<div className="flex items-center gap-2 mt-3 text-sm text-black font-semibold">
<GlobeAltIcon className="w-5"/>
<p>India - English</p>
</div>


<p className="text-sm text-gray-800 mt-3">
© 2026 Acer Inc.
</p>

</div>
  


</div>


    </>
  ) 
}

export default App
