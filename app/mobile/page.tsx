import BackgroundImage from "@/icons/backgroundImage";
import SearchBar from "./_components/searchBar";
import Advertisement from "./_components/advertisement";
import EarnCoin from "./_components/earnCoin";
import CategoryCard from "./_components/categoryCard";
import Games from "./_components/games";
import {sanityFetch} from "@/sanity/lib/live";
import {gamesCategoryQuery, gamesQuery} from "@/sanity/lib/queries";
import {GamesCategoryQueryResult, GamesQueryResult} from "@/sanity.types";
import MobileFooter from "./_components/mobileFooter";

const HomePage = async () => {
  const {data: gamesData} = await sanityFetch<NonNullable<GamesQueryResult>>({query: gamesQuery});
  const {data: gamesCategories} = await sanityFetch<NonNullable<GamesCategoryQueryResult>>({
    query: gamesCategoryQuery,
  });

  return (
    <div className="relative overflow-hidden">
      <BackgroundImage className="absolute -z-2" />
      <div className="relative h-screen">
        <div className="absolute top-0 -z-1 h-1/2 w-full bg-[linear-gradient(180deg,white,rgba(30,31,34,0))]" />
        <div className="absolute bottom-0 -z-1 h-1/2 w-full bg-[linear-gradient(0deg,white,rgba(30,31,34,0))]" />
        <div className="flex max-h-screen w-full justify-center overflow-y-scroll">
          <div className="border-border-color h-fit w-full border-x bg-white sm:max-w-100 sm:min-w-100">
            <SearchBar />
            <Advertisement />
            <EarnCoin />
            <CategoryCard categories={gamesCategories} />
            <Games games={gamesData} />
            <MobileFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
