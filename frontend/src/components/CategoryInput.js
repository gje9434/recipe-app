import React, {useState, useContext} from 'react';
import { CategoriesContext } from "../CategoriesContext";
import CategoryList from "./CategoryList";

function CategoryInput() {

    const [category, setCategory] = useState("");
    const {categories, setCategories} = useContext(CategoriesContext);

    function handleChange(event) {
        setCategory(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setCategories([...categories, category]);
        setCategory("");
    }

    return (
        <div className="container">
        <form className="standard-user-form" onSubmit={handleSubmit}>
            <h2 className="add-recipe-title">Categories</h2>
            <input type="text" value={category} className="standard-input" placeholder="New Category"
                onChange={handleChange}
            />
            <CategoryList />
        </form>
        </div>
        
    )
}

export default CategoryInput;