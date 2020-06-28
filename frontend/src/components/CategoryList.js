import React, { useState, useEffect, useContext } from 'react';
import CategoryItem from "./CategoryItem";
import { CategoriesContext } from "../CategoriesContext";

function CategoryList() {

    const [error, setError] = useState(null);
    const {categories} = useContext(CategoriesContext);

    return (
        <ul className="category-list">
            {categories.map(item => {return <CategoryItem name={item} />})}
        </ul>
        )
    }
        

export default CategoryList;