const Search = ({ search, setSearch, onSubmit }) => {
  return (
    <form
      className="flex flex-row items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-200 w-full max-w-md"
      onSubmit={onSubmit}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Type City..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />

      <button
        type="submit"
        className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 active:scale-95 transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default Search;
