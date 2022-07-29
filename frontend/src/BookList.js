import React from "react";
import "./App.css";
import BookIcon from "./BookIcon";

const BookList = (props) => {
  return (
    <div className="book-list">
      {props.books.map((book) => (
        <BookIcon key={`${book.name}-${book.id}`} book={book}></BookIcon>
      ))}
    </div>
  );
};

export default BookList;
