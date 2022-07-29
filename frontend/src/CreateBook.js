import React from "react";
import "./App.css";
import { useState } from "react";

const CreateBook = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    setSubmitting(true);
    setError(false);

    event.preventDefault();

    if (event.target.name.value === "" || event.target.author.value === "") {
      setError(true);
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        name: event.target.name.value.toString(),
        author: event.target.author.value.toString(),
        tag: event.target.tag.value.toString(),
      }),
    };

    event.target.reset();

    fetch("http://localhost:8080/api/books", requestOptions)
      .then((response) => response.json())
      .then(() => {
        setSubmitting(false);
      });
  };

  return (
    <div>
      <div className="create-book" aria-disabled={submitting}>
        <h1>Add a new book</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Book Name</p>
              <input name="name" />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>Author's Name</p>
              <input name="author" />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>Book Tag</p>
              <div className="select-dropdown">
                <select name="tag">
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Refactoring">Refactoring</option>
                  <option value="New-Hire">New-Hire</option>
                  <option value="Leadership">Leadership</option>
                  <option value="Fun">Fun</option>
                </select>
              </div>
            </label>
          </fieldset>
          <button className="create-book-button" type="submit">
            Add book
          </button>
        </form>
      </div>
      {
        <div style={{ color: "white", padding: "15px" }}>
          {error && <h4>Error: please fill out entire form.</h4>}
        </div>
      }
    </div>
  );
};

export default CreateBook;
