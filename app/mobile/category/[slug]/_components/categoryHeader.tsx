import { SanityImage } from "@/components/common/image";
import { CategoryBySlugQueryResult } from "@/sanity.types";

const CategoryHeader = ({category}: {category: NonNullable<CategoryBySlugQueryResult>}) => {
  return (
    <div className="p-4">
      <div className="border-border-color flex gap-2 items-center justify-center rounded-2xl border p-4 text-sm font-semibold tracking-[1px] text-black">
        {category.thumbnail && (
          <SanityImage
            src={category.thumbnail}
            alt={category.title || ""}
            width={32}
            height={32}
          />
        )}
        <span>{category.title}</span>
      </div>
    </div>
  );
};

export default CategoryHeader;
