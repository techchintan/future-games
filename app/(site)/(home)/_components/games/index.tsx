import {SanityImage} from "@/components/common/image";
import {GamesQueryResult} from "@/sanity.types";
import Link from "next/link";
import GameCardHome from "./gameCardHome";

const HomeGames = ({games}: {games: NonNullable<GamesQueryResult>}) => {
  return (
    <div className="max-width-container padding-container py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {games.map((game) => (
          <Link key={game._id} href={`/game/${game.game_slug?.current}`}>
            <GameCardHome game={game} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeGames;
