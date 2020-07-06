import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Register() {

    const history = useHistory();

    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        password_confirm: "",
        email: ""
    })

    const [errorMsg, setErrorMsg] = useState("");

    function handleChange(event) {
        let {name, value} = event.target;
        setNewUser({
            ...newUser,
            [name]: value
        })
    }

    function handleBlanks() {
        if(newUser.username == "") {
            setErrorMsg("Username field blank")
        } else if(newUser.password != newUser.password_confirm) {
            setErrorMsg("Passwords do not match")
        } else if(newUser.email == "") {
            setErrorMsg("Email field blank")
        } else {
            return "no field errors";
        }
    }

    function registerRequest() {
        return fetch("http://localhost:5000/register", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        });
    
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if(handleBlanks() != "no field errors") {
            return;
        }
        try {
            const response = await(registerRequest());
            const json = await(response.json());            
            if(json.error) setErrorMsg(json.error);
            else history.push("/login");
        } catch(err) {
            console.log(err);
            return;
        }
    }

    return(
    <div className="container centered">
        <form className="standard-user-form">
            <h2>Register</h2>
            <input className="standard-input"  onChange={handleChange} type="text" name="username" placeholder="Username"/>
            <input className="standard-input" onChange={handleChange} type="password" name="password" placeholder="Password"/>
            <input className="standard-input" onChange={handleChange} type="password" name="password_confirm" placeholder="Confirm password"/>
            <input className="standard-input" onChange={handleChange} type="email" name="email" placeholder="Email address"/>
            <button onClick={handleSubmit} className="standard-button">Register</button>
            <p className="err-msg">{ errorMsg }</p>
            <a href="/recover">Lost your password?</a>
        </form>
        <span className="register-text">Already registered?
            <a href="/login" className="register-link"> Login here!</a>
        </span>
    </div>
    )
}

export default Register;