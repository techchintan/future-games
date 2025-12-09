"use server";

import {searchGame} from "@/sanity/lib/queries";

export async function searchGameResult(searchInput: string) {
  if (!searchInput.trim()) {
    return null;
  }
  return await searchGame(searchInput);
}
