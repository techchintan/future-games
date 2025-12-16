import Link from "next/link";

const MobileFooter = () => {
  return (
    <div>
      <div className="text-secondery flex flex-col items-center gap-4 p-4">
        <h2 className="text-center text-2xl">About Qwiqgames</h2>
        <p>
          Play free games online at qwiqgames.com and enjoy endless fun! Choose from a variety of
          genres, including puzzle games, card games, adventure games, sports games, racing games,
          and car games.<br></br>
          Dive into the smooth gameplay of free HTML5 games online and create unforgettable
          memories. Start playing now and discover the excitement!
          <br />
          Each free game features unique, well-designed levels filled with exciting challenges.
          Playing is easy and fun, but mastering it requires skill and strategy!
          <br />
          Stay tuned for more thrilling levels and updates to our free online games more fun is on
          the way!
        </p>
      </div>
      <div className="border-border-color flex justify-between border-t p-2">
        <p>Privacy Policy</p>
        <Link href="/">qwiqgames.com</Link>
      </div>
    </div>
  );
};

export default MobileFooter;
