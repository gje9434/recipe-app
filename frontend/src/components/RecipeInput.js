import React, {useState} from 'react';

function RecipeInput() {

    const [method, setMethod] = useState("");
    const [ingredientsList, setIngredientsList] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState("");
    const [title, setTitle] = useState("");

    function handleTyping(event) {
        let {name, value} = event.target;
        if(name === "recipe-title") {
            setTitle(value)
        } else if(name === "method") {
            setMethod(value)
        } else {
            setCurrentIngredient(value)
        }
    }

    function addIngredients(event) {
        event.preventDefault();
        if(currentIngredient != "") {
            setIngredientsList([...ingredientsList, currentIngredient]);
            setCurrentIngredient("");
        }
    }

    function handleSubmit(event) {
        // post request to api
        // reset all values 
    }

    return (
        <form className="standard-user-form">
            <h2 className="blue-text">Start a Recipe...</h2>
            <input onChange={handleTyping} className="standard-input" name="recipe-title" type="text" value={title} placeholder="Recipe Title"/>
            <div className="container row standard-width">
                <input onChange={handleTyping} className="standard-input" type="text" placeholder="Ingredient" name="ingredient" value={currentIngredient}/>
                <button onClick={addIngredients} className="standard-button add-ingredient-btn">Add Ingredient</button>
            </div>
            <input onChange={handleTyping} className="standard-input" type="textarea" name="method" placeholder="Method..." value={method}/>
            <hr/>
            <h4 className="orange-text no-vertical-margin">{title}</h4>
            <ul className="recipe-list center-content">
                {ingredientsList.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
            <p className="method-para">{method}</p>
            <button className="standard-button orange-bg">SUBMIT</button>
        </form>
    )
}

export default RecipeInput;