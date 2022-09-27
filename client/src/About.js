import React from "react";
import styled from "styled-components";
import AboutStyle from "./styled-comps/AboutStyle";
import theme from "./styled-comps/theme";
import {H1, H4} from "./styled-comps/Typography"

const AboutImg = styled.img`
border-radius: 200px;
`

function About(){

    return(
        <AboutStyle>
        <AboutImg src="https://media-exp1.licdn.com/dms/image/D4E35AQGQDjzhlTDfkg/profile-framedphoto-shrink_400_400/0/1663556495024?e=1664823600&v=beta&t=yCYcM7VaOaMyb4AaOQpE9kQCFW0GixG_S4yi-9V3S4A"></AboutImg>
        <H1>Austin Wells</H1>
        <H4>https://www.linkedin.com/in/austin-c-wells/</H4>
        </AboutStyle>
    )

}

export default About;