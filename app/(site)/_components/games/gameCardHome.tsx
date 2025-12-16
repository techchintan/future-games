import {SanityImage} from "@/components/common/image";
import {GamesQueryResult} from "@/sanity.types";

const GameCardHome = ({game}: {game: NonNullable<GamesQueryResult>[number]}) => {
  return (
    <div className="border-border-color group relative h-full cursor-pointer overflow-hidden border">
      {game.thumbnail && (
        <SanityImage
          src={game.thumbnail}
          alt={game.title || "game"}
          width={100}
          height={100}
          className="h-full w-full object-cover"
        />
      )}
      <div className="pointer-events-none absolute top-0 left-0 z-10 flex h-full w-full items-end bg-[linear-gradient(25deg,var(--color-gradient-blue)_10%,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="w-full px-2 py-1 text-sm font-semibold text-white">{game.title}</p>
      </div>
    </div>
  );
};

export default GameCardHome;
