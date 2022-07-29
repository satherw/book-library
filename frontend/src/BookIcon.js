import React from "react";
import "./App.css";
import Tag from "./Tag";

const BookIcon = (props) => {
  return (
    <div className="book-icon">
      <h3>{props.book.name}</h3>
      <div className="book-metadata">
        <p>{props.book.author}</p>
        <Tag tag={props.book.tag}></Tag>
      </div>
    </div>
  );
};

export default BookIcon;
