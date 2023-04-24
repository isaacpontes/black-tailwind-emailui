export const AvatarPlaceholder = ({ name }: { name: string }) => (
  <div
    className="rounded-full bg-orange-300 dark:bg-rose-600 w-10 h-10 basis-10 grid place-content-center"
  >
    <span className="mb-0.5">
      {name[0].toUpperCase()}
    </span>
  </div>
)