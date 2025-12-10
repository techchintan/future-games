import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const headerLinks = [
  {label: "HOME", url: "/"},
  {label: "ABOUT US", url: "/about-us"},
  {label: "Contact us", url: "/contact-us"},
];

export const sidebarVariants = {
  closed: {
    x: "-100%",
    transition: {duration: 0.4, ease: "easeInOut" as const},
  },
  open: {
    x: 0,
    transition: {duration: 0.4, ease: "easeInOut" as const},
  },
};
