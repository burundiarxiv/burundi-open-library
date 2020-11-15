import React from "react";
import Card from "../card.js/Card";
import "./CardList.css";

const CardList = ({ books }) => (
  <div className="card-list">
    {books.map((book, bookIndex) => (
      <Card key={bookIndex} book={book} />
    ))}
  </div>
);

export default CardList;
