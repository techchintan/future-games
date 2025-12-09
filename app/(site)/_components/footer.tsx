"use client";

import {Button} from "@/components/ui/button";
import FacebookIcon from "@/icons/facebook";
import InstagramIcon from "@/icons/instagram";
import {cn, headerLinks} from "@/lib/utils";
import {PopularGamesQueryResult, RecentGamesQueryResult} from "@/sanity.types";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Footer = ({
  recentGames,
  popularGames,
}: {
  recentGames: NonNullable<RecentGamesQueryResult>;
  popularGames: NonNullable<PopularGamesQueryResult>;
}) => {
  const pathName = usePathname();
  return (
    <div>
<div className="border-y border-black/10 text-roboto">
      <div className="max-width-container padding-container py-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-xl font-semibold">Resources</h3>
            {headerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.link}
                className={cn("text-sm uppercase", pathName === link.link && "text-text-blue")}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-xl font-semibold">Recent Games</h3>
            {recentGames.map((game) => (
              <Link key={game._id} href="/" className="text-sm uppercase">
                {game.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-xl font-semibold">Top Games</h3>
            {popularGames.map((game) => (
              <Link key={game._id} href="/" className="text-sm uppercase">
                {game.title}
              </Link>
            ))}
          </div>
          <Button className="bg-btn-bg h-11 cursor-pointer rounded-full text-sm font-semibold tracking-[1px] text-white uppercase">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
    <div className="max-width-container padding-container py-4 flex flex-col md:flex-row gap-2 items-center justify-between">
        <div className='flex gap-4'>
            <FacebookIcon/>
            <InstagramIcon/>
        </div>
        <p>Copyright © {new Date().getFullYear()} Pokiigame.com</p>
    </div>
    </div>
    
  );
};

export default Footer;
