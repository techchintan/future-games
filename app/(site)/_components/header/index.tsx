'use client'

import SearchIcon from "@/icons/serachIcon";
import {cn, headerLinks} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathName = usePathname()
    return (
    <div className="border-border-color font-roboto fixed top-0 left-0 z-100 w-full border-b bg-white">
      <div className="max-width-container padding-container flex h-full justify-between">
        <div className="py-2">
          <Image
            src="/QwiQGames.webp"
            alt="QwiQGames logo"
            width={100}
            height={100}
            className="object-contain h-10 w-auto"
          />
        </div>
        <div className="flex max-h-full min-h-full items-center">
          {headerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.link}
              className={cn("border-border-color flex h-full items-center justify-center border-l px-6 text-sm uppercase", link.link === pathName && 'text-text-blue')}
            >
              {link.label}
            </Link>
          ))}
          <div
            role="button"
            className="border-border-color flex size-8 cursor-pointer items-center justify-center rounded-full border"
          >
            <SearchIcon color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
