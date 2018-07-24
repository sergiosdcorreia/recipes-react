import React from 'react';
import propTypes from 'prop-types';

const RecipeList = (props) => {
  return (
    <div style={props.style}>
      <h2 className="h2">
        Recipes
      </h2>
      <ul className="list-reset">
        {props.recipes.map(recipe => (
          <li
            key={recipe.id}
            className="py2 border-bottom border-bottom-dashed pointer"
            onClick={() => props.onClick(recipe.id)}
          >
            <span>
              {recipe.name}
            </span>
            <span>
              {recipe.category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

RecipeList.propTypes = {
  style: propTypes.object,
  recipe: propTypes.object,
};

export default RecipeList;
