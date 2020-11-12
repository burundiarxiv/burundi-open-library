import React from "react";
import Card from "../card.js/Card";
import "./CardList.css";

const CardList = (props) => (
  <div className="card-list">
    {props.books.map((book) => (
      <Card book={book} />
    ))}
  </div>
);

export default CardList;
