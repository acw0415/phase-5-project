import React from "react";
import styled from "styled-components";
import {AboutStyle, AboutContainer } from "./styled-comps/AboutStyle";
import theme from "./styled-comps/theme";
import { H1, H4 } from "./styled-comps/Typography"

const AboutImg = styled.img`
border-radius: 200px;
`

function About() {

    return (
        <AboutContainer>
            <AboutStyle>
                <AboutImg src="https://media-exp1.licdn.com/dms/image/C4E03AQEHFUJG5rRgqA/profile-displayphoto-shrink_800_800/0/1658934378013?e=1669852800&v=beta&t=-V0u2jNha2Dgcm05pPbYxlYSyQPZwLUZkAmX3HDbht8" height={300}></AboutImg>
                <H1>Austin Wells</H1>
                <H4>https://www.linkedin.com/in/austin-c-wells/</H4>
            </AboutStyle>
        </AboutContainer>
    )

}

export default About;