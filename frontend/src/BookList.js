import React from "react";
import "./App.css";
import BookIcon from "./BookIcon";

const BookList = (props) => {
  if (props.books.length > 0) {
    return (
      <div>
        {props.books.map((book) => (
          <BookIcon key={`${book.name}-${book.id}`} book={book}></BookIcon>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p>No books found :(</p>
      </div>
    );
  }
};

export default BookList;
