import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
      <div className="h-screen w-full bg-[linear-gradient(to_right_top,var(--color-gradient-blue)_10%,var(--color-brand-pure-white))] flex-col flex items-center justify-center">
        <h1 className="text-[160px] font-extrabold animate-pulse duration-300">404</h1>
        <h3 className="text-2xl mb-6">Oops! The page you’re looking for doesn’t exist.</h3>
        <Link href='/'>
        <Button className="hover:bg-btn-bg bg-btn-bg text-white text-base rounded-full px-10 py-3 cursor-pointer hover:brightness-90 hover:-translate-y-1 shadow-secondery duration-300">Go Home</Button>
        </Link>
      </div>
  );
};

export default NotFound;
