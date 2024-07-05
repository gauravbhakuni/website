"use client";

import Link from "next/link";
import { SiNike } from "react-icons/si";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'products',
    path: '/products'
  },
  {
    name: 'about us',
    path: '/aboutus'
  },
  {
    name: 'contact us',
    path: '/contactus'
  },
  {
    name: 'cart',
    path: '/cart'
  },
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-32 flex items-center justify-center">
          <Link href="/">
            <h1 className="text-white font-semibold flex items-center">
              <span className="text-6xl"><SiNike /></span>
              <span className="ml-4 text-4xl">Nike</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize font-medium hover:text-accent-hover transition-all`}>
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav