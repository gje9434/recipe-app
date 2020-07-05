import React, { useState } from "react";

function Nav() {
    return (
    <div className="nav">
        <h1><a className="main-nav-link" href="/home">Recipes</a></h1>
        <ul className="navbar-list">
            <li><a href="/add">Add</a></li>
            <li><a href="/login">Logout</a></li>
        </ul>
    </div>
    )
}

export default Nav;