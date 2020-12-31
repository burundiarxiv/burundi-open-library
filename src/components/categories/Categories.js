import React from 'react';
import './categories.css';
const Categories = ({ filterItems, library }) => {
  const allCategories = [
    'Tous',
    ...new Set(
      library
        .map((item) => item.tags)
        .toString()
        .split(',')
        .map((item) => item)
    ),
  ];

  return (
    <div className="left-bar">
      {allCategories.map((category, index) => {
        return (
          <button key={index} onClick={() => filterItems(category)}>
            {category.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
