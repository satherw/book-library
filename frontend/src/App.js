import "./App.css";
import BookList from "./BookList";
import React, { useEffect, useState } from "react";
import CreateBook from "./CreateBook";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
      fetch("http://localhost:8080/api/books")
          .then((response) => response.json())
          .then((data) => {
              setBooks(data);
          });
  }

  useEffect(() => {
      getBooks()
  });

  return (
    <div className="App">
      <header className="App-header">
        <h2>Book Library</h2>
      </header>
      <div className="side-by-side">
        <BookList books={books}></BookList>
        <CreateBook></CreateBook>
      </div>
    </div>
  );
}

export default App;
