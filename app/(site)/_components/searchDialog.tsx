"use client";

import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import SearchIcon from "@/icons/serachIcon";
import {searchGameByName} from "@/lib/actions";
import {GamesQueryResult} from "@/sanity.types";
import {DialogClose, DialogTrigger} from "@radix-ui/react-dialog";
import {Search} from "lucide-react";
import {useEffect, useState} from "react";
import GameCardHome from "../(home)/_components/games/gameCardHome";
import Link from "next/link";

const SearchDialog = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<NonNullable<GamesQueryResult> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchText.trim()) {
        setSearchResult([]);
        return;
      }
      const response = await searchGameByName(searchText);
      setSearchResult(response);
    };
    const timer = setTimeout(() => fetchData(), 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <Dialog>
      <DialogOverlay className="backdrop-blur-xs" />
      <DialogTrigger>
        <div
          role="button"
          className="border-border-color flex size-8 cursor-pointer items-center justify-center rounded-full border"
        >
          <SearchIcon color="black" />
        </div>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="gap-0 p-0"
        onCloseAutoFocus={() => {
          setSearchText("");
          setSearchResult(null)
        }}
      >
        <DialogTitle className="hidden">Search for Game</DialogTitle>
        <DialogHeader>
          <div className="flex items-center gap-2 border-b border-gray-200 p-4">
            <Search className="text-gray-500" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchText || ""}
              className="grow border-none outline-none"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <DialogClose asChild>
              <Button className="bg-transprent h-6 w-8 cursor-pointer border border-gray-200 text-[12px] text-gray-500 hover:bg-transparent">
                esc
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="no-scrollbar max-h-[calc(100vh-200px)] overflow-y-scroll p-4">
          {searchResult && searchResult.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {searchResult.map((game) => (
                <DialogClose key={game._id} asChild>
                  <Link href={`/game/${game.game_slug?.current}`} onClick={() => setSearchText("")}>
                    <GameCardHome game={game} />
                  </Link>
                </DialogClose>
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-sm text-gray-400">No results found</p>
          )}
        </div>

        <DialogFooter className="border-t border-gray-200 p-4">
          <p className="text-xs text-gray-400">Search by Qwikgames</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
