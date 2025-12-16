import {CategoryBySlugQueryResult} from "@/sanity.types";
import {sanityFetch} from "@/sanity/lib/live";
import {categoryBySlugQuery} from "@/sanity/lib/queries";
import CategoryHeader from "./_components/categoryHeader";
import {redirect} from "next/navigation";
import Advertisement from "../../(home)/_components/advertisement";
import HomeGames from "../../(home)/_components/games";

const CategoryRelatedgames = async ({params}: {params: any}) => {
  const {slug} = await params;
  const {data: categoryBySlug}: {data: CategoryBySlugQueryResult} = await sanityFetch({
    query: categoryBySlugQuery,
    params: {categorySlug: slug},
  });

  if (!categoryBySlug) {
    redirect("/category-not-found");
  }

  return (
    <div>
      <CategoryHeader category={categoryBySlug} />
      <Advertisement />
      <HomeGames games={categoryBySlug.related_games} />
    </div>
  );
};

export default CategoryRelatedgames;
