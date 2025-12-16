import {
  CategoryBySlugQueryResult,
  GamesByCategoryQueryResult,
  GamesQueryResult,
} from "@/sanity.types";
import GameCard from "./gameCard";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const Games = ({
  games,
}: {
  games: NonNullable<GamesQueryResult> | NonNullable<CategoryBySlugQueryResult>["related_games"];
}) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid grid-cols-2 gap-3">
        {games.map((game) => (
          <GameCard key={game._id} game={game} />
        ))}
      </div>
      <Link href="/">
        <Button className="bg-btn-bg hover:bg-btn-bg h-11 w-full cursor-pointer rounded-full tracking-[1px] text-white uppercase hover:brightness-90">
          More Games
        </Button>
      </Link>
    </div>
  );
};

export default Games;
