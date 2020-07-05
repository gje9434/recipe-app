import React, { useState } from "react";

function Register() {

    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        password_confirm: "",
        email: ""
    })

    function handleChange(event) {
        let {name, value} = event.target;
        setNewUser({
            ...newUser,
            [name]: value
        })
    }

    function handleSubmit(event) {
        console.log("success");
        event.preventDefault();
        fetch("http://localhost:5000/register", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        });
    }

    return(
    <div className="container centered">
        <form className="standard-user-form">
            <h2>Register</h2>
            <input className="standard-input"  onChange={handleChange} type="text" name="username" placeholder="Username"/>
            <input className="standard-input" onChange={handleChange} type="password" name="password" placeholder="Password"/>
            <input className="standard-input" onChange={handleChange} type="password" name="password_confirm" placeholder="Confirm password"/>
            <input className="standard-input" onChange={handleChange} type="email" name="email" placeholder="Email address"/>
            <button onClick={handleSubmit} className="standard-button">Log In</button>
            <a href="/recover">Lost your password?</a>
        </form>
        <span className="register-text">Already registered?
            <a href="/login" className="register-link"> Login here!</a>
        </span>
    </div>
    )
}

export default Register;