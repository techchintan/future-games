import {CategoryBySlugQueryResult} from "@/sanity.types";
import {sanityFetch} from "@/sanity/lib/live";
import {categoryBySlugQuery} from "@/sanity/lib/queries";
import {redirect} from "next/navigation";
import CategoryHeader from "./_components/categoryHeader";
import Advertisement from "../../_components/advertisement";
import Games from "../../_components/games";

const CategoryPage = async ({params}: {params: {slug: string}}) => {
  const {slug} = await params;
  const {data: categoryBySlug}: {data: CategoryBySlugQueryResult} = await sanityFetch({
    query: categoryBySlugQuery,
    params: {categorySlug: slug},
  });

  if (!categoryBySlug) {
    redirect("category-not-found");
  }

  return (
    <>
      <CategoryHeader category={categoryBySlug} />
      <Advertisement />
      <Games games={categoryBySlug.related_games} />
    </>
  );
};

export default CategoryPage;
