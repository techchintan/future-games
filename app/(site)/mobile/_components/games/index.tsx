import {GamesQueryResult} from "@/sanity.types";
import GameCard from "./gameCard";
import {Button} from "@/components/ui/button";

const Games = ({games}: {games: NonNullable<GamesQueryResult>}) => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {games.map((game) => (
          <GameCard key={game._id} game={game} />
        ))}
      </div>
      <Button className="bg-btn-bg tracking-[1px] hover:bg-btn-bg h-11 w-full cursor-pointer rounded-full text-white uppercase hover:brightness-90">
        More Games
      </Button>
    </div>
  );
};

export default Games;
