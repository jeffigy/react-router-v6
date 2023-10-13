import React from "react";

// type HomeProps = {};

const NewBook = () => {
  return <form>
    <label htmlFor="title">Book Title</label> <br />
    <input type="text" id="title" />
    <br />
    <br />
    <label htmlFor="author">Book Author</label>
    <br />
    <input type="text" id="author" />
    <br />
    <br />
    <label htmlFor="description">Book Description</label>
    <br />
    <textarea id="description" />
    <br />
    <button type="submit">Create Book</button>
  </form>;
};
export default NewBook;
