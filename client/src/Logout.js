import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'


function Logout({ setCurrentUser, setIsAuthenticated }) {

    const history = useNavigate()


    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                setCurrentUser("")
                setIsAuthenticated(false)
                history('/')
              }
            })
      }

    return(
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout;