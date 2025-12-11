import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [items] = useState([
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Ottawa",
  ]);

  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      alert("Type the City...");
    }

    console.log(search);
  };

  const filteredItem = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-sky-100 flex flex-col items-center text-center my-8 py-10 px-6 gap-6 rounded-2xl shadow-md border border-sky-200">
      <h1 className="text-2xl font-semibold text-sky-800 tracking-wide">
        Search the City
      </h1>

      <Search search={search} setSearch={setSearch} onSubmit={submitHandler} />

      <ul className="mt-6 w-full max-w-sm space-y-2">
        {filteredItem.length > 0 ? (
          filteredItem.map((city) => (
            <li
              key={city}
              className="w-full bg-white rounded-lg border border-gray-200 py-2 px-4 text-left shadow-sm"
            >
              {city}
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-sm mt-2">No results found...</li>
        )}
      </ul>
    </div>
  );
}

export default App;
