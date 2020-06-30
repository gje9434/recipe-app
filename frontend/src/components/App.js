import React, {useState, useEffect, useMemo} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Register from "./Register";
import NewRecipeInput from "./NewRecipeInput";
import CategoryInput from "./CategoryInput";
import CategoryList from "./CategoryList";
import {CategoriesContext} from "../CategoriesContext";


function App() {

    const [categories, setCategories] = useState([]);

    return (
        <Router>
            <Nav />
            <CategoriesContext.Provider value={{categories, setCategories}}>
            <div className="content standard-width">
                <Route path="/add" exact component={NewRecipeInput} />
                <div className="container">
                    <Route path="/add" exact component={CategoryInput} />
                    <Route path="/add" exact component={CategoryList} />
                </div>
            </div>
            </CategoriesContext.Provider>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
        </Router>
    )
}

export default App;