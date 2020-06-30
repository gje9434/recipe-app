import React, {useState, useEffect, useMemo} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Register from "./Register";
import NewRecipeInput from "./NewRecipeInput";
import CategoryInput from "./CategoryInput";
import {CategoriesContext} from "../CategoriesContext";
import Recover from "./Recover";
import RecipesList from "./RecipesList";



function App() {

    const [categories, setCategories] = useState([]);

    return (
        <Router>
            <Nav />
            <CategoriesContext.Provider value={{categories, setCategories}}>
            <Route path="/home" exact component={RecipesList} />
            <div className="content standard-width">
                <Route path="/add" exact component={NewRecipeInput} />
                <div className="container">
                    <Route path="/add" exact component={CategoryInput} />
                </div>
            </div>
            </CategoriesContext.Provider>
                <Route path="/recover" component={Recover} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
        </Router>
    )
}

export default App;