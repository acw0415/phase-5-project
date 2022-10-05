import React, {useState} from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "./styled-comps/theme";
import Favorites from "./Favorites";
import Logout from "./Logout";




const NavbarContainer = styled.nav`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
font-family: 'Bitter', serif;
font-size: 16px;
`

const NavbarLinkContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 
 `

const NavbarLink = styled(Link)`
 color:${theme.linkColor};
 margin: 10px;
&:hover,
&:focus{
    color: ${theme.linkHover};
}
&:active{
    color: ${theme.linkHover};
};`


function NavBar({isAuthenticated}) {

    return (
        
        <NavbarContainer>
            <NavbarLinkContainer>
                <NavbarLink to="/">Home</NavbarLink>
            </NavbarLinkContainer>
           {isAuthenticated && <NavbarLinkContainer>
                <NavbarLink to="/favorites">Favorites</NavbarLink>
            </NavbarLinkContainer>}
            <NavbarLinkContainer>
                <NavbarLink to="/signup">Sign-up</NavbarLink>
            </NavbarLinkContainer>
            <NavbarLinkContainer>
                <NavbarLink to="/login">Login</NavbarLink>
            </NavbarLinkContainer>
            <NavbarLinkContainer>
                <NavbarLink to="/about">About</NavbarLink>
            </NavbarLinkContainer>
            <Logout/>
        </NavbarContainer>
    )
}

export default NavBar;