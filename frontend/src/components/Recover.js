import React, { useState } from "react";

function Recover() {
    return (
        <div className="container centered">
            <form className="standard-user-form">
                <h2>Recover account</h2>
                <input className="standard-input" type="email" placeholder="Email"/>
                <button className="standard-button">Recover</button>
            </form>
            <span className="register-text">
                <a href="/login" className="register-link">Login </a>
                or
                <a href="/register" className="register-link"> Register</a>
            </span>
        </div>
    )
}

export default Recover;