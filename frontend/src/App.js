import "./App.css";
import BookList from "./BookList";
import React, { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:8080/api/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
          <h2>Book Library</h2>
          <BookList books={books}></BookList>
      </header>
    </div>
  );
}

export default App;
