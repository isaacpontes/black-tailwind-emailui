import React from "react";
import { Email } from "../App";
import { AvatarPlaceholder } from "./AvatarPlaceholder";

type EmailListItemProps = {
  email: Email
  onClick: React.MouseEventHandler<HTMLElement>
}

export const EmailListItem = ({ email, onClick }: EmailListItemProps) => (
  <article
    className="
      flex items-center gap-4 [&+li]:mt-1 p-2 
      hover:cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-900
      rounded-lg transition-colors"
    onClick={onClick}
  >
    <AvatarPlaceholder name={email.from} />
    <div className="grow shrink basis-40">
      <strong>{email.subject}</strong>
      <p>{email.body.length > 64 ? email.body.slice(0, 64) + '...' : email.body}</p>
    </div>
  </article>
)