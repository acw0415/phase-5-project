import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'


function Deleteuser({ setCurrentUser, setIsAuthenticated }) {

    const history = useNavigate()


    const handleDeleteUser = () => {
        fetch('/user', {method: "DELETE"})
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
            <button onClick={handleDeleteUser}>Delete User</button>
        </div>
    )
}

export default Deleteuser;