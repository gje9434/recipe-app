import React, {useState, useContext} from 'react';
import { CategoriesContext } from "../CategoriesContext";

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
        <form action="" className="category-add-form" onSubmit={handleSubmit}>
            <input type="text" value={category} className="category-add-input" placeholder="New Category"
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </form>
    )
}

export default CategoryInput;