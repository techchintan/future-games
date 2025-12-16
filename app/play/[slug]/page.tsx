import {GameBySlugQueryResult} from "@/sanity.types";
import {sanityFetch} from "@/sanity/lib/live";
import {gameBySlugQuery} from "@/sanity/lib/queries";
import {redirect} from "next/navigation";

const GamePlay = async ({params}: {params: any}) => {
  const {slug} = await params;
  console.log(slug);
  const {data: gameData} = await sanityFetch<NonNullable<GameBySlugQueryResult>>({
    query: gameBySlugQuery,
    params: {gameSlug: slug},
  });
  if (!gameData) {
    redirect("/game-not-found");
  }

  const gd_sdk_referrer_url = process.env.NEXT_PUBLIC_BASE_URL + `/game/` + gameData.game_slug;
  const gameSrc = gameData.is_external
    ? `${gameData.game_url}/?gd_sdk_referrer_url=${gd_sdk_referrer_url}`
    : gameData.game_url;
  return (
    <div className="relative h-screen w-full">
      <iframe
        allowFullScreen
        allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share"
        className="absolute top-0 left-0 h-full w-full border-0"
        content={gameData.description || ""}
        name="desktop-game-iframe"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads"
        src={gameSrc || ""}
        title={gameData.title || ""}
        width="100%"
      />
    </div>
  );
};

export default GamePlay;
