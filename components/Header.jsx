"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { SiNike } from "react-icons/si";
import { MdShoppingCart } from "react-icons/md";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

const Header = () => {
    const { cartCount } = useCart();
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                // scrolling down
                setShowHeader(false);
            } else {
                // scrolling up
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`h-16 lg:h-20 fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${
                showHeader ? "translate-y-0" : "-translate-y-full"
            } bg-[#090b0f] text-white`}
        >
            <div className="h-full px-4 sm:px-8 flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-white font-semibold flex items-center">
                        <span className="text-6xl"><SiNike /></span>
                        <span className="ml-2 text-4xl">Nike</span>
                    </h1>
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/cart">
                        <div className="relative p-2">
                            <span className="relative text-2xl text-white/40 hover:text-white cursor-pointer">
                                <MdShoppingCart />
                            </span>
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-sm rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </Link>
                    <Link href="/login" className="bg-white text-black hover:bg-black hover:text-white hover:outline px-4 py-2">
                        Signup / Login
                    </Link>
                </div>

                <div className="flex items-center gap-2 xl:hidden">
                    <MobileNav />
                    <Link href="/cart">
                        <span className="text-2xl text-white/40 hover:text-white cursor-pointer">
                            <MdShoppingCart />
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
