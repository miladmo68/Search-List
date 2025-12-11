import { useState } from "react";
import "./index.css";
import Search from "./components/Search";

function App() {
  const [items, setItems] = useState([
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Ottawa",
  ]);
  const [search, setSearch] = useState("");
  return (
    <div className="  flex flex-col content-center items-center my-6">
      <h1>Search the City</h1>
      <Search />
    </div>
  );
}

export default App;
