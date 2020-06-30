import React, { useState, Fragment } from "react";

function Login() {
    return (
        <div className="container">
            <form className="standard-user-form">
                <h2>Login</h2>
                <input className="standard-input" type="text" placeholder="Username"/>
                <input className="standard-input" type="password" placeholder="Password"/>
                <button className="standard-button">Log In</button>
                <a href="/recover">Lost your password?</a>
            </form>
            <span className="register-text">Don't have an account?
                <a href="/register" className="register-link"> Sign up here!</a>
            </span>
        </div>
    )
}

export default Login;