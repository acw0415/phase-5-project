import React, { useState } from "react";
import FormStyle from "./styled-comps/FormStyle";
import {H1} from "./styled-comps/Typography"



function Signup() {


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


        fetch("/signup", {
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
            }
        });
    }


    return (
        <div>
            <FormStyle onSubmit={handleSubmit}><h1>Sign up page</h1>
                <input type="text" placeholder="email" name="email" value={formData.email} onChange={handleChange}></input>
                <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange}></input>
                <input type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleChange} placeholder="confirm password"></input>

                <button type="submit">Sign Up</button>
            </FormStyle>
        </div>
    )
}

export default Signup;