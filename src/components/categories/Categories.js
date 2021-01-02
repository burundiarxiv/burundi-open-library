import React from 'react';
import './categories.css';
const Categories = ({ filterItems, library }) => {
<<<<<<< HEAD
  // The purpose of this three lines is to convert the tags
  // that are in subarray into one array, so that i can map through it
  // the problem was that when i was trying to map through an
  // array with subarray, it was returning NaN at the index
  // of every subarray
  const listOfTags = library.map((item) => item.tags);
  const listOfTagsIntoOneString = listOfTags.toString();
  const convertedListOfTags = listOfTagsIntoOneString.split(',');

=======
>>>>>>> 5f0de5f854d1a6f1822d324d861812a56f26fbfb
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
