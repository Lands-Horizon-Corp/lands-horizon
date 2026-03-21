import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getEnvVar = (name: string, fallback: string = ""): string => {
  if (typeof import.meta !== "undefined" && import.meta.env) {
    const viteValue = import.meta.env[`VITE_${name}`]
    if (viteValue) return viteValue
  }

  if (typeof process !== "undefined" && process.env) {
    const nextValue = process.env[`NEXT_PUBLIC_${name}`] || process.env[name]
    if (nextValue) return nextValue
  }

  return fallback
}
