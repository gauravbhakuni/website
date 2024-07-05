"use client";

import Image from 'next/image';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowDownRightCircleFill } from "react-icons/bs";

import menCollection from "../public/assets/images/nike6.jpeg";
import womenCollection from "../public/assets/images/nike1.jpg";
import kidsCollection from "../public/assets/images/kidShoe.jpg";
import trendingCollection from "../public/assets/images/nike9.webp";
import Link from 'next/link';

const ShopByCollection = () => {
    return (
        <div className="pt-10 bg-white h-[65vh] md:h-[50vh]">
            <h1 className="text-black text-4xl sm:text-5xl text-center pb-6">SHOP BY COLLECTIONS</h1>
            <div className="px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-8 h-[50vh] md:h-[44vh]">

                <div className="bg-blue-200 text-black text-center text-3xl overflow-hidden group relative">
                    <div className="absolute inset-0">
                        <Image
                            src={menCollection}
                            alt="Men Collection"
                            layout="fill"
                            objectFit="cover"
                            className="z-0 opacity-80 transition-transform duration-300 transform-gpu group-hover:scale-110 group-hover:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-bold z-10 pointer-events-none">
                        Men
                    </div>
                    <Link href={{ pathname: '/collections', query: { collection: "Men" }}}  className="absolute bottom-4 right-4 items-end justify-end hidden group-hover:flex group-hover:text-orange-500 text-4xl z-20 cursor-pointer">
                        <BsArrowRightCircleFill />
                    </Link>
                    <span className="absolute bottom-4 right-4 flex items-end justify-end text-white group-hover:hidden text-4xl z-20 cursor-pointer">
                        <BsArrowDownRightCircleFill />
                    </span>
                </div>

                <div className="bg-blue-200 text-black text-center text-3xl overflow-hidden group relative">
                    <div className="absolute inset-0">
                        <Image
                            src={womenCollection}
                            alt="Men Collection"
                            layout="fill"
                            objectFit="cover"
                            className="z-0 opacity-80 transition-transform duration-300 transform-gpu group-hover:scale-110 group-hover:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-bold z-10 pointer-events-none">
                        Women
                    </div>
                    <Link href={{ pathname: '/collections', query: { collection: "Women" }}} passHref className="absolute bottom-4 right-4 items-end justify-end hidden group-hover:flex group-hover:text-orange-500 text-4xl z-20 cursor-pointer">
                        <BsArrowRightCircleFill />
                    </Link>
                    <span className="absolute bottom-4 right-4 flex items-end justify-end text-white group-hover:hidden text-4xl z-20 cursor-pointer">
                        <BsArrowDownRightCircleFill />
                    </span>
                </div>

                <div className="bg-blue-200 text-black text-center text-3xl overflow-hidden group relative">
                    <div className="inset-0">
                        <Image
                            src={kidsCollection}
                            alt="Men Collection"
                            layout="fill"
                            objectFit="cover"
                            className="z-0 opacity-80 transition-transform duration-300 transform-gpu group-hover:scale-110 group-hover:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-bold z-10 pointer-events-none">
                        Kids
                    </div>
                    <Link href={{ pathname: '/collections', query: { collection: "Kids" }}}  className="absolute bottom-4 right-4 items-end justify-end hidden group-hover:flex group-hover:text-orange-500 text-4xl z-20 cursor-pointer">
                        <BsArrowRightCircleFill />
                    </Link>
                    <span className="absolute bottom-4 right-4 flex items-end justify-end text-white group-hover:hidden text-4xl z-20 cursor-pointer">
                        <BsArrowDownRightCircleFill />
                    </span>
                </div>

                <div className="bg-blue-200 text-black text-center text-3xl overflow-hidden group relative">
                    <div className="absolute inset-0">
                        <Image
                            src={trendingCollection}
                            alt="Men Collection"
                            layout="fill"
                            objectFit="cover"
                            className="z-0 opacity-80 transition-transform duration-300 transform-gpu group-hover:scale-110 group-hover:opacity-100"
                        />
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-bold z-10 pointer-events-none">
                        Trending
                    </div>
                    <Link href={{ pathname: '/collections', query: { collection: "Trending" }}}  className="absolute bottom-4 right-4 items-end justify-end hidden group-hover:flex group-hover:text-orange-500 text-4xl z-20 cursor-pointer">
                        <BsArrowRightCircleFill />
                    </Link>
                    <span className="absolute bottom-4 right-4 flex items-end justify-end text-white group-hover:hidden text-4xl z-20 cursor-pointer">
                        <BsArrowDownRightCircleFill />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ShopByCollection;