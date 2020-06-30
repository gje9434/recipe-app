import React, {useState} from 'react';
import NewRecipeView from "./NewRecipeView";

function NewRecipeInput() {

    const [methodsList, setMethodsList] = useState([]);
    const [currentMethod, setCurrentMethod] = useState("");
    const [ingredientsList, setIngredientsList] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState("");
    const [title, setTitle] = useState("");

    function handleTyping(event) {
        let {name, value} = event.target;
        if(name === "recipe-title") {
            setTitle(value)
        } else if(name === "method") {
            setCurrentMethod(value)
        } else {
            setCurrentIngredient(value)
        }
    }

    function addMethod(event) {
        event.preventDefault();
        if(currentMethod != "") {
            setMethodsList([...methodsList, currentMethod])
            setCurrentMethod("");
        }
    }

    function addIngredient(event) {
        event.preventDefault();
        if(currentIngredient != "") {
            setIngredientsList([...ingredientsList, currentIngredient]);
            setCurrentIngredient("");
        }
    }

    function deleteMethod(name) {
        setMethodsList(() => {
            return methodsList.filter(item => {
                return item != name;
            })
        })
    }

    function deleteIngredient(name) {
        setIngredientsList(() => {
            return ingredientsList.filter(item => {
                return item != name;
            })
        })
    }


    function handleSubmit(event) {
        // post request to api
        // reset all values 
    }

    return (
        <form className="standard-user-form">
            <h2 className="add-recipe-title">Start a Recipe...</h2>
            <input onChange={handleTyping} className="standard-input" name="recipe-title" type="text" value={title} placeholder="Recipe Title"/>
            <div className="add-ingredient-container">
                <input onChange={handleTyping} className="standard-input" type="text" placeholder="Ingredient" name="ingredient" value={currentIngredient}/>
                <button onClick={addIngredient} className="standard-button add-ingredient-btn">Add Ingredient</button>
            </div>
            <div className="add-method-container">
                <input onChange={handleTyping} className="standard-input" type="textarea" name="method" placeholder="Method..." value={currentMethod}/>
                <button onClick={addMethod} className="standard-button add-ingredient-btn">Add Method</button>
            </div>
            <hr/>
            <NewRecipeView title={title} 
                ingredientsList={ingredientsList} 
                setIngredientsList= {setIngredientsList} 
                methodsList={methodsList}
                deleteMethod={deleteMethod}
                deleteIngredient={deleteIngredient}
            />
        </form>
    )
}

export default NewRecipeInput;