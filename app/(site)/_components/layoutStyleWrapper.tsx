"use client";

import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";

const LayoutStyleWrapper = ({children}: {children: ReactNode}) => {
  const pathname = usePathname();

  return (
    <div
      className={cn("no-scrollbar pt-[57px]", {
        "h-screen overflow-y-auto bg-[linear-gradient(25deg,var(--color-gradient-blue)_10%,var(--color-brand-pure-white)_45%)]":
          pathname === "/" || pathname.startsWith("/category"),
      })}
    >
      {children}
    </div>
  );
};

export default LayoutStyleWrapper;
