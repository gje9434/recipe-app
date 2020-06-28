import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Register from "./Register";

function App() {
    return (
        <Router>
            <Nav />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Router>
    )
}

export default App;