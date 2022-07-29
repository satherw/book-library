import React from "react";
import "./App.css";
import BookIcon from "./BookIcon";
import TagFilters from "./TagFilters";

const BookList = (props) => {
  return (
    <div className="books-list-container">
        <TagFilters setFilter={props.setFilter}></TagFilters>

        <div className="book-list">

        {props.books.map((book) => (
          <BookIcon key={`${book.name}-${book.id}`} book={book}></BookIcon>
        ))}
      </div>
    </div>
  );
};

export default BookList;
