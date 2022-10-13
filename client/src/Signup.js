import React, { useState } from "react";
import FormStyle from "./styled-comps/FormStyle";
import styled from "styled-components";
import { H1 } from "./styled-comps/Typography";
import { useNavigate } from "react-router-dom";
import ButtonStyle from "./styled-comps/ButtonStyle";


const SignupCenter = styled.div`

display: flex;
justify-content: space-evenly;
   
    
`



function Signup({setCurrentUser, setIsAuthenticated}) {

   const history = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();

        const { passwordConfirm, ...body } = formData

        if (passwordConfirm !== formData.password) {
            alert("passwords do not match")
            return
        }

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then((res) => {
            if (!res.ok) {


                res.json().then((errors) => {
                    alert(errors.errors);
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


    return (
        <SignupCenter>
            <FormStyle onSubmit={handleSubmit}><H1>Sign up page</H1>
                <input type="text" placeholder="email" name="email" value={formData.email} onChange={handleChange}></input>
                <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange}></input>
                <input type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} placeholder="confirm password"></input>

                <button type="submit">Sign Up</button>
            </FormStyle>
        </SignupCenter>
    )
}

export default Signup;