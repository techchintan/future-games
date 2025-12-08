import SearchIcon from "@/icons/serachIcon";

const SearchBar = () => {
  return (
    <div className="px-4 py-3">
      <div className="border-border-color relative w-full rounded-2xl border">
        <input
          type="text"
          placeholder="Search Games"
          className="h-11 w-full rounded-2xl pl-6 text-sm outline-none"
        />
        <span className="bg-btn-bg pointer-events-none absolute top-0 right-0 flex h-full w-10 items-center justify-center rounded-r-2xl">
          <SearchIcon className="text-white" />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
