import {sanityFetch} from "@/sanity/lib/live";
import Advertisement from "./_components/advertisement";
import HeroTitle from "./_components/heroTitle";
import {gamesQuery} from "@/sanity/lib/queries";
import {GamesQueryResult} from "@/sanity.types";
import HomeGames from "../_components/games";

const HomePage = async () => {
  const {data: gamesData} = await sanityFetch<NonNullable<GamesQueryResult>>({query: gamesQuery});
  return (
    <div>
      <HeroTitle />
      <Advertisement />
      <HomeGames games={gamesData} />
    </div>
  );
};

export default HomePage;
