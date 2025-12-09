import {SanityImage} from "@/components/common/image";
import {GamesQueryResult} from "@/sanity.types";

const HomeGames = ({games}: {games: NonNullable<GamesQueryResult>}) => {
  return (
    <div className="max-width-container padding-container py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {games.map((game) => (
          <div key={game._id} className="border-border-color group relative cursor-pointer border overflow-hidden">
            <SanityImage
              src={game.thumbnail}
              alt={game.title || "game"}
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex h-full w-full items-end bg-[linear-gradient(25deg,var(--color-gradient-blue)_10%,transparent)]">
              <p className="px-2 py-1 text-white font-semibold text-sm">{game.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGames;
