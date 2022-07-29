import React from "react";
import "./App.css";

const BookIcon = (props) => {
  return (
    <div className="book-icon">
      <h3>{props.book.name}</h3>
      <div className="book-metadata">
          <p>{props.book.author}</p>
          <p className="tag-name">{props.book.tag}</p>
      </div>
    </div>
  );
};

export default BookIcon;
