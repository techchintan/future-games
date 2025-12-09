import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const headerLinks = [
  {label: "HOME", link: "/"},
  {label: "ABOUT US", link: "/about-us"},
  {label: "Contact us", link: "/contact-us"},
];

export const sidebarVariants = {
  closed: {
    x: "-100%",
    transition: { duration: 0.4, ease: "easeInOut" as const },
  },
  open: {
    x: 0,
    transition: { duration: 0.4, ease: "easeInOut" as const },
  },
};

export const submenuVariants = {
  closed: {
    opacity: 0,
    y: 10,
    height: 0,
    transition: { duration: 0.18, ease: "easeInOut" as const },
  },
  open: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: { duration: 0.18, ease: "easeInOut" as const },
  },
};