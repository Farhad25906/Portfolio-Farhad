import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard shadcn/ui class-merging helper.
 * Skip this file if your project already has lib/utils.ts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
