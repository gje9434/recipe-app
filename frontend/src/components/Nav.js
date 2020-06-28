import React, { useState } from "react";

function Nav() {
    return (
    <div className="nav">
        <h1>Recipes.</h1>
        <ul className="navbar-list">
            <li><a href="/about">About</a></li>
            <li><a href="/add">Add</a></li>
            <li><a href="">Logout</a></li>
        </ul>
    </div>
    )
}

export default Nav;