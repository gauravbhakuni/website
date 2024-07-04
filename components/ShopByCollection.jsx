"use client";

import Image from 'next/image';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowDownRightCircleFill } from "react-icons/bs";

import menCollection from "../public/assets/images/nike6.jpeg";
import womenCollection from "../public/assets/images/nike1.jpg";
import kidsCollection from "../public/assets/images/kidShoe.jpg";
import trendingCollection from "../public/assets/images/nike9.webp";

const ShopByCollection = () => {
    return (
        <div className="pt-10 bg-white h-[65vh] md:h-[50vh]">
            <h1 className="text-black text-4xl sm:text-5xl text-center pb-6">SHOP BY COLLECTIONS</h1>
            <div className="px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-8 h-[50vh] md:h-[44vh]">

                <div className="bg-blue-200 text-black text-center text-3xl relative overflow-hidden group">
                    <Image src={menCollection} alt="Men Collection" layout="fill" objectFit="cover" className="z-0 opacity-80 transition-transform duration-300 transform-gpu group-hover:scale-110 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-bold z-10 hover:text-white/40">Men</div>
                    <span className="absolute inset-0 items-end justify-end hidden group-hover:flex group-hover:text-orange-500 pr-4 pb-4 text-4xl z-10"><BsArrowRightCircleFill /></span>
                    <span className="absolute inset-0 flex items-end justify-end text-white group-hover:hidden pr-4 pb-4 text-4xl z-10"><BsArrowDownRightCircleFill /></span>
                </div>

                <div className="bg-blue-200 text-black text-center text-3xl relative overflow-hidden group">
                    <Image src={womenCollection} alt="Women Collection" layout="fill" objectFit="cover" className="z-0 opacity-80 transition-transform duration-300 transform-gpu group-hover:scale-110 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-bold z-10 hover:text-white/40">Women</div>
                    <span className="absolute inset-0 items-end justify-end hidden group-hover:flex group-hover:text-orange-500 pr-4 pb-4 text-4xl z-10"><BsArrowRightCircleFill /></span>
                    <span className="absolute inset-0 flex items-end justify-end text-white group-hover:hidden pr-4 pb-4 text-4xl z-10"><BsArrowDownRightCircleFill /></span>
                </div>

                <div className="bg-blue-200 text-black text-center text-3xl relative overflow-hidden group">
                    <Image src={kidsCollection} alt="Kids Collection" layout="fill" objectFit="cover" className="z-0 opacity-80 transition-transform duration-300 transform-gpu group-hover:scale-110 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-bold z-10 hover:text-white/40">For Kids</div>
                    <span className="absolute inset-0 items-end justify-end hidden group-hover:flex group-hover:text-orange-500 pr-4 pb-4 text-4xl z-10"><BsArrowRightCircleFill /></span>
                    <span className="absolute inset-0 flex items-end justify-end text-white group-hover:hidden pr-4 pb-4 text-4xl z-10"><BsArrowDownRightCircleFill /></span>
                </div>
                
                <div className="bg-blue-200 text-black text-center text-3xl relative overflow-hidden group">
                    <Image src={trendingCollection} alt="Trending Collection" layout="fill" objectFit="cover" className="z-0 opacity-80 transition-transform duration-300 transform-gpu group-hover:scale-110 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-bold z-10 hover:text-white/40">Trending</div>
                    <span className="absolute inset-0 items-end justify-end hidden group-hover:flex group-hover:text-orange-500 pr-4 pb-4 text-4xl z-10"><BsArrowRightCircleFill /></span>
                    <span className="absolute inset-0 flex items-end justify-end text-white group-hover:hidden pr-4 pb-4 text-4xl z-10"><BsArrowDownRightCircleFill /></span>
                </div>
            </div>
        </div>
    )
}

export default ShopByCollection;