import SearchIcon from "./icons/SearchIcon";

export default () => (
  <form className="min-w-0 md:w-full flex-grow flex" onSubmit={(ev) => ev.preventDefault()}>
    <input
      className="
        min-w-0 w-full p-2 rounded-l-lg
        bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50
        focus:outline-none border-[1px] border-transparent focus:border-emerald-400
        transition-colors"
      type="text"
      placeholder="Pesquisar..."
    />
    <button
      className="
        min-w-0 py-2 px-4 rounded-r-lg
        bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-50
        border-[1px] border-transparent
        focus:outline-none focus:border-emerald-400 focus:text-emerald-400
        hover:border-emerald-400 hover:text-emerald-400 transition-colors"
    >
      <SearchIcon />
    </button>
  </form>
)