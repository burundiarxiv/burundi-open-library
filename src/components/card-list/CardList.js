import React from "react";
import Card from "../card.js/Card";
import "./CardList.css";

const CardList = ({ books }) => (
  <div className="card-list">
    <p>{books.length} books found</p>
    {books.map((book, bookIndex) => (
      <Card key={bookIndex} book={book} />
    ))}
  </div>
);

export default CardList;
