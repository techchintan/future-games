import SearchBar from "./_components/searchBar";
import Advertisement from "./_components/advertisement";
import EarnCoin from "./_components/earnCoin";
import CategoryCard from "./_components/categoryCard";
import Games from "./_components/games";
import {sanityFetch} from "@/sanity/lib/live";
import {gamesCategoryQuery, gamesQuery} from "@/sanity/lib/queries";
import {GamesCategoryQueryResult, GamesQueryResult} from "@/sanity.types";

const HomePage = async () => {
  const {data: gamesData} = await sanityFetch<NonNullable<GamesQueryResult>>({query: gamesQuery});
  const {data: gamesCategories} = await sanityFetch<NonNullable<GamesCategoryQueryResult>>({
    query: gamesCategoryQuery,
  });

  return (
    <>
        <SearchBar />
        <Advertisement />
        <EarnCoin />
        <CategoryCard categories={gamesCategories} />
        <Games games={gamesData} />
    </>
  );
};

export default HomePage;
