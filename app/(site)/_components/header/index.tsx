"use client";

import SearchIcon from "@/icons/serachIcon";
import {cn, headerLinks} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Sidebar from "./Sidebar";
import {useEffect, useState} from "react";
import SearchDialog from "../searchDialog";

const Header = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="border-border-color fixed top-0 left-0 z-49 w-full border-b bg-white">
      <div className="max-width-container padding-container flex h-full justify-between">
        <div className="py-2">
          <Link href="/" onClick={() => isOpen && setIsOpen(false)}>
            <Image
              src="/QwiQGames.webp"
              alt="QwiQGames logo"
              width={100}
              height={100}
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>
        <div className="flex max-h-full min-h-full">
          <div className="hidden max-h-full min-h-full items-center md:flex">
            {headerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className={cn(
                  "border-border-color flex h-full items-center justify-center border-l px-6 text-sm uppercase hover:underline",
                  link.url === pathName && "text-text-blue",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <SearchDialog />
            <div className="md:hidden">
              <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
