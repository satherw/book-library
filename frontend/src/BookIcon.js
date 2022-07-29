import React from "react";
import "./App.css";

const BookIcon = (props) => {
  return (
    <div>
      <h3>{props.book.name}</h3>
      <p>{props.book.author}</p>
      <p>{props.book.tag}</p>
    </div>
  );
};

export default BookIcon;
