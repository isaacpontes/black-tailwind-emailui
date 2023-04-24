import { Email } from "../App";
import { EmailTitle } from "./EmailTitle";
import { EmailData } from "./EmailData";
import { EmailCloseButton } from "./EmailCloseButton";

type EmailContentProps = {
  email: Email
  onClose: () => void
}

export const EmailContent = ({ email, onClose }: EmailContentProps) => {
  const sentDate = new Date(email.createdAt)
  const openEmailDate = `${sentDate.toLocaleDateString()}, ${sentDate.toLocaleTimeString()}`

  return (
    <div className="
      p-2 md:p-4 absolute lg:relative h-full w-full 
      bg-zinc-50 dark:bg-zinc-700
      text-zinc-900 dark:text-zinc-50
      grow-[2] basis-96"
    >
      <EmailCloseButton onClick={onClose} />
      <EmailTitle>{email.subject}</EmailTitle>
      <EmailData>De: {`<${email.from}>`}</EmailData>
      <EmailData>Para: {'<'}john.doe@email.com{'>'}</EmailData>
      <EmailData>Em: {openEmailDate}</EmailData>
      <hr className="my-4" />
      {email.body}
    </div>
  )
}