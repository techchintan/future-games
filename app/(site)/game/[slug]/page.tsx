import {GameBySlugQueryResult, GamesQueryResult} from "@/sanity.types";
import {sanityFetch} from "@/sanity/lib/live";
import {gameBySlugQuery, gamesQuery} from "@/sanity/lib/queries";
import GameDetail from "./_components/gameDetail";

const GamePage = async ({params}: {params: {slug: string}}) => {
  const {slug} = await params;
  const {data: gameData} = await sanityFetch<NonNullable<GameBySlugQueryResult>>({
    query: gameBySlugQuery,
    params: {gameSlug: slug},
  });
  const {data: games} = await sanityFetch<NonNullable<GamesQueryResult>>({query: gamesQuery});
  return (
    <div className="no-scrollbar">
      <GameDetail gameData={gameData} games={games} />
    </div>
  );
};

export default GamePage;
