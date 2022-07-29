import React, { useEffect, useState } from "react";
import "./App.css";

const BookList = () => {
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
    <div>
      <h2>Library</h2>
      {books.map((book) => (
        <div key={book.id}>{book.name}</div>
      ))}
    </div>
  );
};

export default BookList;
