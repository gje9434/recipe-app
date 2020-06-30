import React from 'react';
import SingleRecipe from "./SingleRecipe";
import { CategoriesContext } from "../CategoriesContext";
import CategoryItem from "./CategoryItem";

function RecipesList() {

    return(
        <div className="container row left-content">
        <div class="container row full-width">
            <SingleRecipe />
            <SingleRecipe />
            <SingleRecipe />
            <SingleRecipe />
            <SingleRecipe />
            <SingleRecipe />
            <SingleRecipe />
            <SingleRecipe />
        </div>
        <div className="container center-content">
            <div className="standard-user-form">
                <h2 class="add-recipe-title">Categories</h2>
                <ul className="category-list">
                    <CategoryItem name="test" />
                    <CategoryItem name="test" />
                    <CategoryItem name="test" />
                    <CategoryItem name="test" />
                    <CategoryItem name="test" />
                    <CategoryItem name="test" />
                    <CategoryItem name="test" />
                </ul>
            </div>
        </div>
        </div>
    )
}

export default RecipesList;