import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import FormStyle from "./styled-comps/FormStyle";
import styled from "styled-components";
import { H1 } from "./styled-comps/Typography";

const LoginCenter = styled.div`

display: flex;
justify-content: space-evenly;
   
    
`


function Login({ setCurrentUser, setIsAuthenticated, isAuthenticated }) {

    const history = useNavigate()

    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [formData, setFormData] = useState({ email: "", password: "" })


    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            referrerPolicy: 'no-referrer',
            credentials: 'omit',
            body: JSON.stringify(formData),
        }).then((res) => {
            if (!res.ok) {


                res.json().then((errors) => {
                    console.error(errors);
                });
            } else{
                
                res.json().then((user) => {
                    setCurrentUser(user);
                    setIsAuthenticated(true)
                    history("/")
                });
            }
        });
    }




    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    };


    return (

            <div className="login-form">
                <div className="title"></div>
                {
                    isAuthenticated ? <div>User is successfully logged in</div> : <div>
                        <form onSubmit={handleSubmit}><h2>Login</h2>
                            <div className="input-container">

                                <input type="text" name="email" required placeholder="Email" onChange={handleChange} />

                            </div>
                            <div className="input-container">

                                <input type="password" name="password" required placeholder="Password" onChange={handleChange} />

                            </div>
                            <div className="button-container">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                }
            </div>

    );
}

export default Login;