import { useState, useEffect } from "react";
import CardList from "./components/card-list/CardList.js";
import "./App.css";
//import SearchBox from "./components/search-box/SearchBox.js";

const App = () => {
  const [library, setLibrary] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/burundiarxiv/library-parser/master/export/library.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setLibrary(data);
        setBooks(data);
      });
  }, []);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    if (value === "") {
      setBooks(library);
      return;
    }
    const filteredBooks = library.filter(({ line }) =>
      line.toLowerCase().includes(value.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <div className="App">
      <header>
        <h1>Burundi Open Library</h1>
        <p className="title">
          Free and open access to a general library on books written on Burundi
        </p>
        <div className="search">
          <input
            type="search"
            placeholder="Search for books"
            onChange={onChangeHandler}
          />
        </div>
      </header>
      <CardList books={books} />
    </div>
  );
};

export default App;
