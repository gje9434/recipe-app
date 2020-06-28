import React, { useState, Fragment } from "react";

function Login() {
    return (
        <div className="login-container">
            <form className="login">
                <h2>Login</h2>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Log In</button>
                <a href="">Lost your password?</a>
            </form>
            <span className="register-text">Don't have an account?
                <a href="" className="register-link"> Sign up here!</a>
            </span>
        </div>
    )
}

export default Login;