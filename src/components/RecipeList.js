import React from 'react';

const RecipeList = ( props ) => (
    <div style={props.style} >
        <h2>Recipes</h2>
        <ul>
            <li>
                <span>Chocolate Mousse</span>
                <span>Dessert</span>
            </li>
        </ul>
    </div>
)

export default RecipeList;