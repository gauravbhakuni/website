"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { SiNike } from "react-icons/si";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import SearchBar from "./SearchBar";

const Header = () => {

    const handleSearch = (query) => {
        console.log(query);
      };

    return (
        <header className="py-8 xl:py-12 bg-black/60 text-white overflow-hidden">
            <div className="px-4 sm:px-8 flex justify-between items-center">

                {/* logo */}
                <Link href="/">
                    <h1 className="text-white font-semibold flex items-center">
                        <span className="text-6xl"><SiNike /></span>
                        <span className="ml-2 text-4xl">Nike</span>
                    </h1>
                </Link>

                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <SearchBar onSearch={handleSearch} />
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header;