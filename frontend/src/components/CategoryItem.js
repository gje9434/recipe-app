import React, {useContext} from 'react';
import { CategoriesContext } from "../CategoriesContext";

function CategoryItem(props) {

    const {categories, setCategories} = useContext(CategoriesContext);

    function deleteCategory(name) {
        setCategories(() => {
            return categories.filter(item => {
                return item != name;
            })
        })
    }

    return (
    <li className="category-item">{props.name}
        <span onClick={() => {
            return deleteCategory(props.name)
        }}>
        X</span>
    </li>
    )
}

export default CategoryItem;