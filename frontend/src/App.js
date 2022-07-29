import "./App.css";
import BookList from "./BookList";
import React, { useEffect, useState } from "react";
import CreateBook from "./CreateBook";
import TagFilters from "./TagFilters";

function App() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("");

  const getBooks = () => {
    fetch("http://localhost:8080/api/books")
      .then((response) => response.json())
      .then((data) => {
        if (filter !== "") {
          setBooks(data.filter((b) => b.tag === filter));
          return;
        }
        setBooks(data);
      });
  };

  useEffect(() => {
    getBooks();
  });

  return (
    <div className="App">
      <header className="App-header">
        <h2>Book Library</h2>
      </header>
        <div className="side-by-side">
        <BookList books={books} setFilter={setFilter}></BookList>
        <CreateBook></CreateBook>
      </div>
    </div>
  );
}

export default App;
