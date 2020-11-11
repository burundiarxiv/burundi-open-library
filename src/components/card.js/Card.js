import React from "react";
import "./Card.css";
const Card = (props) => (
  <div className="card">
    <h4 style={{ color: "#4a5568" }}>{props.book.title}</h4>
    <h5>Auteurs: {props.book.authors}</h5>
    <p>Note: {props.book.line}</p>
  </div>
);

export default Card;
