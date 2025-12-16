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
      <div className="text-roboto border-y border-black/10">
        <div className="max-width-container padding-container">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
            <div className="flex flex-col gap-4">
              <h3 className="mb-2 text-xl font-semibold">Resources</h3>
              {headerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.url}
                  className={cn(
                    "text-sm uppercase hover:underline",
                    pathName === link.url && "text-text-blue",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="mb-2 text-xl font-semibold">Recent Games</h3>
              {recentGames.map((game) => (
                <Link
                  key={game._id}
                  href={`/game/${game.game_slug?.current}` || "/"}
                  className="text-sm uppercase hover:underline"
                >
                  {game.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="mb-2 text-xl font-semibold">Top Games</h3>
              {popularGames.map((game) => (
                <Link
                  key={game._id}
                  href={`/game/${game.game_slug?.current}` || "/"}
                  className="text-sm uppercase hover:underline"
                >
                  {game.title}
                </Link>
              ))}
            </div>
            <Link href="/contact-us">
              <Button className="bg-btn-bg hover:bg-btn-bg h-11 cursor-pointer rounded-full text-sm font-semibold tracking-[1px] text-white uppercase">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-width-container padding-container flex flex-col items-center justify-between gap-2 py-4! md:flex-row">
        <div className="flex gap-4">
          <Link href="https://www.facebook.com" target="_blank">
            <FacebookIcon />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <InstagramIcon />
          </Link>
        </div>
        <p className="text-sm">Copyright © {new Date().getFullYear()} qwiqgames.com</p>
      </div>
    </div>
  );
};

export default Footer;
