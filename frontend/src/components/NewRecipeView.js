import React, {Fragment} from 'react';

function NewRecipeView(props) {

    return (
        <Fragment>
            <h4 className="new-recipe-title">{props.title}</h4>
                <ul className="ingredients-list center-content">
                    {props.ingredientsList.map(item => {
                        return <li onClick={() => {
                            return props.deleteIngredient(item);
                        }}>{item}</li>
                    })}
                </ul>
            <ul className="methods-list">
                {props.methodsList.map((item, index) => {
                    return <li onClick={() => {
                        return props.deleteMethod(item)
                    }}>{index+1}. {item}</li>
                })}
            </ul>
            <button className="standard-button orange-bg">SUBMIT</button>
        </Fragment>
    )
}

export default NewRecipeView;