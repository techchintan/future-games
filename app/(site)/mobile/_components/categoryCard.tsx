import {SanityImage} from "@/components/common/image";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {GamesCategoryQueryResult} from "@/sanity.types";
import {} from "@/sanity/lib/queries";

const CategoryCard = async ({categories}: {categories: NonNullable<GamesCategoryQueryResult>}) => {
  console.log(categories);
  return (
    <div className="p-4">
      <Card className="shadow-none">
        <CardContent className="flex flex-col gap-2">
          <p className="text-center">Pick game categories which you enjoy more!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {categories.map((category) => (
              <Button key={category._id} className="rounded-full h-11 tracking-[1px] bg-white text-black text-sm font-semibold border border-btn-bg hover:bg-btn-bg hover:text-white cursor-pointer">
                <SanityImage
                  src={category.thumbnail}
                  alt={category.title || ""}
                  width={20}
                  height={20}
                />
                <span>{category.title}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryCard;
