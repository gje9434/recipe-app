import React from 'react';

function SingleRecipe() {

    return(
        <div className="container">
            <div className="standard-user-form single-recipe">
                <h2 className="add-recipe-title">Test</h2>
                <hr/>
                <h4 className="recipe-title orange-text">Ingredients</h4>
                <ul className="ingredients-list center-content">
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                </ul>
                <hr/>
                <h4 className="recipe-title orange-text">Method</h4>
                <ul className="methods-list">
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                </ul>
            </div>
        </div>
    )
}

export default SingleRecipe;