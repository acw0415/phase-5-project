import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import FormStyle from "./styled-comps/FormStyle";
import styled from "styled-components";
import { H3 } from "./styled-comps/Typography";
import theme from "./styled-comps/theme"


const LoginCenter = styled.div`

display: flex;
justify-content: space-evenly;
   
    
`
const LoginH1 = styled.h1`
    color: ${theme.lightFont}

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
            },
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

            <LoginCenter>
                {
                    isAuthenticated ? <div>User is successfully logged in</div> : <div>
                        <FormStyle onSubmit={handleSubmit}><LoginH1>Login</LoginH1>
                            <div className="input-container">

                                <input type="text" name="email" required placeholder="Email" onChange={handleChange} />

                            </div>
                            <div className="input-container">

                                <input type="password" name="password" required placeholder="Password" onChange={handleChange} />

                            </div>
                            <div className="button-container">
                                <button type="submit">Login</button>
                            </div>
                        </FormStyle>
                    </div>
                }
            </LoginCenter>

    );
}

export default Login;