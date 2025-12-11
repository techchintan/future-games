import Link from "next/link";

function AboutUsPage() {

  return (
    <div className="max-width-container padding-container py-8">
      <article className="box relative bg-white">
        <div className="my-1 text-[10px] font-medium uppercase tracking-wider">
          About QwiQ Games
        </div>
        <h1 className="my-2 text-text-blue text-3xl font-semibold">
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
            <span className="text-sm font-medium text-text-blue">
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/action-games`}
              >
                Action Games
              </Link>
            </span>
            ,{" "}
            <span className="text-sm font-medium text-text-blue">
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/arcade-games`}
              >
                Arcade Games
              </Link>
            </span>
            ,{" "}
            <span className="text-sm font-medium text-text-blue">
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/online-games`}
              >
                Online Games
              </Link>
            </span>
            , and many more. You&rsquo;ll also find an array of{" "}
            <span className="text-sm font-medium text-text-blue">
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/popular-games`}
              >
                Popular Games
              </Link>
            </span>{" "}
            like{" "}
            <span className="text-sm font-medium text-text-blue">
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/g/stickman-battle-ultimate-fight`}
              >
                Stickman Battle Ultimate Fight
              </Link>
            </span>
            ,{" "}
            <span className="text-sm font-medium text-text-blue">
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/g/pop-it-master`}
              >
                Pop It Master
              </Link>
            </span>
            ,{" "}
            <span className="text-sm font-medium text-text-blue">
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/g/zombie-killer`}
              >
                Zombie Killer
              </Link>
            </span>
            , and more. Our games are created by talented web developers from around the world,
            closely collaborating with us to deliver the finest gaming experiences. Before a game is
            featured on our platform, it undergoes a rigorous selection process to ensure quality
            and an enjoyable experience for all our players.
          </p>
          <h3 className="py-2 text-3xl text-text-blue font-semibold">Our game selection</h3>
          <p className="pb-4  text-sm">
            Game developers release fun{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/new-games`}
            >
              New Games
            </Link>{" "}
            on our platform on a daily basis. Our most{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/popular-games`}
            >
              Popular Games
            </Link>{" "}
            include hits like{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/g/run-of-life`}
            >
              Run of Life
            </Link>
            ,{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/g/cut-the-rope-experiments`}
            >
              Cut the Rope: Experiments
            </Link>
            ,{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/g/smiling-glass-2`}
            >
              Smiling Glass 2
            </Link>{" "}
            and{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/g/neon-war`}
            >
              Neon War
            </Link>
            . These games are only playable on QwiQ Games. We also have online classics like{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/g/moto-x3m-bike-race`}
            >
              Moto X3M
            </Link>
            ,{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/g/vex-3-xmas`}
            >
              Vex 3 Xmas
            </Link>
            ,{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/g/zombie-killer`}
            >
              Zombie Killer
            </Link>
            ,{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/g/jelly-vs-candy`}
            >
              Jelly Vs Candy
            </Link>
            ,{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/g/2048-forest`}
            >
              2048 Forest
            </Link>
            ,{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/g/bubble-shooter`}
            >
              Bubble Shooter{" "}
            </Link>
            and{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/g/cooking-live-be-a-chef-cook`}
            >
              Cooking Live - Be a Chef & Cook
            </Link>{" "}
            to play for free. In total we offer more than 2000 game titles.
          </p>
          <h3 className="text-3xl text-text-blue font-semibold">Start playing</h3>
          <p className="my-2 text-sm">
            Unsure what game to play? Start your game discovery on our homepage or pick a game from
            any of these popular categories:
          </p>
          <ul className="my-2 me-0 ms-0 block list-disc ps-10 text-sm ">
            <li>
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/action-games`}
              >
                Action Games
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/arcade-games`}
              >
                Arcade Games
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/online-games`}
              >
                Online Games
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/physics-games`}
              >
                Physics Games
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/latest-games`}
              >
                Latest Games
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-text-blue hover:underline"
                href={`/category/trending-games`}
              >
                Trending Games
              </Link>
            </li>
          </ul>
          <h3 className="pt-2 text-3xl text-text-blue font-semibold">What is QwiQ Games?</h3>
          <p className="py-2  text-sm font-normal">
            Your go-to online gaming destination based in India! With a passionate team of 7
            individuals dedicated to crafting the ultimate online playground, we&apos;re committed
            to providing a free and open gaming experience for all enthusiasts. Our goal is to
            redefine digital entertainment, ensuring that every gaming session on QwiQ Games is a
            memorable adventure. Visit{" "}
            <Link
              className="font-medium text-text-blue hover:underline"
              href={`/category/about`}
            >
              company
            </Link>{" "}
            page for more information.
          </p>
        </div>
      </article>
    </div>
  );
}

export default AboutUsPage;
