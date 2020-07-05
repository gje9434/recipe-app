import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {

    const history = useHistory();

    const [errorDisplay, setErrorDisplay] = useState("none");

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    function handleChange(event) {
        setErrorDisplay("none");
        const {name, value} = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    function loginRequest() {
        return fetch("http://localhost:5000/login", {
                    method: "post",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(user)
                });
            }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await loginRequest();
            const json = await(response.json());
            if(json.error) setErrorDisplay("block");
            else history.push("/");
        } catch(err) {
            return;
        }
    }
        
    return (
        <div className="container">
            <form className="standard-user-form">
                <h2>Login</h2>
                <input onChange={handleChange} className="standard-input" reaquired name="username" type="text" placeholder="Username"/>
                <input onChange={handleChange} className="standard-input" required name="password" type="password" placeholder="Password"/>
                <button onClick={handleSubmit} className="standard-button">Log In</button>
                <p className="err-msg">Invalid Credentials</p>
                <a href="/recover">Lost your password?</a>
            </form>
            <span className="register-text">Don't have an account?
                <a href="/register" className="register-link"> Sign up here!</a>
            </span>
        </div>
    )
}

export default Login;