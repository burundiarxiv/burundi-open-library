import React from "react";
import "./Card.css";
import { Skeleton } from "@chakra-ui/react";

const Card = ({ book, books }) => {
  const { title, authors, line } = book;
  return (
    <Skeleton isLoaded={!books}>
      <div className="card">
        <h4 style={{ color: "#4a5568" }}>{title}</h4>
        <h5>Auteurs: {authors}</h5>
        <p>Note: {line}</p>
      </div>
    </Skeleton>
  );
};

export default Card;
