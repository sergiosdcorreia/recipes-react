import React from 'react';

const RecipeDetail = ( props ) => (
    <div style={props.style}>
        <h2>Chocolate Mousse</h2>

        <div>
            <span>Dessert</span>
            <span>6 persons</span>
        </div>

        <h3>Ingredients</h3>
        <ul>
            <li>Cooking Chocolate</li>
            <li>Eggs</li>
            <li>Butter</li>
            <li>Sugar</li>
        </ul>

        <h3>Steps</h3>
        <ol>
            <li>Heat the chocolate with the butter.</li>
            <li>Mix the eggs and the sugar.</li>
            <li>Mix everything slowly and put in cups and take it to the fridge.</li>
        </ol>
    </div>
)

export default RecipeDetail;