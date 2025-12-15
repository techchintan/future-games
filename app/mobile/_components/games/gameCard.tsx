import {SanityImage} from "@/components/common/image";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {GamesQueryResult} from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";

const GameCard = ({game}: {game: NonNullable<GamesQueryResult>[number]}) => {
  return (
    <Card className="border-border-color gap-0 overflow-hidden rounded-2xl border p-0 shadow-none outline-none">
      <div className="h-[175px] min-h-[175px]">
        {game.thumbnail && (
          <SanityImage
            src={game.thumbnail}
            alt={game.title || ""}
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <CardContent className="flex h-full flex-col items-center justify-between gap-1 p-2">
        <p className="text-center text-sm">{game.title}</p>
        <div className="text-theme-Green flex items-center gap-1 text-[12px]">
          <div className="bg-theme-Green size-2.5 rounded-full" /> <span>25k users</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span>Entry:</span>
          <Image src="/coin.png" alt="coin" width={16} height={16} className="object-contain" />
          <span>10</span>{" "}
        </div>
        <Link href={`/game/${game.game_slug?.current}`} className="w-full">
          <Button className="bg-btn-bg hover:bg-btn-bg h-11 w-full cursor-pointer rounded-full tracking-[1px] text-white uppercase hover:brightness-90">
            Play Game
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default GameCard;
