import {Button} from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[linear-gradient(to_right_top,var(--color-gradient-blue)_10%,var(--color-brand-pure-white))]">
      <h1 className="animate-pulse text-[160px] font-extrabold duration-300">404</h1>
      <h3 className="mb-6 text-2xl">Oops! The page you’re looking for doesn’t exist.</h3>
      <Link href="/">
        <Button className="hover:bg-btn-bg bg-btn-bg shadow-secondery cursor-pointer rounded-full px-10 py-3 text-base text-white duration-300 hover:-translate-y-1 hover:brightness-90">
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
