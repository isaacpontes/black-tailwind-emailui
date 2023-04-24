import React, { ReactNode } from "react";

type BottombarButtonProps = {
  active?: boolean
  onClick?: () => void
  children: ReactNode
}

export const BottombarButton = ({ active, onClick, children }: BottombarButtonProps) => {
  return (
    <button
      className={
        `flex-1 p-2 mb-0.5 rounded-lg shadow
        text-zinc-900 dark:text-zinc-50
        ${active
          ? "bg-emerald-300 dark:bg-emerald-600"
          : "bg-zinc-200 dark:bg-zinc-900"}`
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}