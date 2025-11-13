//import node modules libraries
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
  if (!name) return "";

  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}
