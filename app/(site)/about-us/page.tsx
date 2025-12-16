import {GamesCategoryQueryResult, PopularGamesQueryResult} from "@/sanity.types";
import {sanityFetch} from "@/sanity/lib/live";
import {gamesCategoryQuery, popularGamesQuery} from "@/sanity/lib/queries";
import Link from "next/link";

const AboutUsPage = async () => {
  const {data: gamesCategories} = await sanityFetch<NonNullable<GamesCategoryQueryResult>>({
    query: gamesCategoryQuery,
  });

  const {data: popularGames} = await sanityFetch<NonNullable<PopularGamesQueryResult>>({
    query: popularGamesQuery,
  });

  return (
    <div className="max-width-container padding-container">
      <article className="box relative bg-white">
        <div className="my-1 text-[10px] font-medium tracking-wider uppercase">
          About QwiQ Games
        </div>
        <h1 className="text-text-blue my-2 text-3xl font-semibold">
          Play Free Online Games: Quick, QwiQ, Play!
        </h1>
        <div>
          <p className="py-2 text-sm font-normal">
            Discover an unparalleled gaming experience on QwiQ Games, the premier next-gen online
            games platform. Dive into an extensive collection of top-rated free online games,
            providing endless entertainment whether you prefer solo adventures or multiplayer
            thrills with friends. QwiQ Games ensures instant access to a diverse array of games,
            eliminating the need for downloads, logins, or annoying pop-ups that disrupt your gaming
            flow. Our platform is designed for seamless play across desktops, tablets, and mobile
            devices, allowing you to enjoy your favorite games anywhere, be it in the comfort of
            your home or on the go. Join a community of over 50 million gamers worldwide who choose
            QwiQ Games for its exceptional gameplay and immersive content. QwiQ Games boasts a
            diverse range of game categories, including{" "}
            <span className="text-text-blue text-sm font-medium">
              <Link
                className="text-text-blue font-medium hover:underline"
                href={`/category/action-games`}
              >
                Action Games
              </Link>
            </span>
            ,{" "}
            <span className="text-text-blue text-sm font-medium">
              <Link
                className="text-text-blue font-medium hover:underline"
                href={`/category/arcade-games`}
              >
                Arcade Games
              </Link>
            </span>
            ,{" "}
            <span className="text-text-blue text-sm font-medium">
              <Link
                className="text-text-blue font-medium hover:underline"
                href={`/category/online-games`}
              >
                Online Games
              </Link>
            </span>
            , and many more. You&rsquo;ll also find an array of{" "}
            <span className="text-text-blue text-sm font-medium">
              <Link
                className="text-text-blue font-medium hover:underline"
                href={`/category/popular-games`}
              >
                Popular Games
              </Link>
            </span>{" "}
            like{" "}
            <span className="text-text-blue text-sm font-medium">
              <Link
                className="text-text-blue font-medium hover:underline"
                href={`/game/stickman-battle-ultimate-fight`}
              >
                Stickman Battle Ultimate Fight
              </Link>
            </span>
            ,{" "}
            <span className="text-text-blue text-sm font-medium">
              <Link
                className="text-text-blue font-medium hover:underline"
                href={`/game/pop-it-master`}
              >
                Pop It Master
              </Link>
            </span>
            ,{" "}
            <span className="text-text-blue text-sm font-medium">
              <Link
                className="text-text-blue font-medium hover:underline"
                href={`/game/zombie-killer`}
              >
                Zombie Killer
              </Link>
            </span>
            , and more. Our games are created by talented web developers from around the world,
            closely collaborating with us to deliver the finest gaming experiences. Before a game is
            featured on our platform, it undergoes a rigorous selection process to ensure quality
            and an enjoyable experience for all our players.
          </p>
          <h3 className="text-text-blue py-2 text-3xl font-semibold">Our game selection</h3>
          <p className="pb-4 text-sm">
            Game developers release fun{" "}
            <Link
              className="text-text-blue font-medium hover:underline"
              href={`/category/new-games`}
            >
              New Games
            </Link>{" "}
            on our platform on a daily basis. Our most{" "}
            <Link
              className="text-text-blue font-medium hover:underline"
              href={`/category/popular-games`}
            >
              Popular Games
            </Link>{" "}
            include hits like{" "}
            {popularGames.map((game) => (
              <span key={game._id}>
                <Link
                  className="text-text-blue font-medium hover:underline"
                  href={`/game/${game.game_slug?.current}`}
                >
                  {game.title}
                </Link>
                ,{" "}
              </span>
            ))}
            to play for free. In total we offer more than 2000 game titles.
          </p>
          <h3 className="text-text-blue text-3xl font-semibold">Start playing</h3>
          <p className="my-2 text-sm">
            Unsure what game to play? Start your game discovery on our homepage or pick a game from
            any of these popular categories:
          </p>
          <ul className="my-2 ms-0 me-0 block list-disc ps-10 text-sm">
            {gamesCategories.map((cateogry) => (
              <li key={cateogry._id}>
                <Link
                  key={cateogry._id}
                  className="text-text-blue font-medium hover:underline"
                  href={`/category/${cateogry.slug?.current}` || "/"}
                >
                  {cateogry.title}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-text-blue pt-2 text-3xl font-semibold">What is QwiQ Games?</h3>
          <p className="py-2 text-sm font-normal">
            Your go-to online gaming destination based in India! With a passionate team of 7
            individuals dedicated to crafting the ultimate online playground, we&apos;re committed
            to providing a free and open gaming experience for all enthusiasts. Our goal is to
            redefine digital entertainment, ensuring that every gaming session on QwiQ Games is a
            memorable adventure. Visit{" "}
            <Link className="text-text-blue font-medium hover:underline" href={`/about-us`}>
              company
            </Link>{" "}
            page for more information.
          </p>
        </div>
      </article>
    </div>
  );
};

export default AboutUsPage;
