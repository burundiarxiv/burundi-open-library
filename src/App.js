import React, { Component } from "react";
import CardList from "./components/card-list/CardList.js";
import "./App.css";
//import SearchBox from "./components/search-box/SearchBox.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/burundiarxiv/library-parser/master/export/chap-2-1-2.json"
    )
      .then((response) => response.json())
      .then((users) => this.setState({ books: users }));
  }
  /* handleChange = (e) => {
    this.setState({ searchFiled: e.target.value });
  };
 */
  render() {
    /* const { books, searchFiled } = this.state;
    const filterbooks = books.filter((book) =>
      book.line.toLowerCase().includes(searchFiled.toLowerCase())
    ); */
    return (
      <div className="App">
        <header>
          <h1>Burundi Open Library</h1>
          <p className="title">Free and open</p>
          <div className="search">
            <input
              type="search"
              placeholder="Search for books"
              onChange={this.handleChange}
            />
          </div>
        </header>
        <body>
          {/* <SearchBox
            placeholder="search books"
            handleChange={this.handleChange}
          /> */}
          <CardList books={this.state.books} />
        </body>
      </div>
    );
  }
}

export default App;
