import React from "react";
import "./Card.css";
const Card = ({ book }) => {
  const { title, authors, line } = book;
  return (
    <div className="card">
      <h4 style={{ color: "#4a5568" }}>{title}</h4>
      <h5>Auteurs: {authors}</h5>
      <p>Note: {line}</p>
    </div>
  );
};

export default Card;
