import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import FormStyle from "./styled-comps/FormStyle";
import styled from "styled-components";
import { H1 } from "./styled-comps/Typography";


const UpdateEmailCenter = styled.div`

display: flex;
justify-content: space-evenly;
   
    
`



function UpdateEmail({setCurrentUser}) {


  const [emailData, setEmailData] = useState({
      email: ""
  });

  const handleChange = (e) => {
      setEmailData({
           email: e.target.value
      });
  };

  function handleSubmit(e) {
      e.preventDefault();


      

      fetch("/user", {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
      }).then((res) => {
          if (!res.ok) {


              res.json().then((errors) => {
                  console.error(errors);
              });
          }else{
            res.json().then((user) => {
                setCurrentUser(user);
                setEmailData({email: ""})
            });
        }
      });
      
  }


  return (
      <UpdateEmailCenter>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Change Email" name="email" value={emailData.email} onChange={handleChange}></input>
              
              <button type="submit">Change</button>
          </form>
      </UpdateEmailCenter>
  )
}

export default UpdateEmail;