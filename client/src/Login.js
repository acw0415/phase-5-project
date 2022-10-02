import React, { useState } from "react";


function Login({ setCurrentUser, setIsAuthenticated, isAuthenticated }) {
    // React States
    const [errorMessages, setErrorMessages] = useState({});


    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();


    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );


    return (
        <div className="app">
            <div className="login-form">
                <div className="title"></div>
                {
                isAuthenticated ? <div>User is successfully logged in</div> : <div>
                    <form onSubmit={handleSubmit}><h2>Login</h2>
                        <div className="input-container">

                            <input type="text" name="uname" required placeholder="Username" />
                            {renderErrorMessage("uname")}
                        </div>
                        <div className="input-container">

                            <input type="password" name="pass" required placeholder="Password" />
                            {renderErrorMessage("pass")}
                        </div>
                        <div className="button-container">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
                }
            </div>
        </div>
    );
}

export default Login;