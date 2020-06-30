import React, { useState } from "react";

function Register() {



    return(
    <div className="container centered">
        <form className="standard-user-form">
            <h2>Register</h2>
            <input className="standard-input" type="text" placeholder="Username"/>
            <input className="standard-input" type="password" placeholder="Password"/>
            <input className="standard-input" type="confirm_password" placeholder="Confirm password"/>
            <input className="standard-input" type="email" placeholder="Email address"/>
            <button className="standard-button">Log In</button>
            <a href="/recover">Lost your password?</a>
        </form>
        <span className="register-text">Already registered?
            <a href="/login" className="register-link"> Login here!</a>
        </span>
    </div>
    )
}

export default Register;