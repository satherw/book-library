import React from "react";
import "./App.css";

const TagFilters = (props) => {
  return (
    <div className="side-by-side">
      <p
        className="tag"
        style={{ backgroundColor: "lightgray", cursor: "pointer" }}
        onClick={() => {
          props.setFilter("");
        }}
      >
        All
      </p>
      <p
        className="tag"
        style={{ backgroundColor: "rgba(220, 118, 51 )", cursor: "pointer" }}
        onClick={() => {
          props.setFilter("New-Hire");
        }}
      >
        New-Hire
      </p>
      <p
        className="tag"
        style={{ backgroundColor: "rgba(40, 180, 99)", cursor: "pointer" }}
        onClick={() => {
          props.setFilter("Engineering");
        }}
      >
        Engineering
      </p>
      <p
        className="tag"
        style={{ backgroundColor: "rgba(136, 78, 160)", cursor: "pointer" }}
        onClick={() => {
          props.setFilter("Design");
        }}
      >
        Design
      </p>
      <p
        className="tag"
        style={{ backgroundColor: "rgba(241, 196, 15)", cursor: "pointer" }}
        onClick={() => {
          props.setFilter("Project-Management");
        }}
      >
        Project-Management
      </p>
      <p
        className="tag"
        style={{ backgroundColor: "rgba(93, 173, 226)", cursor: "pointer" }}
        onClick={() => {
          props.setFilter("Leadership");
        }}
      >
        Leadership
      </p>
      <p
        className="tag"
        style={{
          backgroundImage: "linear-gradient(to right, red,orange,lime,teal)",
          cursor: "pointer",
        }}
        onClick={() => {
          props.setFilter("Fun");
        }}
      >
        Fun
      </p>
    </div>
  );
};

export default TagFilters;
