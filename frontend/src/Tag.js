import React from "react";
import "./App.css";

const Tag = (props) => {
  switch(props.tag) {
    case "New-Hire": {
      return <p className="tag" style={{backgroundColor: "rgba(220, 118, 51 )"}}>{props.tag}</p>;
    }
    case "Engineering": {
      return <p className="tag" style={{backgroundColor: "rgba(40, 180, 99)"}}>{props.tag}</p>;
    }
    case "Design": {
      return <p className="tag" style={{backgroundColor: "rgba(136, 78, 160)"}}>{props.tag}</p>;
    }
    case "Project-Management": {
      return <p className="tag" style={{backgroundColor: "rgba(241, 196, 15)"}}>{props.tag}</p>;
    }
    case "Leadership": {
      return <p className="tag" style={{backgroundColor: "rgba(93, 173, 226)"}}>{props.tag}</p>;
    }
    case "Fun": {
      return <p className="tag" style={{backgroundImage: "linear-gradient(to right, red,orange,lime,teal)"}}>{props.tag}</p>;
    }
    default: {
      return <p className="tag" style={{backgroundColor: "gray"}}>{props.tag}</p>;
    }
  }
};
export default Tag;
