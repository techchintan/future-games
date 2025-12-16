"use client";

import Link from "next/link";
import {cn, headerLinks, sidebarVariants} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {motion, AnimatePresence} from "motion/react";
import {EllipsisVertical, X} from "lucide-react";
import {SetStateAction} from "react";

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const header_links = headerLinks || [];

  return (
    <div>
      {!isOpen ? (
        <button
          className="hover:border-border-color flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-transparent bg-transparent duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <EllipsisVertical width={16} height={16} />
        </button>
      ) : (
        <button
          className="hover:border-border-color flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-transparent bg-transparent duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <X width={16} height={16} />
        </button>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="sidebar"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="absolute top-[57px] left-0 z-2 h-screen w-full bg-white"
            style={{overflowY: "auto"}}
          >
            <div className="padding-container container flex flex-col items-start justify-center gap-2 pt-8! pb-0!">
              {(header_links || []).map((link) => (
                <Link key={link.label} href={link.url} onClick={() => setIsOpen(false)}>
                  <span
                    className={cn(
                      "group relative block py-2 text-base uppercase transition-all duration-300",
                      {
                        "text-text-blue": pathname === link.url,
                      },
                    )}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
