import Advertisement from "@/app/(site)/(home)/_components/advertisement";
import HomeGames from "@/app/(site)/_components/games";
import HeroTitle from "@/app/(site)/(home)/_components/heroTitle";
import {SanityImage} from "@/components/common/image";
import {Button} from "@/components/ui/button";
import BackgroundImage from "@/icons/backgroundImage";
import {GameBySlugQueryResult, GamesQueryResult} from "@/sanity.types";
import Link from "next/link";

const GameDetail = ({
  gameData,
  games,
}: {
  gameData: NonNullable<GameBySlugQueryResult>;
  games: NonNullable<GamesQueryResult>;
}) => {
  return (
    <div>
      <div className="max-width-container padding-container flex flex-col pt-0! pb-8">
        <div className="relative flex flex-col items-center gap-4 pt-8 pb-4">
          <BackgroundImage className="absolute top-0 z-0 h-full w-full object-cover" />
          <h1 className="z-1 text-center text-5xl font-semibold italic">{gameData.title}</h1>
          {gameData.thumbnail && (
            <SanityImage
              src={gameData.thumbnail}
              alt={gameData.title || "game"}
              width={200}
              height={200}
              className="border-border-color z-1 border object-cover"
            />
          )}
          <Link href={`/play/${gameData.game_slug?.current}`}>
            <Button className="bg-btn-bg hover:bg-btn-bg hover:brightness-90 earn-coin-btn relative z-1 h-11 w-[300px] cursor-pointer overflow-hidden rounded-full tracking-[1px]">
              Start Game
            </Button>
          </Link>
        </div>

        <Advertisement className="w-full p-0!" />
        <div className="mt-4 flex flex-col gap-6">
          <p className="text-sm">{gameData.description}</p>
          <div className="flex gap-4">
            {gameData.genre?.split(" ").map((genre) => (
              <div
                key={genre}
                className="border-border-color hover:border-text-blue hover:text-text-blue cursor-pointer rounded-full border px-2 py-1 text-sm duration-300"
              >
                {genre}
              </div>
            ))}
          </div>
        </div>
      </div>
      <HeroTitle />
      <HomeGames games={games} />
    </div>
  );
};

export default GameDetail;
