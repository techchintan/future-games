import { cn } from "@/lib/utils";

const Advertisement = ({className}: {className?: string}) => {
  return (
    <div className={cn("max-width-container padding-container", className)}>
      <div className="border-border-color text-uppercase w-full border-y text-center text-[10px] text-gray-500">
        ADVERTISEMENT
      </div>
    </div>
  );
};

export default Advertisement;
