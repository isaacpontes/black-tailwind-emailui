import Avatar from "./Avatar"
import Logo from "./Logo"
import SearchForm from "./SearchForm"

export default () => (
  <header className="
    px-4 py-2 md:px-12 lg:py-4
    flex items-center gap-6 md:gap-16 xl:gap-32
    bg-zinc-100 dark:bg-zinc-800"
  >
    <Logo />
    <SearchForm />
    <Avatar />
  </header>
)