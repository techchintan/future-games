import {SanityImage} from "@/components/common/image";
import {CategoryBySlugQueryResult} from "@/sanity.types";

const CategoryHeader = async ({category}: {category: NonNullable<CategoryBySlugQueryResult>}) => {
  return (
    <div className="max-width-container padding-container">
      <div className="border-border-color flex items-center justify-center gap-2 rounded-2xl border p-4 text-sm font-semibold tracking-[1px] text-black">
        {category.thumbnail && (
          <SanityImage
            src={category.thumbnail}
            alt={category.title || ""}
            width={40}
            height={40}
            className="object-contain"
          />
        )}
        <span className="text-2xl">{category.title}</span>
      </div>
    </div>
  );
};

export default CategoryHeader;
