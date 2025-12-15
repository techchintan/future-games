import {SanityImage} from "@/components/common/image";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {GamesCategoryQueryResult} from "@/sanity.types";
import {} from "@/sanity/lib/queries";
import Link from "next/link";

const CategoryCard = async ({categories}: {categories: NonNullable<GamesCategoryQueryResult>}) => {
  return (
    <div className="p-4">
      <Card className="shadow-none">
        <CardContent className="flex flex-col gap-2">
          <p className="text-center">Pick game categories which you enjoy more!</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {categories.map((category) => (
              <Link key={category._id} href={`/mobile/category/${category.slug?.current}` || "/"}>
                <Button className="border-btn-bg hover:bg-btn-bg h-11 cursor-pointer rounded-full border bg-white text-sm font-semibold tracking-[1px] text-black hover:text-white">
                  {category.thumbnail && (
                    <SanityImage
                      src={category.thumbnail}
                      alt={category.title || ""}
                      width={20}
                      height={20}
                    />
                  )}
                  <span>{category.title}</span>
                </Button>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryCard;
