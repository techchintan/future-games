"use client";

import SearchIcon from "@/icons/serachIcon";
import {GamesQueryResult} from "@/sanity.types";
import {useEffect, useState} from "react";
import Games from "./games";
import {searchGameByName} from "@/lib/actions";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<NonNullable<GamesQueryResult> | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await searchGameByName(searchInput);
      setSearchResult(response);
    }
    const timer = setTimeout(() => fetchData(), 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  return (
    <div>
      <div className="px-4 py-3">
        <div className="border-border-color relative w-full rounded-2xl border">
          <input
            type="text"
            placeholder="Search Games"
            className="h-11 w-full rounded-2xl pl-6 text-sm outline-none"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span className="bg-btn-bg pointer-events-none absolute top-0 right-0 flex h-full w-10 items-center justify-center rounded-r-2xl">
            <SearchIcon className="text-white" />
          </span>
        </div>
      </div>
      <div>
        {searchInput ? (
          searchResult && searchResult.length > 0 ? (
            <div>
              <p className="px-4">Showing result for "{searchInput}"</p>
              <Games games={searchResult} />
            </div>
          ) : (
            searchResult && (
              <p className="px-4 text-center">
                Sorry, no games found with this keyword... try something else
              </p>
            )
          )
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
