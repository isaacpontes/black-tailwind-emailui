import { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => (
  <button
    className="
      bg-emerald-300 hover:bg-emerald-400 
      dark:bg-emerald-500 dark:hover:bg-emerald-600 
      transition-colors py-2 w-full rounded-lg"
  >
    {children}
  </button>
)