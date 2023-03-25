import { ReactNode } from "react";

export default ({ children }: { children: ReactNode }) => (
  <span className="text-zinc-900 dark:text-zinc-50">
    {children}
  </span>
)