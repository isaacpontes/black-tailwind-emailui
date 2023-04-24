import { ReactNode } from "react";

export const EmailTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold mb-2">{children}</h2>
)