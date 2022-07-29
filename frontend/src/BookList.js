import React from "react";
import "./App.css";
import BookIcon from "./BookIcon";

const BookList = (props) => {
  return (
    <div>
      <h2>Library</h2>
      {props.books.map((book) => (
        <BookIcon key={book.id} book={book}></BookIcon>
      ))}
    </div>
  );
};

export default BookList;
