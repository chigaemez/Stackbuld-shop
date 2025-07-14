import { FaWind } from "react-icons/fa";
import { GiPerfumeBottle } from "react-icons/gi";
import { PiArmchairFill } from "react-icons/pi";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 px-[50px] py-[50px]">
      <h1 className="text-[40px] font-[700] ">What Makes Stack Stand Out</h1>
      <p className="text-[23px] font-[400] leading-[150%] my-2">Scents to Wear, Pieces to Share– Here’s Why You’ll Love Us</p>

      <div className="flex">
        <div className="w-[400px] h-[400px] bg-white shadow-lg rounded-lg m-4 p-6 items-center justify-center flex flex-col text-center">
          <FaWind className="text-[50px]"/>
          <h2 className="text-[24px] font-[600] mb-2">Elegant Scents</h2>
          <p className="text-[18px] font-[400]">Discover our curated collection of fragrances that linger like a memory.</p>
        </div>
        <div className="w-[400px] h-[400px] bg-white shadow-lg rounded-lg m-4 p-6 items-center justify-center flex flex-col text-center">
          <GiPerfumeBottle className="text-[50px]"/>
          <h2 className="text-[24px] font-[600] mb-2">Premium Quality</h2>
          <p className="text-[18px] font-[400]">Crafted with care, from soft, lasting fabrics to signature scents — designed to linger, last, and leave a lasting impression.</p>
        </div>

        <div className="w-[400px] h-[400px] bg-white shadow-lg rounded-lg m-4 p-6 items-center justify-center flex flex-col text-center">
          <PiArmchairFill className="text-[50px]"/>
          <h2 className="text-[24px] font-[600] mb-2">Timeless Furniture</h2>
          <p className="text-[18px] font-[400]">Explore furniture pieces that are not just functional but also a statement of style.</p>
        </div>
      </div>
    </div>
  )
}

export default About
